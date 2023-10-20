let bar= document.querySelector(".bar");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
window.addEventListener("scroll",()=>{
    bar.style.width = `${(document.documentElement.scrollTop / height) * 100}%`;
})