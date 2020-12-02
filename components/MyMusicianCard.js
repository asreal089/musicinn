import {Card, Image, Button, ListGroup} from 'react-bootstrap'
import Iframe from 'react-iframe'



export default function MyMusicianCard(props) {
    return(
        <div className="mycard">
            <Card style={{ width: '36rem' }}>
              <Card.Body>
                <Card.Title>{props.musico.nome}</Card.Title>
                <Iframe 
                url={props.musico.demo_video_url} 
                />
                <Card.Text>
                  {props.musico.bio}
                </Card.Text>

                <Card.Text>
                  Preço por Hora: R$ {props.musico.preco_hora}
                </Card.Text>


                
                
                
                <Button variant="primary">Adicionar aos favoritos</Button>
                <br />
                <br />
                <Button variant="primary">Marcar evento</Button>
              </Card.Body>
            </Card>

        </div>

    );
}