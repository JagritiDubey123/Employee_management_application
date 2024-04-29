// const express = require('express')
// const bodyParser = require('body-parser');
// const routes = require('./routes')
// var cors = require('cors')

// const app = express();

// app.use(cors())



// app.set("view engine", 'ejs')

// app.set('views', 'views')

// app.use(bodyParser.urlencoded({ extended: false }))

// app.use('/', routes)


// app.listen(5000, ()=>console.log('Server is listening on port 5000'))    

const express = require('express')
const bodyParser = require('body-parser');
const routes = require('./routes')
const https = require('https');
const fs = require('fs');
var cors = require('cors')


const app = express();


app.use(cors())

app.set("view engine", 'ejs')

app.set('views', 'views')

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', routes)

const options = {
    key: fs.readFileSync('/etc/ssl/private/server.key'),
    cert: fs.readFileSync('/etc/ssl/private/server_utf8.crt'),
    passphrase: 'jagriti@123'
};

const server = https.createServer(options,app);

const PORT = 5000;
server.listen(PORT, () => {
    console.log('server is running on port ${PORT}');
});


