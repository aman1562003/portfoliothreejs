import { Suspense, useEffect, useState, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from '../Loader';

const Bats = ({ isMobile }) => {
  const Bat = useMemo(() => useGLTF('./batman_ben/scene.gltf'), []);
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
        object={Bat.scene}
        scale={isMobile ? 0.7 : 1.80}
        position={isMobile ? [0, -3, 0] : [0, -3.25, 0]}
        rotation={[-0.6, 1, 0]}
      />
    </mesh>
  );
};

const BatsCanvas = () => {
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

  useGLTF.preload('./batman_ben/scene.gltf'); // Preload the GLTF model

  return (
    <Canvas frameLoop="demand" shadows camera={{ position: [20, 20, 5], fov: 20 }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Bats isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BatsCanvas;
