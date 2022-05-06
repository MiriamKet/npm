

const express =require('express')
const app = express()

append.set('port',4000)
app.get('/',(req,res)=>{
    res.send('holaphoo')
})

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'templates/prueba.html'))

})


app,liten(app.get('port'),() =>{
    console.log("servidor en el puerto",app.get('port'));
})