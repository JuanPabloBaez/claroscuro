import React,{useEffect, useState} from 'react';
import Image from 'next/image';
import {useRecoilState,useRecoilValue} from 'recoil';
import {themeState,langState} from '../components/layout.js';
import ReactPlayer from 'react-player';

import Play from '../public/play-blanc.png'




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
      <Image src={Play} alt="Press button to watch video reel"/>
      <p>{lang==="esp"? "VER REEL" : "WATCH REEL"}</p>
      </span></button>
    :<div className='player'>
      <span>
      <button className='close-player' onClick={()=>setIsPlaying(false)} >X</button>
      <ReactPlayer 
        className="reel"
        url="https://vimeo.com/585754763"
        controls={true}
        responsive="true"
        
        />
        </span> 
    </div>}


    <video loop autoPlay muted> <source src='/reel.mp4'/></video>
    </>
      
   
  )
}
