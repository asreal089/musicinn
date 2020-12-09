import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MyNavbar from '../components/MyNavbar'
import { Container, Row } from 'react-bootstrap'

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
              <Container fluid>
                <h2 style={{margin: '32px'}}>Minha conta</h2>
                <p>Em breve mais detalhes sobre sua conta</p>
              </Container>
            </main>

            <footer className={styles.footer}>
                Powered by{' '}
                4ATech<img src="/4Atech.png" alt="4ATech Logo" className={styles.logo} />
            </footer>
          </div>
        </div>
    );
}