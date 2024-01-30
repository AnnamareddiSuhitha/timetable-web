function myFunction(selectbranch) {
  let tables = document.querySelectorAll(".vdata-table");
  tables.forEach(function (table) {
    table.style.display = "none";
  });
  let datatables = document.querySelectorAll(".hdata-table");
  datatables.forEach(function (table) {
    table.style.display = "none";
  });

  let value = selectbranch.value;

  document.getElementById(value + "-" + getDayOfWeek()).style.display = "";
  document.getElementById(value + getDayOfWeek()).style.display = "";
}

function getDayOfWeek() {
  const date = new Date();
  let dayOfWeek = date.getDay();
  if (dayOfWeek === 0) {
    dayOfWeek = 7;
  }
  if (date.getHours() >= 18) {
    dayOfWeek += 1;
    if (dayOfWeek === 8) {
      dayOfWeek = 1;
    }
  }
  return dayOfWeek;
}
