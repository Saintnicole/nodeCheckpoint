// this code is to create a server that listens on port 3000 and responds with "Hello Node!!!!"
import * as fs from 'fs';
import http from 'http';
// this function creates the server and listens on port 3000
http.createServer( (res) => {
    res.end(
        '<h1>Hello Node!!!!</h1>\n'
    )
}).listen(3000, () => {
    // here we log that the server is running

    console.log('Server running at http://localhost:3000/');
});

// here we read the content of hello.txt file synchronously
let data = fs.readFileSync('hello.txt', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
// here we log the content of hello.txt to the console in form of string
    console.log(data.toString());

});
