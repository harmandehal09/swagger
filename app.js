const express = require('express');
var cors = require('cors')
const app = express(); 
const port = 8083;

app.use(cors({
    origin: '*'
}))

const { swaggerServe, swaggerSetup } = require('./config')
  
app.get("/",(res,resp)=>{ 
    console.log("here")
    resp.send('results'); 
});

app.use("/api-docs", cors(), swaggerServe, swaggerSetup); 

app.listen(port,()=>{
    console.log(`App is listening at http://localhost:${port}`);
})
 

 