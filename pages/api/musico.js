import { connectToDatabase } from "../../util/mongodb";

export default async function getMusicos(req, res){

  
  const { db } = await connectToDatabase();

  if(req.method =='GET'){    
    const musicos = await db.collection('musico').find({}).toArray();
    res.json({musicos});      
  }

  if(req.method =='POST'){
    const novoMusico = req.body;
    db.collection('musico').insert(novoMusico);
    res.json(novoMusico);
  }
}