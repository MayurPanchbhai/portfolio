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
let Pro1=document.getElementById("project1");
let infoLoad1=document.getElementById("projInfo1")
let ProImg =document.getElementById("ProjectImg");
Pro1.addEventListener("mouseenter" , ()=>{
    // setTimeout(()=>{
        infoLoad1.classList.add("infoAni");
        infoLoad1.style.display="flex";
    // },2500)
    
})
Pro1.addEventListener("mouseleave" , ()=>{
    infoLoad1.classList.remove("infoAni");
    infoLoad1.style.display="none";

})