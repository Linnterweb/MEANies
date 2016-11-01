var db = require("../config/db");

exports.read = function(id) {
    return db.row("GetWholeQuestion", [id]);
}

exports.all = function() {
    return db.rows("GetQuestions");
}