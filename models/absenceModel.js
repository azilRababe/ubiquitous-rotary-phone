const mongoose = require('mongoose');
const schema = mongoose.Schema;

const absenceSchema = new schema({
    CIN: {
        type: schema.Types.ObjectId,
        ref: 'empModel',
        required: true,
    },
    reason: {
        type: string,
        required: true
    },
    Date: {
        type: date,
        required: true,
    },
});

module.exports = mongoose.model('Absence', absenceSchema);
