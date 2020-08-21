//Arrays con Objects
var pacientesradio=[
    {Hora:"11:00",Paciente:"Francisca Rojas", Rut:"9.878.782-1",Prevision:"FONASA"},
    {Hora:"11:30",Paciente:"Pamela Estrada", Rut:"15.345.241-3", Prevision:"ISAPRE"},
    {Hora:"15:00",Paciente:"Armando Luna", Rut:"16.445.345-9", Prevision:"ISAPRE"},
    {Hora:"15:30",Paciente:"Manuel Godoy", Rut:"17.666.419-0", Prevision:"FONASA"},
    {Hora:"16:00",Paciente:"Ramón Ulloa", Rut:"14.989.389-K", Prevision:"FONASA"}];

    // Eliminar el primer y último elemento del arreglo de Radiología Ejercicios (1)y(2)
    pacientesradio.pop();
    pacientesradio.shift();


var pacientestrauma=[
    {Hora:"8:00",Paciente:"Paula Sánchez", Rut:"15.554.774-5",Prevision:"FONASA"},
    {Hora:"10:00",Paciente:"Angélica Navas", Rut:"15.444.147-9", Prevision:"ISAPRE"},
    {Hora:"10:30",Paciente:"Ana Klapp", Rut:"17.879.423-5", Prevision:"ISAPRE"},
    {Hora:"11:00",Paciente:"Felipe Mardones", Rut:"15.474.23-6", Prevision:"ISAPRE"},
    {Hora:"11:30",Paciente:"Diego Marre", Rut:"16.554.741-K", Prevision:"FONASA"},
    {Hora:"12:00",Paciente:"Cecilia Mendez", Rut:"9.747.535-8", Prevision:"ISAPRE"},
    {Hora:"12:30",Paciente:"Marcial Suazo", Rut:"11.254.785-5", Prevision:"ISAPRE"}];

var pacientesDental=[
    {Hora:"8:30",Paciente:"Marcela Retamal", Rut:"11.123.425-6",Prevision:"ISAPRE"},
    {Hora:"11:00",Paciente:"Angel Muñoz", Rut:"9.878.789-2", Prevision:"ISAPRE"},
    {Hora:"11:30",Paciente:"Mario Kast", Rut:"7.998.789-5", Prevision:"FONASA"},
    {Hora:"13:00",Paciente:"Karin Fernández", Rut:"18.887.662-k", Prevision:"FONASA"},
    {Hora:"13:30",Paciente:"Hugo Sánchez", Rut:"17.665.461-4", Prevision:"FONASA"},
    {Hora:"14:00",Paciente:"Ana Sepúlveda", Rut:"14.441.281-0", Prevision:"ISAPRE"}];


    //Cantidad de atenciones

    document.write(`<h3>ATENCIONES</h3>`+ 
                   "Cantidad de atenciones para Radiología fue: " + pacientesradio.length + `<br>`+
                   "Cantidad de atenciones para Traumatología fue: " + pacientestrauma.length + `<br>`+
                   "Cantidad de atenciones para Dental fue: " + pacientesDental.length);

    //Primera y última atención

    document.write(`<h4>RADIOLOGÍA</h4> 
    Primera atención: ${pacientesradio[0].Paciente} - RUT: ${pacientesradio[0].Rut} - ${pacientesradio[0].Prevision} | 
    Última atención: ${pacientesradio[pacientesradio.length - 1].Paciente} - RUT: ${pacientesradio[pacientesradio.length-1].Rut} -  ${pacientesradio[pacientesradio.length-1].Prevision}`)

   document.write(`<h4>TRAUMATOLOGÍA</h4>`+
    "Primera atención: "+ pacientestrauma[0].Paciente +" - "+"RUT: "+pacientestrauma[0].Rut+" - "+ pacientestrauma[0].Prevision+" | "+
    "Última atención: "+ pacientestrauma[pacientestrauma.length-1].Paciente +" - "+"RUT: "+pacientestrauma[pacientestrauma.length-1].Rut+" - "+ pacientestrauma[pacientestrauma.length-1].Prevision)
    
    document.write(`<h4>DENTAL</h4>`+
    "Primera atención: "+ pacientesDental[0].Paciente +" - "+"RUT: "+pacientesDental[0].Rut+" - "+ pacientesDental[0].Prevision+" | "+
    "Última atención: "+ pacientesDental[pacientesDental.length-1].Paciente +" - "+"RUT: "+pacientesDental[pacientesDental.length-1].Rut+" - "+ pacientesDental[pacientesDental.length-1].Prevision)

    
//Lista consultas medicas dental(3)
document.write(`<h3>LISTA CONSULTAS MÉDICAS DENTAL</h3>`);
pacientesDental.forEach((pacientesDental,index) => {
    document.write(`<p> ${pacientesDental.Hora} - ${pacientesDental.Paciente} - ${pacientesDental.Rut} - ${pacientesDental.Prevision}</p>`); 
});

//Pacientes totales(4)
document.write(`<h3>PACIENTES TOTALES</h3>`)
var pacientes = (pacientesDental.concat(pacientesradio)).concat(pacientestrauma);
pacientes.forEach((pacientes,index) => {
    document.write(`<p> ${pacientes.Paciente} </p>`);  
});

//5) modificación Previsión(5)
document.write(`<h3>MODIFICACIÓN PREVISIÓN</h3>`)
pacientesDental=pacientesDental.map((pacientesDental)=>{
      if (pacientesDental.Prevision==="ISAPRE") {
         pacientesDental.Prevision="FONASA"
      }else if (pacientesDental.Prevision==="FONASA") {
         pacientesDental.Prevision="ISAPRE";
      }
    document.write(`<p> ${pacientesDental.Prevision} ; ${pacientesDental.Paciente} ; ${pacientesDental.Rut}</p>`)
});