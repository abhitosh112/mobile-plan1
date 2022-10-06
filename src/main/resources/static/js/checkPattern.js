function validityPattern(){

}

function namePattern(val){
    var name = document.getElementById('name').value; 
    var name1 = document.getElementById('name');
    if(!/^[A-Za-z][A-Za-z0-9 -]*$/.test(name))
    {
        alert("wrong patter")
        name1.innerHTML=val;
    }
}