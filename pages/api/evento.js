const sqlite3 = require('sqlite3');
const sqlite = require('sqlite');

async function openDb() {
  return sqlite.open({
    filename: './database.db',
    driver: sqlite3.Database,
  });
}

export default async function getEventos(req, res){
    if(req.method =='GET'){
        const db = await openDb();
        const evento = await db.all('SELECT * FROM evento');
        res.json(evento);
    }
}