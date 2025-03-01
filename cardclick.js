const button = document.getElementById("Fbtn");

button.addEventListener("click",function(event){
event.preventDefault
alert("Board Updated Successfully")
button.disabled = true
button.style.backgroundColor = "#a0a0a0";
button.style.cursor = "not-allowed";

// task value
let countElement = document.getElementById("taskCount");
let currentCount = parseInt(countElement.textContent, 10);

countElement.textContent = String(currentCount - 1).padStart(2, '0');

let UpperElement = document.getElementById("header-value");
let upperCount = parseInt(UpperElement.textContent, 10);

UpperElement.textContent = String(upperCount + 1).padStart(2, '0');
 
//  activity transfer
let title = document.getElementById('fix-title').innerText
let deadline = document.getElementById("fix-dead").innerText
const container =document.getElementById("history-log")
const paraghaph = document.createElement("p")
paraghaph.classList.add('log-item')
container.append(paraghaph);
let now = new Date();
paraghaph.innerText ="You have completed the task" + title+ now
return now.toLocaleString(); 


    
})


