//your JS code here. If required.

 let counterElement = document.getElementById('counter');
        let incrementBtn = document.getElementById('incrementBtn');

        // Function to handle incrementing
        function incrementCounter() {
            let currentValue = parseInt(counterElement.innerText) || 0; // Get current count
            counterElement.innerText = currentValue + 1; // Increment the counter
            alert("Current value before increment: " + currentValue); // Show alert with current value
        }

        // Attach event listener to button
        incrementBtn.addEventListener('click', incrementCounter);