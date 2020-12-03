import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MyNavbar from '../components/MyNavbar'
import MyMusicianCard from '../components/MyMusicianCard'
import { Container, Row } from 'react-bootstrap'
import fetch from 'isomorphic-unfetch';
import axios from 'axios'

export default function musicians({allMusicos}) {
    
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
                <h3 className="text-center" style={{marginTop: "32px"}}>Esses são os músicos disponiveis no momento:</h3>
                <Row>
                  { allMusicos.map((musico) => (
                  <MyMusicianCard key={musico.musico_id} musico={musico}/>
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

musicians.getInitialProps = async (ctx) =>{
  const axioscfg=ctx.req?{baseURL:'http://localhost:3000'}:{}
  const res = await axios.get('/api/musico', axioscfg)
  const json = await res.data 
  return {
    allMusicos: json
  }
}