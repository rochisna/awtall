const fs = require('fs');
const path = require('path');

function createDirectoryAndFiles() {
  const dirPath = path.join(__dirname, 'myDirectory');
  
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
  }

  const txtFilePath = path.join(dirPath, 'example.txt');
  fs.writeFileSync(txtFilePath, 'This is a text file.');

  const jsonFilePath = path.join(dirPath, 'data.json');
  const jsonData = { name: 'John Doe', age: 30 };
  fs.writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 2));

  const htmlFilePath = path.join(dirPath, 'index.html');
  const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Example HTML</title>
</head>
<body>
  <h1>Hello, World!</h1>
</body>
</html>`;
  fs.writeFileSync(htmlFilePath, htmlContent);

  const mdFilePath = path.join(dirPath, 'README.md');
  fs.writeFileSync(mdFilePath, '# My Project');
}

createDirectoryAndFiles();
