const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// your code goes here
app.set('views', './views');
app.set('view engine', 'ejs');
app.get('/',(req,res)=>{
    res.render("form.ejs");
})
let responses = {
    invalid: {
      status: "Error",
      message: "Invalid Data Types",
      result: "NAN",
    },
    overflow: {
      status: "Failure",
      message: "OverFlow",
      result: "NAN",
    },
    underflow: {
      status: "Failure",
      message: "UnderFlow",
      result: "NAN",
    },
    success: {
      status: "Success",
      message: "The operation of given numbers",
      result: "",
    },
  };
app.post("/add",(req,res)=>{
    console.log(req.body);
    let {num1,num2}=req.body;
    if(num1==""||num2=="")
    {
        res.json(responses.invalid)
    }else {
        num1 = Number(num1);
        num2 = Number(num2);
        if (isNaN(num1) || isNaN(num2)) {
          res.json(responses.invalid);
        } else if (num1 > 1000000 || num2 > 100000) {
          res.json(responses.overflow);
        } else if (num1 < -1000000 || num2 < -100000) {
          res.json(responses.underflow);
        } else {
          responses.success.message = "The addition of Given Numbers";
          responses.success.result = num1 + num2;
          res.json(responses.success);
        }
      }
})
app.post("/Sub", (req, res) => {
    let { num1, num2 } = req.body;
    if (num1 === "" || num2 === "") {
      res.json(responses.invalid);
    } else {
      num1 = Number(num1);
      num2 = Number(num2);
      if (isNaN(num1) || isNaN(num2)) {
        res.json(responses.invalid);
      } else if (num1 > 1000000 || num2 > 100000) {
        res.json(responses.overflow);
      } else if (num1 < -1000000 || num2 < -100000) {
        res.json(responses.underflow);
      } else {
        responses.success.message = "The subtraction of Given Numbers";
        responses.success.result = num1 - num2;
        res.json(responses.success);
      }
    }
  });
  
  app.post("/mul", (req, res) => {
    let { num1, num2 } = req.body;
    if (num1 === "" || num2 === "") {
      res.json(responses.invalid);
    } else {
      num1 = Number(num1);
      num2 = Number(num2);
      if (isNaN(num1) || isNaN(num2)) {
        res.json(responses.invalid);
      } else if (num1 > 1000000 || num2 > 100000) {
        res.json(responses.overflow);
      } else if (num1 < -1000000 || num2 < -100000) {
        res.json(responses.underflow);
      } else {
        responses.success.message = "The multiplication of Given Numbers";
        responses.success.result = num1 * num2;
        res.json(responses.success);
      }
    }
  });
  
  app.post("/div", (req, res) => {
    let { num1, num2 } = req.body;
    if (num1 === "" || num2 === "") {
      res.json(responses.invalid);
    } else {
      num1 = Number(num1);
      num2 = Number(num2);
      if (isNaN(num1) || isNaN(num2)) {
        res.json(responses.invalid);
      } else if (num1 > 1000000 || num2 > 100000) {
        res.json(responses.overflow);
      } else if (num1 < -1000000 || num2 < -100000) {
        res.json(responses.underflow);
      } else if (num2 === 0) {
        res.json({
          status: "error",
          message: "cannot divide by zero",
          result: "NAN",
        });
      } else {
        responses.success.message = "The division of Given Numbers";
        responses.success.result = num1 / num2;
        res.json(responses.success);
      }
    }
  });


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;