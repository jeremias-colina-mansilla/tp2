const formulario = $('formulario')
const mensaje = $('mensaje')
formulario.addEventListener('submit', (e)=> {
    e.preventDefault()
    const edad = +formulario["edad"].value
    const correo = formulario["correo"].value
    if(edad < 18 && !correo.includes("@"))
        {
        mensaje.innerText = 'Recuerde ingresar una edad mayor o igual a 18, el correo debe incluir una @'
        mensaje.style.color = red
        }
    else if (edad < 18)
        {
        mensaje.innerText = 'Recuerde ingresar una edad mayor o igual a 18'
        mensaje.style.color ="red"
        }
    else{
        mensaje.innerText="Validado Correctamente"
        mensaje.style.color="Green"
    };
    
})

function $(elemento){
    return document.getElementById(elemento)
}