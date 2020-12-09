import { connectToDatabase } from "../../../util/mongodb";
const ObjectId = require('mongodb').ObjectID;

export default async function deleteMusicos(req, res){
    const { db } = await connectToDatabase();
    const {
        query: { id },
    } = req
    console.log(id)
    if(req.method =='DELETE'){
        await db.collection('favorito').deleteOne({_id:  ObjectId( id )})
        res.json({});
    }
}