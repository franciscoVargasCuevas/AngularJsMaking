function doubleClick(index){
    go(index);
}

function viewData(index){

  if(index.id == localStorage.getItem("id")){
      console.log("Bueno: " + localStorage.getItem("recordatorio" + index.id));
      alert("Recordatorio: " + localStorage.getItem("recordatorio" + index.id) + "\n" + "Hora: " + localStorage.getItem("hora" + index.id) + "\n" + "Ciudad: " + localStorage.getItem("ciudad" + index.id) );
    }

}

function go(index){
   
    var fechaReg=new Date();
    if(index.id < fechaReg.getDate()){
         alert("No puedes crear recordatorios en días anteriores a hoy.");
    }else{
        var hora = prompt("Ingresa la hora de tu evento: ");
        var recordatorio = prompt("Ingresa el motivo de tu recordatorio (30 carácteres máximo): ");
        if(recordatorio.length > 0 && recordatorio != null){
          if(recordatorio.length > 30){
            alert("30 carácteres máximo");
          }else{
              if(hora != null && hora.length > 0){
                var ciudad =  prompt("Ingresa en que ciudad será el evento: ");
                if(ciudad != null && ciudad.length > 0){
                    selectColor(index.id);
                    saveDataLocal(index.id, recordatorio, hora, ciudad);
                }else{
                alert("Es obligatorio indicar una ciudad");
              }
              }else{
                alert("Es obligatorio indicar un horario");
              }
            }
        }else{
              alert("Es obligatorio un motivo.");
        }
    }
  }

  function selectColor(index){
    var color = prompt("Qué color deseas para este recordatorio: \n 1. Rojo. \n 2. Verde. \n3. Azúl.");
    switch(color){
      case "1": 
          document.getElementById(index).style.backgroundColor = "red";
          alert("Se registro con exito tu evento.");
      break;
      case "2":
          document.getElementById(index).style.backgroundColor = "green";
          alert("Se registro con exito tu evento.");
      break;
      case "3":
          document.getElementById(index).style.backgroundColor = "blue";
          alert("Se registro con exito tu evento.");
      break;
      default:
      alert("Unicamente puede elegir los colores antes mencionados.");
      selectColor(index);
      break;
    }
    
  }

  function saveDataLocal(id, recordatorio, hora, ciudad){
    localStorage.setItem("id", id);
    localStorage.setItem("recordatorio" + id, recordatorio);
    localStorage.setItem("hora" + id, hora);
    localStorage.setItem("ciudad" + id, ciudad);
  }



(function($scope){
  angular.module('calenM',[]).controller('TableController',TableController, go);

  function TableController(){

if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
    localStorage.clear();
} 

    var c=this,
        fecha=new Date(),
        dias=[31,28,31,30,31,30,31,31,30,31,30,31],
        meses=['Enero', 'Febrero','Marzo','Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    ;
    c.mes_actual = fecha.getMonth();
    console.log("mes actual " + c.mes_actual);
    c.mes_nombre = meses[c.mes_actual];
    console.log("mes_nombre: " + c.mes_nombre);
    c.anio = fecha.getFullYear();
    console.log("año: " + c.anio);
    c.hoy = fecha.getDate();
    console.log("hoy: " + c.hoy);
    var primero_de_mes = new Date(fecha.getFullYear(), c.mes_actual,1);
    
    
    c.primer_dia_mes=primero_de_mes.getDay();
    console.log("primero de mes: " + c.primer_dia_mes);
    
    var num_semanas =Math.floor((dias[c.mes_actual]+c.hoy)/7);
    console.log("semanas " + num_semanas);
    dias[1]+=CheckLeapYear(c.anio)?1:0;
    
    c.semanas=[];
    dia_numero=1;
    for(i=0; i<num_semanas; i++){
      console.log("for semanas " + i);
      c.semanas[i]=[];
      for(j=0; j<7; j++){
        if(i==0 && j<c.primer_dia_mes){ // Primera semana del mes, incompleta        
          c.semanas[i][j]="";
        }else{
          if(dia_numero<=dias[c.mes_actual]){
            c.semanas[i][j]=dia_numero;
            dia_numero++;
          }          
        }
      }// end for dias semana
    }// end for semanas
    
    function CheckLeapYear(year){
      return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
    }
    

  
    
    
  }
})();



