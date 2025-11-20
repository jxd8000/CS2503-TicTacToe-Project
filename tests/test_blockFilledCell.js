(function testBlockFilledCell() {
  log("\n=== Testing blocking filled cells ===");

  try {
    // Ensure it is in its initial state.
    reset();

    const btns = boardEl.querySelectorAll(".cell");
    const firstCellBtn = btns[0];

    // First move: Should successfully write to X
    handleMove(0, firstCellBtn);
    const first = cells[0];
    if (first === "") {
      throw new Error("First move did not mark the cell");
    }

    // textContent after the first entry
    const textAfterFirst = firstCellBtn.textContent;

    // Second attempt on the same cell: handleMove should simply return without altering the cell.
    handleMove(0, firstCellBtn);

    if (cells[0] !== first) {
      throw new Error("Cell value changed after being filled");
    }
    if (firstCellBtn.textContent !== textAfterFirst) {
      throw new Error("Cell textContent changed after being filled");
    }

    log("✅ Filled cells cannot be played again");
  } catch (e) {
    log("❌ " + e);
  }
})();
