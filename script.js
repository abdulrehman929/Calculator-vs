let buttons = document.querySelectorAll("button");
let input = document.querySelector('input');

let inputString = "";  // Renamed from 'String' to 'inputString'
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.textContent; // More reliable than innerHTML

        if (value === '=') {
            try {
                inputString = new Function('return ' + inputString)();
                input.value = inputString;
            } catch {
                input.value = "Error";
                inputString = "";
            }
        } else if (value === "AC") {
            inputString = "";
            input.value = inputString;
        } else if (value === "Del") {
            inputString = inputString.slice(0, -1);
            input.value = inputString;
        } else {
            inputString += value;
            input.value = inputString;
        }
    });
});
