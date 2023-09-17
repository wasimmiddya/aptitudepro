const express = require('express');
const app = express();
const cors = require('cors')

const signupRouter = require('./routes/Signup')

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/',signupRouter)


app.listen(process.env.PORT,() => {
  console.log('Server is running at http://localhost:3300');
})