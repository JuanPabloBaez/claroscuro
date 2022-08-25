import Layout from '../components/layout';
import { RecoilRoot } from 'recoil';
import '../styles/app.css';



function MyApp({ Component, pageProps }) {
  
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  )
}

export default MyApp
