import React,{useEffect, useState} from 'react';
import {useRecoilState} from 'recoil';
import {themeState} from '../components/layout.js';



export default function Home() {
  const [,setLight] = useRecoilState(themeState);
  const [isPlaying, setIsPlaying] = useState(false);



    useEffect(()=>{
        setLight(true)
    }, []);

    


  return (
    <>
    {isPlaying===false ? <button onClick={()=>setIsPlaying(true)} >watch reel</button>
    :<button onClick={()=>setIsPlaying(false)} >Player</button>}


    <video loop autoPlay muted> <source src='/reel.mp4'/></video>
    </>
      
   
  )
}
