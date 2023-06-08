// vamos a utlizar las funciones flecha 
const mostrarReloj =()=>{
    let fecha = new Date();
    let hr = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let seg = formatoHora(fecha.getSeconds());
    document.getElementById('hora').innerHTML =`${hr}:${min}:${seg}`;

    // procesar las fechas  todos los meses del ano
    const meses =['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Set','Oct','Nov','Dic '];
    // dias de sema
    const dias =['Dom','Lun','Mar','Mie','Jue','Vie','Sab'];
    //recuperar los elementos para mostrar las fechas 
    let diaSemana = dias[fecha.getDay()];
    //recuperar el dia 
    let dia = fecha.getDay();
    // recuperar el mes 
    let mes = meses[fecha.getMonth()];
    //recuperar el ano
    //fecha.getFullYear
    // recuperar los dias 
    let fechaTexto =`${diaSemana}, ${dia}, ${mes}`;
    // recuperar nuestro elemento
    document.getElementById('fecha').innerHTML = fechaTexto;
  // tougle un minuto quita el border y el otro segundo no 
    document.getElementById('contenedor').classList.toggle('animar');
}
const formatoHora =(hora)=>{
    if(hora < 10)
       hora = '0'+ hora;
    return hora   

}
// mandar a llamar nuestra funcion de mostrar reloj cada segundo 
setInterval(mostrarReloj, 1000);