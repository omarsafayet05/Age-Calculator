const inputDate = document.querySelector("input");
const pElement = document.querySelector("p");

inputDate.addEventListener("change", () => {
  const birthDate = new Date(inputDate.value);
  const currentDate = new Date();
  const age = new Date(currentDate - birthDate);

  const years = age.getFullYear() - 1970;
  const months = age.getMonth();
  const days = age.getDay() - 1;

  pElement.innerText = `Your age ${years} years ${months} months ${days} days`;
});
