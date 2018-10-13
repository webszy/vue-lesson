const express=require("express")
const path=require("path")
const data=require("../json/dataForCart2.json")

const app=express()
let itemPath=path.resolve(__dirname,"../")

app.listen(3000,()=>{
  console.log("server onReady port is 3000")
});

//设置静态目录
app.use(express.static(itemPath));
//express设置跨域访问
app.all("*",(req,res,next)=>{
  res.header("Access-Control-Allow-Origin", "*");  
  res.header("Access-Control-Allow-Headers", "X-Requested-With");  
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
  res.header("X-Powered-By",' 3.2.1')  
  res.header("Content-Type", "application/json;charset=utf-8");  
  next();
});

app.get("/",(req,res)=>{
  res.sendFile(path.join(itemPath,'移动端购物车.html'));
});

app.get("/api/cart2",(req,res)=>{
  res.json(data);
});