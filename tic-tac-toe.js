document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll("#board div");
    let currentPlayer = "X";
    const winningPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    function checkWinner() {
        for (const pattern of winningPatterns) {
            const [a, b, c] = pattern;
            if (
                squares[a].textContent &&
                squares[a].textContent === squares[b].textContent &&
                squares[a].textContent === squares[c].textContent
            ) {
                document.getElementById("status").classList.add("you-won");
                document.getElementById("status").textContent = `Congratulations! ${squares[a].textContent} is the Winner!`;
                return true;
            }
        }
        return false;
    }

    squares.forEach(square => {
        square.classList.add("square");

        square.addEventListener("click", () => {
            if (square.textContent === "" && !checkWinner()) {
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);
                if (!checkWinner()) currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
        });

        square.addEventListener("mouseover", () => square.classList.add("hover"));
        square.addEventListener("mouseout", () => square.classList.remove("hover"));
    });
    
    document.getElementById("newGame").addEventListener("click", () => {
        console.log("New Game button clicked");
        squares.forEach(square => {
            square.textContent = "";
            square.classList.remove("X", "O");
        });

        const statusDiv = document.getElementById("status");
        statusDiv.classList.remove("you-won");
        statusDiv.textContent = "Move your mouse over a square and click to play an X or an O.";

        currentPlayer = "X";
    });
});

