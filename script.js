const switches = document.querySelectorAll(".switch");
const activate = document.querySelector("#activate");
const connection = document.querySelector("#connection");
const toast = document.querySelector("#toast");

let toastTimer;

function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("show");
  toastTimer = setTimeout(() => toast.classList.remove("show"), 1600);
}

switches.forEach((button) => {
  button.addEventListener("click", () => {
    const active = button.classList.toggle("active");
    button.setAttribute("aria-pressed", String(active));
    showToast(`${button.dataset.name} : ${active ? "ON" : "OFF"}`);
  });
});

activate.addEventListener("click", () => {
  const active = activate.classList.toggle("active");

  activate.textContent = active
    ? "PROTECTION ACTIVE"
    : "ACTIVATE PROTECTION";

  connection.textContent = active ? "SECURED" : "ON";
  showToast(active ? "PROTECTION ACTIVATED" : "PROTECTION DEACTIVATED");
});
