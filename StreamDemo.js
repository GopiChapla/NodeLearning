const fs = require("fs");

const readStream = fs.ReadStream("./Files/demoStreamFile1.txt", {
  encoding: "utf-8",
});
const writeStream = fs.WriteStream("./Files/demoStreamFile2.txt");

// readStream.on("data", (chunk) => {
//   console.log("---------NEW CHUNK");
//   console.log(chunk);
//   writeStream.write(chunk);
// });

readStream.pipe(writeStream);