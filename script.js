let operand1 ='';
let operand2 ='';
let operator ='';
function cleanFunction(){
    operand1 = '';
    operand2 = '';
    operator = '';
    document.getElementById("display").innerText = '0';
}
function currentDisplay () {
    document.getElementById("display").innerText = operand1 + operator  + operand2;
}
function digitsFunction (num) {
    if(operand1.length>10) {
        document.getElementById("display").style.fontSize= "1rem";
    }
    
    console.log("typed", num)
    if(operand1 === '' || operator === '' ){
        operand1 = operand1 + num;
    console.log("operand1", operand1)
    currentDisplay();
        return;
    }
    operand2 = operand2 + num
    console.log("operand2", operand2);
    currentDisplay()
}
function controlsFunction (operatorInput) {
    if(operand1!='' && operand2==''){
    operator = operatorInput;  
     currentDisplay();
    }
    else if(operand1!='' && operand2!=''){
     let op1Int= evaluateFunction();
     operand1 = op1Int.toString();
    }
}
function evaluateFunction () {
    if(operand1 !== '' && operand2 !== '' && operator !== ''){
        let parsedOperand1 = parseFloat(operand1);
        let parsedOperand2 = parseFloat(operand2);
        let finalAnswer = eval(parsedOperand1 + operator + parsedOperand2);
        document.getElementById("display").innerText = finalAnswer;
        operand1 = '';
        operand2 = '';
        operator = '';
        console.log("answer", finalAnswer);
        return finalAnswer;
    }
}
function rootFunction(){
    
    let n= parseFloat(operand1);
    if(operand1!='')
    {
        let finalAnswer = Math.sqrt(n).toFixed(5);
        document.getElementById("display").innerText = finalAnswer;
        operand1 = finalAnswer.toString();
    }
}
function backFunction(){
    if(operand1 == '' && operator == '' && operand2 == ''){
       document.getElementById("display").innerText = '0';
       return;
    }
    else if(operand1 != '' && operator=='' && operand2 ==''){
       operand1 = operand1.slice(0,operand1.length-1);
       if(operand1==''){ document.getElementById("display").innerText = '0';
    return;}
   }
   else if(operand1 != '' && operator != ''&& operand2 == ''){
       operator ='';
    }
    else{
         operand2 = operand2.slice(0,operand2.length-1);
    }
    currentDisplay();
}
function zeroAddFunction(){
    if(operand1!='' && operator=='' ){
        operand1 += '0';
        currentDisplay();
    }
    else if(operand1!='' && operator!='' && operand2!='' ){
         operand2 += '0';
        currentDisplay();
    }
}
function negetiveAddFunction(){
     if(operator=='' && operand1!='0'){
        operand1 = -operand1;
        currentDisplay();
    }
    else if(operand1!='' && operator!=''){
         operand2 = -operand2;
        currentDisplay();
    }
}
function dotAddFunction(){
 if(operator=='' && operand1.indexOf('.')==-1 ){
   operand1 += '.';
   currentDisplay();
 }
 if(operator!='' && operand2.indexOf('.')==-1 ){
   operand2 += '.';
   currentDisplay();
 }
}