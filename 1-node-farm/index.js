// const { isUtf8 } = require("buffer");
 const fs = require("fs");

// const textF = fs.readFileSync("./txt/input.txt", "utf-8");

// console.log(textF);

// // To write file

// const textW = `This is what we know about the avocdado : ${textF}.\n Created  on ${Date.now()} `;
// fs.writeFileSync("./txt/Output.txt", textW);
// console.log("file written")

//  for the Asynchronous / Non-blocking
const Run = "Trial"
fs.writeFile("./txt/Run.txt", Run);
console.log("trial written");

fs.readFile("./txt/start.txt", "utf-8", (error, data1) => {
    
fs.readFile(`./txt/${data1}.txt`, "utf-8", (error, data2) => {
    console.log("The data of data1:", data2);
})

});

// fs.readFile("./txt/start.txt", "utf-8", (error, data) => {
//     console.log("The data of async:", data);
// })

fs.readFile("./txt/start.txt", "utf-8", (error, data1) => {
    
    fs.readFile(`./txt/${data1}.txt`, "utf-8", (error, data2) => {
        console.log("The data of data1:", data2);
        fs.readFile("./append.txt", "utf-8", (err, data3) => {
            console.log(data3)
            fs.writeFile("./txt/final.txt",`.\n ${data2} \n ${data3}`, 'utf-8', err => {
                console.log ("Your file has been written")
            })
        })
    })
    
    });