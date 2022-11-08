function validar() {
    var ret_email = validar_email();
    var ret_pass1 = validar_pass1();
    var ret_pass2 = validar_pass2();
    var ret_aficion = validar_afic();
    var ret_addr = validar_addr();
    var ret_fono = validar_fono();
   // var ret_url = validar_url();
    var ret_select = validar_select();
    var ret_check = validar_check();

    return ret_email && ret_pass1 && ret_pass2 && ret_addr && ret_fono && ret_select && ret_aficion && ret_check;
}

function validar_check() {
    var check = document.getElementById("check");
    var div = document.getElementById("msj_check");
    if(check.checked == true){
        div.innerText = "";
        div.className = "";
        return true;
    } else {
        div.innerText = 'Debe aceptar las condiciones de uso';
        div.className = 'm-2 text-danger';
        return false;
    }
}

function validar_email() {
    var input = document.getElementById("email");
    var div = document.getElementById("msj_email");
    if (input.value != "") {
        if(input.value.length >= 5) {
            var correo = input.value;
            var pos_arroba = correo.indexOf('@');
            var pos_punto = correo.lastIndexOf('.');
            var arr_correo = correo.split('.');
            var extension = arr_correo[arr_correo.length - 1];
            if(pos_arroba > 3 && (pos_punto - pos_arroba) > 1 && extension.length > 1) {
                div.innerText = "";
                div.className = "";
                return true;
            } else {
                div.innerText = 'El campo "Correo electrónico" no tiene un formato válido';
                div.className = 'm-2 text-danger';
                return false;
            }
        } else {
            div.innerText = 'El campo "Correo electrónico" debe tener al menos 5 carcteres';
            div.className = 'm-2 text-danger';
            return false;
        }
    } else {
        div.innerText = 'El campo "Correo electrónico" es obligatorio';
        div.className = 'm-1 text-danger';
        return false;
    }
    
}



function validar_fono() {
    var input = document.getElementById("fono").value;
    var div = document.getElementById("msj_fono");
    if(input.value != "") {
        div.innerText = "";
        div.className = "";
        return true;
    } else {
        div.innerText = 'Ingrese un número de teléfono';
        div.className = 'm-2 text-danger';
        return false;
    }
}

function validar_pass1() {
    var input = document.getElementById("pass1");
    var div = document.getElementById("msj_pass1");
    if(input.value != "") {
        if(input.value.length >= 3) { 
            if(input.value.length <= 6) {
                div.innerText = "";
                div.className = "";
                return true;
            } else {
                div.innerText = 'La contraseña debe tener entre 3 y 6 caracteres';
                div.className = 'm-2 text-danger';
                return false;
            }  
        } else {
            div.innerText = 'La contraseña debe tener entre 3 y 6 caracteres';
            div.className = 'm-2 text-danger';
            return false;
        }
    } else {
        div.innerText = 'Ingrese una contraseña';
        div.className = 'm-2 text-danger';
        return false;
    }
}

function validar_pass2() {
   var input1 = document.getElementById("pass1");
   var input2 = document.getElementById("pass2");
   var div = document.getElementById("msj_pass2");
   if (input2.value != "") {
    if(input2.value===input1.value) {
            div.innerText = "";
            div.className = "";
            return true;
   } else {
    div.innerText = "Las contraseñas deben coincidir";
    div.className = 'm-2 text-danger';
    return false;
   }
    } else {
        div.innerText = "Debe confirmar Contraseña";
        div.className = 'm-2 text-danger';
        return false;
   }
}

function validar_url() {
    var input = document.getElementById("url");
    var div = document.getElementById("msj_url");
     
        if(input.value.length >= 5) {
            var url = input.value;
            var pos_https = url.indexOf('h');
            var pos_punto = url.lastIndexOf('.');
            var arr_url = url.split('.');
            var extension = arr_url[arr_url.length - 1];
            if(pos_https == 1 ) {
                div.innerText = "";
                div.className = "";
                return true;
            } else {
                div.innerText = 'El campo "URL" no tiene un formato válido';
                div.className = 'm-2 text-danger';
                return false;
            }
        } else {
            div.innerText = 'El campo URL "debe tener al menos 5 carcteres';
            div.className = 'm-2 text-danger';
            return false;
        }
    
    
}


function validar_addr() {
    var input = document.getElementById("addr")
    var div = document.getElementById("msj_addr")
    if (input.value != "") {
        div.innerText = "";
        div.className = "";
        return true;
    } else {     
        div.innerText = 'Por favor ingrese una dirección';
        div.className = 'm-2 text-danger';
    return false; 
    } 
}

function validar_select() {
    var comuna = document.getElementById("comuna")
    var invalid = comuna.value == "Elija una..."
    var div = document.getElementById("msj_comuna")
    if(invalid) {
        div.innerText = "Por favor seleccione una comuna";
        div.className = 'm-2 text-danger';
        return false
    } else {
        return true
    }   
}


var aficiones = [];
function agregar() {
    var div = document.getElementById("msj_lista");
    var nom = document.getElementById("afic").value;
    if (nom != "") {
        var aficion = {
            aficin : nom
        };
        aficiones.push(aficion);
        actualizar();
        limpiar();
    }
}

function actualizar() {
    var ul = document.getElementById("lista");
    ul.innerHTML = "";
    for (var i = 0; i < aficiones.length; i++) {
        var li = document.createElement("li");
        li.innerText = aficiones[i].aficin + " ";
        li.className = "list-group-item";
        li.id = i;
        li.addEventListener("click", function(){
            this.remove();
            aficiones.splice(this.id, 1);
        });
        ul.appendChild(li);
    }
}

function limpiar() {
    document.getElementById("afic").value = "";
}

function validar_afic() {
    var largo = aficiones.length;
    var div = document.getElementById("msj_lista");
    if (largo.length >= 2) {
        return true;
    } else {
        div.innerText = "Debe ingresar al menos 2 aficiones";
        div.className = 'm-2 text-danger';
        return false;
    }
}