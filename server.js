const express = require('express')
const app = express()
const port = 3000
let response = ""

app.get('/',handlerGET)
app.post('/',handlerGET)
//app.update('/',handlerGET)
//app.delete('/',handlerGET)



app.listen(port, function () { 
console.log(`Example app listening on port ${port}!`)
})


function handlerGET(req,res){
    res.send('Contestando una peticion por metodo GET')
}


function handlerPOST(req,res){
    response.send('Contestando una peticion por metodo POST')
}


function handlerUPDATE(req,res){
    response.send('Contestando una peticion por metodo UPDATE')
}

function handlerDelete(req,res){
    response.send('Contestando una peticion por metodo DELETE')
}