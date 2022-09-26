const fs = require("fs");

// if (!fs.existsSync("./FolderDemo")) {
//   fs.mkdir("./FolderDemo", () => {
//     console.log("Directory Created...");
//   });
// } else {
//   fs.rmdir("./FolderDemo", () => {
//     console.log("Directory Deleted...");
//   });
// }

// if (!fs.existsSync("./Files/demoFile.txt")) {
//   fs.writeFile("./Files/demoFile.txt", "Welcome to Node js", () => {
//     console.log("File Created...");
//   });
// } else {
//   fs.unlink("./Files/demoFile.txt", () => {
//     console.log("File Deleted...");
//   });
// }

// if (fs.existsSync("./Files/demoFile.txt")) {
//   fs.readFile("./Files/demoFile.txt", (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(data.toString());
//     }
//   });
// } else {
//   console.log("File Does not Exits.");
// }


