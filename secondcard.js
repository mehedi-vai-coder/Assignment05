document.addEventListener("DOMContentLoaded", function(){
    const allButton = document.querySelectorAll("#Fbtn")
    allButton.forEach(button => {
        button.addEventListener("click", function () {
            moveToActivityLog(this);
        });
    });
    function moveToActivityLog(button){
        button.disabled = true
        button.style.backgroundColor = "#a0a0a0";
        button.style.cursor = "not-allowed";
        alert("Board Updated Successfully")

        let countElement = document.getElementById("taskCount");
let currentCount = parseInt(countElement.textContent, 10);

countElement.textContent = String(currentCount - 1).padStart(2, '0');

let UpperElement = document.getElementById("header-value");
let upperCount = parseInt(UpperElement.textContent, 10);
UpperElement.textContent = String(upperCount + 1).padStart(2, '0');
let title = document.querySelectorAll('#fix-title').innerText
    const container =document.getElementById("history-log")
    const paraghaph = document.createElement("p")
    paraghaph.classList.add('log-item')
    let now = new Date().toLocaleTimeString();
    paraghaph.innerText =`You have completed the task at ${title} ${now}`
    container.append(paraghaph);
    const clear = document.getElementById("clear-btn");
    clear.addEventListener("click", function () {
        paraghaph.remove()
    });
    }

    })
