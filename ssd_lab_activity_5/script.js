
const addnewbtn_element = document.getElementById('addnewbtn')
const deletebtn_element = document.getElementById('deletebtn')

addnewbtn_element.onclick = function(){
    const name = document.getElementById('name').value;
    const rollno = document.getElementById('rollno').value;
    const table_element = document.getElementById('table')
    
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    // Add some text to the new cells:
    cell1.innerHTML = rollno;
    cell2.innerHTML = name;
    document.getElementById('name').value = "";
    document.getElementById('rollno').value = "";
}

deletebtn_element.onclick = function(){
    const table = document.getElementById('table')
    var rowCount = table.rows.length;
    console.log(rowCount)
    if(rowCount >= 2){
        table.deleteRow(rowCount -1)
    }
}
