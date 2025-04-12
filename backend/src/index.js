import express from "express";

const app = express();

app.use("/user", (req,res) => {
    res.send("user yeridir");
});


app.listen(5001, () => {
    console.log("server running in 5001");
});