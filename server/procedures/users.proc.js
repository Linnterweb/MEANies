var db = require("../config/db");

exports.all = function() {
    return db.rows("GetUsers");
}

exports.read = function(id) {
    return db.row("GetUser", [id]);
}

// exports.destroy = function(id) {
//     return db.empty("DeleteUser", [id]);
// }

exports.create = function(firstname, lastname, hash, email, username) {
    return db.row("CreateUser", [firstname, lastname, hash, email, username])
}

exports.update = function(id) {
    return db.empty("UpdateUserProgress", [id])
}