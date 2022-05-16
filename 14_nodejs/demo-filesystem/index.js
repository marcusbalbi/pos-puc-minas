const fs = require('fs');

fs.mkdir('./test', () => {
  console.log('criei o diretorio teste')
});

fs.writeFile('./test/abcd.txt', 'Ola tudo bem?', () => {
  console.log('cirei um novo arquivo no diretorio ./test/abcd.txt');
})


fs.readFile("./test/abcd.txt", (err, data) => {
  console.log(data.toString());
});