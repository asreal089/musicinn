import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MyNavbar from '../components/MyNavbar'

export default function myaccount() {
    return(
        <div className={styles.main_container}>

          <MyNavbar />
          <div className={styles.container} >
            <Head>
              <title>MusicINN - a casa de shows online</title>
              <link rel="icon" href="/favicon.ico" />
              
            </Head>
            <main className={styles.main}>
                <div>
                    <h2>olar essa é a pagina da sua conta</h2>
                </div>
            </main>

            <footer className={styles.footer}>
                Powered by{' '}
                4ATech<img src="/4Atech.png" alt="4ATech Logo" className={styles.logo} />
            </footer>
          </div>
        </div>
    );
}