function startCountdown(duration) {
    var timer = duration, days, hours, minutes, seconds;
    var daysDisplay = document.querySelector('.CountdownDays');
    var hoursDisplay = document.querySelector('.CountdownHours');
    var minutesDisplay = document.querySelector('.CountdownMinutes');
    var secondsDisplay = document.querySelector('.CountdownSeconds');

    setInterval(function () {
        days = parseInt(timer / (60 * 60 * 24), 10);
        hours = parseInt((timer % (60 * 60 * 24)) / (60 * 60), 10);
        minutes = parseInt((timer % (60 * 60)) / 60, 10);
        seconds = parseInt(timer % 60, 10);

        daysDisplay.textContent = days < 10 ? "0" + days : days;
        hoursDisplay.textContent = hours < 10 ? "0" + hours : hours;
        minutesDisplay.textContent = minutes < 10 ? "0" + minutes : minutes;
        secondsDisplay.textContent = seconds < 10 ? "0" + seconds : seconds;

        if (--timer < 0) {
            timer = 0;
        }
    }, 1000);
}

window.onload = function () {
    var duration = 60 * 60 * 24 * 23 + 60 * 60 * 23 + 60 * 58 + 30;
    startCountdown(duration);
};
