import {Card, Button, Container, Form} from 'react-bootstrap'
import RangeSlider from 'react-bootstrap-range-slider'
import React, { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Iframe from 'react-iframe'
import axios from 'axios'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function MyEventCard(props) {
    const router = useRouter()
    const [eventDate, setEventDate] = useState(new Date());
    const [eventDuration, setEventDuration] = useState(0);

    
    console.log(eventDuration)
    console.log(eventDate)

    async function saveEvent(){
      const axioscfg={ baseURL:process.env.SITE }
      const res = await axios.post('/api/favorito', { "nome": props.favorito.nome,
      "email": props.favorito.email,
      "preco_hora": props.favorito.preco_hora,
      "bio": props.favorito.bio,
      "demo_video_url": props.favorito.demo_video_url }, axioscfg);
      router.push('/myaccount')
      
    }

   
    return(
          <Container style={{alignContent:"center"}}>
            <Card style={{maxWidth:"400px"}}>
              <Card.Body>
                <Card.Title style={{fontWeight: "bold", textTransform: "capitalize"}}>Live com {props.favorito.nome}</Card.Title>
                <Iframe
                className="embed-responsive-item mx-auto"
                url={props.favorito.demo_video_url}
                allowFullScreen
                />
                <Card.Text style={{marginTop: "8px"}}>
                  {props.favorito.bio}
                </Card.Text>
                <Card.Link href={"mailto:"+props.favorito.email}>Entre em Contato</Card.Link>
                <br /><br />
                <Card.Text>
                  Preço por Hora: <b>R$ {props.favorito.preco_hora}</b>
                </Card.Text>

                <Form>
                <Form.Group controlId="formBasicRange">
                  <Form.Label>Duração:</Form.Label>
                  <RangeSlider
                    value={eventDuration}
                    onChange={changeEvent => setEventDuration(changeEvent.target.value)}
                    min={1}
                    max={10}
                  />
                  <DatePicker selected={eventDate} onChange={date => setEventDate(date)} />
                </Form.Group>
              </Form>
              
                
                <br /><br />
                <Button onClick={saveEvent} variant="primary">Salvar</Button>
                
              </Card.Body>
            </Card>
          </Container>

    );
}