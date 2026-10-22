'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Renderer, Program, Mesh, Triangle, Plane, Texture, RenderTarget } from 'ogl';

export interface CarouselItem {
  src: string;
  alt: string;
  title: string;
  subtitle?: string;
}

const cardVertex = `#version 300 es
in vec3 position;
in vec2 uv;
uniform vec4 uRect;
uniform vec2 uResolution;
out vec2 vUv;
out vec2 vLocal;
void main() {
  vUv = uv;
  vLocal = vec2(position.x, -position.y) * uRect.zw;
  vec2 px = uRect.xy + vLocal;
  gl_Position = vec4(px.x / uResolution.x * 2.0 - 1.0, 1.0 - px.y / uResolution.y * 2.0, 0.0, 1.0);
}
`;

const cardFragment = `#version 300 es
precision highp float;
uniform sampler2D tMap;
uniform vec2 uSize;
uniform vec2 uImage;
uniform float uRadius;
uniform float uAlpha;
uniform float uReady;
uniform float uShift;
uniform float uDpr;
uniform vec3 uPlaceholder;
in vec2 vUv;
in vec2 vLocal;
out vec4 fragColor;

float roundedBox(vec2 p, vec2 b, float r) {
  vec2 q = abs(p) - b + r;
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
}

void main() {
  float sd = roundedBox(vLocal, uSize * 0.5, min(uRadius, min(uSize.x, uSize.y) * 0.5));
  float mask = clamp(0.5 - sd * uDpr, 0.0, 1.0);
  vec2 local = vLocal / uSize + 0.5;
  float cardAspect = uSize.x / uSize.y;
  float imageAspect = uImage.x / max(uImage.y, 1.0);
  vec2 scale = imageAspect > cardAspect ? vec2(cardAspect / imageAspect, 1.0) : vec2(1.0, imageAspect / cardAspect);
  scale /= 1.02;
  vec2 uv = vec2(local.x, 1.0 - local.y);
  uv = (uv - 0.5) * scale + 0.5;
  uv.x += uShift * (1.0 - scale.x) * 0.5;
  vec3 image = texture(tMap, uv).rgb;
  vec3 color = mix(uPlaceholder, image, uReady);
  float alpha = mask * uAlpha;
  fragColor = vec4(color * alpha, alpha);
}
`;

const lensVertex = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const lensFragment = `#version 300 es
precision highp float;
uniform sampler2D tScene;
uniform vec2 uResolution;
uniform float uDpr;
uniform float uSceneAlpha;
out vec4 fragColor;

void main() {
  vec2 uv = gl_FragCoord.xy / (uResolution * uDpr);
  vec4 color = texture(tScene, uv);
  fragColor = color * uSceneAlpha;
}
`;

const wrap = (value: number, size: number) => ((((value + size / 2) % size) + size) % size) - size / 2;

interface FlexCarouselProps {
  items: CarouselItem[];
  cardHeight?: number;
  gap?: number;
  radius?: number;
  onSelect?: (item: CarouselItem) => void;
}

