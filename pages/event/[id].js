import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import MyNavbar from '../../components/MyNavbar'
import { Container, Col, Row } from 'react-bootstrap'
import { useRouter, withRouter } from "next/router";
import axios from 'axios'
import MyEventCard from '../../components/MyEventCard';


export default function event({favorito}) {
  
  return(
    <Container className={styles.main_container} >
      <MyNavbar />
      <Container className={styles.container} >
        <Head>
          <title>MusicINN - a casa de shows online</title>
          <link rel="icon" href="/favicon.ico" />
          
        </Head>
        <main className={styles.main}>
          <Container >
            <h3 className="text-center" style={{marginTop: "32px"}}>Agendar evento:</h3>
            <Row className="justify-content-md-center">

              <Col md="auto">
                <MyEventCard favorito={favorito}/>
              </Col>
          
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

event.getInitialProps = async ({ query }) =>{
  const { id } = query
  const axioscfg={baseURL:process.env.SITE}
  const res = await axios.get('/api/favorito/'+id, axioscfg);

  return {
    favorito: res.data.favorito
  }
}
