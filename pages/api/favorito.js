import databaseConnect from '../../connectToDatabase'

export default async function getFavoritos(req, res){
    if(req.method =='GET'){
        const db = await databaseConnect();
        const favorito = await db.all('SELECT * FROM favorito');
        console.log(favorito);
        res.json(favorito);
    }
}   