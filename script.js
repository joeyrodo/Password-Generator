// Assignment code here
// Establish arrays for types of characters
const lowerSet = "abcdefghijklmnopqrstuvwxyz".split("");
const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const numSet = "1234567890".split("");
const specialSet = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");

// Fuction that prompts the user and generates a password
function generatePassword() {
  // Prompts the user for length of the password
  let length = parseInt(
    prompt("Length of password? (between 8 and 128)")
  );

  // Prompts the user to select a valid  number if their input is invalid
  while (isNaN(length) || length < 8 || length > 128) {
    length = parseInt(
      prompt("Please enter a valid number (between 8 and 128)")
    );
  }

  // Prompt the user for which characters to include
  const includeLower = confirm("Include lowercase letters?");
  const includeUpper = confirm("Include uppercase letters?");
  const includeNum = confirm("Include numbers?");
  const includeSpecial = confirm("Include special characters?");

  // Concatenate all selected characters into a single array
  let selectedChars = [];

  if (includeLower) {
    selectedChars = selectedChars.concat(lowerSet);
  }
  if (includeUpper) {
    selectedChars = selectedChars.concat(upperSet);
  }
  if (includeNum) {
    selectedChars = selectedChars.concat(numSet);
  }
  if (includeSpecial) {
    selectedChars = selectedChars.concat(specialSet);
  }

  let password = "";
  for (i = 0; i < length; i++) {
    var randomChar = Math.floor(Math.random() * selectedChars.length);
    password += selectedChars[randomChar];
  }
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
