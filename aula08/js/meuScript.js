function displayRadioValue(){
    let elemento = document.getElementsByName('gender');
    for(let i=0;i<elemento.length;i++){
        if(elemento[i].checked){
            document.getElementById('result').innerHTML = "Gênero selecionado: " + elemento[i].value;
        }
    }
}
function getCheckBox(){
    let checkBox = document.querySelectorAll('input[type="checkbox"]:checked');
    let texto = "";
    for(let i = 0;i<checkBox.length;i++){
        if(i!=0){
            texto += ", " +checkBox[i].value ;
        }else{
            texto = checkBox[i].value ;
        }
    }
    document.getElementById('pri').innerHTML = texto;
}
function getOption(){
    let selectElement = document.querySelector('#select1'); //seleciona por id igual no css
    let output = selectElement.value;
    document.querySelector('.output').textContent = output; //seleciona por classe
}
