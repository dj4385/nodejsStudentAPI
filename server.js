const express = require('express')
const body_parser = require('body-parser')
const config = require('./config/config')
const mongoose = require('mongoose')
const route = require('./routes/studentRoutes')
const userRoute = require('./routes/userRoutes')


const app = express();

app.use(body_parser.urlencoded({extended: true}))
app.use(body_parser.json());


app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})
//config files for database
// require('./routes/studentRoutes')(app)
app.use('/v1',route)
app.use('/v1/auth',userRoute)

mongoose.Promise = global.Promise;
mongoose.connect(config.mongodbURL, {useNewUrlParser: true}).then(()=>console.log("Successfully connected to DB")).catch(err=>{console.log(err); process.exit()})


app.get('/', (req, res)=>{
    res.status(200).json({"message":"Welcome to api"})
})

app.listen(config.serverPort, ()=> {
    console.log("server is listening...")
})