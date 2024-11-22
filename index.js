    
const generatePassword = require("generate-password");


function generateRandomPassword() {
  const password = generatePassword.generate({
    length: 12, 
    numbers: true, 
    symbols: true, 
    uppercase: true, 
    lowercase: true, 
    excludeSimilarCharacters: true, 
  });

  console.log("Mot de passe généré :", password);
}


generateRandomPassword();
