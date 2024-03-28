// usuarios

let usuariosRegistrados = [{userEmail:'user1@gmail.com', userPassword:'12345'}, {userEmail:'user2@gmail.com', userPassword:'54321'}];

document.getElementById('formulario').addEventListener('submit', function(e){e.preventDefault();

    // capturar credenciales ingresadas
    let userEmail = document.getElementById('userEmail').value;
    let userPassword = document.getElementById('password').value;


    // Validar credenciales ingresadas
    let usuarioBD = usuariosRegistrados.find(function(user){
        return user.userEmail == userEmail && user.userPassword == userPassword;
    });

    if (usuarioBD) {
        window.location.href = 'menu.html';
    } else {
        let noExiste = document.getElementById('error');
        noExiste.textContent = 'Usuario o contraseña incorrectos, intente nuevamente.'
    }
})  