function mostrar_fecha(){
  var fecha = new Date();
  var dia=fecha.getDate();
  var mes=fecha.getMonth()+1;
  var anio=fecha.getFullYear();
  //var resultado=fecha.getDate();
  document.getElementById("fecha").innerHTML=dia+'/'+mes+'/'+anio;
}
setTimeout(mostrar_fecha,1000);
