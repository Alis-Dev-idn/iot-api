const bcrypt = require('bcrypt');

const HastPassword = async (password) => {
    const salt = await bcrypt.genSaltSync(10);
    return await bcrypt.hashSync(password, salt);
}

const ComparePassword = async (password, hast) => {
    return await bcrypt.compareSync(password, hast);
}

module.exports = {
    HastPassword,
    ComparePassword
};