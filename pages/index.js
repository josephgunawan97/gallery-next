import Head from 'next/head'
import Landing from '../components/Landing'

export default function Index() {
  return (
    <div  >
      <Head>
        <title>R O H</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Landing></Landing>
      </main>

    </div>
  )
}
