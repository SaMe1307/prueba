function validarFormulario() {
  var nombre = document.getElementById("nombre").value.trim();
  var apellido = document.getElementById("apellido").value.trim();
  /*
  var edad = document.getElementById("edad");
  var actividad = document.getElementById("actividad");
  var sexo = document.getElementById("sexo");
  */
  var correo = document.getElementById("correo").value.trim();
  var clave = document.getElementById("clave").value;

  //Chequea si hay algo vacio, en general//
  if (nombre === "" || apellido === "" || correo === "" || clave === "") {
    alert("Por favor, complete todos los campos del formulario.");
    return false;
  }
  //Nombre//
  for (var i = 0; i < nombre.length; i++) {
    var charCode = nombre.charCodeAt(i);
    if (
      !(
        (charCode >= 65 && charCode <= 90) ||
        (charCode >= 97 && charCode <= 122) ||
        charCode === 32
      )
    ) {
      alert(
        "El campo 'nombre' solo puede contener caracteres alfabéticos y espacios."
      );
      return false;
    }
  }
  //Apellido//
  for (var i = 0; i < apellido.length; i++) {
    var charCode = apellido.charCodeAt(i);
    if (
      !(
        (charCode >= 65 && charCode <= 90) ||
        (charCode >= 97 && charCode <= 122) ||
        charCode === 32
      )
    ) {
      alert(
        "El campo 'apellido' solo puede contener caracteres alfabéticos y espacios."
      );
      return false;
    }
  }
  //Correo//
  function validarEmail(correo) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(correo)){
     alert("La dirección de email " + correo + " es correcta.");
    } else {
     alert("La dirección de email es incorrecta.");
    }
  }
  //Clave//
  for (var i = 0; i < clave.length; i++) {
    var charCode = clave.charCodeAt(i);
    if (
      !(
        (charCode >= 48 && charCode <= 57) ||
        (charCode >= 65 && charCode <= 90) ||
        (charCode >= 97 && charCode <= 122)
      )
    ) {
      alert(
        "El campo 'clave' solo admite caracteres numericos y alfabeticos."
      );
      return false;
    }
  }
  // No se pudo validar en js: edad, sexo y actividad //

  alert("Formulario enviado correctamente.");
  return true;
}
