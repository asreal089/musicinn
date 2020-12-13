import {Card, Button, Container, Form, InputGroup, FormControl} from 'react-bootstrap'
import RangeSlider from 'react-bootstrap-range-slider'
import React, { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Iframe from 'react-iframe'
import axios from 'axios'
import Moment from 'react-moment'
import DatePicker from "react-datepicker"
import TimePicker from 'react-time-picker/dist/entry.nostyle'

import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css"
import "react-datepicker/dist/react-datepicker.css";

export default function MyEventCard(props) {
    const router = useRouter()

    
    async function removeEvento(){
      const axioscfg={ baseURL:process.env.SITE }
      const res = await axios.delete('/api/evento/'+ props.evento._id, axioscfg);
      router.push('/myaccount')
      return{
        allMusicos: res.data.musicos
      }
    }
   
    return(
          <Container style={{alignContent:"center"}}>
            <Card style={{maxWidth:"400px"}}>
              <Card.Body>
                <Card.Title style={{fontWeight: "bold", textTransform: "capitalize"}}>Live com {props.evento.nome} No dia <Moment format="DD/MM/YYYY">
                      {props.evento.data}
                    </Moment></Card.Title>
                <Iframe
                className="embed-responsive-item mx-auto"
                url={props.evento.demo_video_url}
                allowFullScreen
                />
                <Card.Text style={{marginTop: "8px"}}>
                  {props.evento.bio}
                </Card.Text>
                <Card.Link href={"mailto:"+props.evento.email}>Entre em Contato</Card.Link>
                <br /><br />
                <Card.Text>
                  Preço por Hora: <b>R$ {props.evento.preco_hora}</b>
                </Card.Text>

                <Form>
                <Form.Group controlId="formBasicRange">
                  <Form.Label>Duração em horas: </Form.Label>
                  <RangeSlider
                    value={props.evento.duracao}
                    min={1}
                    max={10}
                    disabled
                  />
                  <br />
                  <Card.Text>
                    Total do Evento<br />
                    <input type="number" disabled value={props.evento.preco_hora * props.evento.duracao} />
                  </Card.Text>

                  <Card.Text>
                    Inicio do Evento: <br />
                    
                    {props.evento.inicio}
                  </Card.Text>
  
                  
                  
                  <Card.Text>
                  Musicas preferidas: <br />
                  <InputGroup>
                    <FormControl as="textarea" aria-label="With textarea" value={props.evento.playlist} disabled />
                  </InputGroup>
                  </Card.Text>

                  
                </Form.Group>
              </Form>
              
                
                <br />
                <Button onClick={removeEvento} variant="danger">Desmarcar</Button>
                
              </Card.Body>
            </Card>
            <br />
          </Container>

    );
}