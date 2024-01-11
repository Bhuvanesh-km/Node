// reading a file

let fs = require("fs");

//reading a file
// let fileContent = fs.readFileSync("text.txt");

// console.log("data " + fileContent);

//writing a file
// console.log("writing data to data.txt...");
// fs.writeFileSync("data.txt", "written to data file - by bhuvi");

//apend a file
// console.log("appending new data to message.txt");
// fs.appendFileSync("message.txt", "data to append");

//deleting a file
// try {
//   fs.unlinkSync("message.txt");
//   console.log("file has been deleted");
// } catch (error) {
//   console.error(error.message);
// }

//make directory
// fs.mkdirSync("myDir");

//delete dir
try {
  fs.rmdirSync("myDir");
  console.log("directory deleted");
} catch (error) {
  console.log(error.message);
}

//check the content
// let folderPath = "path"
// fs.readdirSync(folderPath);
