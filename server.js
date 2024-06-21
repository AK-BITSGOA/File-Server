const express = require("express")
const fs = require("fs")


const app = express();


app.get("/contents", (req, res)=>{
    const fileList = fs.readdirSync("/home/abhisek/Desktop/FileServer/files")
    res.send(fileList)
    console.log(fileList);
})

app.get("/file", (req, res)=>{
    const fileName = req.query.id;

    for( let i = 0; i < 3; i++) {
        if(i == fileName - 1) {
            fs.readFile(`/home/abhisek/Desktop/FileServer/files/${fileName}.txt`, 'utf-8', (err, data) => {
                if(err) {
                    console.log(err);
                    return;
                    }
                    
                    res.json({
                        contents: data
                    })
            })
        }
    }
})


app.listen(3000, ()=> {
    console.log("Server running on port 3000");
})