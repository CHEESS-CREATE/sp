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
  const stocks = ["BBRI", "TLKM", "ASII", "ANTM", "GOTO", "BMRI"];
  const signals = ["BUY 🔼", "SELL 🔽"];
  const risk = ["LOW", "MEDIUM", "HIGH"];

  let stock = stocks[Math.floor(Math.random() * stocks.length)];
  let signal = signals[Math.floor(Math.random() * signals.length)];
  let entry = (1000 + Math.random() * 5000).toFixed(2);
  let tp = (parseFloat(entry) * 1.05).toFixed(2);
  let sl = (parseFloat(entry) * 0.97).toFixed(2);
  let rr = "1:" + (Math.random() * 3 + 1).toFixed(1);
  let confidence = Math.floor(Math.random() * 30) + 65;
  let riskLevel = risk[Math.floor(Math.random() * risk.length)];

  let color = signal.includes("BUY") ? "lime" : "red";

  document.getElementById("signalBox").innerHTML = `
    <div style="border:1px solid ${color}; padding:10px;">
      <h2>${stock}</h2>
      <h3 style="color:${color}">${signal}</h3>

      <p>Entry: ${entry}</p>
      <p>Take Profit: ${tp}</p>
      <p>Stop Loss: ${sl}</p>
      <p>Risk/Reward: ${rr}</p>
      <p>Confidence AI: ${confidence}%</p>
      <p>Risk Level: ${riskLevel}</p>
    </div>
  `;

  // popup alert
  alert(`NEW SIGNAL: ${stock} ${signal} (${confidence}%)`);
}

// INIT DASHBOARD VALUE
document.addEventListener("DOMContentLoaded", () => {
  let p = document.getElementById("profit");
  let d = document.getElementById("pnl");

  if (p) p.innerText = "+" + profit + "%";
  if (d) d.innerText = pnl + "%";
});
