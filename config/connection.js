var mysql = require("mysql");

var connection;
//establishing the connection object with the required info for JAWSDB and my sql server
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
    connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'password',
        database: 'burger_db'
    });
};

//connecting to sql server
connection.connect(function (err) {
    if (err) {
        console.error("Error connecting: " + err.stack);
        return;
    }

    console.log("Connected as id: " + connection.threadId);
});

module.exports = connection;

