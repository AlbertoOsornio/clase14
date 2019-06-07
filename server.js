const express = require('express')
const app = express()
const port = 3000
let response = ""

app.get('/',handlerGET)
app.post('/',handlerPOST)
app.head('/',handlerHEAD)
app.delete('/',handlerPOST)



app.listen(port, function () { 
console.log(`Example app listening on port ${port}!`)
})


function handlerGET(req,res){
    res.send('Contestando una peticion por metodo GET')
}


function handlerPOST(req,res){
    response.send('Contestando una peticion por metodo POST')
}


function handlerHEAD(req,res){
    response.send('Contestando una peticion por metodo UPDATE')
}

function handlerDelete(req,res){
    response.send('Contestando una peticion por metodo DELETE')
}