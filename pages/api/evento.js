import databaseConnect from '../../databaseConnect'

export default async function getEventos(req, res){
    if(req.method =='GET'){
        const db = await databaseConnect();
        const evento = await db.all('SELECT * FROM evento');
        res.json(evento);
    }
}