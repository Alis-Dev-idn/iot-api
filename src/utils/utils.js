import {decrypt, encrypt} from "n-krypta";

export const decryptData = (data, secret) => {
    return decrypt(data, secret);
}

export const encryptData = (data, secret) => {
    return encrypt(data, secret);
}