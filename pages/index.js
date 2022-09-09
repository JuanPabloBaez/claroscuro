import React,{useEffect, useState} from 'react';
import Image from 'next/image';
import {atom, useRecoilState,useRecoilValue} from 'recoil';
import ReactPlayer from 'react-player';
import Play from '../public/play-blanc.png';

export const themeState = atom({
  key: 'lightTheme',
  default: true
})
export const langState = atom({
  key: 'language',
  default:'esp'
})

export default function Home() {
  const [,setLight] = useRecoilState(themeState);
  const [isPlaying, setIsPlaying] = useState(false);
  const lang = useRecoilValue(langState);

    useEffect(()=>{
        setLight(true)
    }, [setLight]);

    
  return (
    <>
    {isPlaying===false ? <button className='play' onClick={()=>setIsPlaying(true)} ><span>
      <Image src={Play} alt="Press button to watch video reel" width={100} height={100}/>
      <p>{lang==="esp"? "VER REEL" : "WATCH REEL"}</p>
      </span></button>
    :<div className='player'>
      <span>
      <button className='close-player' onClick={()=>setIsPlaying(false)} >X</button>
      <ReactPlayer 
        className="reel"
        url="https://vimeo.com/68687499"
        controls={true}
        responsive="true"
        />
        </span> 
      </div>
    }
   


    <video autoPlay playsInline loop muted> <source src='/reel.mp4'/></video>
    </>
       
   
  )
}
