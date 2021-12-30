const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log("Weclome to Acronym Maker");
rl.question("Enter any Organization or Concepts and we will get an acronym for it\nInput: ", function (answer) {
    let array = answer.split(" ")
    let acronym = array.map(word => word[0]).join("")
    console.log(acronym);
    process.exit();
});