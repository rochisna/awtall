const fs = require('fs');
const path = require('path');

const inputFilePath = path.join(__dirname, 'input.txt');
const outputFilePath = path.join(__dirname, 'output.txt');


const readableStream = fs.createReadStream(inputFilePath, { encoding: 'utf8' });

const writableStream = fs.createWriteStream(outputFilePath);

readableStream.pipe(writableStream);

readableStream.on('data', (chunk) => {
  console.log(`Read chunk: ${chunk}`);
});

writableStream.on('finish', () => {
  console.log('Write completed');
});

readableStream.on('error', (err) => {
  console.error('Error reading file:', err);
});

writableStream.on('error', (err) => {
  console.error('Error writing file:', err);
});
