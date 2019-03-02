const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/PMP')
.then(()=>console.log('connected to mongo db'))
.catch(err => console.error('Could not connect to mongo db', err));

mongoose.Promise = global.Promise;

module.exports = {
    User: require('../models/user.model')
};

module.exports = {
    Employee: require('../models/employee.model')
};