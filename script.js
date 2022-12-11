const userInput1=document.getElementById("input-1");
const userInput2=document.getElementById("input-2");
const operator=document.getElementById("input-3");
const result=document.getElementById("result");
const calculate=document.getElementById("calculate");
const resetValue=document.getElementById("reset");
const errorMessage=document.getElementById("error");


const calculateFunction=()=>{
    if(userInput1.value ==''){
       errorMessage.textContent="Please enter Number-1";
       errorMessage.style.color="red"
    }
    else if( userInput2.value==''){
        errorMessage.textContent="Please enter number-2";
        errorMessage.style.color="red"
    }
    else if ( operator.value=='') {
        errorMessage.textContent="Please enter an operator"
        errorMessage.style.color="red"
    }else  {
        let updatedInput1=Number(userInput1.value);
        let updatedInput2=Number(userInput2.value)
         if(operator.value=='+'){
            result.value=updatedInput1+updatedInput2;
            errorMessage.textContent='';
        }
        else if(operator.value=='-'){
            result.value=updatedInput1-updatedInput2;
            errorMessage.textContent='';
        }
        else if(operator.value=='*'){
            result.value=updatedInput1*updatedInput2;
            errorMessage.textContent='';
        }
        else if(operator.value=='/'){
            result.value=updatedInput1/updatedInput2;
            errorMessage.textContent='';
        }
        else if(operator.value=='%'){
            result.value=updatedInput1%updatedInput2;
            errorMessage.textContent='';
        }
        else{
        }
    }
}
calculate.addEventListener("click",calculateFunction);
const reset=()=>{
    userInput1.value='';
    userInput2.value='';
    operator.value='';
    result.value='';
    errorMessage.textContent=''
}
resetValue.addEventListener("click",reset);