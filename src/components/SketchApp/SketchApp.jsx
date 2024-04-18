import { DrawingCanvas } from "../DrawingCanvas/DrawingCanvas";
import { Scene } from "../Scene/Scene";
import "./SketchApp.css";
import { useRef, useState } from "react";

export const SketchApp = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDrawing, setIsDrawing] = useState(false);
  const canvasRef = useRef();

  return (
    <>
      <div className="canvas-container"></div>
      <DrawingCanvas
        setMousePosition={setMousePosition}
        isDrawing={isDrawing}
        setIsDrawing={setIsDrawing}
        canvasRef={canvasRef}
      />
      <Scene
        mousePosition={mousePosition}
        isDrawing={isDrawing}
        canvasRef={canvasRef}
      />
    </>
  );
};
