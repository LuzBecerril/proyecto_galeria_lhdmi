//Empieza formulario de contacto y envío
let txtNombre = document.getElementById("from_name");
let txtApellido = document.getElementById("from_apellido");
let txtEmail = document.getElementById("email_id");
let txtCalle = document.getElementById("calle");
let txtColonia =  document.getElementById("colonia");
let txtMunicipio = document.getElementById("municipio");
let txtCiudad = document.getElementById("ciudad");
let cpNumber = document.getElementById("codigoPostal");
let mensajeOpcional = document.getElementById("mensaje_adic");
const btnCarrito = document.getElementById("btnCompra2");
let datosEnvio = new Array();

// validaciones de pagos
let txtPropietario = document.getElementById("from_propietario");
let tarjetaNumber = document.getElementById("from_tarjeta");
let VencNumber = document.getElementById("from_vencimiento");
let CvNumber = document.getElementById("from_cv");
let txtBanco = document.getElementById("from_banco");
let btnDatos = document.getElementById("btnValidaDatos");
let btnPago = document.getElementById(' btnCompra3');
let DatosPago = new Array();

// //btn de agregar al carrito
// let btnAgregarCarrito = document.getElementById("CardCarrito");
// let btnEliminador = document.getElementById("btnElimina");
// let cuerpoTabla = document.getElementsByTagName("tbody").item(0);
// let cuerpoTablaUno = document.getElementsByClassName("row").item(0);
// let tablaListaCompras = document.getElementById("tablaListaCompras");
// let contadorProductos = document.getElementById("contadorProductos"); //bolita roja contador de prodcts
// let productosTotal = document.getElementById("productosTotal");
// let precioTotal = document.getElementById("precioTotal");
// let title = document.getElementById("title");
// let autor = document.getElementById("autor");
// let precio = document.getElementById("precio");
// let fileImage = document.getElementById('imageFile');

// let contador= 0;
// let precioCont= 0;
// let costoTotal = 0;
// let totalEnProductos = 0;
// let AgregadosCarrito = new Array();

// btnAgregarCarrito.addEventListener("click", function(event){
//     let isValid = true;
//     event.preventDefault();
  
//  });// btn agregar click
// //funciones de btn mercado pago y oxxo, no implementación real de pagos aún, solo páginas de inicio o QR de prueba.

function irACuenta() {
    window.open('https://www.mercadolibre.com/jms/mlm/lgz/msl/login/H4sIAAAAAAAEA41Ry27bMBD8Fx18SvyAnSAxIBSU5bqBJDsJ0iLohdiSa4oxKTIkZToJ8u-l3Pbe287szuxg9yNTRsiOhjeL2TLDk1WSyZBdZFZB2BunqeSpoW2ivAz4Fyo9jIADjQGdz5Yfg5FAXmASDVbB9ZhmoA8t3SsTE3VelTjpKZ6SrANFI_46Shy6e1B-UAiTQBuC9cvJJMY41ugYcGNBmDEzeqxPkxZdWi2xC-AvhxiXR-w4ui990NSb3jHMhTFC4WhgNHLZ65xZdoYMtAUpurypG9rc0w0lO7pZbympa1o8km15rla77Y8Ed6QcaQiBBmNUfnM1m81vp7d_qGgc_38XAfxfuNlIMCV5vnqZVqsHSd6q3hVteUUe7zypQT_D1_lT_9q2h2ohvvEdWxvzZItZeXqARd0cqu31YvpaPZdN3PR3P-fH9-_4Ij0QwcSa1JFGVmSfF-moPgV3wA7ZcvjI52_Mpw-K8QEAAA/user', '_blank');
}//funcion de ir a inició de sesión mercado pago. 

function irOxxo() {
    window.open('https://www.oxxo.com/', '_blank');
}//funcion de ir a inició de sesión mercado pago. 
//fin de funciones para oxxo y mercado pago 

//validar formulario de envío

function validarNombres(){
    if( txtNombre.value == null || txtNombre.value == 0 ||(! /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(txtNombre.value))) { 
        return false;
    }
    return true;
}//validarNombre

function validarApellidos(){
    if( txtApellido.value == null || txtApellido.value == 0 ||(! /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(txtApellido.value))) { 
        return false;
    }
    return true;
}//validarNombre

