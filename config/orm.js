// Create an orm.js file inside config directory.

// Import (require) connection.js into orm.js
var connection = require("./connection.js");
var mysql = require("mysql");

// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

var orm = {

    // selectAll()
    selectAll: function(callback) {
        connection.query("SELECT * FROM burgers", function(err, result) {
            if (err) throw err;
            callback(result);
        });

    },

    // insertOne()
    insertOne :function(burger_name, callback) {  
        connection.query("INSERT INTO burgers SET ?", {
            burger_name: burger_name,
            devoured: false
        }, 
            function(err, result) {
            if (err) throw err;
            callback(result);
        });
    },

    // updateOne()
    updateOne: function(burgerId, callback) {
      connection.query("UPDATE burgers SET ? WHERE ?", 
      [{devoured: true}, {id: burgerId}], function(err, result) {
          if (err) throw err;
          callback(result);
      });
    }

};

// Export the ORM object in module.exports.
module.exports = orm;