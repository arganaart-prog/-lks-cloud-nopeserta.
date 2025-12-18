function onFormSubmit() {
    var formData = readFormData();
    insertNewRecord(formData);
}

function readFormData() {
    var formData = {};
    formData.fullName = document.getElementById("NamaLengkap").value;
    formData.empCode = document.getElementById("CodePerorangan").value;
    formData.salary = document.getElementById("Bayaran").value;
    formData.city = document.getElementById("Kota").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document
        .getElementById("ListPerorangan")
        .getElementsByTagName("tbody")[0];

    var newRow = table.insertRow();
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.empCode;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salary;
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.city;
    var cell5 = newRow.insertCell(4);
    cell5.innerHTML =`<a href="#" onclick="onEdit(this)">Edit</a>
                        <a href="#" onclick="onDelete(this)">Delete</a>
`;
}
