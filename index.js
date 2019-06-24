const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')
// const session = require('express-session')



const app = express();
const port = 3000

app.use(bodyParser.json())

app.get('/api/friends', 
function(req,res,next){
    console.log('hello this worked 2')
    res.send('Hi friends').status(200)
}
)

app.get('/api/swapi1',(req,res,next)=>{

    axios.get('https://swapi.co/api/people/1/').then((response)=>{
        console.log(response.data)
        res.send(response.data).status(200)
    }).catch((err)=>{console.log(err)})

})
// app.get('/api/swapi/:ID',(req,res,next)=>{

//     axios.get('https://swapi.co/api/people/1/').then((response)=>{
//         console.log(req.params.ID)
//         res.send(req.params.ID).status(200)
//     }).catch((err)=>{console.log(err)})

// })
app.get('/api/swapi/:ID/:another',(req,res,next)=>{

    axios.get('https://swapi.co/api/people/1/').then((response)=>{
        let luke = response
        res.send(req.params).status(200)
        console.log(req.params)
    }).catch((err)=>{console.log(err)})

})


app.get('/api/swapi/:ID/',(req,res,next)=>{
    axios.get(`https://swapi.co/api/people/${req.params.ID}/`).then((response)=>{
        console.log(response.data)
        res.send(response.data).status(200)
    }).catch((err)=>{console.log(err)})

})


app.listen(port, () => { console.log(`Server listening on port ${port}`) })