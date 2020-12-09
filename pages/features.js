import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MyNavbar from '../components/MyNavbar'
import { Container, Row } from 'react-bootstrap'


export default function features() {
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
              <h3 className="text-center" style={{marginTop: "32px"}}>Quem somos</h3>
              <Row>
                <Container fluid>
                  <h5>Da música e vontade de mudar o mundo surgiu a MusicInn, uma startup de música digital que acredita que é possível levar uma experiência imersiva e personalizada para dentro de casa ou onde quer que você esteja! E sem perder aquele gostinho de show ao vivo.</h5>
                  <h5>Trabalhamos intensamente para entregar ótimas experiências para nossos clientes, parceiros e pessoas ao nosso redor.
                  Somos movidos por grandes desafios e acreditamos que a vida com música, é uma vida melhor!
                  </h5>
                </Container>
              </Row>
              <Row>
                <Container fluid>
                  <h4 style={{marginTop: '32px'}}>
                  O nosso time
                  </h4>
                  <h5>
                  Nosso time é apaixonado por desafios, música e muita diversão com a galera (mesmo sem poder aglomerar agora)!
                  E é essa paixão que move músicos, artistas e os mais diversos profissionais para juntos, com muita criatividade e dedicação procurar as melhores formas de entregar uma experiência única para cada cliente!
                  </h5>
                  <h5>Sabe aquela emoção de estar no show ao vivo, de cantar com toda energia e sentir o corpo todo vibrar com tudo o que acontece no show? É esse sentimento que temos ao entregar o que muita gente duvidava - o show dentro da sua casa, independente de onde seja - por um preço justo e que valoriza os artistas! 
                  </h5>
                </Container>
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