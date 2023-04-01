// module fs
// filesystem
const fs = require("fs");

console.log("start"); //Non blocking
fs.readFile("./Nodejs.txt","utf-8", (err, data) => {
    console.log("We are inside callback function", data); //blocking because it has to wait for the responseof the callback function

    //Some activity based on the data of read file
});

console.log("end"); // Non blocking

//start
//output of filereadning
//end