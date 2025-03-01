// document.getElementById("history").addEventListener("click",function(){
function updateDate() {
    const now = new Date();
    const day = { weekday: "long" };
    const currentDay = now.toLocaleDateString("en-US", day);

    const date = { year: "numeric", month: "short", day: "2-digit" };
    const currentDate = now.toLocaleDateString("en-US", date);

    document.getElementById("current-day").innerText = currentDay;
    document.getElementById("current-date").innerText = currentDate;
}

// setInterval(updateDate, 1000);
updateDate();

const body = document.body
// This one explore from chatGPT BTW i understood how it works.
document.getElementById("color-change").addEventListener("click", function () {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16); 
    body.style.backgroundColor = randomColor;
});

