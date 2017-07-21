let express = require("express");
let burger = require("../models/burger.js");
let path = require("path");
const app = express();
// const port = 8889;

module.exports = function(app){

  //============================================
  //=============== API ROUTES  ================
  //============================================

    //============================
    //======= GET REQUEST ========
    //============================
    app.get("/api/all", function(req,res){

        //funciton to select all from burgers table
        burger.all(function(data){
          //then send to HANDLEBARS
          res.render("index", { burgerToDevour: data })
        })

    });

    //============================
    //======= POST REQUEST =======
    //============================
    app.post("/api/new", function(req,res){

      let burgerBody= req.body;
      console.log(burgerBody);
      //select name, if devoured and date from AJAX call from HTML and create for database
      burger.create(burgerBody.burger_name,burgerBody.devoured)

      if (true) {
        res.json();
      } else {
        res.json();
      }
      burger.update(burgerBody.devoured,burgerBody.id)
    });


//burgerORM.update
    //============================================
    //=============== HTML ROUTE  ================
    //============================================

    app.get("/", function(req, res) {
      //test for HTML CONNECTION
        res.sendFile(path.join(__dirname, "../public/test.html"));
      //SHOULD HAVE HANDLEBARS HTML INSERTED HERE
    });


};
