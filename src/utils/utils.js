import {decrypt, encrypt} from "n-krypta";

export const decryptData = (data, secret) => {
    const decryptData = atob(data);
    return decrypt(decryptData, secret);
}

export const encryptData = (data, secret) => {
    const encryptData = atob(data);
    return encrypt(encryptData, secret);
}