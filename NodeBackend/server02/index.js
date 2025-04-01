const express = require ('express')
const app = express()
const port = 3001



app.get('/server',(req, res)=>{
    res.json({
        server: "Port 3001",
        type: "Node"
    })
})


app.post('/healthy', (req, res) =>{
    console.log(req.headers["authorization"])
    res.send({
        msg: "sever is running healthy"

    })
})

app.listen(port, ()=>{
    console.log(`new server on port ${port}`)
})