// INIT DATA
let profit = 12.5;
let pnl = -1.2;

// AI CHAT MARKET
function askAI() {
  let input = document.getElementById("aiInput").value;
  let output = "";

  if (input.toLowerCase().includes("ihsg")) {
    output = "IHSG sideways dengan potensi volatilitas tinggi.";
  } 
  else if (input.toLowerCase().includes("bull")) {
    output = "Market cenderung bullish short-term.";
  } 
  else if (input.toLowerCase().includes("bear")) {
    output = "Tekanan jual masih dominan di market.";
  } 
  else {
    output = "AI: Data belum cukup, tapi momentum aktif.";
  }

  document.getElementById("aiAnswer").innerText = output;
}

// SIGNAL ENGINE
function generateSignal() {
  const stocks = ["BBRI", "TLKM", "ASII", "ANTM", "GOTO"];
  const signalType = ["BUY 🔼", "SELL 🔽", "HOLD ⏸"];

  let stock = stocks[Math.floor(Math.random() * stocks.length)];
  let signal = signalType[Math.floor(Math.random() * signalType.length)];
  let confidence = Math.floor(Math.random() * 40) + 60;

  document.getElementById("signalBox").innerHTML = `
    <h3>${stock}</h3>
    <p>Signal: ${signal}</p>
    <p>Confidence AI: ${confidence}%</p>
    <p>Entry: Simulated</p>
    <p>TP / SL: Auto calculated</p>
  `;
}

// INIT DASHBOARD VALUE
document.addEventListener("DOMContentLoaded", () => {
  let p = document.getElementById("profit");
  let d = document.getElementById("pnl");

  if (p) p.innerText = "+" + profit + "%";
  if (d) d.innerText = pnl + "%";
});
