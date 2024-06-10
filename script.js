document.addEventListener("DOMContentLoaded", (event) => {
  const codeElement = document.getElementById("code");
  const keyElement = document.getElementById("key");
  const keycodeElement = document.getElementById("keycode");

  document.addEventListener("keydown", (event) => {
    codeElement.textContent = `.code: ${event.code}`;
    keyElement.textContent = `.key: ${event.key}`;
    keycodeElement.textContent = `.keycode: ${event.keycode}`;
  });
});
