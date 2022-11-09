import {decrypt, encrypt} from "n-krypta";

export const decryptData = (data, secret) => {
    let data_encrypt = decrypt(data, secret);
    data_encrypt = atob(data_encrypt);
    return JSON.parse(data_encrypt);
}

export const encryptData = (data, secret) => {
    let encryptData = decrypt(data, secret);
    encryptData = atob(encryptData);
    return JSON.parse(encryptData);
}