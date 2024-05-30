document.addEventListener('DOMContentLoaded', function() {
    alert('Bienvenido a HUELLITAS!');})
    
document.getElementById('INICIO').addEventListener('click', function(event) {
    window.location.href = 'HUELLITAS.html';
    alert('Bienvenido a la página de Inicio'); 
});
document.getElementById('SOBRE NOSOTROS').addEventListener('click', function(event) {
    setTimeout(function(){
alert('Bienvenido a la página de sobre nos0tros');
 window.location.href = 'sobre nosotros.html';},100)
});    
document.getElementById('CONTACTO').addEventListener('click', function(event) {
    window.location.href = 'contacto.html';
alert('Bienvenido a la página de Contacto');
});