
let para = document.createElement("p");
para.id = "description";
para.innerHTML = "This is a task for creating a Calculator using DOM manipulation";
document.getElementsByTagName("body")[0].appendChild(para);

let H1 = document.createElement("h1")
H1.id = "title";
H1.innerHTML = "0";
document.getElementsByTagName("body")[0].appendChild(H1)

let div = document.createElement("div");
div.className = "calculator-grid";
div.id = "cal";
document.getElementsByTagName("body")[0].appendChild(div);


var innerDiv = document.createElement("div");
innerDiv.className = "output";
div.appendChild(innerDiv);

var input = document.createElement("input");
input.className = "inp";
input.id = "result";
input.value = "0";
innerDiv.appendChild(input);

var btn = document.createElement("button");
btn.className = "clear"
btn.id = "clear";
btn.textContent = "C";
div.appendChild(btn);

var btn = document.createElement("button");
btn.id = "back";
btn.value = "←";
btn.textContent = "←";
div.appendChild(btn);

var btn = document.createElement("button");
btn.id = ".";
btn.className = "operator";
btn.value = ".";
btn.textContent = ".";
div.appendChild(btn);

var btn = document.createElement("button");
btn.id = "*";
btn.className = "operator";
btn.value = "*";
btn.textContent = "*";
div.appendChild(btn);

var btn = document.createElement("button");
btn.id = "7";
btn.value = "7";
btn.textContent = "7";
div.appendChild(btn);

var btn = document.createElement("button");
btn.id = "8";
btn.value = "8";
btn.textContent = "8";
div.appendChild(btn);

var btn = document.createElement("button");
btn.id = "9";
btn.value = "9";
btn.textContent = "9";
div.appendChild(btn);

var btn = document.createElement("button");
btn.id = "/";
btn.className = "operator";
btn.value = "/";
btn.textContent = "/";
div.appendChild(btn);

var btn = document.createElement("button");
btn.id = "4";
btn.value = "4";
btn.textContent = "4";
div.appendChild(btn);

var btn = document.createElement("button");
btn.id = "5";
btn.value = "5";
btn.textContent = "5";
div.appendChild(btn)

var btn = document.createElement("button");
btn.id = "6";
btn.value = "6";
btn.textContent = "6";
div.appendChild(btn);

var btn = document.createElement("button");
btn.id = "subtract";
btn.className = "operator";
btn.value = "-";
btn.textContent = "-";
div.appendChild(btn);

var btn = document.createElement("button");
btn.id = "1";
btn.value = "1";
btn.textContent = "1";
div.appendChild(btn);

var btn = document.createElement("button");
btn.id = "2";
btn.value = "2";
btn.textContent = "2";
div.appendChild(btn);

var btn = document.createElement("button");
btn.id = "3";
btn.value = "3";
btn.textContent = "3";
div.appendChild(btn);

var btn = document.createElement("button");
btn.id = "add";
btn.className = "operator";
btn.value = "+";
btn.textContent = "+";
div.appendChild(btn);

var btn = document.createElement("button");
btn.id = "0";
btn.value = "0";
btn.textContent = "0";
div.appendChild(btn);

var btn = document.createElement("button");
btn.id = "00";
btn.value = "00";
btn.textContent = "00";
div.appendChild(btn);

var btn = document.createElement("button");
btn.className = "span-two";
btn.id = "equal";
btn.textContent = "=";
div.appendChild(btn);


document.getElementById("clear").onclick = function () { clear() }
function clear()
{
document.getElementById("result").value = ""
}


document.getElementById("back").onclick = function () {back()}
function back() {
    var value = document.getElementById("result").value;
    document.getElementById("result").value = value.substr(0, value.length - 1);
}

document.getElementById("equal").onclick = function () { equal() };

function equal() {
    let x = document.getElementById("result").value;
    let y = eval(x);
    document.getElementById("result").value = y;
}

document.getElementById(".").onclick = function () { dis('.')}
document.getElementById("*").onclick = function () { dis('*')}
document.getElementById("7").onclick = function () { dis('7')}
document.getElementById("8").onclick = function () { dis('8')}
document.getElementById("9").onclick = function () { dis('9')}
document.getElementById("/").onclick = function () { dis('/')}
document.getElementById("4").onclick = function () { dis('4')}
document.getElementById("5").onclick = function () { dis('5')}
document.getElementById("6").onclick = function () { dis('6')}
document.getElementById("subtract").onclick = function () { dis('-')}
document.getElementById("1").onclick = function () { dis('1')}
document.getElementById("2").onclick = function () { dis('2')}
document.getElementById("3").onclick = function () { dis('3')}
document.getElementById("add").onclick = function () { dis('+')}
document.getElementById("0").onclick = function () { dis('0')}
document.getElementById("00").onclick = function () { dis('00')}



function dis(val) {
    document.getElementById("result").value += val
}
