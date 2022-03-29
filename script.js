// Call a bootstrap modal instead of an alert
const callModal = (title, message) => {
    const options = {
        backdrop: 'static',
        keyboard: false
    }
    const myModal = new bootstrap.Modal(document.getElementById('alertModal'), options);
    const modalRoot = document.getElementById("modal-root");
    const modalTitle = document.getElementById("modal-title")
    modalRoot.innerHTML = message;
    modalTitle.innerHTML = title
    myModal.show();
}

// If the modal was triggered because of bad input, clear out the amount and current computed interest
const clearPrinciple = () => {
    const principleInput = document.getElementById("principal");
    const resultsRoot = document.getElementById("results-root");
    principleInput.value = "";
    resultsRoot.innerHTML = "";
    principleInput.focus();
}

// Handle displaying where the user is on the slider
const updateSliderText = () => {
    const sliderRoot = document.getElementById("slider-root");
    const slider = document.getElementById("rate");
    sliderRoot.innerHTML = `${parseFloat(slider.value)} %`;
}

// Handle computing the interest 
const calculateInterest = () => {

        try {
            // get the values from all the form fields
            const principleInput = document.getElementById("principal");
            const interestInput = document.getElementById("rate");
            const yearsInput = document.getElementById("years")

            // convert all the values to numbers
            const principleValue = parseInt(principleInput.value);
            const interestValue = parseFloat(interestInput.value);
            const yearsValue = parseInt(yearsInput.value);


            // If the user entered a value that can't be converted to a number, entered 0 or a negative, open a modal alerting them
            if (isNaN(principleValue) || principleValue <=0){
                callModal("Problem with Amount input", "Enter a positive number.")
                return;
            }

            // Calculate the interest using the formula
            const interest = principleValue * (interestValue / 100) * yearsValue;

            // calculate which year based on the inputted number of years
            const today = new Date();
            const year = today.getFullYear();
            const targetYear = year + yearsValue;

            // Set up the html response for the user
            const results = `
                <p class="results-text"> If you deposit <span class="highlightText">$${principleValue.toFixed(2)}</span>, <br />
                    at an interest rate of  <span class="highlightText">${interestValue}%</span>, <br />
                    you will receive an amount of  <span class="highlightText">$${interest.toFixed(2)}</span>, <br />
                    in the year <span class="highlightText"> ${targetYear}</span>
                </p>
            
            `

            // Update the results root with the details
            const resultsRoot = document.getElementById("results-root");
            resultsRoot.innerHTML = results;

        } catch (error) {
            console.error(error)
        }
}