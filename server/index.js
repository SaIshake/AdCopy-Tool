const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const authRoute = require("./routes/auth.js")
const adRoute = require("./routes/ad.js")



const app = express();
dotenv.config();
//middlewares
app.use(cors({credentials: true, origin: "http://localhost:5173"}))

app.use(cookieParser())
app.use(express.json());

const uri = "mongodb://ishake:aizakku34@ac-axmthjh-shard-00-00.tqjsykv.mongodb.net:27017,ac-axmthjh-shard-00-01.tqjsykv.mongodb.net:27017,ac-axmthjh-shard-00-02.tqjsykv.mongodb.net:27017/?ssl=true&replicaSet=atlas-em0rjw-shard-0&authSource=admin&retryWrites=true&w=majority";
mongoose.connect(uri)
.then(() => {
    app.listen(4000, ()=>{
        console.log("c to 4000 And c To MongoDB")
    })
}
)
.catch((error) => console.error(error));


app.use("/auth", authRoute)
app.use("/ad", adRoute)




app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});



