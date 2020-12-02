import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MyNavbar from '../components/MyNavbar'
import MyMusicianCard from '../components/MyMusicianCard'

export default function musicians() {
    const musico = {
        id: 1,
        nome: "Bruce Dickson",
        email:"bd@ironmaiden.com",
        bio:"Olá eu sou musico raiz que adora tocar e cantar metal !..!",
        demo_video_url: 'https://www.youtube.com/watch?v=nzwV9cW1aaI',
        preco: 1000.00
    };
    return(
        <div className={styles.main_container}>

          <MyNavbar />
          <div className={styles.container} >
            <Head>
              <title>MusicINN - a casa de shows online</title>
              <link rel="icon" href="/favicon.ico" />
              
            </Head>
            <main className={styles.main}>
                <h2>Esses são os músicos disponiveis no momento.</h2>
                <div>
                    <MyMusicianCard musico={musico}/>
                    <MyMusicianCard musico={musico}/>
                    <MyMusicianCard musico={musico}/>
                    <MyMusicianCard musico={musico}/>
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