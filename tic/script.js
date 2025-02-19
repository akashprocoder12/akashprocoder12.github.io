const cellElements = document.querySelectorAll('.cell');
const cross_win_message = document.querySelector('.crosswins');
const circle_win_message = document.querySelector('.circlewins');
const draw_message = document.querySelector('.draw');
const restart_button = document.querySelector('.restart button');
const winningCombinations = [ 
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
function startGame(){
    cellElements.forEach(cell =>{
        cell.textContent = "";
        cell.removeEventListener('click',()=>{});
    })
    circle_win_message.classList.remove('show');
    cross_win_message.classList.remove('show');
    draw_message.classList.remove('show');
    game();
}

function game() {

    let circleturn = false ;
    let circle_array = [];
    let cross_array = [];
    let finish = false;
    cellElements.forEach( cell =>{
        cell.addEventListener("click",()=>{
            if (!finish){
            const index = Array.prototype.indexOf.call(cellElements,cell);
            console.log(index)
            if (circleturn){
                cell.textContent = "0";
                circle_array.push(index);
                circleturn = false;
                
            }
            else {
                cell.textContent = "X";
                cross_array.push(index)
                circleturn = true ;
            }
            if (checkIfWin(circle_array)){
                // alert("circle wins")
                circle_win_message.classList.add('show');
                finish = true;
               


            }
            else if (checkIfWin(cross_array)){
                // alert("cross wins")
                cross_win_message.classList.add('show');
                finish = true;
            }

            else if (checkIfDraw()){
                // alert("draw")
                draw_message.classList.add('show');
                finish = true;
            }
        }
            
        },{once:true})
    })
}

startGame();
function checkIfWin(playerArray) {
    return winningCombinations.some(combination => 
        combination.every(index => playerArray.includes(index))
    );
}

function checkIfDraw(){
    return [...cellElements].every(cell =>{
        return cell.textContent !== ""
    })
}

restart_button.addEventListener('click',startGame);
