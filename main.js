const container = document.querySelector("#sketch-container");

let size = 16;
let color = "black";

let cells;

function create (){
    for(x=0;x<size;x++){
        for(y=0;y<size;y++){
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

    cells = document.querySelectorAll(".cell");  //why?

    cells.forEach(function (cell){
        container.removeChild(cell);
    });

    for(x=0;x<size;x++){
        for(y=0;y<size;y++){
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


let toWhite = document.querySelector("#to-white");

toWhite.addEventListener("click", function(){
    color = "white";
});

let toBlack = document.querySelector("#to-black");

toBlack.addEventListener("click", function(){
    color = "black";
});

let reset = document.querySelector("#reset");

reset.addEventListener("click", function(){
    cells.forEach(function (cell){
        cell.style.backgroundColor = "white";
    });
});

let colorSelection = document.querySelector("#color");

colorSelection.addEventListener("change", function(){
    color = colorSelection.value;
});

let sizeSelection = document.querySelector("#size");

sizeSelection.addEventListener("change", function(){
    size = sizeSelection.value;
    document.querySelector("#range-value").innerHTML = size;
    edit();
});