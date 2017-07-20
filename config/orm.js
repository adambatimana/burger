let connection = require("./connection.js");

let orm =
          {
            selectALL: function(whatToSelect, table){
                  let queryString = "SELECT ?? FROM ??";
                  console.log(queryString);
                  connection.query(queryString, [whatToSelect,table],
                  function(err,result){
                    console.log(result);
                    res.json(result);
              })
            },
            insertOne: function(burgerName,ifDevoured,date){
              console.log("BURGER Data:");

                  let queryString = "INSERT INTO burgers (burger_name, devoured, date) VALUES (??,??,??)";
                    connection.query(queryString, [burgerName,ifDevoured,date],
                        function(err,result){
                            console.log(result);
                            res.json(result);
                            // res.end();
                        });//end connection
            },
            updateOne: function(table,setAt,where){
              
                  //QUESTIONABLE format for UPDATE function
                  let queryString = "UPDATE ?? SET ?? WHERE ??";
                  connection.query(queryString, [table,setAt,where],
                  function(err,result){
                    console.log(result);
                    res.json(result);
                  })
            }
          }

module.exports = orm;
