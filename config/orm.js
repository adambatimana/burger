let connection = require("./connection.js");

let orm ={
  selectALL: function(whatToSelect, table, callback){
                  console.log(whatToSelect);
                  console.log(table);
                  let queryString = "SELECT ?? FROM ??";
                  console.log(queryString);
                  connection.query("SELECT * FROM burgers",
                  function(err,result){
                    if (err) {console.log(err)}
                    callback(result);
              })
            },
            createOne: function(burgerName,ifDevoured,callback){
                  let queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (??,??)";
                    connection.query(queryString, [burgerName,ifDevoured],
                        function(err,result){
                          if (err) {console.log(err)}
                          callback(result);
                        });//end connection
            },
            updateOne: function(setAt,where,callback){

                  //QUESTIONABLE format for UPDATE function
                  let queryString = "UPDATE burgers SET ?? WHERE id = ??";
                  connection.query(queryString, [setAt,where],
                  function(err,result){
                      if (err) {console.log(err)}
                      callback(result);
                  })
            }
          }

module.exports = orm;
