let display = document.getElementById("display");

// Add value
function appendValue(val) {
    display.value += val;
}

// Clear
function clearDisplay() {
    display.value = "";
}

// Delete last
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate
function calculate() {
    try {
        let result = Function("return " + display.value)();
        display.value = result;
    } catch {
        display.value = "Error";
    }
}