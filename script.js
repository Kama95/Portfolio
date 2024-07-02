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

const patternElement = document.getElementById('pattern');

const countY = Math.ceil(patternElement.clientHeight /40)+1;
const countX = Math.ceil(patternElement.clientWidth/40)+1;
const gap =2;

for (let i = 0; i < countY; i++) {
    for (let j = 0; j < countX; j++) {
      const hexagon = document.createElement("div");
      hexagon.style = `
        background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODciIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgODcgMTAwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMi4xOTg3MyAyNi4xNTQ3TDQzLjUgMi4zMDk0TDg0LjgwMTMgMjYuMTU0N1Y3My44NDUzTDQzLjUgOTcuNjkwNkwyLjE5ODczIDczLjg0NTNWMjYuMTU0N1oiIGZpbGw9IiMxMzEyMTciIHN0cm9rZT0iIzEzMTIxNyIgc3Ryb2tlLXdpZHRoPSI0Ii8+Cjwvc3ZnPgo=') 
        no-repeat;
        width: 100%;
        height: 50px;
        background-size: contain;
        position: absolute;
        top: ${i * 40}px;
        left: ${j * 48 + ((i * 24) % 48)}px;
      `;
  
      patternElement.appendChild(hexagon);
    }
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
anchor.addEventListener('click' ,function(e)
  {e.preventDefault(); 
    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
  });
});

function openModal(){
    document.getElementById('myModal').style.display='block';
}

function closeModal(){
    document.getElementById('myModal').style.display='none';
}

let slideIndex=1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(currentSlide = n);
}

function showSlides(n){
    let i;
    let slides = document.getElementsByClassName('slides');
}