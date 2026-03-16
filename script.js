let display = document.getElementById("display");

function press(num){
display.value += num;
}

function calculate(){
display.value = eval(display.value);
}

function clearDisplay(){
display.value = "";
}

function scientific(func){

let value = parseFloat(display.value);

if(func === "sin"){
display.value = Math.sin(value);
}

if(func === "cos"){
display.value = Math.cos(value);
}

if(func === "tan"){
display.value = Math.tan(value);
}

}