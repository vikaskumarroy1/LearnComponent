let container=document.querySelector(".container");
for(let i=0;i<9;i++){
    const div1 =document.createElement('div');
    div1.classList.add("container_div");
    
    container.appendChild(div1);
}
    let color_divs= document.querySelectorAll(".container_div");
    color_divs.forEach((color_div)=>{
        let new_color=generateRandomColor();
        color_div.style.backgroundColor = "#"+ new_color;
        let text=color_div.innerText= new_color;
        
        

    })

function generateRandomColor(){
    let hexChars ="0123456789abcdef";
    let colorCodeString="";
    let colorCodeStringLength=6;
    for( let i=0;i<colorCodeStringLength;i++){
        let randomIndex=Math.floor(Math.random()*16);
        colorCodeString=colorCodeString + hexChars[randomIndex]
        

    }
    return colorCodeString;
}


