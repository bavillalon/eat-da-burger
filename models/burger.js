var orm=require('../config/orm');
//here's the model for the burger db using the custom orm.
//all burgers will get the burgers from the orm and the onlyinput is the callback for the resultant data.
//newburger will take the name of the burger to add since a new burger will clearly have a devoured value of false.
    //the input burger to add is a string and we format it to a object fo rhte orm along with the devoured value.
//the devour function will also tame the burger table as a string, the id and devoured value as objects.
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