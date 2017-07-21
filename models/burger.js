let orm = require("../config/orm.js");

//call ORM function using burger specific input for orm
let burgerORM ={
    all: orm.selectALL("*","burgers"),
    create: orm.createOne("burger_name",false),

    //need to make sure this works with format in ORM.JS
    update: orm.updateOne("burgers","devoured","id")
};

module.exports = burgerORM;//ORM FUNCTIONS
