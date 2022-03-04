
const minLength = 8;
const minUppercaseLetters = 1;
const minLowerCaseLetters = 1;
const minSpecialCharacters = 1;
const minDigits = 1;
const specialCharacters = '" ! " # $ % & \' ( ) * + , - . / : ; < = > ? @ [ ] ^ _ ` { | } ~"'.split(" ");

export let checkPasswordLength = (password) => {
    return password.length >= minLength
}

export let checkUppercaseLetters = (password) => {
    return password.replace(/[^A-Z]/g, '').length >= minUppercaseLetters;
}

export let checkLowerCaseLetters = (password) => {
    return password.replace(/[^a-z]/g, '').length >= minLowerCaseLetters;
}

export let checkSpecialCharacters = (password) => {
    let charCount = 0;
    specialCharacters.forEach(char => {
        password.includes(char) && charCount++;
    })
    return charCount >= minSpecialCharacters;
}

export let checkminDig = (password) => {
    return password.replace(/[^0-9]/g, '').length >= minDigits;
}


export let checkPassword = (password) => {
    return checkUppercaseLetters(password) && checkPasswordLength(password) && checkSpecialCharacters(password) && checkLowerCaseLetters(password) && checkminDig(password);
}