import React, { useEffect, useRef } from "react";

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    createMatrixRain();
  }, []);

  function createMatrixRain() {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    // Your existing code for creating the matrix rain goes here

    function draw() {
      // Your existing draw function code goes here
    }

    setInterval(draw, 35);
  }

  return <canvas ref={canvasRef}></canvas>;
}
