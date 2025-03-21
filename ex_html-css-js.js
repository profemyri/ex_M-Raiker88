document.getElementById("oscuro").onclick = function(){
    document.body.classList.toggle("oscuro");
}

let formulario = document.getElementById("pescaitoform");
formulario.onsubmit = function(e){
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("email").value;
    let direccion = document.getElementById("direccion").value;
    let telefono = document.getElementById("telefono").value;
    if(nombre.length == 0 || !correo.includes("@") || direccion.length < 18 || telefono.length == 9){
        e.preventDefault();
    }
    let respuesta = confirm("¿Quieres confirmar tu pedido?");
    console.log(respuesta);
    alert("gracias por enviar tu pedido," + nombre);
    if(!respuesta){
        e.preventDefault();
    }
}
let contador = document.getElementById("instrucciones") = function(){
document.getElementById("contador").oninput("contador").body.classList.style;
}



