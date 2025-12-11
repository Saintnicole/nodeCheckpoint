// this code is to create a server that listens on port 3000 and responds with "Hello Node!!!!"
import * as fs from 'fs';
import http from 'http';
http.createServer( (req, res) => {
    res.end(
        '<h1>Hello Node!!!!</h1>\n'
    )
}).listen(3000, () => {

    console.log('Server running at http://localhost:3000/');
});
let data = fs.readFileSync('hello.txt', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log(data.toString());

});
