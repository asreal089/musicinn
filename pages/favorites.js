import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MyNavbar from '../components/MyNavbar'
import MyMusicianCard from '../components/MyMusicianCard'
import { Container, Row } from 'react-bootstrap'
import axios from 'axios'

export default function favorites({allFavorites}) {
    
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
              <h3 className="text-center" style={{marginTop: "32px"}}>Favoritos</h3>
              <Row>

                {allFavorites && allFavorites.map((favorito) => (
                <MyMusicianCard key={favorito._id} musico={favorito} is_favorite={true}/>
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

favorites.getInitialProps = async (ctx) =>{
  const axioscfg=ctx.req?{baseURL:process.env.SITE}:{}
  const res = await axios.get('/api/favorito', axioscfg);

  return {
    allFavorites: res.data.favoritos
  }
}