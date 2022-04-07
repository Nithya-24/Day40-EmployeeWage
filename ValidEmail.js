const prompt = require("prompt-sync")();

/**
 * To check the given mail Id is Valid 
 */

let mail = prompt("Enter mail id to validate : ");
const mailRegex= RegExp("^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$");

function validateMail(mail){
    if(mailRegex.test(mail)){
        console.log("Mail is valid");
    }
    else{
        throw mail+" Mail is Invalid";
    }
}
try{
    validateMail(mail);
}
catch(e){
    console.error(e);
}