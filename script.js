let buttons = document.querySelectorAll("button");
let input = document.querySelector('input');

let String = "";
let arr = Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener('click',(e) =>{
        if (e.target.innerHTML =='=') {
            String= eval(String);
            input.value = String;
        }
        String += e.target.innerHTML;
        input.value= String;
        
    })
})
 