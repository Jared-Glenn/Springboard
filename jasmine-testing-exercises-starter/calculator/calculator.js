window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      console.log("clicked");
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const values = getCurrentUIValues();
  monthlyPayment = calculateMonthlyPayment(values)
  const monPayDiv = document.getElementById("monthly-payment");
  const newDiv = document.createElement("p");
  newDiv.innerText = monthlyPayment.toString();
  monPayDiv.append(newDiv);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const baseValue = (values.amount * values.rate)/(1 - (Math.pow((1 + values.rate),(-1 * (values.years * 12)))));
  const roundedValue = Math.round(baseValue * 100)/100;
  return roundedValue;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
}
