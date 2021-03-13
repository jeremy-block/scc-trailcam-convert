var fs = require("fs");

let fileName = '../100MEDIA/DSCF0001.JPG';
let {birthtime} = fs.statSync(fileName)
console.log(birthtime.toDateString());
console.log(birthtime.getHours()+":"+birthtime.getMinutes())