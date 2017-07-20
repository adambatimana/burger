let express = require("express");
let burger = require("../models/burger.js");
let path = require("path");
const app = express();
// const port = 8889;

module.exports = function(app){
    //============================
    //======= GET REQUEST ========
    //============================
    app.get("/", function(req,res){
      //burgerORM.select
      //burgerORM.insert
      //burgerORM.update
        res.sendFile(path.join(__dirname, "../public/test.html"));
        // res.json();
    });

    //============================
    //======= POST REQUEST =======
    //============================
    app.post("/", function(req,res){
      if (true) {
        res.json();
      } else {
        res.json();
      }
    })
};
