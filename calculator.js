var http = require("http"),
    express = require("express"),
    app = express();


var opperations;


app.get("/", function(req,res){
  res.send("Hello. I'm a Calculator");
});

app.get("/:opp/:num1/:num2", function(req,res){
  
  opperations = {
    "add": function(a,b){return a+b;},
    "sub": function(a,b){return a-b;},
    "mult": function(a,b){return a*b;},
    "div": function(a,b){return a/b;}
  };



  var number1 = parseFloat(req.params.num1);
  var number2 = parseFloat(req.params.num2);
  var opp = req.params.opp;
  var answer = opperations[opp](number1, number2);

  // console.log(opp);
  // console.log(number1);
  // console.log(number2);
  // console.log(typeof opp);

  res.send("the Answer IS....." + answer);
  // //res.send(typeof opp);
  // res.send([true, 23]);
  

});

app.listen(3000, function(){
  console.log("localHost 3000 serving");
});



// Create a simple calculator app using Express.

//  /add/9/3, it should display 12
//  /sub/9/3, it should display 6
//  /mult/9/3, it should display 27
//  /div/9/3, it should display 3    

