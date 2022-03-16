let input =document.getElementById("input")
let btn =document.getElementById("btn")
let red =document.getElementById("red")

let filterInput;


btn.addEventListener("click", () =>{
    // var reverce = filterInput.split("").reverse().join("");
    // console.log(filterInput)

    red.style.display=("block")

    red.innerHTML= `  Your Name is <span class="Reds">${input.value}</span>`
    console.log(reverce)
})


input.addEventListener("keyup",()=>{

    let filterInput = input.value.replace(/[^A-Z0-9]/ig,"" )
    console.log(filterInput)
    if(filterInput){
      return  btn.classList.add("active")
    }
    btn.classList.remove("active")
})