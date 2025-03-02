const allButton = document.querySelectorAll("#Fbtn")

for (let button of allButton){
    button.addEventListener("click",function(){

        button.disabled = true
        button.style.backgroundColor = "#a0a0a0";
        alert("Board Updated Successfully")
        let countElement = document.getElementById("taskCount");
        let currentCount = parseInt(countElement.textContent, 10);
        countElement.textContent = String(currentCount - 1);
        let UpperElement = document.getElementById("header-value");
        let upperCount = parseInt(UpperElement.textContent, 10);
        UpperElement.textContent = String(upperCount + 1);
        let title = document.querySelector("h4")
        let container = document.getElementById("history-log");
        let paragraph = document.createElement("p");
        paragraph.classList.add("log-item");
        let now = new Date().toLocaleTimeString();
        paragraph.innerText = `You have completed the task at ${title.innerText} ${now}`;
        container.append(paragraph);
        let clear = document.getElementById("clear-btn");
        clear.addEventListener("click", function () {
        paragraph.remove()})
        
    })
   
}

const newPage = document.getElementById("connect-page")
newPage.addEventListener("click",function(){
    window.location.href ="question.html"
})
