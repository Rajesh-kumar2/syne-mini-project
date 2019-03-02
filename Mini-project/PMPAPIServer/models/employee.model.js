const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    id: { type: Number, unique: true, required: true},
    firstName: { type: String, unique: true, required: true },
    lastName: { type: String, required: true },
    designation: { type: String, required: true },
    platform: { type: String, required: true },
    empImg: { type: String},
    createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Employee', schema);