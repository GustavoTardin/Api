const validateEmailAndPassword = (req, res, next) => {
    const { email, password } = req.body;

    const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (!email || regexEmail.test(email) === false) {
        return res.status(400).json({ message: '"email" must be a valid email' });
    }

    if (!password || password.length < 6) {
        return res.status(400).json(
            { message: '"password" length must be at least 6 characters long' },
            );
}
next();
};

module.exports = validateEmailAndPassword;