let buttons = document.querySelectorAll("button");
let input = document.querySelector('input');

let String = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            try {
                String = eval(String);
                input.value = String;
                
            } catch {
                input.value = "Error";
                String = "";
            }
        } else if (e.target.innerHTML == "AC") {
            String = "";
            input.value = String;
            
        } else if (e.target.innerHTML == "Del") {
            String = String.slice(0 , -1);
            input.value = String;
            
        } 

        else {
            String += e.target.innerHTML;
            input.value = String;
        } 
    });
   
});
