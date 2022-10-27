let open = document.getElementById("open")
let close = document.getElementById("close")
open.addEventListener("click", ()=>{
    let cont = document.getElementsByClassName("container")[0].classList.add("show-nav")
});

close.addEventListener("click", () => {
    let cont = document.getElementsByClassName("container")[0].classList.remove("show-nav")
});