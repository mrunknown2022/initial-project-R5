document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault(); 
  
    const name = document.getElementById('user_name').value;
    const email = document.getElementById('user_email').value;
    const role = document.getElementById('user_role').value;
  
    if (name && email) {
      alert(`Name: ${name}\nEmail: ${email}`);
      addUser(name, email, role);
    } else {
      alert("Please fill in both name and email.");
    }
  });
  
  function addUser(name, email, role) {
    const table = document.getElementById('userList');
    const rowCount = table.rows.length;
    const row = table.insertRow(rowCount);
    row.insertCell(0).innerHTML = rowCount;
    row.insertCell(1).innerHTML = name;
    row.insertCell(2).innerHTML = email;
    row.insertCell(3).innerHTML = role;
    const actions = row.insertCell(4);
    actions.innerHTML = '<i class="fa fa-pencil-square-o text-[#3b82f6] font-[600] text-[17px] mr-1" aria-hidden="true" onclick="editUser(this)"></i>' +
                        '<i class="fa fa-trash-o text-[red] font-[600] text-[17px]" aria-hidden="true" onclick="removeUser(this)"></i>';
  }
  
  function removeUser(element) {
    const row = element.parentElement.parentElement;
    row.parentNode.removeChild(row);
  }
  
  function editUser(element) {
    const row = element.parentElement.parentElement;
    const name = prompt("Enter new name", row.cells[1].innerText);
    const email = prompt("Enter new email", row.cells[2].innerText);
    if (name && email) {
      row.cells[1].innerText = name;
      row.cells[2].innerText = email;
    }
  }
  