import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const TextureMesh = () => {
  const mesh = useRef();
  
  useFrame(({ clock, mouse, gl }) => {
    if (mesh.current) {
      mesh.current.material.uniforms.u_mouse.value = [mouse.x / 2 + 0.5, mouse.y / 2 + 0.5];
      mesh.current.material.uniforms.u_time.value = clock.getElapsedTime();
      const { width, height } = gl.domElement.getBoundingClientRect();
      mesh.current.material.uniforms.u_resolution.value = [width, height];
    }
  });

  return (
    <mesh ref={mesh} position={[0, 0, 0]}>
      <planeGeometry args={[1024, 1024]} />
      <shaderMaterial
        fragmentShader={`
            uniform vec2 u_resolution;
            uniform float u_time;
            uniform vec3 u_color;
            uniform vec4 u_background;
            uniform float u_speed;
            uniform float u_detail;
          
            float map(vec3 p) {
              return length(p.xy) - 1.0;
            }
          
            void main() {
              vec2 a = gl_FragCoord.xy / u_resolution - vec2(0.5);
              vec3 cl = vec3(0.0);
              float d = 2.5;
          
              for (float i = 0.0; i <= (1.0 + 20.0 * u_detail); i++) {
                vec3 p = vec3(0.0, 0.0, 4.0) + normalize(vec3(a, -1.0)) * d;
                float rz = map(p);
                float f = clamp((rz - map(p + vec3(0.1))) * 0.5, -0.1, 1.0);
                vec3 l = vec3(0.1, 0.3, 0.4) + vec3(5.0, 2.5, 3.0) * f;
                cl = cl * l + smoothstep(2.5, 0.0, rz) * 0.6 * l;
                d += min(rz, 1.0);
              }
          
              vec4 color = vec4(min(u_color, cl), 1.0);
              color.r = max(u_background.r, color.r);
              color.g = max(u_background.g, color.g);
              color.b = max(u_background.b, color.b);
              gl_FragColor = color;
            }
          `}
        vertexShader={`
          void main() {
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        uniforms={{
          u_color: { value: new THREE.Color(0.3137254901960784, 0, 1) },
          u_background: { value: new THREE.Color(0, 0, 0, 0) },
          u_speed: { value: 0.838 },
          u_detail: { value: 0.148 },
          u_time: { value: 10},
          u_mouse: { value: [0, 0] },
          u_resolution: { value: [1024, 1024] }
        }}
      />
    </mesh>
  );
};

const NoiseBackground = () => (
  <Canvas
    style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}
    gl={{
      preserveDrawingBuffer: true,
      premultipliedAlpha: false,
      alpha: true,
      transparent: true,
      antialias: true,
      precision: "highp",
      powerPreference: "high-performance"
    }}
    resize={{ debounce: 0, scroll: false, offsetSize: true }}
    dpr={1}
    camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }}
  >
    <TextureMesh />
  </Canvas>
);

export default function Preloader({ setLoading }) {
  const [progress, setProgress] = useState(0);
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [fade, setFade] = useState(true); 

  const taglines = [
    "Code. Create. Repeat.",
    "Build. Design. Shine.",
    "Dev Meets Design.",
    "Design Meets Code."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
          }, 300);
          return 100;
        }
        return prevProgress + 2;
      });
    }, 100);

    const taglineInterval = setInterval(() => {
      setFade(false); 
      setTimeout(() => {
        setTaglineIndex((prevIndex) => (prevIndex + 1) % taglines.length);
        setFade(true); 
      }, 500); 
    }, 1500); 

    return () => {
      clearInterval(interval);
      clearInterval(taglineInterval);
    };
  }, [taglines.length, setLoading]);

  return (
    <div className={`fixed inset-0 z-50 bg-black flex flex-col items-center justify-center transition-all duration-700 ${progress === 100 ? '-translate-y-full' : ''}`}>
      <NoiseBackground />
      <div className="text-white text-3xl font-cerotta tracking-widest">
        LOADING
      </div>
      <div className="relative w-full mt-4">
        <div className="absolute top-1/2 transform -translate-y-1/2 left-0 h-[1px] bg-white" style={{ width: `${progress}%` }} />
      </div>
      <div className={`mt-6 text-Secondary text-lg font-altone tracking-wide transform transition-all duration-500 ${fade ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        {taglines[taglineIndex]}
      </div>
      <div className="absolute bottom-4 left-4 font-walbaum text-white text-2xl">
        K7’s Portfolio
      </div>
      <div className="absolute bottom-4 right-4 font-walbaum text-white text-6xl">
        {progress}%
      </div>
    </div>
  );
}
