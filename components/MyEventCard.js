import {Card, Button, Container} from 'react-bootstrap'
import { useCallback, useEffect } from 'react'
import React, { useState } from "react";
import { useRouter } from 'next/router'
import Iframe from 'react-iframe'
import axios from 'axios'

export default function MyEventCard(props) {
    const router = useRouter()
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

                {! props.is_favorite &&
                <Button onClick={saveEvent} variant="primary">Adicionar aos favoritos</Button>
                }
                {
                  props.is_favorite &&
                  <Button onClick={removeEvent} variant="danger">Remover dos Favoritos</Button>
                }
                <br />
                <br />
                <Button variant="primary">Marcar evento</Button>
              </Card.Body>
            </Card>
          </Container>

    );
}