const express = require('express');
const app = express();
const cors = require('cors')
const cookieParser = require('cookie-parser')

const LearnerRouter = require('./routes/LearnerRouter')

const {PORT} = process.env


app.use(cors({
  origin: "http://localhost:5173",
  preflightContinue: true,
  credentials: true
}))

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://localhost:5173");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//   res.header("Access-Control-Allow-Credentials", true);
//   next();
// });

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cookieParser())

app.use('/',LearnerRouter)

app.listen(PORT,() => {
  console.log(`Server is running on PORT ${PORT}`);
})