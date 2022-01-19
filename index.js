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
    res.json({"ip_ip":ip})
})

app.listen(8000,console.log('server started'))
