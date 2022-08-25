import React,{useEffect} from 'react';
import {useRecoilState} from 'recoil';
import {themeState} from '../components/layout.js';

function Contacto() {
    const [,setLight] = useRecoilState(themeState);

    useEffect(()=>{
        setLight(false)
    }, []);

  return (
    <div>Contacto</div>
  )
}

export default Contacto