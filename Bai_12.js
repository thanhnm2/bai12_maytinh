function Addlition(){
    let bien1 = +document.getElementById('bien1').value;
    console.log(bien1);
    let bien2 = +document.getElementById('bien2').value;
    document.getElementById('thanh').innerHTML = bien1 + bien2;
}
function Subtraction(){
    let bien1 = +document.getElementById('bien1').value;
    let bien2 = +document.getElementById('bien2').value;
    document.getElementById('thanh').innerHTML = bien1 - bien2;
}
function Multiplication(){
    let bien1 = +document.getElementById('bien1').value;
    let bien2 = +document.getElementById('bien2').value;
    document.getElementById('thanh').innerHTML = bien1 * bien2;
}
function Division(){
    let bien1 = +document.getElementById('bien1').value;
    let bien2 = +document.getElementById('bien2').value;
    document.getElementById('thanh').innerHTML = bien1 / bien2;
}
