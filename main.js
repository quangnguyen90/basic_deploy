
const express = require('express')
const app = express()
const port = 3000
const duongDan = require('path')

app.use('/open', express.static(duongDan.join(__dirname, 'public')))
app.get('/', (req, res) => { 
    res.send('Hello World!')
})

app.get('/home', (req, res) => { 
    res.send('Home Page')
})


app.get('/login', (req, res) => { 
    res.sendFile(duongDan.join(__dirname, 'index.html'))
})

app.listen(port, () => { 
    console.log(`Example app listening at http://localhost:${port}`)
})
