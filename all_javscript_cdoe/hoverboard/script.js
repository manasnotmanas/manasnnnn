const container = document.getElementById("container");
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']

const squares = 500;

for(let i = 0;i<=squares;i++){
    const square = document.createElement("div")
    square.classList.add("square");
    square.addEventListener("mouseover",()=> setcolor(square))
    square.addEventListener("mouseout",()=> removecolor(square))
    container.appendChild(square)
}
function getRandomColor(){
    return colors[Math.floor(Math.random()*colors.length)]
    }
    function removecolor(element){
        element.style.background = '#1d1d1d'
    }
    function setcolor(element){
        const color = getRandomColor();
        element.style.background = color;
    }