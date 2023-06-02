const generatePassword = require('generate-password');

// Generate a random password
const password = generatePassword.generate({
  length: 10,
  numbers: true,
  symbols: true,
  uppercase: true,
  excludeSimilarCharacters: true,
});

console.log(password);
