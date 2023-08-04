import React from 'react';
import { Html, useProgress } from '@react-three/drei';

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <samp className="canvas-load" />
      <p
        style={{
          fontSize: 30,
          color: '#f1f1f1',
          fontWeight: 800,
          margin: 40
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default React.memo(Loader);
