import express from "express"
const  app=express()
app.get("/", (req, res) => {
    res.send("Server is running successfully!");
});

app.listen(8800,()=>{
    console.log("Connected to backend.")
})