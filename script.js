let screen = document.getElementById("screen");
let historyDiv = document.getElementById("history");
let angleMode = "DEG";

const sound = new Audio("sound.mp3");

function playSound(){
  sound.currentTime = 0;
  sound.play();
}

function append(val){
  playSound();
  screen.value += val;
}

function clearAll(){
  playSound();
  screen.value = "";
}

function del(){
  playSound();
  screen.value = screen.value.slice(0,-1);
}

function toggleAngle(){
  angleMode = angleMode === "DEG" ? "RAD" : "DEG";
  event.target.innerText = angleMode;
}

function func(type){
  playSound();
  screen.value += type + "(";
}

function calculate(){
  try{
    let expr = screen.value;

    if(angleMode === "DEG"){
      expr = expr.replace(/sin\((.*?)\)/g, (_,x)=>`Math.sin(${x} * Math.PI/180)`);
      expr = expr.replace(/cos\((.*?)\)/g, (_,x)=>`Math.cos(${x} * Math.PI/180)`);
      expr = expr.replace(/tan\((.*?)\)/g, (_,x)=>`Math.tan(${x} * Math.PI/180)`);
    } else {
      expr = expr.replace(/sin/g,"Math.sin")
                 .replace(/cos/g,"Math.cos")
                 .replace(/tan/g,"Math.tan");
    }

    let result = eval(expr);

    addHistory(screen.value, result);

    screen.value = result;

  } catch {
    screen.value = "Error";
  }
}

function addHistory(exp, res){
  let div = document.createElement("div");
  div.textContent = `${exp} = ${res}`;
  historyDiv.prepend(div);
}

/* THEME SWITCH */
document.getElementById("theme").addEventListener("change", (e)=>{
  document.body.className = e.target.value;
});
