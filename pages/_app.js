import Layout from '../components/Layout'
import '../styles/globals.css'
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Midas - Virtual Credit Cards Powered By MoMo</title>
        <meta name="description" content="Midas description for web" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
