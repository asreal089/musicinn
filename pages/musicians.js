import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MyNavbar from '../components/MyNavbar'
import MyMusicianCard from '../components/MyMusicianCard'

export default function musicians({allMusicos}) {
    
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
                    {// allMusicos.map(({ musico }) => (<p>olar</p>))
                      }
                      <MyMusicianCard musico={allMusicos[0]}/>
                      <MyMusicianCard musico={allMusicos[1]}/>
                      <MyMusicianCard musico={allMusicos[2]}/>
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

musicians.getInitialProps = async (ctx) =>{
  const res = await fetch('http://localhost:3000/api/musico')
  const json = await res.json() 
  return {
    allMusicos: json
  }
}