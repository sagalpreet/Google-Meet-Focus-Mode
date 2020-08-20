const chatPrompts = document.querySelector("div[class='NSvDmb cM3h5d']");
const statusBar = document.querySelector("div[class='Jrb8ue']");

document.querySelector('html').onclick = function(){
    if(document.getElementsByClassName("rG0ybd")[0].style.visibility==='hidden'){
        document.getElementsByClassName("rG0ybd")[0].style.visibility='visible';
        document.querySelector('html').onmouseover = function(){ document.getElementsByClassName("rG0ybd")[0].style.visibility='visible'}
    }
    else{
        document.getElementsByClassName("rG0ybd")[0].style.visibility='hidden';
        document.querySelector('html').onmouseover = function(){ document.getElementsByClassName("rG0ybd")[0].style.visibility='hidden'}
    }
    if(chatPrompts.style.visibility==='hidden'){
        chatPrompts.style.visibility='visible';
    }
    else{
        chatPrompts.style.visibility='hidden';
    }
    if(statusBar.style.visibility==='hidden'){
        statusBar.style.visibility='visible';
    }
    else{
        statusBar.style.visibility='hidden';
    }
}
