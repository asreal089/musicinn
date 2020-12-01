const sqlite3 = require('sqlite3');
const sqlite = require('sqlite');

async function openDb() {
  return sqlite.open({
    filename: './database.db',
    driver: sqlite3.Database,
  });
}

export default async function getFavoritos(req, res){
    if(req.method =='GET'){
        const db = await openDb();
        const favorito = await db.all('SELECT * FROM favorito');
        console.log(favorito);
        res.json(favorito);
    }
}   