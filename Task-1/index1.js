function validation(){
    if(isNaN(document.getElementById('num1').value) && document.getElementById('num2').value === "")
    {
        document.getElementById('isNum1').innerHTML = '*Do not enter other than integer'
        document.getElementById('isNum1').style.color = "red"
        document.getElementById('isNum2').style.color = "red"
        document.getElementById('isNum2').innerHTML = '*Enter Valid Number'
        document.getElementById('div1').innerHTML = "Nan";
        return false;
    }
    else if(isNaN(document.getElementById('num2').value) && document.getElementById('num1').value === "")
    {
        document.getElementById('isNum2').innerHTML = '*Do not enter other than integer'
        document.getElementById('isNum2').style.color = "red"
        document.getElementById('isNum1').style.color = "red"
        document.getElementById('isNum1').innerHTML = '*Enter Valid Number'
        document.getElementById('div1').innerHTML = "Nan";
        return false;
    }
    else if(document.getElementById('num1').value === "" && document.getElementById('num2').value === "") {
        document.getElementById('isNum1').innerHTML = '*Enter Valid Number'
        document.getElementById('isNum1').style.color = "red"
        document.getElementById('isNum2').innerHTML = '*Enter Valid Number'
        document.getElementById('isNum2').style.color = "red"
        document.getElementById('div1').innerHTML = "Nan";
        return false;
    }
    else if (document.getElementById('num1').value === "") {
        document.getElementById('isNum1').innerHTML = '*Enter Valid Number'
        document.getElementById('isNum1').style.color = "red"
        document.getElementById('isNum2').innerHTML = ""
        document.getElementById('div1').innerHTML = "Nan";
        return false;
    }
    else if (document.getElementById('num2').value === "") {
        document.getElementById('isNum2').innerHTML = '*Enter Valid Number'
        document.getElementById('isNum2').style.color = "red"
        document.getElementById('isNum1').innerHTML = ""
        document.getElementById('div1').innerHTML = "Nan";
        return false;
    }
    
    else if (isNaN(document.getElementById('num1').value) && isNaN(document.getElementById('num2').value)) {
        document.getElementById('isNum1').innerHTML = '*Do not enter other than integer'
        document.getElementById('isNum1').style.color = "red"
        document.getElementById('isNum2').innerHTML = '*Do not enter other than integer'
        document.getElementById('isNum2').style.color = "red"
        document.getElementById('div1').innerHTML = "Nan";
        return false;
    }
    else if (isNaN(document.getElementById('num1').value)) {
        document.getElementById('isNum1').innerHTML = '*Do not enter other than integer'
        document.getElementById('isNum1').style.color = "red"
        document.getElementById('isNum2').innerHTML = ""
        document.getElementById('div1').innerHTML = "Nan";
        return false;
    }
    else if (isNaN(document.getElementById('num2').value)) {
        document.getElementById('isNum2').innerHTML = '*Do not enter other than integer'
        document.getElementById('isNum2').style.color = "red"
        document.getElementById('isNum1').innerHTML = ""
        document.getElementById('div1').innerHTML = "Nan";
        return false;
    }
    else
    {
        return true;
    }
}

function Add() {
    if(validation() === true)
    {
        let a = parseInt(document.getElementById('num1').value)
        let b = parseInt(document.getElementById('num2').value)
        console.log(a + b)
        var add = a + b
        document.getElementById('div1').innerHTML = add;
        document.getElementById('isNum1').innerHTML = ''
        document.getElementById('isNum2').innerHTML = ''
    }
}

function Sub() {
    if(validation() === true)
    {
        let a = parseInt(document.getElementById('num1').value)
        let b = parseInt(document.getElementById('num2').value)
        console.log(a - b)
        var sub = a - b
        document.getElementById('div1').innerHTML = sub;
        document.getElementById('isNum1').innerHTML = ''
        document.getElementById('isNum2').innerHTML = ''
    }
}

function Mul() {
    if(validation() === true)
    {
        let a = parseInt(document.getElementById('num1').value)
        let b = parseInt(document.getElementById('num2').value)
        console.log(a * b)
        var mul = a * b
        document.getElementById('div1').innerHTML = mul;
        document.getElementById('isNum1').innerHTML = ''
        document.getElementById('isNum2').innerHTML = ''
    }
}

function Div() {
    if(validation() === true)
    {
        let a = parseInt(document.getElementById('num1').value)
        let b = parseInt(document.getElementById('num2').value)
        console.log(a / b)
        var div = a / b
        document.getElementById('div1').innerHTML = div;
        document.getElementById('isNum1').innerHTML = ''
        document.getElementById('isNum2').innerHTML = ''
    }
}

function Mod() {
    if(validation() === true)
    {
        let a = parseInt(document.getElementById('num1').value)
        let b = parseInt(document.getElementById('num2').value)
        console.log(a % b)
        var mod = a % b
        document.getElementById('div1').innerHTML = mod;
        document.getElementById('isNum1').innerHTML = ''
        document.getElementById('isNum2').innerHTML = ''
    }
}