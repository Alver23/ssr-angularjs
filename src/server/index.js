const express = require('express');
const path = require('path');
const app = express();
const server = require('http').createServer(app);
const port = 3000;

const viewPath = `${__dirname}/app/views`;

const static = path.join(__dirname, '../client/app');
console.log(static)

app.use('/static', express.static(static));


app.set('views', viewPath);
app.set('view engine', 'jade');

app.get('/', function (req, res) {
    res.render('index', { title: 'Hey!', message: 'Hello Man!' })
})

server.listen(port, () => console.log(`server started on port ${port}`));

