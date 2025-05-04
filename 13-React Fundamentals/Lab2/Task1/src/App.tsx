import { useState, useRef } from 'react'
import './App.css'


import img1 from './assets/Images/img1.jpeg'
import img2 from './assets/Images/img2.jpeg'
import img3 from './assets/Images/img3.jpeg'
import img4 from './assets/Images/img4.jpeg'
import img5 from './assets/Images/img5.jpeg'
import img6 from './assets/Images/img6.jpeg'

import nextIcon from './assets/icons/next.png'
import prevIcon from './assets/icons/prev.png'
import playIcon from './assets/icons/play.png'
import stopIcon from './assets/icons/stop.png'


function App() {
  const [curIdx, setCurIdx] = useState(0);
  const images = [img1,img2,img3,img4,img5,img6];


  const goNext = ()=>{
    setCurIdx((prev)=>(prev === images.length - 1 ? 0 : prev + 1));
  }

  const goPrev = () => {
    setCurIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const intervalRef = useRef<number | null>(null);

  const play=()=>{
    if (intervalRef.current === null) {
      intervalRef.current = setInterval(goNext, 500); // store interval ID
    }
  }

  const stop = ()=>{
    clearInterval(intervalRef.current!);
    intervalRef.current = null;
  }

  return (
    <>
      <div style={Styles.outerDiv}>
        <img src={images[curIdx]} alt="PIC" style={Styles.imgStyle}/>
      </div>
      <div style={Styles.outerDiv}>
        <button onClick={goPrev} style={Styles.button}>
        <img src={prevIcon} alt="Prev" style={Styles.iconImg} />
        </button>
        <button onClick={goNext} style={Styles.button}>
        <img src={nextIcon} alt="Next" style={Styles.iconImg} />
        </button>
        <button onClick={play} style={Styles.button}>
        <img src={playIcon} alt="play" style={Styles.iconImg} />
        </button>
        <button onClick={stop} style={Styles.button}>
        <img src={stopIcon} alt="stop" style={Styles.iconImg} />
        </button>
      </div>
    </>
  )
}

const Styles = {
  outerDiv : {display:'flex', justifyContent:'center',gap: '10px','marginTop': '20px'},
  imgStyle:{width:'50vw', height:'40vh' , borderRadius: '12px',boxShadow: '0 4px 8px rgba(0,0,0,0.2)'},
  button: {
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
  },
  iconImg: {
    width: '40px',
    height: '40px',
  },
}

export default App
