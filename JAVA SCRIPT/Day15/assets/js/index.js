const btn=document.getElementById("btn");
const box=document.getElementById("box");
     let ison=true;

   btn.addEventListener("Click",()=>{
     ison=!ison
    if(ison){
        btn.textContent="click"
        box.style.display="none"

    }else{
        btn.textContent="show"
        box.style.display="block"
    }

   });