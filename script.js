$(document).ready(function(){
    $(".drpdwnbtn").on("click",function(){
        $(".navItems .listItems").toggleClass("open");

    });
}
);

console.log("Javascript is working alright");

//initialise mouse posiition
let mousePosition = {
    x:0,
    y:0
};

//update position of mouse upon hover.
document.addEventListener("mousemove", (mouse) =>{
    mousePosition ={
        x:mouse.clientX,
        y:mouse.clientY
    };
    console.log (mousePosition);

    
});


//Animation to continiousl updated position of gradient
//and make gradient follow mouse hover.

const loop = ()=>{
    const gradientElement = document.getElementById('gradient');

    if (gradientElement){

    gradientElement.style.transform =
    `translate(${mousePosition.x}px, ${mousePosition.y}px)`;
    }
        window.requestAnimationFrame(loop);
};


window.requestAnimationFrame(loop);

const patternElement = document.getElementById('pattern');//grab pattern element

//multiply or increase the hexagpn shape to cover eniter backgroiund.
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

  //eanble smooth scrolling for acnhor elements within the page
  document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
anchor.addEventListener('click' ,function(e)
  {e.preventDefault(); 
    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
  });
});

//function to open modal when button is clicked.

function openModal(){
  let modal = document.getElementById('myModal');
    modal.style.cssText=`
    display:flex;
    justify-content:center;
    align-items:center;
    background-color: rgba(0,0,0,0.9);
    padding:20px;
    flex-direction:column;
    `;
}

//function to close modal when close button is clicked
function closeModal(){
    document.getElementById('myModal').style.display='none';
}

//intialise slides
let slideIndex=1;
showSlides(slideIndex);

//function to move to next slide
function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n);
}
//function to show slides.
function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("slides");
    if (n > slides.length){slideIndex=1}
    if (n < 1){slideIndex = slides.length}
    for (i=0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
    slides[slideIndex-1].style.display='block';
}