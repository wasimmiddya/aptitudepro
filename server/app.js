const express = require('express');
const app = express();
const cors = require('cors')
const cookieParser = require('cookie-parser')

const LearnerRouter = require('./routes/LearnerRouter')
const examRouter = require('./routes/examRouter')

const {PORT} = process.env


app.use(cors({
  origin: "http://localhost:5173",
  preflightContinue: true,
  credentials: true
}))

app.use(express.static('views'))

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cookieParser())

app.use('/',LearnerRouter)
app.use('/exam', examRouter)

app.listen(PORT,() => {
  console.log(`Server is running on PORT ${PORT}`);
})