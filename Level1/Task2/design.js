function dis(val) { 
    document.getElementById("result").value += val 
} 

function myFunction(event) { 
    if (event.key == '0' || event.key == '1' 
        || event.key == '2' || event.key == '3' 
        || event.key == '4' || event.key == '5' 
        || event.key == '6' || event.key == '7' 
        || event.key == '8' || event.key == '9' 
        || event.key == '+' || event.key == '-' 
        || event.key == '*' || event.key == '/') 
        document.getElementById("result").value += event.key; 
} 

var cal = document.getElementById("calci"); 
cal.onkeyup = function (event) { 
    if (event.keyCode === 13) { 
        console.log("Enter"); 
        let x = document.getElementById("result").value 
        console.log(x); 
        solve(); 
    } 
} 
function solve() { 
    let x = document.getElementById("result").value 
    let y = math.evaluate(x)
    document.getElementById("result").value = y 
} 
function clr() { 
    document.getElementById("result").value = "" 
}
function del(){

  let u = document.getElementById("result").value
  let w =  u.slice(0,-1) 
  document.getElementById("result").value = w 
} 
function sqr(){
  let v =document.getElementById("result").value
  let r =Math.sqrt(v)
  document.getElementById("result").value = r 
}
function showalert(){
    var date =new Date();
    var time =date.toLocaleTimeString();
    alert("Hello User\nThe current time is : "+time+"\nRedirecting to calculator web page...");
}