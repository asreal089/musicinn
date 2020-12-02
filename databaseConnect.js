const sqlite3 = require('sqlite3');
const sqlite = require('sqlite');

export default async function databaseConnect() {
  return sqlite.open({
    filename: './database.db',
    driver: sqlite3.Database,
  });
}
