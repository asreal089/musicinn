import { connectToDatabase } from "../../util/mongodb";

export default async function getMusicos(req, res){

  const { db } = await connectToDatabase();

  if(req.method =='GET'){    
    const favoritos = await db.collection('favorito').find({}).toArray();
    res.json({favoritos});      
  }

  if(req.method =='POST'){
    const novoFavorito = req.body;
    db.collection('favorito').insertOne(novoFavorito);
    res.json(novoFavorito);
  }
}