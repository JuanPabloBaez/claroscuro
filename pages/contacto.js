import React,{useEffect} from 'react';
import {useRecoilState, useRecoilValue} from 'recoil';
import {themeState,langState} from '../components/layout.js';

function Contacto() {
    const [,setLight] = useRecoilState(themeState);
    const lang = useRecoilValue(langState);

    useEffect(()=>{
        setLight(false)
    }, [setLight]);

  return (
    <>
    { lang==="esp" ? <div id="contact-text">
      <h3>CONTACTO</h3>
      <p>Puedes contactarnos y echar un vistazo a nuestros proyectos actuales en nuestras páginas web personales: </p>
      <a href="https://www.ainarequena.com/" target="_blank" rel="noreferrer">ainarequena.com</a> <br/> 
      <a href="https://www.jpbaez.com/" target="_blank" rel="noreferrer">jpbaez.com</a> 

    </div> : <div id="contact-text">
      <h3>CONTACT</h3>
      <p>You can contact us and take a look at our current projects on our personal web pages: </p>
      <p><a href="https://www.jpbaez.com/" target="_blank" rel="noreferrer">jpbaez.com</a> <br/> <a href="https://www.ainarequena.com/" target="_blank" rel="noreferrer">ainarequena.com</a></p>
    </div> }
    </>
  )
}

export default Contacto