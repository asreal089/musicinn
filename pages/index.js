import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MyNavbar from '../components/MyNavbar'
import { Container, Row } from 'react-bootstrap'


export default function Home() {
  return (
    <Container className={styles.main_container} >
      
      <MyNavbar />
      <div className={styles.container} >
        <Head>
          <title>MusicINN - a casa de shows online</title>
          <link rel="icon" href="/favicon.ico" />
          
        </Head>
        <main className={styles.main}>
          <Container fluid>
            <h1 style={{textAlign: "center", margin: '32px'}}> Bem vindo ao MusicInn <br></br> A sua casa de shows online</h1>
            <h5 style={{textAlign: 'center'}}> Entre ou faça seu cadastro para poder encontar músicos e agendar eventos.</h5>
          </Container>
        </main>

        <footer className={styles.footer}>
            Powered by{' '}
            4ATech<img src="/4Atech.png" alt="4ATech Logo" className={styles.logo} />
        </footer>
      </div>
    </Container>
   

  )
}
