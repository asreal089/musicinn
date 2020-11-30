import {Card, Image, Button, ListGroup} from 'react-bootstrap'



export default function MyMusicianCard(props) {
    return(
        <div className="mycard">
            <Card style={{ width: '36rem' }}>
              <Image src="holder.js/171x180" roundedCircle />
              <Card.Body>
                <Card.Title>{props.musico.nome}</Card.Title>
                <Card.Text>
                  {props.musico.bio}
                <p>
                  Preço por Hora: R$ {props.musico.preco}
                </p>
                
                </Card.Text>
                <Button variant="primary">Adicionar aos favoritos</Button>
                <p></p>
                <Button variant="primary">Marcar evento</Button>
              </Card.Body>
            </Card>

        </div>

    );
}