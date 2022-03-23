const mysql = require('mysql');
// Set database connection credentials
const config = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test',
  };
  
const pool = mysql.createPool(config);
module.exports = pool;


let note = `CREATE TABLE note (
    id      int(11)     unsigned NOT NULL AUTO_INCREMENT,
    name     varchar(30) NOT NULL,
    text    varchar(150) NOT NULL,
    PRIMARY KEY (id)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8;`;

let note_two = `CREATE TABLE note_two (
    id      int(11)     unsigned NOT NULL AUTO_INCREMENT,
    name     varchar(30) NOT NULL,
    text    varchar(150) NOT NULL,
    PRIMARY KEY (id)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8;`



pool.query(note, async (err, result, field) => {
    if (err) {
        // console.log(err.message);
    }
    pool.query(note_two, async (err, result, field) => {
        if (err) {
            //   console.log(err.message);
        }
    });
});