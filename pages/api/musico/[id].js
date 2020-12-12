import { connectToDatabase } from "../../../util/mongodb";
const ObjectId = require('mongodb').ObjectID;

export default async function deleteMusicos(req, res){
    const { db } = await connectToDatabase();
    const {
        query: { id },
    } = req
    if(req.method =='DELETE'){
        await db.collection('musico').deleteOne({_id:  ObjectId( id )})
        res.json({});
    }
    if(req.method =='GET'){
        let musico = await db.collection('musico').findOne({_id:  ObjectId( id )})
        res.json({musico});
    }
}