function validarMail(){
    let validEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (! validEmail.test(txtEmail.value)){
        return false;
    }
    return true;
}//validarCorreo
function validarCalle(){
    if( txtCalle.value == null || txtCalle.value == 0 ||(!/^[a-zA-ZÀ-ÿ\s]+(?: [#\d\s]+)?$/.test(txtCalle.value))) { 
        return false;
    }
    return true;
}//validarcalle con un numeros y simbolo especial
function validarColonia(){
    if( txtColonia.value == null || txtColonia.value == 0 ||(! /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(txtColonia.value))) { 
        return false;
    }
    return true;
}//validarcolonia
function validarMunicipio(){
    if( txtMunicipio.value == null || txtMunicipio.value == 0 ||(! /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(txtMunicipio.value))) { 
        return false;
    }
    return true;
}//validarMunicipio
function validarCiudad(){
    if( txtCiudad.value == null || txtCiudad.value == 0 ||(! /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(txtCiudad.value))) { 
        return false;
    }
    return true;
}//validarCiudad
function validarCp(){
    if( cpNumber.value == null || cpNumber.value == 0 ||(!/^\d{5}$/.test(cpNumber.value))) { 
        return false;
    }
    return true;
}//validarCódigopostal
btnCarrito.addEventListener("click", function(event){
    let isValid = true;
    event.preventDefault();
    
    txtNombre.style.border="solid thin green";
    txtApellido.style.border="solid thin green";
    txtEmail.style.border="solid thin green";
    txtCalle.style.border="solid thin green";
    txtColonia.style.border="solid thin green";
    txtMunicipio.style.border="solid thin green";
    txtCiudad.style.border="solid thin green";
    cpNumber.style.border="solid thin green";

    if (! validarNombres()){

        Swal.fire({
            title: 'El campo "Nombre" es necesario',
            text: 'Por favor escribe tu nombre únicamente con letras.',
            icon: 'error',
            confirmButtonColor: "#E4C247",
            confirmButtonText: 'Lo checo, gracias'
          })
        txtNombre.style.border="solid thin red";
        isValid = false;
    }//Nombre

    if (! validarApellidos()){

        Swal.fire({
            title: 'El campo "Apellidos" es necesario',
            text: 'Por favor escribe tus apellidos únicamente con letras.',
            icon: 'error',
            confirmButtonColor: "#E4C247",
            confirmButtonText: 'Lo checo, gracias'
          })
        txtApellido.style.border="solid thin red";
        isValid = false;
    }//Apellidos
    if (! validarMail()){

        Swal.fire({
            title: 'El campo "Correo" es necesario',
            text: 'El formato acepta numero, símbolos y letras, recuerda agregar @tudominio.com al final ',
            icon: 'error',
            confirmButtonColor: "#E4C247",
            confirmButtonText: 'Lo checo, gracias'
          })
        txtEmail.style.border="solid thin red";
        isValid = false;
    }//Apellidos
    if (! validarCalle()){

        Swal.fire({
            title: 'El campo "Calle" es necesario',
            text: 'Por favor escribe primero tu calle y luego el número, puedes usar "#"',
            icon: 'error',
            confirmButtonColor: "#E4C247",
            confirmButtonText: 'Lo checo, gracias'
          })
        txtCalle.style.border="solid thin red";
        isValid = false;
    }//Calle y número
    if (! validarColonia()){

        Swal.fire({
            title: 'El campo "Colonia" es necesario',
            text: 'Por favor escribe el nombre de tu colonia sin numeros y símbolos especiales',
            icon: 'error',
            confirmButtonColor: "#E4C247",
            confirmButtonText: 'Lo checo, gracias'
          })
        txtColonia.style.border="solid thin red";
        isValid = false;
    }//Colonia
    if (! validarMunicipio()){

        Swal.fire({
            title: 'El campo "Municipio" es necesario',
            text: 'Por favor escribe tu municipio únicamente con letras.',
            icon: 'error',
            confirmButtonColor: "#E4C247",
            confirmButtonText: 'Lo checo, gracias'
          })
        txtMunicipio.style.border="solid thin red";
        isValid = false;
    }//Municipio
    if (! validarCiudad()){

        Swal.fire({
            title: 'El campo "Ciudad" es necesario',
            text: 'Por favor escribe tu ciudad únicamente con letras.',
            icon: 'error',
            confirmButtonColor: "#E4C247",
            confirmButtonText: 'Lo checo, gracias'
          })
        txtCiudad.style.border="solid thin red";
        isValid = false;
    }//ciudad
    if (! validarCp()){

        Swal.fire({
            title: 'El campo "Código Postal" es necesario',
            text: 'Por favor escribe tus Código postal solo con los 5 valores númericos',
            icon: 'error',
            confirmButtonColor: "#E4C247",
            confirmButtonText: 'Lo checo, gracias'
          })
        cpNumber.style.border="solid thin red";
        isValid = false;
    }//Apellidos
    let EnvioCompleto = ((validarNombres())+(validarApellidos())+(validarMail())+
    (validarCalle())+(validarColonia())+(validarMunicipio())+(validarCiudad())+(validarCp()));
    if (!EnvioCompleto){
        Swal.fire({
            title: 'No puedo enviar nada, disculpa',
            text: 'No olvides llenar todos los campos antes de continuar al pago',
            icon: 'error',
            confirmButtonColor: "#E4C247",
            confirmButtonText: 'Lo checo, gracias'
          })
        }//valida que todos los campos no estén vacíos

        if(isValid){
            registrarDatos_envio();
            Swal.fire({
              title: 'Datos de Envío guardados',
              text: 'Ahora llena tus datos de pago',
              icon: 'success',
              confirmButtonColor: "#E4C247",
              confirmButtonText: 'Gracias'
            })
            txtNombre.value="";
            txtApellido.value="";
            txtEmail.value="";
            txtCalle.value="";
            txtColonia.value="";
            txtMunicipio.value="";
            txtCiudad.value="";
            cpNumber.value="";
            mensajeOpcional.value="";
            txtNombre.style.border="";
            txtApellido.style.border="";
            txtEmail.style.border="";
            txtCalle.style.border="";
            txtColonia.style.border="";
            txtMunicipio.style.border="";
            txtCiudad.style.border="";
            cpNumber.style.border="";

        }//is valid function alert

});//btn de continuarg al pago (valida datos de envío)
function registrarDatos_envio() {
    let elementos = `{
        "Nombre": "${txtNombre.value}",
        "Apellidos": "${txtApellido.value}",
        "Correo": "${txtEmail.value}",
        "Calle": "${txtCalle.value}",
        "Colonia": "${txtMunicipio.value}",
        "Municipio": "${txtMunicipio.value}",
        "Ciudad": "${txtCiudad.value}",
        "CP": "${cpNumber.value}",
        "Mensaje" : "${mensajeOpcional.value}"
    }`;

    datosEnvio.push(JSON.parse(elementos));
    localStorage.setItem("datosEnvio", JSON.stringify(datosEnvio));
}//local storage json elementos de los datos de envío

//funciones de validar datos en tarjeta visa/mastercard 
function validarPropietario(){
    if( txtPropietario.value == null || txtPropietario.value == 0 ||(! /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(txtPropietario.value))) { 
        return false;
    }
    return true;
}//validarNombrepropietario
function ValidarTarjeta(){
    if( tarjetaNumber.value == null || tarjetaNumber.value == 0 ||(! /^\d{4} \d{4} \d{4} \d{4}$/.test(tarjetaNumber.value))) { 
        return false;
    }
    return true;
}//validarNUMERO tarjeta
function ValidarVencimiento() {
    let regex = /^\d{2}\/\d{2}$/;
    if (!regex.test(VencNumber.value)) {
        return false;
    }
    return true;
}//validarvencimiento
function ValidarCv(){
    if( CvNumber.value == null || CvNumber.value == 0 ||(! /^\d{3}$/.test(CvNumber.value))) { 
        return false;
    }
    return true;
}//validarcv
function ValidarBanco(){
    if( txtBanco.value == null || txtBanco.value == 0 ||(! /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(txtBanco.value))) { 
        return false;
    }
    return true;
}//validarbanco

btnValidaDatos.addEventListener("click", function(event){
    let isValid = true;
    event.preventDefault();
    
    txtPropietario.style.border="solid thin green";
    tarjetaNumber.style.border="solid thin green";
    txtBanco.style.border="solid thin green";
    CvNumber.style.border="solid thin green";
    VencNumber.style.border="solid thin green";

    if (! validarPropietario()){

        Swal.fire({
            title: 'El campo "Nombre del propietario" es necesario',
            text: 'Por favor escribe únicamente con letras.',
            icon: 'error',
            confirmButtonColor: "#E4C247",
            confirmButtonText: 'Lo checo, gracias'
          })
        txtPropietario.style.border="solid thin red";
        isValid = false;
    }//Nombredelpropietario

    if (! ValidarTarjeta()){

        Swal.fire({
            title: 'El campo "No. de tarjeta" es necesario',
            text: 'Por favor escribe tu no. de tarjeta de 16 dígitos en el sig. formato de 4 cifras, espacio y las sig. 4 cifras hasta completar',
            icon: 'error',
            confirmButtonColor: "#E4C247",
            confirmButtonText: 'Lo checo, gracias'
          })
        tarjetaNumber.style.border="solid thin red";
        isValid = false;
    }//validar tarjeta

    if (! ValidarVencimiento()){

        Swal.fire({
            title: 'El campo "fecha de vencimiento" es necesario',
            text: 'El formato acepta solo numeros y el símbolo "/", dígita el número de mes seguido de los dos ultimos dígitos del año, ejemplo: 07/11',
            icon: 'error',
            confirmButtonColor: "#E4C247",
            confirmButtonText: 'Lo checo, gracias'
          })
        VencNumber.style.border="solid thin red";
        isValid = false;
    }//validación de vencimiento
    if (! ValidarCv()){

        Swal.fire({
            title: 'El campo "CV" es necesario',
            text: 'Por favor revisa que los 3 dígitos al reverso de tu tarje sean los mismos',
            icon: 'error',
            confirmButtonColor: "#E4C247",
            confirmButtonText: 'Lo checo, gracias'
          })
        CvNumber.style.border="solid thin red";
        isValid = false;
    }//Cv
    if (! ValidarBanco()){

        Swal.fire({
            title: 'El campo "Banco" es necesario',
            text: 'Por favor escribe el nombre de tu banco sin numeros y símbolos especiales',
            icon: 'error',
            confirmButtonColor: "#E4C247",
            confirmButtonText: 'Lo checo, gracias'
          })
        txtBanco.style.border="solid thin red";
        isValid = false;
    }//Colonia

    let EnvioCompleto = ((validarPropietario())+(ValidarTarjeta())+(ValidarCv())+
    (ValidarBanco())+(ValidarVencimiento()));
    if (!EnvioCompleto){
        Swal.fire({
            title: 'No puedo enviar nada, disculpa',
            text: 'No olvides llenar todos los campos antes de continuar al pago',
            icon: 'error',
            confirmButtonColor: "#E4C247",
            confirmButtonText: 'Lo checo, gracias'
          })
        }//valida que todos los campos no estén vacíos

        if(isValid){
            registrarDatos_Pago();
            Swal.fire({
              title: 'Datos de pago correctos',
              text: 'Tus datos fueron verificados, sí estás segurx, da "click" en "pagar ahora"',
              icon: 'success',
              confirmButtonColor: "#E4C247",
              confirmButtonText: 'Gracias, hasta pronto'
            })
            txtPropietario.value="";
            tarjetaNumber.value="";
            txtBanco.value="";
            CvNumber.value="";
            VencNumber.value="";

            txtPropietario.style.border="";
            tarjetaNumber.style.border="";
            txtBanco.style.border="";
            CvNumber.style.border="";
            VencNumber.style.border="";
            txtPropietario.style.background="gray";
            tarjetaNumber.style.background="gray";
            txtBanco.style.background="gray";
            CvNumber.style.background="gray";
            VencNumber.style.background="gray";
            document.getElementById('from_propietario').readOnly = true;
            document.getElementById('from_tarjeta').readOnly = true;
            document.getElementById('from_vencimiento').readOnly = true;
            document.getElementById('from_cv').readOnly = true;
            document.getElementById('from_banco').readOnly = true;
            document.getElementById('btnValidaDatos').disabled = true;
        }//validar datos de pago
    });//verificar datos de pago,función
    function registrarDatos_Pago() {
        let elementosPago = `{
            "Propietario": "${txtPropietario.value}",
            "Tarjeta": "${tarjetaNumber.value}",
            "Vencimiento": "${VencNumber.value}",
            "Cv": "${CvNumber.value}",
            "Banco": "${txtBanco.value}"
        }`;
        DatosPago.push(JSON.parse(elementosPago));
        localStorage.setItem("datosEnvio", JSON.stringify(DatosPago));
    }
    //btn de compra final
   