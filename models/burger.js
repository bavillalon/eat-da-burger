var orm=require('../config/orm');

var burger={
    allBurgers: function(cb){
        orm.selectAll("burgers", function(results){
            cb(results);
        });
    },
    newBurger: function(burgerToAdd,cb){
        orm.insertOne("burgers",{burger_name:burgerToAdd,devoured:false},function(results){
            cb(results);
        });
    },
    devourBurger: function(burgerID,cb){
        orm.updateOne('burgers',{id:burgerID}, {devoured:true}, function(results){
            cb(results);
        })
    }
};

module.exports=burger;

//burger.allBurgers(function(results){
//    console.log(results);
//
//});


//burger.newBurger("Vegan Burger", function(results){
//    console.log(results);
//});

//burger.devourBurger(5,function(results){
//    console.log(results);
//});