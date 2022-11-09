import {decrypt, encrypt} from "n-krypta";

export const decryptData = (data, secret) => {
    const decryptData = window.atob(data);
    return decrypt(decryptData, secret);
}

export const encryptData = (data, secret) => {
    const encryptData = window.atob(data);
    return encrypt(encryptData, secret);
}