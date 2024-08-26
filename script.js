let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let turnO = true;
let winner = document.querySelector(".winner");
let playAgainBtn = document.querySelector(".playAgainBtn");
let msg = document.querySelector(".msg");
let main = document.querySelector(".main");
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});


const checkWinner = () => {
    for (let pattern of winPatterns) {
        //console.log(pattern)
        //console.log(pattern[0], pattern[1], pattern[2])
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                // console.log(`Winner is =   ${pos1}`)
                disableButton();
                displayWinner(pos1);
            }
        }
    }
}


let disableButton = () => {
    boxes.forEach(box => {
        box.disabled = true;
    });
};

let enableButton = () => {
    boxes.forEach(box => {
        box.disabled = false;
    });
};


let displayWinner = (pos1) => {
    main.classList.add("hide");
    winner.classList.remove("hide");
    msg.innerText = (`Congratulations winner is ${pos1}`);

}

playAgainBtn.addEventListener("click", () => {
    main.classList.remove("hide");
    newGame();
});

reset.addEventListener("click", () => {
    newGame();
});

let empty_boxes = () => {
    boxes.forEach(box => {
        box.innerText = "";
    }
    )
};

let newGame = () => {
    winner.classList.add("hide");
    enableButton();
    turnO = true;
    empty_boxes();
}






/*const checkWinner = () => {
    if (boxes[0].innerText !== "" && 
        boxes[0].innerText === boxes[1].innerText && 
        boxes[1].innerText === boxes[2].innerText) {
        console.log("Winner: " + boxes[0].innerText);
    }
    else if (boxes[3].innerText !== "" && 
             boxes[3].innerText === boxes[4].innerText && 
             boxes[4].innerText === boxes[5].innerText) {
        console.log("Winner: " + boxes[3].innerText);
    }
           // Continue this pattern for all possible win combinations
    else if (boxes[6].innerText !== "" && 
             boxes[6].innerText === boxes[7].innerText && 
             boxes[7].innerText === boxes[8].innerText) {
        console.log("Winner: " + boxes[6].innerText);
    }
           // Check for columns
    else if (boxes[0].innerText !== "" && 
             boxes[0].innerText === boxes[3].innerText && 
             boxes[3].innerText === boxes[6].innerText) {
        console.log("Winner: " + boxes[0].innerText);
    }
           // Continue for other columns and diagonals
    
}
*/

