let express = require("express");
let burger = require("../models/burger.js");

const app = express();
// const port = 8889;

module.exports = function(app){
    //============================
    //======= GET REQUEST ========
    //============================
    app.get("/", function(req,res){
        res.json(;)
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
