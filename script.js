const endDate = "01 January 2025 12:17 AM";
document.getElementById("end-date").innerText = endDate;

const inputs = document.querySelectorAll("input");

function clock() {
  const end = new Date(endDate);
  const now = new Date();
  const diff = (end - now) / 1000;
  console.log(diff);
  if (diff < 0) return;
  //days
  inputs[0].value = Math.floor(diff / 3600 / 24);
  //hours
  inputs[1].value = Math.floor(diff / 3600) % 24;
  //Minutes
  inputs[2].value = Math.floor(diff / 60) % 60;
  //Seconds
  inputs[3].value = Math.floor(diff) % 60;
}

clock();

setInterval(() => {
  clock();
});
