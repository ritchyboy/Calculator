const express=require("express");
const app=express();
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
//res.sendFile("C:\\Users\\Ritch\\Desktop\\The Web Dev bootcamps(Angela)\\Calculator\\index.html")//;
res.sendFile(__dirname+"/index.html");
});
app.post("/",function(req,res){
    let num1=parseInt(req.body.num1);// Could cast (Number)//
    let num2=parseInt(req.body.num2);// Could cast (Number)//
    let result=num1+num2;
    res.send("the result of the calculation is "+result);
});
app.get("/bmiCalculator",function(req,res){
res.sendFile(__dirname+"/bmiCalculator.html");
});
app.post("/bmiCalculator",function(req,res){
    let height=parseFloat(req.body.height);// Could cast (Number)//
    let weight=parseFloat(req.body.weight);// Could cast (Number)//
    let bmiResult=(weight)/(height*height);
    res.send("the result of the Bmi calculator is "+bmiResult);
});
app.listen(3000);
console.log("The server is running on port 3000");
