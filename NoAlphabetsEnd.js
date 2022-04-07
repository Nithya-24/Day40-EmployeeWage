let prompt = require("prompt-sync")();

/**
 * Taking User Input and creating regEx Pattern
 **/

let pincodeRegex = new RegExp("^[1-9]{1}[0-9]{2}\s{1}[0-9]{3}$");
let pincode = parseInt(prompt("Enter the PinCode = "));

/**
* Validate user input as Digit code must accept Space 
**/

if (pincodeRegex.test(pincode)) {
    console.log("Pincode is valid");
} else {
    console.log("please enter Valid pincode");
}