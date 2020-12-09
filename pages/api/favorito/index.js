import { connectToDatabase } from "../../../util/mongodb";
const ObjectId = require('mongodb').ObjectID;

export default async function getMusicos(req, res){

  const { db } = await connectToDatabase();

  if(req.method =='GET'){    
    const favoritos = await db.collection('favorito').find({}).toArray();
    res.json({favoritos});      
  }

  if(req.method =='POST'){
    const novoFavorito = req.body;
    await db.collection('favorito').insertOne(novoFavorito);
    res.json(novoFavorito);
  }

  
}