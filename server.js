const express = require('express') // bring in express
const app = express() // set up the server application
const morgan = require('morgan')

// middleware using pre built middleware
app.use(morgan('dev'))

// custom middleware
app.use((req, res, next) =>{
    console.log('I am the middleware hear me roar....')
    if(Object.keys(req.params).length > 0){
        console.log('I got params')
    }
    next()
})


app.get('/' /* this is for the root route */ , (req,res) => {
   console.log(req)
   res.send('Hello World')
})
// About route

app.get('/about', (req, res) =>{
    res.send('About Page')
})

app.get('/contact', (req, res) => {
    console.log(req)
    res.send('Contact')
})

app.get('/:itemNumber', (req, res) => {
    console.log(req.params.itemNumber)
    req.params.itemNumber = parseInt(req.params.itemNumber, 10)
    if(req.params.itemNumber === req.params.itemNumber){
        console.log('i got a number')
        res.send(`<h1>Hello thanksfor the item ${req.params.itemNumber}</h1>`)
    } else {
        res.send('didn\'t get a number')
    }
    
})

app.listen(3000, () => {
    console.log('Everything is gravy...')
})