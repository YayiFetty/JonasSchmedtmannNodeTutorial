// const { isUtf8 } = require("buffer");
 const fs = require("fs");

//  ***************************** File *********************************


// const textF = fs.readFileSync("./txt/input.txt", "utf-8");

// console.log(textF);

// // To write file

// const textW = `This is what we know about the avocdado : ${textF}.\n Created  on ${Date.now()} `;
// fs.writeFileSync("./txt/Output.txt", textW);
// console.log("file written")

// //  for the Asynchronous / Non-blocking
// const Run = "Trial"
// fs.writeFile("./txt/Run.txt", Run);
// console.log("trial written");

// fs.readFile("./txt/start.txt", "utf-8", (error, data1) => {
    
// fs.readFile(`./txt/${data1}.txt`, "utf-8", (error, data2) => {
//     console.log("The data of data1:", data2);
// })

// });




// fs.readFile("./txt/start.txt", "utf-8", (error, data) => {
//     console.log("The data of async:", data);
// })






// fs.readFile("./txt/start.txt", "utf-8", (error, data1) => {
    
//     fs.readFile(`./txt/${data1}.txt`, "utf-8", (error, data2) => {
//         console.log("The data of data1:", data2);

//         fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
//             console.log("data 3",data3)

//             fs.writeFile("./txt/final.txt",`.\n ${data2} \n ${data3}`, 'utf-8', err => {
//                 console.log ("Your file has been written")
//             })
//         })
//     })
    
//     });

// ********************************** end of file ****************************

// ***************************************Server************************************************

const http = require("http");
const url = require("url")

// turn it to top level code
// use synchronouse because we only want to read it once 

const tempOverview = fs.readFile(`${__dirname}/templates/template-overview.html`, 'utf-8');
const tempCard = fs.readFile(`${__dirname}/templates/template-card.html`, 'utf-8');
const tempProduct = fs.readFile(`${__dirname}/templates/template-product.html`, 'utf-8');
const data= fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
    const dataObj = JSON.parse(data);

const Server = http.createServer((req, res) => {
    const pathName = req.url;

    // for the overview
    if(pathName === '/' || pathName === '/overview'){
        res.writeHead(200, {
            "content-type": "text/html"
        })
        res.end(tempOverview);
    }
    // for the product page
    else if(pathName === '/product'){
        res.end("This is a Product")
    }
    // for the api
    else if(pathName === "/api"){
       
            res.writeHead(200, {
                "content-type": "application/json"
            })
            res.end(data);
       
    }
    // not found
    else{
        res.writeHead(404, {
            'content-type':"text/html",
            'my-own-header':"hellow wolrd!"
        } )
        res.end("<h1>Page Not Found</h1>")
    }
    
});
Server.listen(8000, "127.0.0.1", () => {
    console.log("we listen to server here")
})


// *************************************** End of  Server************************************************



