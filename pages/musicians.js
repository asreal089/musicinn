import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MyNavbar from '../components/MyNavbar'
import MyMusicianCard from '../components/MyMusicianCard'
import { Container } from 'react-bootstrap'
import fetch from 'isomorphic-unfetch';
import axios from 'axios'

export default function musicians({allMusicos}) {
    
    return(
        <Container className={styles.main_container} >
          <MyNavbar />
          <div className={styles.container} >
            <Head>
              <title>MusicINN - a casa de shows online</title>
              <link rel="icon" href="/favicon.ico" />
              
            </Head>
            <main className={styles.main}>
                <h2>Esses são os músicos disponiveis no momento.</h2>
                <div>
                    { allMusicos.map((musico) => (
                    <MyMusicianCard key={musico.musico_id} musico={musico}/>
                    ))}
                     
                </div>
            </main>

            <footer className={styles.footer}>
                Powered by{' '}
                4ATech<img src="/4Atech.png" alt="4ATech Logo" className={styles.logo} />
            </footer>
          </div>
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