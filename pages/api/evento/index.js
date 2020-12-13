import { connectToDatabase } from "../../../util/mongodb";

export default async function getEventos(req, res){

  
  const { db } = await connectToDatabase();

  if(req.method =='GET'){    
    const eventos = await db.collection('evento').find({}).toArray();
    res.json({eventos});      
  }

  if(req.method =='POST'){
    const novoEvento = req.body;
    await db.collection('evento').insertOne(novoEvento);
    res.json(novoEvento);
  }
}