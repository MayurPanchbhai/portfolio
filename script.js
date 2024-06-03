// making the header for mobile
let header = document.getElementById("headerFPhone");
let menu1=document.getElementById("threeMenu");
let menu2=document.getElementById("xMenu");
let count=0;

function openHeader(){
   
    if(count%2==0){
        header.style.display="block";
        count++;
        menu1.style.display="none";
        menu2.style.display="block";
    }
    else{
        header.style.display="none";
        count++;
        menu2.style.display="none";
        menu1.style.display="block";
        
    }
    
}

//closing the header on clickin of the any other div than header
function closeHeader(){
    if(count%2!==0){
       openHeader();
    }
}





// project section image effect
let infoLoad1=document.getElementById("projInfo1");
let infoCount1=0
function getBlurInfo(){
    if (infoCount1%2==0) {
        infoLoad1.style.display="flex";
        infoCount1++;
    }
    else{
        infoLoad1.style.display="none";
        infoCount1++;
    }

    
}