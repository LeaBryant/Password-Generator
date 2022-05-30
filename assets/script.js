var generateBtn = document.querySelector("#generate");

const key_strings = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    number: '0123456789',
    symbol: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
  };
  
  function generatePassword() {
    var passwordCharSet = "";
  
    var length = window.prompt("Come and get your userfriendly password! But for it to be friendly only enter a number between 8 to 50 for the password length.");
  
    var lowercase = window.confirm("How are we feeling about using lowercase letters?");
    if (lowercase) {
      passwordCharSet += key_strings.lowercase;
    };
  
    var uppercase = window.confirm("Should we spicy it up with some uppercase letters?");
    if (uppercase) {
      passwordCharSet += key_strings.uppercase;
    };
  
    var symbols = window.confirm("Okay lets talk about symbols, is that okay?");
    if (symbols) {
      passwordCharSet += key_strings.symbol;
    };
  
    var numbers = window.confirm("Last one, how about adding numbers?");
    if (numbers) {
      passwordCharSet += key_strings.number;
    };
    var password = "";
    for (let i = 0; i < length; i++) {
      password += passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)]
    }
    console.log(generatePassword);
    return password;
  }

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);