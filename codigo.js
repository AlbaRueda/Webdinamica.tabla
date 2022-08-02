var myTable = document.querySelector("table"); 
       function agregarFila(){ 
        var row = myTable.insertRow(myTable.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        cell1.innerHTML = '<input type="text">';
        cell2.innerHTML = '<input type="text">';;
        cell3.innerHTML = '<input type="text">';;
        cell4.innerHTML = '<input type="text">';;
       }
  
       