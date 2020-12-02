import databaseConnect from '../../databaseConnect'

export default async function getUsuarios(req, res){
    if(req.method =='GET'){
        const db = await databaseConnect();
        const usuario = await db.all('SELECT * FROM usuario');
        res.json(usuario);
    }
}