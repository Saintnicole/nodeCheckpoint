let fs = require('fs');

fs.writeFileSync('welcome.txt', 'Hello Node', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("File created successfully");
});

