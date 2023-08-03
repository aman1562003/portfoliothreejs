import { Suspense, useEffect, useState, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from '../Loader';

const Moons = ({ isMobile }) => {
  const Moon = useMemo(() => useGLTF('./spacecar/scene.gltf'), []);
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize-width={512} // Reduced shadow map size for optimization
      />
      <primitive
        object={Moon.scene}
        autoRotate
        scale={isMobile ? 0.1 : 0.2}
        position={isMobile ? [0, 0, 0.1] : [0, 0, 0.2]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const MoonsCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  useGLTF.preload('./spacecar/scene.gltf'); // Preload the GLTF model

  return (
    <Canvas
      frameLoop="demand"
      shadows
      camera={{ position: [20, 20, 5], fov: 10 }} // Smaller FOV for better perspective
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          autoRotate
        />
        <Moons isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default MoonsCanvas;
