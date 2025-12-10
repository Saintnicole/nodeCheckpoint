let fs = require('fs');
fs.writeFileSync('welcome.txt', 'Hello Node');
let data = fs.readFileSync('./welcome.txt');
console.log(data.toString());

// let datas = fs.readFile('./hey.txt', (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(data.toString());

// });
// console.log("All Dones !");