const fs = require("fs");

// fs.readFile("help.txt", "utf8", (err, data) => {
//   console.log(err, data);
// });

// const a = fs.readFileSync("help.txt");
// console.log(a.toString());

// console.log("file is read succesfully");

fs.writeFile("file2.txt", "My Name Amresh Gupt", () => {
  console.log("File Written Succesfully");
});
