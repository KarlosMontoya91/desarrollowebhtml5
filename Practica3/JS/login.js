function Comprobar() {

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    switch (email) {
        case "carlosm@gmail.com":
            if (password === "12345") {
                alert("Sesion Iniciada");
                window.location = "https://www.youtube.com/";
                return;
            }
            alert("Contraseña Incorrecta")
            break;

        case "fabianc@gmail.com":
            if (password === "aaaaa") {
                alert("Sesion Iniciada");
                window.location = "https://www.youtube.com/";
                return;
            }
            alert("Contraseña Incorrecta")
            break;

        case "reynaldo@gmail.com":
            if (password === "12345") {
                alert("Sesion Iniciada");
                window.location = "https://www.youtube.com/";
                return;
            }
            alert("Contraseña Incorrecta")
            break;

        default:
            alert("El Usuario no existe");
            break;
    };
};

function Redireccion() {

}