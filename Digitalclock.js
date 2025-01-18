// Function to update the time
function updateClock() {
    // Get the current time
    const now = new Date();

    // Extract hours, minutes, and seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Format time to always show two digits (e.g., 09 instead of 9)
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Update the clock display
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

// Call updateClock every second (1000 ms)
setInterval(updateClock, 1000);

// Call updateClock immediately to show time right away
updateClock();

