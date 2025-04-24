const express = require("express");
const connectMongo = require("./src/config");
const userRouter = require("./src/routes/user.router");

const app = express();


const port = "3000";

app.use(express.json());
app.use("/api", userRouter)

app.get("/", (req, res)=>{
    return res.status(200).send({status : true, message : `server is running on port ${port}`})
})

app.listen(port, () => {
    connectMongo();
  console.log(`server is at  ${port}`);
});