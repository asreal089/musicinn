import { connectToDatabase } from "../../../util/mongodb";
const ObjectId = require('mongodb').ObjectID;

export default async function deleteMusicos(req, res){
    const { db } = await connectToDatabase();
    const {
        query: { id },
    } = req
    if(req.method =='DELETE'){
        await db.collection('favorito').deleteOne({_id:  ObjectId( id )})
        res.json({});
    }
    if(req.method =='GET'){
        let favorito = await db.collection('favorito').findOne({_id:  ObjectId( id )})
        res.json({favorito});
    }
}