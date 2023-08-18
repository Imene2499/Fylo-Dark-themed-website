
let mood = document.getElementById('mood'); 
let page = document.getElementById('page'); 

mood.onclick = function(){
    if(mood.innerHTML === 'Light' ){
        page.style.background = '#000'; 
        page.style.color = '#181f2a'
        mood.innerHTML = 'Dark'; 
    }

    else{
        page.style.background = '#181f2a';  
        mood.innerHTML = 'Light'; 
    }
}

let chgColor = document.getElementById('chgColor'); 
let table = document.getElementById('table'); 
let color1 = document.getElementById("color1"); 
let color2 = document.getElementById("color2"); 
let color3 = document.getElementById("color3"); 
let getStartedBtn1 = document.getElementById('get-started-btn'); 
let getStartedBtn2 = document.getElementById('get-started-btn2'); 
let icons = document.getElementsByTagName('i'); 
let arrow = document.getElementById('arrow'); 
let how = document.getElementById('how'); 



chgColor.onclick = function(){
    table.style.display = 'block'; 
}




color1.onclick = function(){
    chgColor.style.background = '#9c27b0'; 
    getStartedBtn1.style.background = '#9c27b0'; 
    getStartedBtn2.style.background = '#9c27b0'; 
    mood.style.background = '#9c27b0'; 
    how.style.color = '#9c27b0'; 
    arrow.style.color = '#9c27b0'; 
    for(let i=0; i<=3; i++){
        icons[i].style.color = '#9c27b0'; 
    }
}


color2.onclick = function(){
    chgColor.style.background = '#009688'; 
    getStartedBtn1.style.background = '#009688'; 
    getStartedBtn2.style.background = '#009688'; 
    mood.style.background = '#009688'; 
    how.style.color = '#009688'; 
    arrow.style.background = '#009688';  
    for(let i=0; i<=3; i++){
        icons[i].style.color = '#009688'; 
    }
}


color3.onclick = function(){
    chgColor.style.background = '#65e2d9'; 
    getStartedBtn1.style.background = '#65e2d9'; 
    getStartedBtn2.style.background = '#65e2d9'; 
    mood.style.background = '#65e2d9'; 
    how.style.color = '#65e2d9'; 
    arrow.style.background = '#65e2d9'; 
    for(let i=0; i<=3; i++){
        icons[i].style.color = '#65e2d9'; 
    }
}





