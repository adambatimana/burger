let connection = require("./connection.js");

let orm =
          {
            selectALL: function(whatToSelect, table){
                  let queryString = "SELECT ?? FROM ??";
                  console.log(queryString);
                  connection.query(queryString, [whatToSelect,table],
                  function(err,result){
                    console.log(result);
                    // result.json(result);
              })
            },
            createOne: function(burgerName,ifDevoured){
                  let queryString = "INSERT INTO burgers (burger_name, devoured, date) VALUES (??,??,CURRENT_TIMESTAMP)";
                    connection.query(queryString, [burgerName,ifDevoured],
                        function(err,result){
                            console.log(result);
                            // result.json(result);
                            // res.end();
                        });//end connection
            },
            updateOne: function(table,setAt,where){

                  //QUESTIONABLE format for UPDATE function
                  let queryString = "UPDATE ?? SET ?? WHERE ??";
                  connection.query(queryString, [table,setAt,where],
                  function(err,result){
                    console.log(result);
                    // result.json(result);
                  })
            }
          }

module.exports = orm;
