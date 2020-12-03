import {MongoClient, Db, connect} from 'mongodb';

let cachedDB = null;

async function connectToDatabase(){
  if(cachedDB){
    return cachedDB;
  }

  const client = await MongoClient.connect(process.env.MONGODB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
  });

  const DBname = 'musicinn';
  const db = client.db(DBname);
  cachedDB = db;
  return db;
}

export default async function getMusicos(req, res){
  const db  = await connectToDatabase();
  const musicos = await db.collection('musico').find({}).toArray();
  console.log(musicos);
  if(req.method =='GET'){    
    res.json({musicos});      
  }
}