
let currMoleTile;
let currPlantTile;
let score = 0;
let gameOver = false;


window.onload = function () {
    setGame();
}

function setGame() {
    //set up the grid for the game board in html

    for (let i=0; i< 9; i++){ //this will make i go from 0 to 8
        //<div id="0-8"></div>
        let tile = document.createElement("div")
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);

    }

    setInterval(setMole, 1000) //2000 miliseconds = 2
    setInterval(setPlant, 2000)
}


function getRandomTile() {
    //math.random returns a number betwen 0-1// math.floor will round it down to be between 0-8
    let num = Math.floor(Math.random() * 9);
    return num.toString();

}


function setMole(){
    if(gameOver){
        return;
    }

    if (currMoleTile) {
        currMoleTile.innerHTML = "";
    }

    let mole = document.createElement("img");
    mole.src = "./monty-mole.png";

    let num = getRandomTile();
    if(currPlantTile && currPlantTile.id == num){
        return;
    }
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}


function setPlant() {
    if(gameOver){
        return;
    }

    if (currPlantTile) {
        currPlantTile.innerHTML = "";
    }

    let plant = document.createElement("img")
    plant.src = "./piranha-plant.png";

    let num = getRandomTile();
    if(currMoleTile && currMoleTile.id == num){
        return;
    }
    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant);
}


function selectTile() {

    if(gameOver){
        return;
    }
    
    if(this == currMoleTile) {
        score += 10
        document.getElementById("score").innerText = score.toString(); //update the score
    }
    else if(this == currPlantTile){
        document.getElementById("score").innerText = "GAME OVER: " + score.toString();
        gameOver = true;
    }
}