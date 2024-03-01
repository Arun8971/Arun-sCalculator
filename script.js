let scrn=document.getElementById("screen");

function input(x){
    scrn.value=scrn.value+x;
}

function allclear(){
    scrn.value='';
}

function del(){
    scrn.value=scrn.value.slice(0,-1);
}

function eqto(){
    try{
       if(scrn.value.includes("x")){
        scrn.value=eval(scrn.value.replace("x","*"));
       }
       else if(scrn.value.includes("^")){
        scrn.value=eval(scrn.value.replace("^","**"));
       }
       else if (scrn.value.includes("√")) {
        scrn.value = eval(scrn.value.replace("√", "Math.sqrt"));
    }
    
       else{
        scrn.value=eval(scrn.value);
       }
    }
    catch{
        scrn.value='error';
    }
}