export const FlexCarousel: React.FC<FlexCarouselProps> = ({
  items,
  cardHeight = 0.68,
  gap = 28,
  radius = 28,
  onSelect
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const onSelectRef = useRef(onSelect);
  onSelectRef.current = onSelect;

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !items.length) return;

    const renderer = new Renderer({
      dpr: Math.min(window.devicePixelRatio || 1, 2),
      alpha: true,
      premultipliedAlpha: true,
      antialias: true
    });
    const gl = renderer.gl;
    if (!renderer.isWebgl2) return;

    gl.clearColor(0, 0, 0, 0);
    const canvas = gl.canvas;
    canvas.style.display = 'block';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.cursor = 'grab';
    container.innerHTML = '';
    container.appendChild(canvas);

    const cardProgram = new Program(gl, {
      vertex: cardVertex,
      fragment: cardFragment,
      transparent: true,
      depthTest: false,
      depthWrite: false,
      uniforms: {
        tMap: { value: new Texture(gl) },
        uRect: { value: [0, 0, 1, 1] },
        uResolution: { value: [1, 1] },
        uSize: { value: [1, 1] },
        uImage: { value: [1, 1] },
        uRadius: { value: radius },
        uAlpha: { value: 1 },
        uReady: { value: 0 },
        uShift: { value: 0 },
        uDpr: { value: 1 },
        uPlaceholder: { value: [0.97, 0.96, 0.95] }
      }
    });
    cardProgram.setBlendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    const cardMesh = new Mesh(gl, { geometry: new Plane(gl), program: cardProgram });

    const target = new RenderTarget(gl, {
      width: 2,
      height: 2,
      depth: false,
      minFilter: gl.LINEAR,
      magFilter: gl.LINEAR
    });

    const lensUniforms = {
      tScene: { value: target.texture },
      uResolution: { value: [1, 1] },
      uDpr: { value: 1 },
      uSceneAlpha: { value: 1 }
    };

    const lensMesh = new Mesh(gl, {
      geometry: new Triangle(gl),
      program: new Program(gl, {
        vertex: lensVertex,
        fragment: lensFragment,
        uniforms: lensUniforms,
        depthTest: false,
        depthWrite: false
      })
    });

    let width = container.clientWidth || 1000;
    let height = container.clientHeight || 600;
    let pos = 0;
    let goal = 0;
    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let startPos = 0;
    let animationFrameId: number;
    let instances: { index: number; x0: number; x1: number; y0: number; y1: number }[] = [];

    const loadedSlots = items.map((item, index) => {
      const texture = new Texture(gl, { generateMipmaps: true });
      const slot = { item, index, texture, aspect: 1.33, loaded: false, ready: 0, image: [4, 3] };
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        texture.image = img;
        texture.update();
        slot.image = [img.naturalWidth || 4, img.naturalHeight || 3];
        slot.aspect = slot.image[0] / slot.image[1];
        slot.loaded = true;
      };
      img.src = item.src;
      return slot;
    });

    const getMetrics = () => {
      const h = Math.max(260, cardHeight * height);
      const widths = loadedSlots.map(s => Math.max(s.aspect * h, h * 1.1));
      let cursor = 0;
      const centers = [];
      for (let i = 0; i < widths.length; i++) {
        centers.push(cursor + widths[i] / 2);
        cursor += widths[i] + gap;
      }
      return { cardH: h, widths, centers, loop: Math.max(cursor, 1) };
    };

    const handlePointerDown = (e: PointerEvent) => {
      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;
      startPos = pos;
      canvas.style.cursor = 'grabbing';
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - startX;
      pos = startPos - dx;
    };

    const handlePointerUp = (e: PointerEvent) => {
      if (!isDragging) return;
      isDragging = false;
      canvas.style.cursor = 'grab';

      const dist = Math.hypot(e.clientX - startX, e.clientY - startY);
      const m = getMetrics();

      if (dist < 8) {
        const rect = canvas.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const clickY = e.clientY - rect.top;
        const hit = instances.find(
          inst => clickX >= inst.x0 && clickX <= inst.x1 && clickY >= inst.y0 && clickY <= inst.y1
        );
        if (hit) {
          const clickedItem = loadedSlots[hit.index]?.item;
          if (clickedItem && onSelectRef.current) onSelectRef.current(clickedItem);
        } else {
          const activeItem = loadedSlots[Math.abs(Math.round(pos / (m.loop / items.length))) % items.length]?.item;
          if (activeItem && onSelectRef.current) onSelectRef.current(activeItem);
        }
      } else {
        const nearestIdx = Math.round(pos / (m.loop / items.length));
        goal = nearestIdx * (m.loop / items.length);
      }
    };

    canvas.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);

    const resize = () => {
      width = container.clientWidth || 1000;
      height = container.clientHeight || 600;
      renderer.setSize(width, height);
      target.setSize(Math.round(width * renderer.dpr), Math.round(height * renderer.dpr));
    };
    resize();
    window.addEventListener('resize', resize);

    const render = () => {
      const m = getMetrics();

      if (!isDragging) {
        pos += (goal - pos) * 0.1;
      }

      const active = (Math.abs(Math.round(pos / (m.loop / items.length))) % items.length + items.length) % items.length;
      setActiveIndex(active);

      cardProgram.uniforms.uResolution.value = [width, height];
      cardProgram.uniforms.uDpr.value = renderer.dpr;

      instances = [];
      let first = true;
      for (let i = 0; i < items.length; i++) {
        const slot = loadedSlots[i];
        if (slot.loaded && slot.ready < 1) slot.ready += 0.05;

        const w = m.widths[i];
        const baseRel = wrap(m.centers[i] - pos, m.loop);

        for (let k = -2; k <= 2; k++) {
          const rel = baseRel + k * m.loop;
          const x = width / 2 + rel;
          if (x + w / 2 < -100 || x - w / 2 > width + 100) continue;

          cardProgram.uniforms.tMap.value = slot.texture;
          cardProgram.uniforms.uRect.value = [x, height / 2, w, m.cardH];
          cardProgram.uniforms.uSize.value = [w, m.cardH];
          cardProgram.uniforms.uImage.value = slot.image;
          cardProgram.uniforms.uAlpha.value = 1.0;
          cardProgram.uniforms.uReady.value = slot.ready;
          cardProgram.uniforms.uShift.value = rel / (width * 0.8);

          renderer.render({ scene: cardMesh, target, clear: first });
          first = false;

          instances.push({
            index: i,
            x0: x - w / 2,
            x1: x + w / 2,
            y0: height / 2 - m.cardH / 2,
            y1: height / 2 + m.cardH / 2
          });
        }
      }

      renderer.bindFramebuffer();
      target.texture.bind();
      gl.generateMipmap(gl.TEXTURE_2D);

      lensUniforms.uResolution.value = [width, height];
      lensUniforms.uDpr.value = renderer.dpr;

      renderer.render({ scene: lensMesh });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, [items, cardHeight, gap, radius]);

  const activeItem = items[activeIndex] || items[0];

  return (
    <div className="relative w-full flex flex-col items-center">
      <div ref={containerRef} className="w-full h-[450px] sm:h-[580px] lg:h-[660px] relative overflow-hidden rounded-3xl" />
      <div
        className="mt-6 text-center space-y-1.5 cursor-pointer group"
        onClick={() => onSelectRef.current && onSelectRef.current(activeItem)}
      >
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif-Luxury text-[#2A2421] group-hover:text-[#7A4B32] transition-colors">
          {activeItem.title}
        </h3>
        <p className="text-sm sm:text-base text-[#6B625D] font-light max-w-xl mx-auto">
          {activeItem.subtitle}
        </p>
        <div className="text-xs font-semibold tracking-widest text-[#7A4B32] uppercase pt-2">
          {String(activeIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')} • <span className="underline">Clique para ampliar</span>
        </div>
      </div>
    </div>
  );
};