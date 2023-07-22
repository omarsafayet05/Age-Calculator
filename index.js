const inputDate = document.querySelector("input");
const pElement = document.querySelector("p");

inputDate.addEventListener("change", () => {
  const birthDate = new Date(inputDate.value);
  const currentDate = Date.now();
  const age = new Date(currentDate - birthDate);

  const years = age.getFullYear() - 1970;
  const months = age.getMonth();
  const days = age.getDate() - 1;

  pElement.innerText = `Your age ${years} years ${months} months ${days} days`;
});

function myFunction() {
  inputDate.value = "";
  pElement.innerText = "Your age ___ years ___ months ___ days.";
}
