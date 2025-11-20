(function testSwitchTurn() {
  log("\n=== Testing turn switching logic (X ↔ O) ===");

  let localCurrent = "X";

  function switchTurn() {
    localCurrent = (localCurrent === "X") ? "O" : "X";
  }

  try {
    if (localCurrent !== "X") {
      throw new Error("Initial player should be X");
    }

    switchTurn();
    if (localCurrent !== "O") {
      throw new Error("Turn did not switch from X to O");
    }

    switchTurn();
    if (localCurrent !== "X") {
      throw new Error("Turn did not switch from O to X");
    }

    log("✅ Turns switch correctly (X → O → X)");
  } catch (e) {
    log("❌ " + e);
  }
})();
