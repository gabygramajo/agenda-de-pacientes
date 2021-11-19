
const BBDD_Clientes = [];


function datosPersonales(
  CLidHistorial, 
  CLNombre, 
  CLApellido, 
  CLSexo, 
  CLdni, 
  CLnacimiento, 
  CLedad, 
  CLnacionalidad, 
  CLocupacion){
  
  return {
    idNroHistorial: CLidHistorial,
    nombre: CLNombre,
    apellido: CLApellido,
    sexo: CLSexo,
    DNI: CLdni,
    nacimiento: CLnacimiento,
    edad: CLedad,
    nacionalidad: CLnacionalidad,
    ocupacion: CLocupacion,
  }
}
function datosDeContacto(
  CLresidenciaActual,
  CLdireccion,
  CLTelefono, 
  CLemail){

  return {
    residenciaActual: CLresidenciaActual,
    direccion: CLdireccion,
    telefono: CLTelefono,
    email: CLemail,
  } 
}


function Cliente(nombre, apellido, telefono){
  this.datosPersonales = datosPersonales(nombre, apellido);
  this.datosDeContacto = datosDeContacto(telefono);
}

BBDD_Clientes.push( new Cliente("lucas","lopez","1212211212") );
BBDD_Clientes.push( new Cliente("adriana","gomez","1212211212") );

console.log(BBDD_Clientes);

