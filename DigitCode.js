let prompt = require("prompt-sync")();

/**
 * Taking User Input and creating regEx Pattern
 **/

let pincodeRegex = new RegExp("^[0-9]{6}$");
let pincode = parseInt(prompt("Enter the PinCode = "));

/**
* Validate user input with RegEx pattern 
**/

if (pincodeRegex.test(pincode)) {
    console.log("Pincode is valid");
} else {
    console.log("please enter Valid pincode")
}