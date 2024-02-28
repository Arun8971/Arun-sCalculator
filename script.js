let arun=document.getElementById("screen");

function input(x){
    arun.value=arun.value+x;
}

function del(){
    arun.value=arun.value.slice(0,-1);
}

function allclear(){
    arun.value='0';
}

function eqto(){
    try{
        arun.value=eval(arun.value);
    }

    catch{
        arun.value='syntax error';
    }
}