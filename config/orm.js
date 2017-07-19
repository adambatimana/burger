let connection = require("./connection.js");

let orm =
          {
            selectALL: function(whatToSelect, table){
              //SELECT * FROM burgers
            },
            insertOne: function(table,whereToInsert){
              //INSERT INTO burgers SET ?
            },
            updateOne: function(table,setAt,whereAT){
              //UPDATE burgers SET ? WHERE ?
            }
          }

module.exports = orm;
