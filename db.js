var mysql = require('mysql');
let dbConfig = {
    host     : 'localhost',
    user     : 'root',
    password : 'coorg123@',
    database : 'coorgExpressDb'
}
let pool = mysql.createPool(dbConfig);
pool.on('connection', function (_conn) {
    if (_conn) {
        logger.info('Connected the database via threadId %d!!', _conn.threadId);
        _conn.query('SET SESSION auto_increment_increment=1');
    }
});

/*var connection = mysql.createConnection({
    host     : 'tryambaka.com',
    user     : 'poncauvery',
    password : 'pon..098321',
    database : 'poncauvery'
});
connection.connect(function(err) {
    if (err) throw err;
});
*/
module.exports = pool;