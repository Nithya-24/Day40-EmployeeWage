let prompt = require("prompt-sync")();

/**
 * Taking User Input and creating regEx Pattern
 **/

let pincodeRegex = new RegExp("^[0-9]{6}$");
let pincode = parseInt(prompt("Enter the PinCode = "));

/**
* Validate user input as Digit code must not begin with Alphabets 
**/

if (pincodeRegex.test(pincode)) {
    console.log("Pincode is valid");
} else {
    console.log("please enter Valid pincode")
}