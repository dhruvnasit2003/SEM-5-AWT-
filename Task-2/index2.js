function validation(){
    if(isNaN(document.getElementById('num1').value) && document.getElementById('num2').value === "")
    {
        document.getElementById('isNum1').innerHTML = '*Do not enter other than integer'
        document.getElementById('isNum1').style.color = "red"
        document.getElementById('isNum2').style.color = "red"
        document.getElementById('isNum2').innerHTML = '*Please enter the number'
        document.getElementById('div1').innerHTML = "undefined";
        return false;
    }
    else if(isNaN(document.getElementById('num2').value) && document.getElementById('num1').value === "")
    {
        document.getElementById('isNum2').innerHTML = '*Do not enter other than integer'
        document.getElementById('isNum2').style.color = "red"
        document.getElementById('isNum1').style.color = "red"
        document.getElementById('isNum1').innerHTML = '*Please enter the number'
        document.getElementById('div1').innerHTML = "undefined";
        return false;
    }
    else if(document.getElementById('num1').value === "" && document.getElementById('num2').value === "") {
        document.getElementById('isNum1').innerHTML = '*Please enter the number'
        document.getElementById('isNum1').style.color = "red"
        document.getElementById('isNum2').innerHTML = '*Please enter the number'
        document.getElementById('isNum2').style.color = "red"
        document.getElementById('div1').innerHTML = "undefined";
        return false;
    }
    else if (document.getElementById('num1').value === "") {
        document.getElementById('isNum1').innerHTML = '*Please enter the number'
        document.getElementById('isNum1').style.color = "red"
        document.getElementById('isNum2').innerHTML = ""
        document.getElementById('div1').innerHTML = "undefined";
        return false;
    }
    else if (document.getElementById('num2').value === "") {
        document.getElementById('isNum2').innerHTML = '*Please enter the number'
        document.getElementById('isNum2').style.color = "red"
        document.getElementById('isNum1').innerHTML = ""
        document.getElementById('div1').innerHTML = "undefined";
        return false;
    }
    
    else if (isNaN(document.getElementById('num1').value) && isNaN(document.getElementById('num2').value)) {
        document.getElementById('isNum1').innerHTML = '*Do not enter other than integer'
        document.getElementById('isNum1').style.color = "red"
        document.getElementById('isNum2').innerHTML = '*Do not enter other than integer'
        document.getElementById('isNum2').style.color = "red"
        document.getElementById('div1').innerHTML = "undefined";
        return false;
    }
    else if (isNaN(document.getElementById('num1').value)) {
        document.getElementById('isNum1').innerHTML = '*Do not enter other than integer'
        document.getElementById('isNum1').style.color = "red"
        document.getElementById('isNum2').innerHTML = ""
        document.getElementById('div1').innerHTML = "undefined";
        return false;
    }
    else if (isNaN(document.getElementById('num2').value)) {
        document.getElementById('isNum2').innerHTML = '*Do not enter other than integer'
        document.getElementById('isNum2').style.color = "red"
        document.getElementById('isNum1').innerHTML = ""
        document.getElementById('div1').innerHTML = "undefined";
        return false;
    }
    else
    {
        return true;
    }
}

function Addition() {
    if(validation() === true)
    {
        let a = parseInt(document.getElementById('num1').value)
        let b = parseInt(document.getElementById('num2').value)
        console.log(a + b)
        var add = (a + b).toFixed(2)
        document.getElementById('ADDITION').innerHTML = add;
        document.getElementById('isNum1').innerHTML = ''
        document.getElementById('isNum2').innerHTML = ''
    }
}
function Subtraction() {
    if(validation() === true)
    {
        let a = parseInt(document.getElementById('num1').value)
        let b = parseInt(document.getElementById('num2').value)
        console.log(a - b)
        var sub = (a - b).toFixed(2)
        document.getElementById('SUBTRACTION').innerHTML = sub;
        document.getElementById('isNum1').innerHTML = ''
        document.getElementById('isNum2').innerHTML = ''
    }
}

function Multiplication() {
    if(validation() === true)
    {
        let a = parseInt(document.getElementById('num1').value)
        let b = parseInt(document.getElementById('num2').value)
        console.log(a * b)
        let mul = (a*b).toFixed(2)
        document.getElementById('MULTIPLICATION').innerHTML = mul;
        document.getElementById('isNum1').innerHTML = ''
        document.getElementById('isNum2').innerHTML = ''
    }
}

function Division() {
    if(validation() === true)
    {
        let a = parseInt(document.getElementById('num1').value)
        let b = parseInt(document.getElementById('num2').value)
        console.log(a / b)
        var div = (a/b).toFixed(2)
        document.getElementById('DIVISION').innerHTML = div;
        document.getElementById('isNum1').innerHTML = ''
        document.getElementById('isNum2').innerHTML = ''
    }
}

function Modulus() {
    if(validation() === true)
    {
        let a = parseInt(document.getElementById('num1').value)
        let b = parseInt(document.getElementById('num2').value)
        console.log(a % b)
        var mod = (a % b).toFixed(2)
        document.getElementById('MODULUS').innerHTML = mod;
        document.getElementById('isNum1').innerHTML = ''
        document.getElementById('isNum2').innerHTML = ''
    }
}

function awake()
{
    Addition()
    Subtraction()
    Multiplication()
    Division()
    Modulus()
}