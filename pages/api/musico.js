const sqlite3 = require('sqlite3');
const sqlite = require('sqlite');

async function openDb() {
  return sqlite.open({
    filename: './database.db',
    driver: sqlite3.Database,
  });
}

export default async function getMusicos(req, res){
    if(req.method =='GET'){
        const db = await openDb();
        const musico = await db.all('SELECT * FROM musico');
        res.json(musico);
    }
}