var generator = require('generate-password');

// a function to generate password
// it returns the generated password with length of 10 characters and includes numbers
const generatePassword = ()=>{

    return generator.generate({
        length: 10,
        numbers: true,
    });
};
// we log the generated password to the console
console.log("Generated password: " + generatePassword());