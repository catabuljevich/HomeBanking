//Declaración de variables
var nombreUsuario = 'Catalina Buljevich';
var saldoCuenta = 2000; 
var limiteExtraccion = 5000;
iniciarSesion();

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}


function sumaDinero () {
    var nro1 = prompt('Ingrese valor del deposito');
    saldoCuenta  = saldoCuenta + Number(nro1);
}

function restaDinero() {
    var nro2 = prompt('Ingrese el valor que desea extraer');
    saldoCuenta = saldoCuenta - Number(nro2);
}


function obtenerValor(mensaje){
    var valor = prompt(mensaje);
    return valor === null || isNaN(Number(valor)) || Number(valor) <= 0 ? 0 : Number(valor);
}
    
//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    var nuevoLimite = obtenerValor ('Ingrese nuevo limite de extracción');
    limiteExtraccion = nuevoLimite;
    alert ('Su nuevo limite de extracción es: $' + limiteExtraccion); 
    actualizarLimiteEnPantalla ();

}

function extraerDinero() {
    var montoARetirar = obtenerValor ('Cuanto dinero quiere retirar?');
    
    if (montoARetirar > saldoCuenta){
        alert('No hay saldo disponible para extraer esa cantidad de dinero');
        return; 
    }
    
    if (montoARetirar % 100 != 0){
        alert ('El cajero solo entrega billetes de $100');
        return;   
    } 

    if (montoARetirar > limiteExtraccion){
        alert ('El monto que desea retirar es mayor a limite de extracción');
        return;
    }

    saldoAnt = saldoCuenta;
    saldoCuenta = saldoCuenta - Number (montoARetirar);
    alert ('Has Retirado $' + montoARetirar + '\n' + 'Saldo anterior $' + saldoAnt + '\n' + 'Saldo Actual $' + saldoCuenta + '\n');
    actualizarSaldoEnPantalla();
}

function depositarDinero() {
    var cantidadDepositada = obtenerValor ('Cuanto dinero quiere depositar?');

    if (cantidadDepositada) {
        var saldoAnt = saldoCuenta;
        saldoCuenta  = saldoCuenta + Number(cantidadDepositada);
        alert('Has depositado $ ' + cantidadDepositada + '\n'+  'Saldo anterior $'+ saldoAnt +'\n' +'Saldo actual $'+ saldoCuenta +'\n');
        actualizarSaldoEnPantalla();
    } else {
        alert ('No ingresó un carater valido');
    }
    
}

function pagarServicio() {
    var servicioAgua = 350;
    var servicioTelefono =  425;
    var servicioLuz = 210; 
    var servicioInternet = 570; 

    var servicio = prompt('Ingrese el numero que corresponda con el servicio que quiere pagar: \n 1-Agua \n 2-Luz \n 3-Internet \n 4-Telefono.'); 
    
    switch(servicio){
        case '1':
           if (saldoCuenta < servicioAgua) {
           alert ('No hay suficiente saldo en su cuenta para pagar el servicio');
           return;
           }else{    
            var saldoAnterior = saldoCuenta;
            saldoCuenta = saldoCuenta - servicioAgua;  
            alert ('Has pagado el servicio: Agua \n Saldo anterior $'+ saldoAnterior + '\n Dinero descontado $' + servicioAgua + '\n Saldo Actual $' + saldoCuenta); 
           }
             break;
        case '2': 
            if (saldoCuenta < servicioTelefono) {
            alert ('No hay suficiente saldo en su cuenta para pagar el servicio');
            return;
            }else{ 
             var saldoAnterior = saldoCuenta;
             saldoCuenta = saldoCuenta - servicioTelefono;    
             alert ('Has pagado el servicio: Telefono \n Saldo anterior $'+ saldoAnterior + '\n Dinero descontado $' + servicioTelefono + '\n Saldo Actual $' + saldoCuenta); 
            }
             break;
        case '3':
                if (saldoCuenta < servicioInternet) {
                    alert ('No hay suficiente saldo en su cuenta para pagar el servicio');
                    return;
                    }else{ 
                     var saldoAnterior = saldoCuenta;
                     saldoCuenta = saldoCuenta - servicioInternet;    
                     alert ('Has pagado el servicio: Internet \n Saldo anterior $'+ saldoAnterior + '\n Dinero descontado $' + servicioInternet + '\n Saldo Actual $' + saldoCuenta); 
                    }   
                     break;
        case '4': 
                if (saldoCuenta < servicioLuz) {
                    alert ('No hay suficiente saldo en su cuenta para pagar el servicio');
                    return;
                    }else{ 
             var saldoAnterior = saldoCuenta;
             saldoCuenta = saldoCuenta - servicioLuz;    
             alert ('Has pagado el servicio: Luz \n Saldo anterior $'+ saldoAnterior + '\n Dinero descontado $' + servicioLuz + '\n Saldo Actual $' + saldoCuenta); 
                    }
             break;
        default:
            alert ('No existe el servicio que se ha seleccionado'); 
    
    }
    actualizarSaldoEnPantalla();
}

function transferirDinero() {
    var cuentaAmiga1 = 1234567;
    var cuentaAmiga2 = 7654321;

    var transferencia = prompt ('Cuanto dinero desea transferir'); 

    if (transferencia >saldoCuenta){
        alert ('No hay saldo disponible'); 
        return; 
    }

    var cuenta = prompt ('Ingrese le numero de cuenta al que quiere transferir el dinero');
    
    if ((cuenta != cuentaAmiga1) && (cuenta != cuentaAmiga2)){
        alert ('Solo puede transferirse dinero a una cuenta amiga');
        return;  
    }
    
    if ((cuenta = cuentaAmiga1)|| (cuenta = cuentaAmiga2)) {
        saldoCuenta = saldoCuenta - transferencia;
        alert ('Felicidades, tu transferencia ha sido realizada con exito! \n Se han transferido $' + transferencia + '\n Saldo cuenta $' + saldoCuenta);
        actualizarSaldoEnPantalla();
        
    }

}

function iniciarSesion() {
    var codigoDeSeguridad =1234;

    var ingreseCodigo = prompt ('Íngrese codigo de seguridad');
    
    if (ingreseCodigo != codigoDeSeguridad) {
        alert ('Codigo incorrecto, tu dinero ha sido retenido por razones de seguridad');
        saldoCuenta = 0; 
        actualizarSaldoEnPantalla();
    }else {
        alert ('Bienvenida ' + nombreUsuario + ' ya puedes empezar a realizar operaciones');
    }

}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}