const express = require('express');
const app = express();
const cors = require('cors')

const LearnerRouter = require('./routes/LearnerRouter')

const {PORT} = process.env

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/',LearnerRouter)


app.listen(PORT,() => {
  console.log(`Server is running on PORT ${PORT}`);
})