// making the header for mobile
let header = document.getElementById("headerFPhone");
let count=0;

function openHeader(){
   
    if(count%2==0){
        header.style.display="block";
        count++;
        
    }
    else{
        header.style.display="none";
        count++;
        
    }
    
}

//closing the header on clickin of the any other div than header
function closeHeader(){
    if(count%2!==0){
       openHeader();
    }
}