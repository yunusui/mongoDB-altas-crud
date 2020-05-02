let express = require('express');
let bodyparser = require('body-parser');
let mongoose = require('mongoose')
let cors = require('cors')
let app = express();
let route = require('./route/routes');

//mongoose.connect('mongodb://localhost:27017/shopping1');

// mongo altas connections
    // 1. create cluster
    // 2. create user
    // 3. set whitelist IP Address

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://yunus:yunus123@cluster0-jii8m.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
mongoose.connection.on('connected', (req, res) => {
    console.log('mongoose connected !!!')
})
// mongo altas connections END

// optional 
mongoose.connection.on('connected', () => {
    console.log('mongodb connected')
})
mongoose.connection.on('error', (err) => {
    console.log(err)
})
app.get('/', (req, res) => {
    res.send('server started on 8001')
})
// optional 

app.use(cors());
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))

app.use('/api', route, (req, res) => {
    res.send('conneted to api url')
})

app.listen(8001)
console.log('server runninng on 8001')