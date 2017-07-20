let orm = require("../config/orm.js");

//call ORM function using burger specific input for orm
let burgerORM ={
    select: orm.selectALL("*","burgers"),
    insert: orm.insertOne(burgerName,ifDevoured,date),
    
    //need to make sure this works with format in ORM.JS
    update: orm.updateOne("burgers","devoured","id")
};

module.exports = burgerORM;//ORM FUNCTIONS
