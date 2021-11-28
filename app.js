// Array con los pacientes
const BBDD_Pacientes = [];

// constructor
function Paciente( 
  PCTNombre,   
  PCTSexo, 
  PCTdni, 
  PCTnacimiento,  
  PCTnacionalidad, 
  PCTocupacion,
  PCTresidenciaActual,
  PCTdireccion,
  PCTTelefono, 
  PCTemail
  ){
  this.datosPersonales = {
    nombreCompleto: PCTNombre,  
    sexo: PCTSexo, 
    DNI: PCTdni, 
    fechaDeNacimiento: PCTnacimiento, 
    nacionalidad: PCTnacionalidad, 
    opupación: PCTocupacion,
  }
    
  this.datosDeContacto = {
    ciudadActual: PCTresidenciaActual,
    direccionActual: PCTdireccion,
    telefono: PCTTelefono, 
    email: PCTemail
    }

  this.mostrarDP = function(){
    const DP = this.datosPersonales;
    for( dato in DP){
      console.log(`${dato}: ${DP[dato]}.`);
    }
  }

  this.mostrarDC = function(){
    const DC = this.datosDeContacto;
    for( dato in DC){
      console.log(`${dato}: ${DC[dato]}.`);
    }
  }
} // Paciente


function agregarPaciente(){
  BBDD_Pacientes.push( 
    new Paciente( 
      PCTNombre = prompt("Nombre Completo: "),   
      PCTSexo = prompt("Sexo: "), 
      PCTdni = prompt("DNI: "), 
      PCTnacimiento = prompt("Fecha de Nacimiento: "),  
      PCTnacionalidad = prompt("Nacionalidad: "), 
      PCTocupacion = prompt("Ocupación: "),
      PCTresidenciaActual = prompt("Ciudad Actual: "),
      PCTdireccion = prompt("Dirección: "),
      PCTTelefono = prompt("Teléfono: "), 
      PCTemail = prompt("Email: "),
      ) 
    );
    console.log("Agregado con exito!", BBDD_Pacientes);
} // agregarPaciente



BBDD_Pacientes.push( new Paciente("Lucas Gomez", "masculino", "34233543", "12/02/1980", "Argentina", "Carpintero", "Morón", "Rivadavia 1212","1112121212", "lucas@gmail.com") );
BBDD_Pacientes.push( new Paciente("Adriana lopez", "femenino", "55232240", "22/10/1985", "Uruguay", "Comerciante", "Liniers", "Alvear 3322","1112211212", "adriana@gmail.com") );
BBDD_Pacientes.push( new Paciente("Gonzalo Rojas", "masculino", "55232243", "22/10/1985", "Argentina", "Periodista", "Liniers", "Alvear 3322","1112211212", "gonza@gmail.com") );
BBDD_Pacientes.push( new Paciente("Luisa Mammani", "femenino", "55232240", "22/10/1985", "Uruguay", "Modelo", "Liniers", "Alvear 3322","1112211212", "Luisa@gmail.com") );
BBDD_Pacientes.push( new Paciente("Gerson Domínguez", "masculino", "55232255", "22/10/1985", "Perú", "Contador", "Liniers", "Alvear 3322","1112211212", "Gerson@gmail.com") );

console.log( BBDD_Pacientes );

// Emails
function pacientesEmails(paciente){
  return paciente.datosDeContacto.email;
}
function mostrarDatos(lista){
  lista.forEach(dato => {
    console.log(dato);
  });
}
function obtenerEmails(){
  const todosLosEmails = BBDD_Pacientes.map(pacientesEmails);
  mostrarDatos(todosLosEmails);
}

// lista por sexo
function listarPorSexo(sexo){
  const lista = BBDD_Pacientes.filter( function(paciente){
    return paciente.datosPersonales.sexo.toLowerCase() == sexo.toLowerCase(); 
  } );
  mostrarDatos(lista);
}
// Buscar pacientes por su último digito
const buscarUltimoDigito = function(digito) {
  // retorna true si existe al menos 1;
  return BBDD_Pacientes.some( pc => {
    const dni = pc.datosPersonales.DNI
    return dni[dni.length-1] === String(digito);
  });
}
function listaPorDigito(digito){
  return BBDD_Pacientes.filter(pc => {
    const dni = pc.datosPersonales.DNI
    return dni[dni.length-1] === String(digito);
  })
}
function obtenerPacientesPorUltimoDigito(digito){
  if(buscarUltimoDigito(digito)){
    const listaPC = listaPorDigito(digito);
    mostrarDatos(listaPC);
  }
  else
    console.log("No hay pacientes que teminen en: ", digito);
}