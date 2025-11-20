function log(msg) {
  document.getElementById("test-output").textContent += msg + "\n";
}

// 简单断言
function assertArrayEquals(expected, actual, message) {
  if (!Array.isArray(actual)) throw new Error(message + " | actual not array");
  if (expected.length !== actual.length)
    throw new Error(message + " | length mismatch");

  for (let i = 0; i < expected.length; i++) {
    if (expected[i] !== actual[i])
      throw new Error(message + ` | index ${i} mismatch`);
  }
}

function assertNull(actual, message) {
  if (actual !== null) throw new Error(message + " | expected null");
}

// 运行测试
(function testGetWinLine() {
  log("=== Testing getWinLine(board) ===");

  // 1. 顶行胜利
  try {
    const board = ["X","X","X","","","","","",""];
    const expected = [0,1,2];
    assertArrayEquals(expected, getWinLine(board), "Top row win failed");
    log("✅ Top row win detected");
  } catch (e) { log("❌ " + e); }

  // 2. 对角线胜利
  try {
    const board = ["O","","","", "O","", "", "", "O"];
    const expected = [0,4,8];
    assertArrayEquals(expected, getWinLine(board), "Diagonal win failed");
    log("✅ Diagonal win detected");
  } catch (e) { log("❌ " + e); }

  // 3. 没有胜利
  try {
    assertNull(getWinLine(["","","","","","","","",""]), "Null win failed");
    log("✅ No winner returns null");
  } catch (e) { log("❌ " + e); }
})();
