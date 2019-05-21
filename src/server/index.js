const express = require('express');
const path = require('path');
const app = express();
const server = require('http').createServer(app);
const port = 3000;

app.use('/static', express.static(path.join(__dirname, '../client/app')));


app.set('views', `${__dirname}/app/views`);
app.set('view engine', 'jade');

app.get('/', function (req, res) {
    res.render('index', { title: 'Hey!', message: 'Hello Man!' })
})

server.listen(port, () => console.log(`server started on port ${port}`));

