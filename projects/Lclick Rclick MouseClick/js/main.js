document.addEventListener("DOMContentLoaded", () => {
    const ball = document.querySelector(".ball"),
    volleyball = document.querySelector(".volleyball"),
    basketball = document.querySelector(".basketball");

    let index = 1;
    let sum = 0;
    
    
document.addEventListener("contextmenu" , e => e.preventDefault());

document.body.addEventListener("mousedown", e => {
     e.preventDefault();

   
   if(e.which == 1) {
      fly(e,ball); 
   }
   else if(e.which == 2) {
        fly(e,volleyball); 
   }
   else if(e.which == 3) {
    e.preventDefault();
    fly(e,basketball);
   }
    
});


const fly = (e, b) => {
    b.style.position = "absolute";
    b.style.transform = `rotate(${sum += 250}deg)`;
    b.style.top = `${e.pageY - (b.offsetHeight/2)}px`;
    b.style.left = `${e.pageX - (b.offsetWidth/2)}px`;
    b.style.zIndex = `${++index}`;
    sum = sum > 900 ? 100 : sum;
};

})

