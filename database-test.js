const sqlite3 = require('sqlite3');
const sqlite = require('sqlite');

async function openDb() {
  return sqlite.open({
    filename: './database.db',
    driver: sqlite3.Database,
  });
}

async function setup() {
  const db = await openDb();
  await db.migrate(
                    { 
                      migrationsPath: './migrations', //add cutom path to your migrations
                      force: 'last' 
                    }
                  );

    const usuario = await db.all('SELECT * FROM usuario');
    console.log('TODOS OS USUARIOS', JSON.stringify(usuario, null, 2));

    const musico = await db.all('SELECT * FROM musico');
    console.log('TODOS OS MUSICOS', JSON.stringify(musico, null, 2));
}

setup();