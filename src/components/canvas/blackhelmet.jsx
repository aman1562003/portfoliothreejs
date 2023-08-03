import { Suspense, useEffect, useState, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from '../Loader';

const BlackPanthers = ({ isMobile }) => {
  const BlackPanther = useMemo(() => useGLTF('./black_helmet/scene.gltf'), []);
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={5} />
      <spotLight
        position={[-20, 50, 15]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize-width={512} // Reduced shadow map size for optimization
      />
      <primitive
        object={BlackPanther.scene}
        scale={isMobile ? 0.2 : 0.005}
        position={isMobile ? [0, -3, 0] : [0, -1.5, 0.2]}
        rotation={[0, 1, 0]}
      />
    </mesh>
  );
};

const BlackPanthersCanvas = () => {
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

  useGLTF.preload('./black_helmet/scene.gltf'); // Preload the GLTF model

  return (
    <Canvas frameLoop="demand" shadows camera={{ position: [20, 20, 5], fov: 20 }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          autoRotate
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <BlackPanthers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BlackPanthersCanvas;
