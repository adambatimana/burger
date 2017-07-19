let orm = require("../config/orm.js");

//call ORM function using burger specific input for orm
let burgerORM ={
    orm.selectALL("","",""),
    orm.insertOne("","",""),
    orm.updateOne("","","")
}

module.exports = burgerORM;//ORM FUNCTIONS
