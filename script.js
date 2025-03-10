//your JS code here. If required.

 document.addEventListener("DOMContentLoaded", function() {
    let counterElement = document.getElementById('counter');
    let incrementBtn = document.getElementById('incrementBtn');

    function incrementCounter() {
        let currentValue = parseInt(counterElement.innerText) || 0;
        alert("Current value before increment: " + currentValue);
        counterElement.innerText = currentValue + 1;
    }

    incrementBtn.addEventListener('click', incrementCounter);
});