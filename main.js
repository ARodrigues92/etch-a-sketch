const container = document.querySelector("#sketch-container");

let size = 16;
let color = "black";

let cells;

function create (){
    for(let x=0;x<size;x++){
        for(let y=0;y<size;y++){
            let div = document.createElement("div");
            div.className = "cell";
            container.appendChild(div);
        }
    }

    container.style.cssText = `grid-template-columns: repeat(${size}, 1fr); grid-template-rows: repeat(${size}, 1fr)`;

    cells = document.querySelectorAll(".cell");

    cells.forEach(function (cell){
        cell.addEventListener("mouseover", function(){
            cell.style.backgroundColor = color;
        });
    });

}

function edit (){

    cells = document.querySelectorAll(".cell");

    cells.forEach(function (cell){
        container.removeChild(cell);
    });

    for(let x=0;x<size;x++){
        for(let y=0;y<size;y++){
            let div = document.createElement("div");
            div.className = "cell";
            container.appendChild(div);
        }
    }

    cells = document.querySelectorAll(".cell"); 

    container.style.cssText = `grid-template-columns: repeat(${size}, 1fr); grid-template-rows: repeat(${size}, 1fr)`;

    cells.forEach(function (cell){
        cell.addEventListener("mouseover", function(){
            cell.style.backgroundColor = color;
        });
    });
}


create ();   


const toWhite = document.querySelector("#to-white");

toWhite.addEventListener("click", function(){
    color = "white";
});

const toBlack = document.querySelector("#to-black");

toBlack.addEventListener("click", function(){
    color = "black";
});

const reset = document.querySelector("#reset");

reset.addEventListener("click", function(){
    cells.forEach(function (cell){
        cell.style.backgroundColor = "white";
    });
});

const colorSelection = document.querySelector("#color");

colorSelection.addEventListener("change", function(){
    color = colorSelection.value;
});

const sizeSelection = document.querySelector("#size-selector");

sizeSelection.addEventListener("change", function(){
    size = sizeSelection.value;
    document.querySelector("#range-value").innerHTML = size;
    edit();
});