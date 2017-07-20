let orm = require("../config/orm.js");

//call ORM function using burger specific input for orm
let burgerORM ={
    select: orm.selectALL("*","burgers"),
    insert: orm.insertOne("burgers","burger_name"),
    update: orm.updateOne("burgers","devoured","id")
};

module.exports = burgerORM;//ORM FUNCTIONS
