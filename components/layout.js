import Link from "next/link";
import Image from 'next/image';
import Head from 'next/head';


import {atom,useRecoilState} from 'recoil';

import LogoWhite from '../public/logo-blanc.png';
import LogoBlack from '../public/logo-negre.png';

export const themeState = atom({
  key: 'lightTheme',
  default: true
})

export const langState = atom({
  key: 'language',
  default:'esp'
})


function Layout({children}) {
  const [light,] = useRecoilState(themeState);
  const [lang,setLang] = useRecoilState(langState)

   return (
    <>
    <Head>
    <title>Claroscuro Producciones</title>
    </Head>
    <div className='body' style={light===true ? {color:'white'}  :null}>
        <nav>
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
              <button onClick={()=> lang==="esp" ? setLang("eng"): setLang("esp")}>en</button>
            </div>
        </nav>

        <main>{children}</main>

        <footer style={light===true ? {color:'white'}  :null}>
            <p>&copy; Claroscuro Producciones SL</p> |
            <p>Diseño: Aina Requena</p>
            <p>Web: Juan Pablo Baez</p>
        </footer>
    </div>
    </>
  )
}

export default Layout