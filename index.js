var app = require('express')()
var server = require('http').createServer(app)

app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

var io = require('socket.io')(server)
io.on('connection', function () {

})

app.get('/', function (req, res) {
  res.render('index', { name: 'John' })
})

var port = process.env.PORT || 3000
server.listen(port)
