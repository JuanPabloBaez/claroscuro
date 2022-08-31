import Link from "next/link";
import Image from 'next/image';
import Head from 'next/head';
import {themeState,langState} from '../pages/index.js';
import {useRecoilState} from 'recoil';



import LogoWhite from '../public/logo-blanc.png';
import LogoBlack from '../public/logo-negre.png';




function Layout({children}) {
  const [light,] = useRecoilState(themeState);
  const [lang,setLang] = useRecoilState(langState)

   return (
    <>
    <Head>
    <title>Claroscuro Producciones</title>
    </Head>


    <div className='body' >
        <nav style={light===true ? {color:'white'}  :null}>
            <Link href='/'>
            <a className="logo"><Image  src={light===true ? LogoWhite : LogoBlack}  alt="Home Logo" /></a> 
            </Link>
            <div className="nav-panel">
              <Link href='/trabajos'>
                <a>{lang==="esp" ? "TRABAJOS":"WORK"}</a> 
              </Link>
              <Link href='/nosotros'>
                <a>{lang==="esp" ? "NOSOTROS" :"ABOUT"}</a>
              </Link>
              <Link href='/contacto'>
              <a>{lang==="esp" ? "CONTACTO" :"CONTACT"}</a>
              </Link>
              <button onClick={()=> lang==="esp" ? setLang("eng"): setLang("esp")}>{lang==="esp"? "eng":"esp"}</button>
            </div>
        </nav>

        <main>{children}</main>

        <footer style={light===true ? {color:'white'}  :null}>
            <span><p>&copy; Claroscuro Producciones SL | </p><p> {lang=="esp" ?"Diseño:":"Design:"} <a href="https://www.ainarequena.com/" target="_blank" rel="noopener noreferrer">Aina Requena</a></p><p> Web: <a href="http://jpbaez.com/" target="_blank" rel="noopener noreferrer">Juan Pablo Baez</a> </p> </span>
        </footer>
    </div>
    </>
  )
}

export default Layout