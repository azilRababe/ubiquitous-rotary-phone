const mongoose = require('mongoose'),
    schema = mongoose.Schema;

const depSchema = new schema({
    dep_id: {
        type: String,
        required: true
    },
    dep_name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    Qualification: {
        type: [String]
    }

})

module.exports = mongoose.model('Department', depSchema);