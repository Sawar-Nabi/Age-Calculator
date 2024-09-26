const age_input = document.querySelector("#age_input");
const form = document.querySelector("form");
const output_para = document.querySelector(".output_para");
const ul = document.querySelector("ul");

// stop Select Future Date
age_input.max = new Date().toISOString().split("T")[0];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const li = document.createElement("li");
  const birthDayValue = new Date(age_input.value);

  console.log(age_input.value);

  let birthDay = birthDayValue.getDate();
  let birthMonth = birthDayValue.getMonth() + 1;
  let birthYear = birthDayValue.getFullYear();

  const current_Date = new Date();

  let currentDay = current_Date.getDate();
  let currentMonth = current_Date.getMonth() + 1;
  let currentYear = current_Date.getFullYear();

  let year, month, day;

  year = currentYear - birthYear;

  if (currentMonth >= birthMonth) {
    month = currentMonth - birthMonth;
  } else {
    year--;
    month = 12 + currentMonth - birthMonth;
  }

  if (current_Date >= birthDay) {
    day = currentDay - birthDay;
  } else {
    month--;
    day = getDayInMonth(birthYear, birthMonth) + currentDay - birthDay;
  }

  output_para.innerHTML = `You are <span >${year}</span> Years, <span>${month}</span> Months and <span>${day}</span> Days old`;

  // Show  Days months seconds in web page
  let totalMonths = year * 12 + month;
  const yearToMilisec = current_Date - birthDayValue;
  let totalDays = Math.floor(yearToMilisec / (1000 * 60 * 60 * 24));
  let totalHours = Math.floor(yearToMilisec / (1000 * 60 * 60));
  let totalMiniues = Math.floor(yearToMilisec / (1000 * 60));
  let totalSeconds = Math.floor(yearToMilisec / 1000);

  ul.innerHTML = `
  <li>${totalMonths} Months</li>
  <li>${totalDays} Days</li>
  <li>${totalHours} Hours</li>
  <li>${totalMiniues} Minutes</li>
  <li>${totalSeconds} Seconds</li>
  `;
});

const getDayInMonth = (year, month) => {
  return new Date(year, month, 0).getDate();
};
