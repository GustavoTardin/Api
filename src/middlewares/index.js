const validateLogin = require('./validateLogin');
const validateDisplayName = require('./validateDisplayName');
const validateEmailAndPassword = require('./validateEmailAndPassword');
const validateTitleAndContent = require('./validateTitleAndContent');
const validateToken = require('./validateToken');

module.exports = {
    validateLogin,
    validateEmailAndPassword,
    validateDisplayName,
    validateTitleAndContent,
    validateToken,
};