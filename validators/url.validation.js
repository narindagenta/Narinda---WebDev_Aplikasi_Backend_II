const { param, body } = require('express-validator');
const { validator } = require('./validator');


const getUrlByName  = [
    param('name').isLength({min: 5}),
    validator
]

const insertUrl =  [
    body('url').isURL(),
    body('name').isLength({min: 5}),
    body('description').isLength({min: 5}),
    validator
]

const deleteUrl = [
    body('url').isURL(),
    validator
]

const updateUrl = [
    body('url').isURL().notEmpty().withMessage('Url is required'),
    body('name').isLength({min: 5}),
    body('description').isLength({min: 5}),
    validator
]

module.exports = {
    getUrlByName,
    insertUrl,
    deleteUrl,
    updateUrl
}
