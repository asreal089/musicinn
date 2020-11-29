import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    
    <div className={styles.container}>
      <Head>
        <title>MusicINN - a casa de shows online</title>
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <Navbar />
      <main className={styles.main}>
        <h1> olar nosso sistema de musicas</h1>
      </main>

      <footer className={styles.footer}>
          Powered by{' '}
          4ATech<img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
      </footer>
    </div>
  )
}
