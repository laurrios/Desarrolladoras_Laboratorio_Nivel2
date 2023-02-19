//Sólo he conseguido que me funcione la aparición de la confirmación 
// el resto aunque he entendido el temario, se me ha quedado corto el 
// tiempo para continuar haciendo comprobaciones
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    nombre: /^[a-zA-Z\s]{2,50}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-.]+$/,
    clave: /^.{8,50}$/,
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombre"://me confirma que los caracteres introducidos son los indicados y me confirma que numeros no son validos
            if(expresiones.nombre.test(e.target.value)){
                document.getElementById('camponombre').classList.add('controlForma-correcto');
                document.querySelector('#camponombre img' .formulario_validacion-estado2).classList.remove('controlForma-incorrecto-activo');                              
            } else{
                document.getElementById('camponombre').classList.add('controlForma-incorrecto');
                document.getElementById('camponombre').classList.remove('subtitulo_input-error-activo');
                document.querySelector('#camponombre img' .formulario_input-error).classList.remove('formulario_grupo-incorrecto-activo');               
            }
        break;
        case "email"://me confirma que es un formato de email válido
            if(expresiones.email.test(e.target.value)){
                document.querySelector('#campoemail img').classList.add('controlForma-incorrecto'); 
                document.getElementById('campoemail').classList.add('controlForma-correcto');                
            } else{
                document.getElementById('campoemail').classList.remove('controlForma-incorrecto');     
                document.getElementById('campoemail').classList.remove('controlForma-correcto');             
           
            }
        break;
        case "clave"://me confirma que tiene mas de 8 caracteres
            if(expresiones.clave.test(e.target.value)){
                document.getElementById('campoclave').classList.add('controlForma-correcto');
                
            } else{
                document.getElementById('campoclave').classList.add('formulario_grupo-incorrecto');                
            }
        break;
        case "conficlave": //me confirma que tiene mas de 8 caracteres
            if(expresiones.clave.test(e.target.value)){
                document.getElementById('campoconficlave').classList.add('controlForma-correcto');
                
            } else{
                document.getElementById('campoconnficlave').classList.add('controlForma-incorrecto');                
            }       
        break;
    }
}
const validarconficlave = () => {
    const inputClave = document.getElementById('clave');
    const inputConficlave = document.getElementById('conficlave');

    if(inputClave.value !== inputConficlave.value){
        document.getElementById('campoconficlave').classList.add('controlForma-correcto');
    } else {

    }

}
inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);

    
});


formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    
});