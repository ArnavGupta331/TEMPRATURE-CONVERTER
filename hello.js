
const tempinput=document.getElementById("tempinput");
const radio1=document.getElementById("radio1");
const radio2=document.getElementById("radio2");
const button=document.getElementById("button");
const result=document.getElementById("result");
let temp;



function convert(){
    if(radio1.checked){
     temp=Number(tempinput.value);
     temp=(temp*9/5)+32;
     result.textContent=temp.toFixed(1)+`°F`;
    }
    else if(radio2.checked){
        temp=Number(tempinput.value);
        temp=(temp-32)*(5/9);
        result.textContent=temp.toFixed(1)+`°C`;
    }
    else{
        result.textContent=`PLEASE SELECT A VALUE`;
    }
    
}