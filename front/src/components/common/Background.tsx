import React, { useEffect, useRef } from "react";
import { styled } from "styled-components";

/**
 * 배경화면 컴포넌트
 * @returns canvas
 */
const MatrixAnimation = React.memo(() => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const w = (canvas.width = window.innerWidth);
    const h = (canvas.height = window.innerHeight);
    const cols = Math.floor(w / 20) + 1;
    const ypos = Array(cols).fill(0);

    if (!ctx) return;

    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, w, h);

    const matrix = () => {
      if (!ctx) return;

      ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
      ctx.fillRect(0, 0, w, h);

      ctx.fillStyle = "#00970061";
      ctx.font = "15pt monospace";

      ypos.forEach((y, ind) => {
        const text = String.fromCharCode(Math.random() * 128);
        const x = ind * 20;
        ctx.fillText(text, x, y);
        if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
        else ypos[ind] = y + 20;
      });
    };

    const intervalId = setInterval(matrix, 30);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Canva
      ref={canvasRef}
      width="100%"
      height="100%"
      style={{ display: "block", background: "#000" }}
    />
  );
});

const Canva = styled.canvas`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: -1;
`;

export default MatrixAnimation;
