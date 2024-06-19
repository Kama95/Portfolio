$(document).ready(function(){
    $(".drpdwnbtn").on("click",function(){
        $(".navItems .listItems").toggleClass("open");

    });
}
);

console.log("Javascrip is working alright");

let mousePosition = {
    x:0,
    y:0
};

document.addEventListener("mousemove", (mouse) =>{
    mousePosition ={
        x:mouse.clientX,
        y:mouse.clientY
    };
    console.log (mousePosition);

    
});


const loop = ()=>{
    const gradientElement = document.getElementById('gradient');

    if (gradientElement){
        //const rect = gradientElement.getBoundingClientRect();
        //const elementWidth =rect.width;
        //const elementHeight=rect.height;

        
    gradientElement.style.transform =
    `translate(${mousePosition.x}px, ${mousePosition.y}px)`;
    }
        window.requestAnimationFrame(loop);
};

window.requestAnimationFrame(loop);
