
const express = require('express')
const app = express()
// const port = 3000
const path = require('path')

app.use('/public', express.static(path.join(__dirname, '/public')))

app.get('/', (req, res) => {
    var duongDanFile = path.join(__dirname, 'home.html')
  res.sendFile(duongDanFile)
})

app.listen(process.env.PORT, function(){

})