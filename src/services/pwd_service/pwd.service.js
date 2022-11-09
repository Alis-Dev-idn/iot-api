import bcrypt from "bcrypt";

const Hast= async (password) => {
    const salt = await bcrypt.genSaltSync(10);
    return await bcrypt.hashSync(password, salt);
}

const Validate = async (password, hast) => {
    return await bcrypt.compare(password, hast);
}

export default {
    Hast,
    Validate
}