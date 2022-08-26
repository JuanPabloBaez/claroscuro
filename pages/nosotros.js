import React,{useEffect} from 'react';
import {useRecoilState, useRecoilValue} from 'recoil';
import {themeState,langState} from '../components/layout.js';


function Nosotros() {
  const [,setLight] = useRecoilState(themeState);
  const lang = useRecoilValue(langState);


  useEffect(()=>{
      setLight(false);
  }, []);

  
  return (
    <>
    {lang==="esp" ? <div id="about-text">
      <h3>SOBRE NOSOTROS</h3>
      <p>Claroscuro Producciones somos una productora audiovisual ubicada en Valencia (España) que entre los años 2009 a 2013 hemos ofrecido nuestros servicios a otras personas y empresas que necesitaban una imagen que hablase por ellos, sin olvidarnos nunca durante el proceso de buscar nuestras propias imágenes, nuestras propias palabras.</p>
      <p>Somos un equipo pequeño y durante este tiempo hemos contado con la ayuda y colaboración de mucha gente, grandes profesionales del sector, colegas y amigos con los que nos hemos embarcado en proyectos apasionantes y sin quienes nada de esto hubiese sido posible.  A todos ellos, nuestra eterna gratitud.</p>
      <blockquote><p class="quote"><strong>Si en el final está la representación</strong>, durante el proceso nos encontramos con la búsqueda, la duda, los matices, la idealización, el amor y el odio hacia lo que nos rodea.</p>
        <p class="quote"><strong>Si en el final tenemos la imagen</strong>, hemos recorrido la sensación, la idea, la palabra, el sonido y todas aquellas cosas que nos permiten interpretar y expresar lo que sucede.</p>
        <p class="quote">Por esta faceta integral vemos nuestro trabajo como una <strong>forma de vivir</strong> y lo proyectamos como una <strong>apología a la realidad y la imaginación</strong>.</p>
        <cite>_ Claroscuro Producciones</cite>
      </blockquote>
    </div> :
    <div id="about-text">
      <h3>ABOUT</h3>
      <p>Claroscuro Producciones is a video production company based in Valencia (Spain). Between the years 2009-2013 we have offered our services to other people and companies that need an image to speak for them, but never forgetting in the process the seek of our own images, our own words.</p>
      <p>We are a small team and during this time we have had the support and collaboration of many people, great professionals, colleagues and friends with whom we shared in projects that otherwise would never have been possible. To all of them our eternal gratitude.</p>
      <blockquote><p class="quote"><strong>If in the end is the representation</strong>, in the process we meet the search, the doubt, the nuances, the idealization, the love and hate to what surround us.</p>
        <p class="quote"><strong>If in the end is the image</strong>, we have come through the sensation, the idea, the word, the sound and all those things that allow us to interpret and express what happens.</p>
        <p class="quote">For this integral facet we see our work as a <strong>way of life</strong> and we project it as a <strong>celebration to reality and imagination</strong>.</p>
        <cite>_ Claroscuro Producciones</cite>
      </blockquote>
    </div>}
  </>
  )
}

export default Nosotros