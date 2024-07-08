let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}
function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// script.js
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Simulate sending verification code
    alert('Código de verificación enviado a su correo electrónico.');
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('verificationContainer').style.display = 'block';
});

document.getElementById('verificationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Simulate verifying the code
    alert('Correo electrónico verificado. Registro completo.');
});

document.getElementById('resetForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Simulate sending password reset email
    alert('Código de recuperación enviado a su correo electrónico.');
});

document.getElementById('googleLogin').addEventListener('click', function() {
    alert('Iniciar sesión con Google (simulado)');
});

document.getElementById('facebookLogin').addEventListener('click', function() {
    alert('Iniciar sesión con Facebook (simulado)');
});


function mostrarURL() {
    var url = window.location.href;
    document.getElementById('url').textContent = "URL actual de la página: " + url;
}
