(function () {
  let itemsWithoutUnderscore = {};
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    if (key.indexOf("_") !== 0) {
      // преобразуем значение из localStorage в объект
      itemsWithoutUnderscore[key] = JSON.parse(localStorage.getItem(key));
    }
  }
  let table = document.createElement("table");
  let thead = document.createElement("thead");
  let tbody = document.createElement("tbody");

  // создаем строку заголовков
  let headerRow = document.createElement("tr");
  let headerUsername = document.createElement("th");
  headerUsername.textContent = "Имя пользователя";
  headerRow.appendChild(headerUsername);
  let headerScore = document.createElement("th");
  headerScore.textContent = "Счет";
  headerRow.appendChild(headerScore);
  let headerTotalGameTime = document.createElement("th");
  headerTotalGameTime.textContent = "Время игры";
  headerRow.appendChild(headerTotalGameTime);
  thead.appendChild(headerRow);

  for (let key in itemsWithoutUnderscore) {
    let row = document.createElement("tr");

    let cellUsername = document.createElement("td");
    cellUsername.textContent = key;
    row.appendChild(cellUsername);

    let cellScore = document.createElement("td");
    cellScore.textContent = itemsWithoutUnderscore[key].score;
    row.appendChild(cellScore);

    let cellTotalGameTime = document.createElement("td");
    cellTotalGameTime.textContent = itemsWithoutUnderscore[key].totalGameTime;
    row.appendChild(cellTotalGameTime);

    row.style.borderBottom = "1px solid #ddd";

    cellUsername.style.padding = "10px";
    cellUsername.style.border = "1px solid #ddd";

    cellScore.style.padding = "10px";
    cellScore.style.border = "1px solid #ddd";

    cellTotalGameTime.style.padding = "10px";
    cellTotalGameTime.style.border = "1px solid #ddd";

    tbody.appendChild(row);
  }

  table.appendChild(thead);
  table.appendChild(tbody);
  document.body.appendChild(table);

  table.style.width = "100%";
  table.style.borderCollapse = "collapse";

  tbody.style.fontSize = "18px";
  tbody.style.color = "#333";
})();
