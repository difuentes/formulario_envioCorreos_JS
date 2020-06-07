//variables

const email = document.getElementById("email");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");
const btnEnviar = document.getElementById("enviar");

const formularioEnviar = document.getElementById('enviar-mail');

//event lisener
enventListener();

function enventListener()
{
    //DOMContentLoaded
    document.addEventListener('DOMContentLoaded',inicioApp);

    

    //campos del formulario
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur',validarCampo);
    email.addEventListener('blur', validarCampo);
  
    //btn enviar
    formularioEnviar.addEventListener('submit' ,enviarEmail);
}

//funciones 

//bloqueo btn enviar 
function inicioApp()
{
    btnEnviar.disabled = true;
}

//valida que el campo tenga algo escrito

function validarCampo()
{
    //se validad longitud del texto y campo no vacio
    validarLongitud(this);

    //validacion unica de email
    console.log(this.type)
    if(this.type === 'email' )
    {
        console.log("entra a if")
        validarEmail(this);
    }

    let errores = document.querySelectorAll('.error');
   
    if(email.value !== '' && asunto.value !== '' && mensaje.value !== '')
    {
        //comprobar que no hay errores en el formulario
        if(errores.length === 0)
        {
            btnEnviar.disabled = false;
        }
        
    }
   
}
//cuando se envia el corre
 
function enviarEmail(e)
{
    //spinner al presionar enviar
    const spinnerGif = document.querySelector('#spinner');
    spinnerGif.style.display = 'block';

    //git de email
    const enviado = document.createElement('img');
    enviado.src = 'img/mail.gif';
    enviado.style.display = 'block';

    //ocultar spinner y mostar gif

    setTimeout(function() {
        spinner.style.display='none';

        document.querySelector('#loaders').appendChild(enviado);

        setTimeout(function(){
            enviado.remove();
            formularioEnviar.reset();
        }, 3000);

    }, 3000);

    e.preventDefault();

}


//funcion validar longitud que sea mayor  a 0
function validarLongitud(campo)
{
    
    if(campo.value.length > 0)
    {
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    }
    else{
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}

//validar email
function validarEmail(campo)
{
    const mensaje = campo.value;
    console.log(mensaje);
    if(mensaje.indexOf('@') !== -1 )
    {
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    }
    else{
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}