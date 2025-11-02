// --- Elements ---
const boardEl  = document.getElementById("board");
const statusEl = document.getElementById("status");
const resetBtn = document.getElementById("reset");

// --- Game State ---
let cells   = Array(9).fill("");
let current = "X";
let active  = true;

// winning lines
const LINES = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
];

// attach handlers to all cells
boardEl.querySelectorAll(".cell").forEach(btn => {
  btn.addEventListener("click", () => handleMove(+btn.dataset.i, btn));
  // enter key
  btn.addEventListener("keyup", (e) => {
    if (e.key === "Enter" || e.key === " ") btn.click();
  });
});

resetBtn.addEventListener("click", reset);

// --- Handlers ---
function handleMove(i, btn) {
  if (!active || cells[i] !== "") return;

  cells[i] = current;
  btn.textContent = current;
  btn.setAttribute("aria-label", `cell ${i+1} ${current}`);

  const winLine = getWinLine();
  if (winLine) {
    showWin(winLine);
    statusEl.textContent = `Player ${current} wins!`;
    active = false;
    return;
  }

  if (cells.every(v => v !== "")) {
    statusEl.textContent = "Draw!";
    active = false;
    return;
  }

  current = current === "X" ? "O" : "X";
  statusEl.textContent = `Player ${current} to move`;
}

function getWinLine() {
  for (const [a,b,c] of LINES) {
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      return [a,b,c];
    }
  }
  return null;
}

function showWin(line) {
  // game over , light and can't do
  boardEl.querySelectorAll(".cell").forEach((btn, idx) => {
    btn.disabled = true;
    if (line.includes(idx)) btn.classList.add("win");
  });
}

function reset() {
  cells   = Array(9).fill("");
  current = "X";
  active  = true;
  statusEl.textContent = `Player ${current} to move`;

  boardEl.querySelectorAll(".cell").forEach((btn, idx) => {
    btn.textContent = "";
    btn.classList.remove("win");
    btn.disabled = false;
    btn.setAttribute("aria-label", `cell ${idx+1}`);
  });
}
