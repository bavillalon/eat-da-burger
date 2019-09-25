var connection=require('./connection');
//custom orm to get all values in a table. the table is in the form of a string and the cb will use the resultant data.
//insertOne takes a table name in the form of a string, and the values in the form of an objet so it avoids injection
// update one will also take the table name as a string and the values to update and the id to find the entry as objects to avoid injection
//for all the cb will use the resultant data depending on the model 
var orm={
    selectAll: function(table, cb){
        var queryString="SELECT * FROM ??";
        connection.query(queryString,table,function(err,result){
            if(err) throw err;
            cb(result);
        });
    },
    insertOne: function (table,values,cb){
        var queryString="INSERT INTO ?? SET ?";
        connection.query(queryString,[table,values],function(err,results){
            if(err) throw err;

            cb(results);
        });
    },
    updateOne: function(table, id, values, cb){
        var queryString="UPDATE ?? SET ? WHERE ?";
        connection.query(queryString,[table,values,id],function(err,results){
            if(err) throw err;

            cb(results);
        });
    }
};

module.exports=orm;

//orm.updateOne('burgers', {id: 2},{devoured:false},function(results){
//    console.log(results);
//});
//orm.selectAll('burgers',function(results){
//    console.log(results);
//});
//
//orm.insertOne('burgers',{burger_name:'Turd Burger',devoured:false},function(results){
//    console.log(results);
//});