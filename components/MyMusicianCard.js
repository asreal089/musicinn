import {Card, Button, Col} from 'react-bootstrap'
import Iframe from 'react-iframe'
import axios from 'axios'


export default function MyMusicianCard(props) {
    async function addToFavoritos(){
      console.log('cai aqui')
      const axioscfg={ baseURL:process.env.SITE }
      const res = await axios.post('/api/favorito', { "nome": props.musico.nome,
      "email": props.musico.email,
      "preco_hora": props.musico.preco_hora,
      "bio": props.musico.bio,
      "demo_video_url": props.musico.demo_video_url }, axioscfg);

      return {
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
                <Button onClick={addToFavoritos} variant="primary">Adicionar aos favoritos</Button>
                <br />
                <br />
                <Button variant="primary">Marcar evento</Button>
              </Card.Body>
            </Card>
          </Col>
        </>
    );
}