// import mat
import '../css/Sketch.css'

function handleClick(){
    this.addClass('color-me')
}

function Pixel() {
    return (
        <div className='pixel' 
      onClick={handleClick}></div>
    )
}


const rows:int = 5
const columns:int = 9


function Sketch() {
    const BOARD:any = []
    for(let i=0; i<rows*columns; i++){
        BOARD.push(Pixel())
        console.log(i)
    }  

    return (
        <div className='pixel-container'>{BOARD}</div>
    )
}

export default Sketch