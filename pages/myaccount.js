import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MyNavbar from '../components/MyNavbar'
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'
import MyScheduledEvent from '../components/MyScheduledEvent'

export default function myaccount({eventos}) {

    return(
        <Container className={styles.main_container} >

          <MyNavbar />
          <Container className={styles.container} >
            <Head>
              <title>MusicINN - a casa de shows online</title>
              <link rel="icon" href="/favicon.ico" />
              
            </Head>
            <main className={styles.main}>
              <Container fluid>
                <h2 className="text-center" style={{margin: '32px'}}>Minha conta</h2>
                
                <Row className="justify-content-md-center">

                  {eventos && eventos.map((evento) => (
                    <Col md="auto">
                      <MyScheduledEvent key={evento._id} evento={evento} />
                    </Col>
                  ))}
                </Row>

              </Container>
            </main>

            <footer className={styles.footer}>
                Powered by{' '}
                4ATech<img src="/4Atech.png" alt="4ATech Logo" className={styles.logo} />
            </footer>
          </Container>
        </Container>
        
        

    );
}

myaccount.getInitialProps = async (ctx) => {
  const axioscfg=ctx.req?{baseURL:process.env.SITE}:{}
  const res = await axios.get('/api/evento', axioscfg);

  return {
    eventos: res.data.eventos
  }
}