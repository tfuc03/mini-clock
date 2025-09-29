function updateClock(){
    const now = new Date();

    let h = now.getHours();
    const meridiem = h >= 12 ? "PM" : "AM";
    h = h % 12 || 12;
    h = h.toString().padStart(2,0);
    const m = now.getMinutes().toString().padStart(2,0);
    const s = now.getSeconds().toString().padStart(2,0);
    const text = `${h}:${m}:${s} ${meridiem}`;
    document.getElementById("clock-timer").textContent = text;
}

updateClock();
setInterval(updateClock, 1000);
