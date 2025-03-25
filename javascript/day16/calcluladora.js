function toggleSign() {
  let inputField = document.getElementById("input");
  let value = parseFloat(inputField.value); // Convert input to number

  if (!isNaN(value)) {
    inputField.value = value * -1; // Toggle sign
  }
}

function moreOption() {
  alert("More options are coming soon!");
}