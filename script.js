let display = document.querySelector(".display")
let inc = document.querySelector(".Increment")
let dec = document.querySelector(".Decrement")
let reset = document.querySelector(".Reset")

let counter = 0

inc.addEventListener("click",()=>{
    counter++;
    display.innerHTML = `<h1>${counter}</h1>`
})
dec.addEventListener("click",()=>{
    if(counter > 0){
        counter--;
        display.innerHTML = `<h1>${counter}</h1>`
    }
})
reset.addEventListener("click",()=>{
    display.innerHTML = `<h1>${0}</h1>`
})


document.addEventListener("keyup",(event)=>{
    if(event.key === "+"){
        counter++;
        display.innerHTML = `<h1>${counter}</h1>`
    }
    else if(event.key === "-"){
        if(counter > 0){
            counter--;
            display.innerHTML = `<h1>${counter}</h1>`
        }
    }
    else if(event.key.toLowerCase() === "r"){
        display.innerHTML = `<h1>${0}</h1>`
    }
})