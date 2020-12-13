import {Card, Button, Container} from 'react-bootstrap'
import { useCallback, useEffect } from 'react'
import React, { useState } from "react";
import { useRouter } from 'next/router'
import Iframe from 'react-iframe'
import axios from 'axios'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';

export default function MyEventCard(props) {
    const router = useRouter()
    const [eventDate, setEventDate] = useState('');
    function handleDateChange(e){
      setEventDate(e.target.value)
    }
    async function saveEvent(){
      const axioscfg={ baseURL:process.env.SITE }
      const res = await axios.post('/api/favorito', { "nome": props.favorito.nome,
      "email": props.favorito.email,
      "preco_hora": props.favorito.preco_hora,
      "bio": props.favorito.bio,
      "demo_video_url": props.favorito.demo_video_url }, axioscfg);
      router.push('/myaccount')
      
    }

    function parseDate(str, format, locale) {
      const parsed = dateFnsParse(str, format, new Date(), { locale });
      if (DateUtils.isDate(parsed)) {
        return parsed;
      }
      return undefined;
    }

    function formatDate(date, format, locale) {
      return dateFnsFormat(date, format, { locale });
    }
    const FORMAT = 'dd/MM/yyyy';
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
                <DayPickerInput
                formatDate={formatDate}
                format={FORMAT}
                parseDate={parseDate}
                placeholder={`${dateFnsFormat(new Date(), FORMAT)}`}
                onChange={handleDateChange}
                />
                <br /><br />
                <Button onClick={saveEvent} variant="primary">Salvar</Button>
                
              </Card.Body>
            </Card>
          </Container>

    );
}