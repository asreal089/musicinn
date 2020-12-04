import {Card, Image, Button, ListGroup, Row, Col} from 'react-bootstrap'
import Iframe from 'react-iframe'



export default function MyMusicianCard(props) {
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
                <Button variant="primary">Adicionar aos favoritos</Button>
                <br />
                <br />
                <Button variant="primary">Marcar evento</Button>
              </Card.Body>
            </Card>
          </Col>
        </>
    );
}