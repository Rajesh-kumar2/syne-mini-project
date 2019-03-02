const empservice = require('../services/emp.service');

module.exports = {
    add,
    getAll,
    getById,
    update
};

function add(req, res, next) {
    empservice.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    empservice.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}

function getById(req, res, next) {
    empservice.getById(req.params.id)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    empservice.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}
