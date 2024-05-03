const tableParams = document.getElementById('tableParams');
const tableParamsBody = document.getElementById('tableParams').getElementsByTagName('tbody')[0];
const btnParse = document.getElementById("btnParse");

btnParse.addEventListener("click",btnParseClick,false);
function btnParseClick() {
  //split by ?
  //split by &
  //detemine if there are sublevels
  //y - repeat split by ? and &
  
  tableParamsBody.innerText = "";
  let text = txtURI.value;
  let textURIDecoded = decodeURIComponent(text);

  const arrQueryString = textURIDecoded.split("?");
  if (arrQueryString.length > 1){
    let queryString = arrQueryString[1];
    const arrParams = queryString.split("&");

    //let headerRow = document.createElement("tr");
    var headerRow = tableParams.insertRow(0);
    let headerCell1 = document.createElement("th");
    headerCell1.textContent = "Query String Parameter";
    headerCell1.setAttribute("width", "20%");
    let headerCell2 = document.createElement("th");
    headerCell2.textContent = "Value";
    headerRow.appendChild(headerCell1);
    headerRow.appendChild(headerCell2);
    //tableParams.insertRow(headerRow);

    if (arrParams.length > 0){
      var i = 0, len = arrParams.length;
      while (i < len) {
        var newRow = tableParamsBody.insertRow(tableParamsBody.rows.length);
        param = arrParams[i];
        const arrKeyValue = param.split("=");
        if (arrKeyValue.length > 0){
          var key = arrKeyValue[0];
          var keyCell = newRow.insertCell(0);
          
          var keyText = document.createTextNode(key);
          keyCell.appendChild(keyText);
          var value = arrKeyValue[1];
          var valueCell = newRow.insertCell(1);
          var valueText = document.createTextNode(value);
          valueCell.appendChild(valueText);
        }
        i++;
      }
    }
  }
  

};

let tableResults = document.getElementById("tableResults");


window.addEventListener("load", (event) => {
  txtURI.focus();
});