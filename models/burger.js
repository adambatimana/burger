let orm = require("../config/orm.js");

//call ORM function using burger specific input for orm
let burger={
    all: function(burgers){
      orm.selectALL("*","burgers")
    },
    create: function(name,burgers){
      orm.createOne(name,false)
    },
    //need to make sure this works with format in ORM.JS
    update: function(id,burgers){
      let condition = "id " + id;
    orm.updateOne({devoured: true},condition)
    }
};

module.exports = burger;//ORM FUNCTIONS
