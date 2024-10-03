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









let Pro3=document.getElementById("project3");
let infoLoad3=document.getElementById("projInfo3")
let ProImg3 =document.getElementById("ProjectImg");
Pro3.addEventListener("mouseenter" , ()=>{
    // setTimeout(()=>{
        infoLoad3.classList.add("infoAni");
        infoLoad3.style.display="flex";
    // },2500)
    
})
Pro3.addEventListener("mouseleave" , ()=>{
    infoLoad3.classList.remove("infoAni");
    infoLoad3.style.display="none";

})







let Pro2=document.getElementById("project2");
let infoLoad2=document.getElementById("projInfo2")
let ProImg2 =document.getElementById("ProjectImg2");
Pro2.addEventListener("mouseenter" , ()=>{
    // setTimeout(()=>{
        infoLoad2.classList.add("infoAni2");
        infoLoad2.style.display="flex";
    // },2500)
    
})
Pro2.addEventListener("mouseleave" , ()=>{
    infoLoad2.classList.remove("infoAni2");
    infoLoad2.style.display="none";

})







// email qr code

// Email details
var email = "mailto:mayurpanchbhai21@gmail.com";

// Generate the QR code
var qrcode = new QRCode(document.getElementById("qrcode"), {
    text: email,
    width: 256, // Increase the width
    height: 256, // Increase the height
    colorDark : "#000000", // Dark color
    colorLight : "#ffffff", // Light color
    correctLevel : QRCode.CorrectLevel.H // Error correction level
});
