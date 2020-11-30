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
        video: 'video url',
        avatar_url: "vazio",
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