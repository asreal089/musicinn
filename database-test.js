const { Last } = require('react-bootstrap/esm/PageItem');
const sqlite = require('sqlite3');

async function setup (){
    const db = await sqlite.OPEN_CREATE('./musicinn.sqlite');
    await db.migrate({force:'last'});
}

setup();