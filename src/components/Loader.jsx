import { Html, useProgress } from "@react-three/drei";
import { FrontSide } from "three";


const Loader = () => {
  const {progress} = useProgress();

  return (
    <Html>
      <samp className="canvas-load">

      </samp>
      <p 
        style={{
          fontSize: 14,
          color: '#f1f1f1',
          fontWeight: 800,
          margin: 40
  }}>
        {progress.toFixed(2)}%
      </p>
    </Html>
  )
}

export default Loader