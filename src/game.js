//the idea for this part is not from me even though I wrote this again. This is for learning database stuff

var counter = 0;

var body = document.body,
  table = document.createElement("table");

function createTable() {
  console.log("Initializing");
  for (var i = 0; i < 5; i++) {
    var tableRow = table.insertRow();
    for (var j = 0; j < 5; j++) {
      if (i === 1 && j === 5) {
        break;
      } else {
        var tableCell = tableRow.insertCell();
        var cellText = document.createTextNode("");
        tableCell.appendChild(cellText);
        if (i === 1 && j === 1) {
          tableCell.setAttribute("rowSpan", "1");
        }
      }
    }
  }
}

createTable();
body.appendChild(table);
onclick(table);

function onclick(table) {
  for (var i = 0; i < table.rows.length; i++) {
    for (var j = 0; j < table.rows[i].cells.length; j++) {
      table.rows[i].cells[j].onclick = function() {
        tableText(this);
      };
    }
  }
}

function tableText(tableCell) {
  if (counter % 2 === 0) {
    if (tableCell.innerHTML === "") {
      tableCell.style.backgroundColor = "rgb(124, 252, 0)";
      tableCell.innerHTML = "X";
      checkWinner(table);
      counter++;
    }
  } else {
    if (tableCell.innerHTML === "") {
      tableCell.innerHTML = "O";
      tableCell.style.backgroundColor = "rgb(250, 128, 114)";
      checkWinner(table);
      counter++;
    }
  }
}

function checkWinner(table) {
  var cumulative = ["X", "O"];

  for (var i = 0; i < 2; i++) {
    var linear1 = 0;
    var linear2 = 0;
    var linear3 = 0;
    var linear4 = 0;
    var linear5 = 0;
    var up1 = 0;
    var up2 = 0;
    var up3 = 0;
    var up4 = 0;
    var up5 = 0;
    var cross1 = 0;
    var cross2 = 0;

    for (var j = 0; j < 5; j++) {
      if (table.rows[0].cells[j].innerHTML === cumulative[i]) {
        linear1++;
      }
      if (table.rows[1].cells[j].innerHTML === cumulative[i]) {
        linear2++;
      }
      if (table.rows[2].cells[j].innerHTML === cumulative[i]) {
        linear3++;
      }
      if (table.rows[3].cells[j].innerHTML === cumulative[i]) {
        linear4++;
      }
      if (table.rows[4].cells[j].innerHTML === cumulative[i]) {
        linear5++;
      }
      if (table.rows[j].cells[0].innerHTML === cumulative[i]) {
        up1++;
      }
      if (table.rows[j].cells[1].innerHTML === cumulative[i]) {
        up2++;
      }
      if (table.rows[j].cells[2].innerHTML === cumulative[i]) {
        up3++;
      }
      if (table.rows[j].cells[3].innerHTML === cumulative[i]) {
        up4++;
      }
      if (table.rows[j].cells[4].innerHTML === cumulative[i]) {
        up5++;
      }
      if (table.rows[j].cells[j].innerHTML === cumulative[i]) {
        cross1++;
      }
      var reduce = 4 - j;
      if (table.rows[j].cells[reduce].innerHTML === cumulative[i]) {
        cross2++;
      }
    }

    if (
      linear1 === 5 ||
      linear2 === 5 ||
      linear3 === 5 ||
      linear4 === 5 ||
      linear5 === 5 ||
      up1 === 5 ||
      up2 === 5 ||
      up3 === 5 ||
      up4 === 5 ||
      up5 === 5 ||
      cross1 === 5 ||
      cross2 === 5
    ) {
      if (cumulative[i] === "X") {
        alert("Player 1 won!");
        clearTable(table);
        counter = 1;
      }

      if (cumulative[i] === "O") {
        alert("Player 2 won!");
        clearTable(table);
        counter = 1;
      }
    }
  }
}

function clearTable(table) {
  for (var i = 0; i < table.rows.length; i++) {
    for (var j = 0; j < table.rows[i].cells.length; j++) {
      table.rows[i].cells[j].innerHTML = "";
    }
  }

  for (var k = 0, row; (row = table.rows[k]); k++) {
    for (var h = 0, col; (col = row.cells[h]); h++) {
      col.style.backgroundColor = "white";
    }
  }
}
