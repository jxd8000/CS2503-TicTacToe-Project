(function testResetGame() {
  log("\n=== Testing reset() ===");

  try {

    cells = ["X","O","X","O","","","","",""];
    current = "O";
    active  = false;

 
    const btns = boardEl.querySelectorAll(".cell");
    btns.forEach((btn, idx) => {
      btn.textContent = cells[idx] || "";
      btn.disabled = true;
      btn.classList.add("win");
    });
    statusEl.textContent = "Some random status";

  
    reset();


    if (!cells.every(c => c === "")) {
      throw new Error("Board cells array not cleared");
    }
    if (current !== "X") {
      throw new Error("Current player should reset to X");
    }
    if (!active) {
      throw new Error("Active flag should be true after reset");
    }

 
    const btnsAfter = boardEl.querySelectorAll(".cell");
    if (btnsAfter.length !== 9) {
      throw new Error("Expected 9 cells in DOM");
    }
    btnsAfter.forEach((btn, idx) => {
      if (btn.textContent !== "") {
        throw new Error("Cell " + idx + " textContent not cleared");
      }
      if (btn.disabled) {
        throw new Error("Cell " + idx + " should not be disabled after reset");
      }
      if (btn.classList.contains("win")) {
        throw new Error("Cell " + idx + " should not have 'win' class after reset");
      }
    });

    log("✅ reset() restores initial game state");
  } catch (e) {
    log("❌ " + e);
  }
})();
