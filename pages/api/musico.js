import databaseConnect from '../../databaseConnect'

export default async function getMusicos(req, res){
    if(req.method =='GET'){
        const db = await databaseConnect();
        const musicos = await db.all('SELECT * FROM musico');
        res.json(musicos);
    }
}