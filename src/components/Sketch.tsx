import { useState } from "react";

function Pixel(pixelID: string) {
    const [pixelColour, setPixelColour] = useState("black");
    function handleDivClick(){
        setPixelColour("white");
    }
    
  return <div style={{backgroundColor: pixelColour}}
            className="pixel" id={pixelID} 
            onClick={handleDivClick}>
        </div>;
}

const rows: number = 10;
const columns: number = 18;

function Sketch() {
  const BOARD: any = [];
  for (let i = 0; i < rows * columns; i++) {
    BOARD.push(Pixel(i.toString()));
    console.log(i);
  }

  return <div className="pixel-container">{BOARD}</div>;
}
export default Sketch;


