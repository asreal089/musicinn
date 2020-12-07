import { connectToDatabase } from "../../util/mongodb";

export default async function getMusicos(req, res){

  const { db } = await connectToDatabase();

  const musicos = await db.collection('musico').find({}).toArray();
  if(req.method =='GET'){    
    res.json({musicos});      
  }
}