const figlet = require("figlet");

figlet("Hello Bhuvi :)", (error, data) => {
  if (error) {
    console.log("Something went wrong..!");
    console.log(error);
    return;
  }
  console.log(data);
});
