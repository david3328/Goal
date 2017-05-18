function ingresarUsuario(user,pass){
    console.log('Usuario: ',user);
    console.log('Contraseña: ',pass);
    var parametros;
    parametros = {
        'usuario': user,
        'password': pass
    }
        
    $.ajax({
        data: parametros,
        url: 'js/controlador.js',
        type: 'post',
        success: function(respuesta){

        }
    });
}