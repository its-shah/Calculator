let output = document.getElementById("inputData");

function calculate(number){
    output.value += number;
}

function clr(){
    output.value = "";
}

function del(){
    output.value = output.value.slice(0, -1);
}

function result(){
    try{
        output.value = eval(output.value);
    }
    catch(err){
        alert("Enter the valid input");
    }
}