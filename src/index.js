const express =require('express');
const app =express();

app.get('/test',(req,res)=>{
 res.json({
     message:'test',
     app
 })
})
app.listen(3333,()=>{
    console.log('已经开启');
})