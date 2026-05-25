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

const stocks = ["BBRI", "TLKM", "ASII", "ANTM", "BMRI", "GOTO", "BBCA"];

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

// 🔥 SMART MONEY DETECTOR
function detectSmartMoney() {
  const events = [
    "BREAKOUT DETECTED",
    "VOLUME SPIKE INSTITUTIONAL",
    "ACCUMULATION PHASE",
    "FAKE BREAKOUT FILTERED",
    "REVERSAL SIGNAL",
    "UNUSUAL BUY ORDER FLOW"
  ];

  return events[Math.floor(Math.random() * events.length)];
}

// 📡 GENERATE AI SIGNAL PRO
function generateAISignal() {
  let stock = stocks[Math.floor(Math.random() * stocks.length)];

  let direction = Math.random() > 0.5 ? "BUY 🔼" : "SELL 🔽";

  let entry = rand(1000, 8000).toFixed(2);
  let tp = (entry * rand(1.03, 1.08)).toFixed(2);
  let sl = (entry * rand(0.95, 0.98)).toFixed(2);
  let rr = "1:" + rand(1, 3).toFixed(1);
  let confidence = Math.floor(rand(65, 95));
  let smartEvent = detectSmartMoney();

  let color = direction.includes("BUY") ? "lime" : "red";

  return `
    <div class="signal-card">
      <h2>${stock}</h2>
      <h3 style="color:${color}">${direction}</h3>

      <p>📍 Entry: ${entry}</p>
      <p>🎯 TP: ${tp}</p>
      <p>⛔ SL: ${sl}</p>
      <p>⚖ RR: ${rr}</p>
      <p>🧠 AI Confidence: ${confidence}%</p>

      <p style="color:gold">⚡ Smart Money: ${smartEvent}</p>
    </div>
  `;
}

// 📡 REALTIME SIGNAL FEED
function startRealtimeSignals() {
  const box = document.getElementById("signalBox");

  setInterval(() => {
    box.innerHTML = generateAISignal();

    showToast("NEW SMART MONEY SIGNAL DETECTED 🚨");
  }, 4000);
}

// 🔔 TOAST NOTIFICATION
function showToast(msg) {
  let toast = document.createElement("div");

  toast.innerText = msg;
  toast.className = "toast";

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// AUTO START kalau di signal page
if (window.location.pathname.includes("signal.html")) {
  window.onload = startRealtimeSignals;
}

// INIT DASHBOARD VALUE
document.addEventListener("DOMContentLoaded", () => {
  let p = document.getElementById("profit");
  let d = document.getElementById("pnl");

  if (p) p.innerText = "+" + profit + "%";
  if (d) d.innerText = pnl + "%";
});

// LOAD WATCHLIST
function getWatchlist() {
  return JSON.parse(localStorage.getItem("watchlist") || "[]");
}

// SAVE WATCHLIST
function saveWatchlist(list) {
  localStorage.setItem("watchlist", JSON.stringify(list));
}

// ADD STOCK
function addStock() {
  let input = document.getElementById("stockInput").value.toUpperCase();
  if (!input) return;

  let list = getWatchlist();

  if (!list.includes(input)) {
    list.push(input);
  }

  saveWatchlist(list);
  renderWatchlist();
}

// REMOVE STOCK
function removeStock(stock) {
  let list = getWatchlist().filter(s => s !== stock);
  saveWatchlist(list);
  renderWatchlist();
}

// RENDER
function renderWatchlist() {
  let box = document.getElementById("watchlistBox");
  if (!box) return;

  let list = getWatchlist();

  box.innerHTML = list.map(stock => `
    <div class="watch-item">
      <span>${stock}</span>
      <button onclick="removeStock('${stock}')">X</button>
    </div>
  `).join("");
}

// AUTO LOAD
if (window.location.pathname.includes("watchlist.html")) {
  window.onload = renderWatchlist;
}
