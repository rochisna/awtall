const path = require('path');

const filePath = '/home/user/projects/app/index.js';

console.log("Base Name: ", path.basename(filePath));  
console.log("Directory Name: ", path.dirname(filePath)); 
console.log("File Extension: ", path.extname(filePath));  

const joinedPath = path.join('/home', 'user', 'projects', 'app');
console.log("Joined Path: ", joinedPath);

const absolutePath = path.resolve('index.js');
console.log("Resolved Absolute Path: ", absolutePath);
