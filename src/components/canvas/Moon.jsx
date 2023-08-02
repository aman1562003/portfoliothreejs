import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from '../Loader';

const Moons = ({isMobile}) => {
  const Moon = useGLTF('./spacecar/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={0.15} 
      groundColor="black" />
      <pointLight intensity={1}/>
      <spotLight
      position={[-20, 50, 10]}
      angle={0.12}
      penumbra={1}
      intensity={1}
      castShadow
      shadow-mapSize-width={1024}

      />
      <primitive
        object = {Moon.scene}
        scale={isMobile ? 0.1 : 0.2}
        position = {isMobile ? [0, -0, 0.1]:[0, -0, 0.20]}
        rotation = {[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const MoonsCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(()=>{

    const mediaQuery = window.matchMedia('(max-width: 500px)');

    setIsMobile (mediaQuery.matches);

    const hanleMediaQueryChange = (event) =>{
      setIsMobile(event.matches);
    }
    
    mediaQuery.addEventListener('change', hanleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', hanleMediaQueryChange);
    }
  },[])


  return (
    <Canvas
      frameLoop = "demand"
      shadows
      camera={{position:[20,20,5], fov: 10}}
      gl={{ preserveDrawingBuffer: true}}
    >
      <Suspense fallback = {<CanvasLoader />}>
        <OrbitControls 
         autoRotate
        enableZoom = {false} 
        // maxPolarAngle={Math.PI/2} 
        // minPolarAngle={Math.PI/2} 
      />
        <Moons isMobile = {isMobile}/>

      </Suspense>

      <Preload all/>

    </Canvas>
  )
}

export default MoonsCanvas

