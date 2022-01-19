const app=require('express')()
const cors=require('cors')
const requestIp = require('request-ip');
app.use(cors())
app.get("/",(req,res)=>{
    res.json({"sid":"hello world"})
})
app.get("/check/api",(req,res)=>{
    res.json({"ip":req.socket.remoteAddress})
})

app.get("/check/ip",(req,res)=>{
    const ip=requestIp.getClientIp(req)
    console.log(`ip address: ${ip}`)
    res.send(ip)
})

app.listen(process.env.PORT || 8081,console.log('server started'))
