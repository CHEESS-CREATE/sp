const VIP_PASSWORD = "SAHAMPROVIP";

function login() {
  let input = document.getElementById("pass").value;

  if (input === VIP_PASSWORD) {
    localStorage.setItem("vip", "true");
    window.location.href = "index.html";
  } else {
    document.getElementById("msg").innerText = "❌ Password salah";
  }
}

// proteksi dashboard
function checkVIP() {
  let vip = localStorage.getItem("vip");

  if (!vip) {
    window.location.href = "login.html";
  }
}

// auto run protection
if (window.location.pathname.includes("index.html")) {
  checkVIP();
}
