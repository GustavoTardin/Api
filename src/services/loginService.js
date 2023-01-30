const { User } = require('../models');
const { generateToken } = require('../utils/JWT');

const checkLogin = async (email, password) => {
const user = await User.findOne({
    attributes: ['id', 'email'],
    where: { email, password }, 
});

    if (!user) return { type: 'nenhum usuário com essas informações', message: 'Invalid fields' };

    const token = generateToken(user);

    return { type: null, message: token };
};

module.exports = {
    checkLogin,
};