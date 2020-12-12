import {Card, Button, Col} from 'react-bootstrap'
import { useCallback, useEffect } from 'react'
import { useRouter } from 'next/router'
import Iframe from 'react-iframe'
import axios from 'axios'


export default function MyMusicianCard(props) {
    const router = useRouter()
    async function addToFavoritos(){
      const axioscfg={ baseURL:process.env.SITE }
      const res = await axios.post('/api/favorito', { "nome": props.musico.nome,
      "email": props.musico.email,
      "preco_hora": props.musico.preco_hora,
      "bio": props.musico.bio,
      "demo_video_url": props.musico.demo_video_url }, axioscfg);
      router.push('/favorites')
      return {
        allMusicos: res.data.musicos
      }
    }

    async function removeFavorite(){
      const axioscfg={ baseURL:process.env.SITE }
      const res = await axios.delete('/api/favorito/'+ props.musico._id, axioscfg);
      router.push('/favorites')
      return{
        allMusicos: res.data.musicos
      }
    }

    return(
      <>
          <Col>
          <Card>
              <Card.Body>
                <Card.Title style={{fontWeight: "bold", textTransform: "capitalize"}}>{props.musico.nome}</Card.Title>
                <Iframe
                className="embed-responsive-item mx-auto"
                url={props.musico.demo_video_url}
                allowFullScreen
                />
                <Card.Text style={{marginTop: "8px"}}>
                  {props.musico.bio}
                </Card.Text>

                <Card.Text>
                  Preço por Hora: <b>R$ {props.musico.preco_hora}</b>
                </Card.Text>
                {! props.is_favorite &&
                <Button onClick={addToFavoritos} variant="primary">Adicionar aos favoritos</Button>
                }
                {
                  props.is_favorite &&
                  <Button onClick={removeFavorite} variant="danger">Remover dos Favoritos</Button>
                }
                <br />
                <br />
                <Button variant="primary">Marcar evento</Button>
              </Card.Body>
            </Card>
          </Col>
        </>
    );
}