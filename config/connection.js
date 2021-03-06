let mysql = require("mysql");
let connection;
if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
  connection = mysql.createConnection({
      host:"localhost",
      user:"root",
      password: "root",
      port: "8889",
      database: "burgers_db"
  });
}


connection.connect(function(err){
  if (err) {
      console.error("ERROR CONNECTING: " + err.stack);
      return;
  }
      console.log("CONNECTED AS ID: " + connection.threadId);
});


module.exports = connection;
