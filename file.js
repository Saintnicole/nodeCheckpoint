let fs = require('fs');

// -----------------------------
// STEP 1: Create "welcome.txt"
// -----------------------------
// writeFileSync creates the file synchronously
// If the file does not exist, it will be created
// If it exists, it will be overwritten
fs.writeFileSync('welcome.txt', 'Hello Node', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("File created successfully");
});

// Read the file as a string instead of a Buffer

const data = fs.readFileSync('hello.txt', 'utf8');

// Log the content of hello.txt to the console
console.log('Content of hello.txt:');
console.log(data);
