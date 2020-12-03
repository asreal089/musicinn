import databaseConnect from '../../connectToDatabase'

export default async function getMusicas(req, res){
    if(req.method =='GET'){
        const db = await databaseConnect();
        const musica = await db.all('SELECT * FROM musica');
        res.json(musica);
    }   
}