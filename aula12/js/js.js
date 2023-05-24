function salvar(){
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    
    let data = document.getElementById('data').value;
    let uf = document.querySelector('#uf');
    let output = uf.value;
    
    let table = document.getElementById('table');
    let row = table.insertRow();
    let cell0 = row.insertCell(0);
    let cell1 = row.insertCell(1);
    let cell2 = row.insertCell(2);
    let cell3 = row.insertCell(3);
    let cell4 = row.insertCell(4);
    cell0.innerHTML = nome;
    cell1.innerHTML = email;
    cell2.innerHTML = data;
    cell3.innerHTML = output;
    cell4.innerHTML = '<i class="bi bi-pencil-square"></i>';
}
function limpar(){
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('data').value = '';
    document.getElementById('numero').value = '';
    document.getElementById('pass').value = '';
    document.getElementById('uf').value = '';
}