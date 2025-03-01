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

setInterval(updateDate, 1000);
updateDate();

