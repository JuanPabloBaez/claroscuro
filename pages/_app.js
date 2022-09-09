import Layout from '../components/layout';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import '../styles/app.css';



function MyApp({ Component, pageProps }) {
  
  return (

    <>
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>

    <title>Claroscuro Producciones | Producción Audiovisual</title>
    <meta name="description" content="Claroscuro Producciones fue una productora audiovisual ubicada en Valencia (España) que entre los años 2009 a 2013 ofreció servicios a personas y empresas que necesitaban una imagen que hablase por ellos."></meta>

    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
    <link rel="manifest" href="/site.webmanifest"/>

    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="Claroscuro Producciones | Producción Audiovisual" />
    <meta property="og:description" content="Claroscuro Producciones fue una productora audiovisual ubicada en Valencia (España) que entre los años 2009 a 2013 ofreció servicios a personas y empresas que necesitaban una imagen que hablase por ellos." />
    <meta property="og:url" content="https://claroscuro.vercel.app" />
    <meta property="og:site_name" content="Claroscuro Producciones" />
    <meta property="og:image" content="/card.jpg" />
    <meta property="og:image:secure_url" content="/card.jpg" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Claroscuro Producciones | Producción Audiovisual" />
    <meta name="twitter:description" content="Claroscuro Producciones fue una productora audiovisual ubicada en Valencia (España) que entre los años 2009 a 2013 ofreció servicios a personas y empresas que necesitaban una imagen que hablase por ellos." />
    <meta name="twitter:image" content="/card.jpg" />
    </Head>

    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
    </>
  )
}

export default MyApp
