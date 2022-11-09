import {decrypt, encrypt} from "n-krypta";
import {config} from "dotenv";
config();

export const decryptData = (data) => {
    let result = "";
    for (let i = 0; i < 3; i++) {
        result = decrypt(data, process.env.SECRET_KEY_DATA);
    }
    return result;
}

export const encryptData = (data) => {
    let result = "";
    for (let i = 0; i < 3; i++) {
        result = encrypt(data, process.env.SECRET_KEY_DATA);
    }
    return result;
}