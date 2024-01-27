const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const userRoutes = require("./routes/userRoutes")
const messageRoutes = require("./routes/messagesRoute")

const app = express();
require("dotenv").config()

app.use(cors());
app.use(express.json());

app.use("/api/auth", userRoutes);
app.use("/api/messages", messageRoutes);

mongoose.connect(process.env.MONGO_URL,{
    // useNewUrlParser : true,
    // useUnifiedTopology: true,
}).then(()=>{
    console.log('MongoDB Connected')
}).catch((err) =>{
    console.log(err.message)
});

const server = app.listen(process.env.PORT, () =>{
    console.log(`Server started on Port ${process.env.PORT}`)
})
