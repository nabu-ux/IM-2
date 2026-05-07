async function loadData() {
  const url = "https://api.api-onepiece.com/v2/characters/en"; // mit korrekter API-URL ersetzen
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error(error);
    return false;
  }
}
const data = loadData();
console.log(data);

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    console.log("Ein Button wurde geklickt");
  });
});