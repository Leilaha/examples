var eResults;
var eForm;

function output( s ){
     eResults.innerHTML += '<p>' + s + '</p>';
}
function errorOutput ( s ) {
     eResults.innerHTML += '<p class="error">' + s + '</p>';
}
function clearOutput(){
     eResults.innerHTML = '';
}
function display() {
     clearOutput();
     for( var i = 0; i < eForm.length; i++){
         var e = eForm.elements[i];
         output(e.value);
     }
     return false;
}
function init(){
    // initialize elements
    eResults = document.getElementById('res');
    eForm = document.getElementById('f1');
}
window.onload = init;
