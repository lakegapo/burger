// Inside your burger directory, create a folder named models.
// In models, make a burger.js file.


// Inside burger.js, import orm.js into burger.js

var orm = require("../config/orm");

// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.

var burger = {

    selectAll: function(callback) {
        orm.selectAll(function(result) {
            callback (result);
        })
    },

    insertOne: function(burger_name, callback) {
        orm.insertOne(burger_name, function(result) {
            callback (result);
        });
    },

    updateOne: function(burgerId, callback) {
        orm.updateOne(burgerId, function(result) {
            callback (result);
        });
    }
};

// Export at the end of the burger.js file.

module.exports = burger;