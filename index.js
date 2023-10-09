
let arr=["red","blue","yellow","orange","black","cyan","green"];
let i=0;

let btn=document.getElementById("btn");

btn.addEventListener('click', function(){
    document.body.style.backgroundColor=arr[i];
    
    if(i==arr.length-1){
        i=0;
        
        
    }
    i++;

})
