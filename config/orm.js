let connection = require("./connection.js");

let orm =
          {
            selectALL: function(whatToSelect, table){
                  let queryString = "SELECT ?? FROM ??";
                  console.log(queryString);
                  connection.query(queryString, [whatToSelect,table],
                  function(err,result){
                    console.log(result)
              })
            },
            insertOne: function(table,whereToInsert){
                  let queryString = "INSERT INTO ?? SET ??";
                  connection.query(queryString, [table,whereToInsert],
                  function(err,result){
                    console.log(result);
                  })
            },
            updateOne: function(table,setAt,whereAT){
                  let queryString = "UPDATE ?? SET ?? WHERE ??";
                  connection.query(queryString, [table,setAt,whereAt],
                  function(err,result){
                    console.log(result);
                  })
            }
          }

module.exports = orm;
