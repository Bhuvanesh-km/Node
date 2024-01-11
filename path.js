const path = require("path");
let filePath = "C:\\Users\\rmata\\OneDrive\\Desktop\\Node\\text.txt";
let ext = path.extname(filePath);
let basename = path.basename(filePath);
console.log(ext, basename);

console.log(__filename);

console.log(__dirname);
