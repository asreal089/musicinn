import { connectToDatabase } from "../../../util/mongodb";
const ObjectId = require('mongodb').ObjectID;

export default async function deleteEvento(req, res){
    const { db } = await connectToDatabase();
    const {
        query: { id },
    } = req
    if(req.method =='DELETE'){
        await db.collection('evento').deleteOne({_id:  ObjectId( id )})
        res.json({});
    }
    if(req.method =='GET'){
        let evento = await db.collection('evento').findOne({_id:  ObjectId( id )})
        res.json({evento});
    }
}