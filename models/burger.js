let orm = require("../config/orm.js");

//call ORM function using burger specific input for orm
let burgerORM ={
    orm.selectALL("*","burgers"),
    orm.insertOne(burgerName,ifDevoured,date),

    //need to make sure this works with format in ORM.JS
    orm.updateOne("burgers","devoured","id")
};

module.exports = burgerORM;//ORM FUNCTIONS
