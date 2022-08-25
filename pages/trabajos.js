import React, { useEffect} from 'react';
import {useRecoilState} from 'recoil';
import {themeState} from '../components/layout.js'

function Trabajos() {
    const [,setLight] = useRecoilState(themeState)
    useEffect(()=>{
        setLight(false)
    }, [])    

  return (
    <div>Trabajos</div>
  )
}

export default Trabajos