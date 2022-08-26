import React,{useEffect} from 'react';
import {useRecoilState, useRecoilValue} from 'recoil';
import {themeState,langState} from '../components/layout.js';

function Contacto() {
    const [,setLight] = useRecoilState(themeState);
    const lang = useRecoilValue(langState);

    useEffect(()=>{
        setLight(false)
    }, []);

  return (
    <>
    { lang==="esp" ? <div id="about-text">
      <h3>CONTACTO</h3>
      <p>Puedes contactarnos y echar un vistazo a nuestros proyectos actuales en nuestras páginas web personales: </p>
      <p><a href="http://www.jpbaez.com/" target="_blank">jpbaez.com</a> <br/> <a href="http://www.ainarequena.com/" target="_blank">ainarequena.com</a></p>

    </div> : <div id="about-text">
      <h3>CONTACT</h3>
      <p>You can contact us and take a look at our current projects on our personal web pages: </p>
      <p><a href="http://www.jpbaez.com/" target="_blank">jpbaez.com</a> <br/> <a href="http://www.ainarequena.com/" target="_blank">ainarequena.com</a></p>
    </div> }
    </>
  )
}

export default Contacto