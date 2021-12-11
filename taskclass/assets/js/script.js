let input=document.querySelector("#firstname");
let input2=document.querySelector("#surname");
let input3=document.querySelector("#email");
let input4=document.querySelector("#password");
let input5=document.querySelector("#re-password");
let errormsg=document.querySelector(".error");
let errormsg1=document.querySelector(".msg1");
let errormsg2=document.querySelector(".msg2");
let errormsg3=document.querySelector(".msg3");
let errormsg4=document.querySelector(".msg4");
let errormsg5=document.querySelector(".msg5")
let btn=document.querySelector(".submit");

btn.onclick=function() {
    
    if (input.value.trim()) {
        // window.location.reload();
        errormsg.classList.add("d-none");
    }
    else{
        errormsg.classList.remove("d-none");
        
        
    }
    if (input2.value.trim()) {
        errormsg1.classList.add("d-none");
        
    }
    else{
        errormsg1.classList.remove("d-none");
        
        
    }
    if (input3.value.trim()) {
        errormsg2.classList.add("d-none");
        
    }
    else{
        errormsg2.classList.remove("d-none");
        
        
    }
    if (data4.value.trim() == "" || data4.value.trim().length < 8) {
        err4.classList.remove("d-none");
    }
  
    if  (input4.value!=input5.value){
        errormsg5.classList.remove("d-none");
    } 
    
    

        
        
    
    
}







