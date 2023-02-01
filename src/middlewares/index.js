const validateLogin = require('./validateLogin');
const validateDisplayName = require('./validateDisplayName');
const validateEmailAndPassword = require('./validateEmailAndPassword');
const validateTitleAndContent = require('./validateTitleAndContent');
const validateToken = require('./validateToken');
const validateInsertNewPost = require('./validateInsertNewPost');

module.exports = {
    validateLogin,
    validateEmailAndPassword,
    validateDisplayName,
    validateTitleAndContent,
    validateToken,
    validateInsertNewPost,
};