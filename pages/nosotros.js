import React,{useEffect} from 'react';
import {useRecoilState} from 'recoil';
import {themeState} from '../components/layout.js';

function Nosotros() {
  const [,setLight] = useRecoilState(themeState);

  useEffect(()=>{
      setLight(false);
  }, []);

  return (
    <div>Nosotros</div>
  )
}

export default Nosotros