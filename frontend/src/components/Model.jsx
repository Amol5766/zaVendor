import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations, Html } from '@react-three/drei';

const Model = () => {
  const { scene, animations } = useGLTF('/smol_.glb');
  const modelRef = useRef();
  const { actions } = useAnimations(animations, modelRef);

  const [isMobile, setIsMobile] = useState(false);

  // Detect screen width
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // mobile breakpoint
    };
    handleResize(); // on mount
    window.addEventListener('resize', handleResize); // on resize
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      const firstAction = actions[Object.keys(actions)[0]];
      firstAction?.play();
    }
  }, [actions]);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.003;
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={isMobile ? 4 : 8.8}
      position={isMobile ? [0, -6, 0] : [0, -12, 0]}
    />
  );
};

const ModelWrapper = () => {
  return (
    <>
      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
          zIndex: -2,
        }}
      >
        <source src="/istockphoto.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🌐 3D Canvas */}
      <Canvas
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: -1,
          width: '100vw',
          height: '100vh',
        }}
        camera={{ position: [0, -10, 85], fov: 20 }}
      >
        <ambientLight intensity={2} />
        <directionalLight intensity={3} position={[0, 5, 5]} />
        <pointLight intensity={10} position={[-10, -10, -10]} />

        <Suspense
          fallback={
            <Html>
              <div style={{ color: 'white' }}>Loading model...</div>
            </Html>
          }
        >
          <Model />
        </Suspense>
        <OrbitControls enablePan={true} />
      </Canvas>
    </>
  );
};

export default ModelWrapper;
