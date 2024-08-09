function validaciones(){

    const nombre=document.getElementById("nombre");
    const apellido=document.getElementById("apellido");
    const edad=document.getElementById("edad");
    const contraseña=document.getElementById("contraseña");
    const mail=document.getElementById("mail");

    nombre.classList.remove("invalid-field");
    apellido.classList.remove("invalid-field");
    edad.classList.remove("invalid-field");
    contraseña.classList.remove("invalid-field");
    mail.classList.remove("invalid-field");

    document.getElementById("firstNameError").textContent = "";
    document.getElementById("lastNameError").textContent = "";
    document.getElementById("AgeError").textContent="";
    document.getElementById("PasswordError").textContent="";
    document.getElementById("MailError").textContent="";

    const nombreValue = nombre.value;
    const apellidoValue = apellido.value;
    const edadValue=edad.value;
    const contraseñaValue=contraseña.value;
    const mailValue=mail.value;

    if (nombreValue === "") {
        nombre.classList.add("invalid-field");
        document.getElementById("firstNameError").textContent = "Nombre inválido.";
        return;
      }

      if (apellidoValue=== "") {
        apellido.classList.add("invalid-field");
        document.getElementById("lastNameError").textContent = "Apellido inválido.";
        return;
      }

    const especiales = /^[a-zA-Z\s]*$/;
    if (!especiales.test(nombreValue)) {
        nombre.classList.add("invalid-field");
        document.getElementById("firstNameError").textContent = "Nombre inválido.";
        return;
      }

      if (!especiales.test(apellidoValue)) {
        apellido.classList.add("invalid-field");
        document.getElementById("lastNameError").textContent = "Apellido inválido.";
        return;
      }


      if (nombreValue.length > 20) {
        nombre.classList.add("invalid-field");
        document.getElementById("firstNameError").textContent = "Nombre inválido.";
        return;
      }

      if (apellidoValue.length > 20) {
          apellido.classList.add("invalid-field");
        document.getElementById("lastNameError").textContent = "Apellido inválido.";
        return;
      }

      if(isNaN(edadValue) ||edadValue<0 || edadValue>150){

        edad.classList.add("invalid-field");
        document.getElementById("AgeError").textContent="Edad invalida.";
        return;
      }

      var validacionContra = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)/;

      if(contraseñaValue.length<8 || contraseñaValue.length>20 || !validacionContra.test(contraseñaValue) ){

        contraseña.classList.add("invalid-field");
        document.getElementById("PasswordError").textContent="Contraseña invalida.";
        return;
      }

      var validarMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      var validarMail2 = /(gmail|hotmail|outlook|icloud)/i;

      if(!validarMail.test(mailValue) || !validarMail2.test(mailValue)){

        mail.classList.add("invalid-field");
        document.getElementById("MailError").textContent="Mail invalido.";
        return;
      }

    alert("Formulario enviado, muchas gracias!");
      document.getElementById("validaciones").reset();


}