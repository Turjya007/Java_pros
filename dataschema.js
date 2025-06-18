const mongoose = require('mongoose');
const dataschema = mongoose.Schema({
    Name:{type : String, required : true},
    Mobile: String,
    Place: String,
    Date:{type: Date, default: Date.now}
});

module.exports = dataschema;