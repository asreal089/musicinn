import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MyNavbar from '../components/MyNavbar'
import SingInButton from '../components/buttons/SingInButton'

export default function Home() {
  return (
    <div className={styles.main_container}>

      <MyNavbar />
      <div className={styles.container} >
        <Head>
          <title>MusicINN - a casa de shows online</title>
          <link rel="icon" href="/favicon.ico" />
          
        </Head>
        <main className={styles.main}>
          <h1> Bem vindo ao MusicInn<br />A sua casa de shows online</h1>
          <p> Entre para poder entre para poder contar musicos e agendar eventos.</p>
          <SingInButton />
        </main>

        <footer className={styles.footer}>
            Powered by{' '}
            4ATech<img src="/4Atech.png" alt="4ATech Logo" className={styles.logo} />
        </footer>
      </div>
    </div>
  )
}
