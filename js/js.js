
function takeInput(){
         var txt = prompt("Ingresa tu nombre");
         var nombre = document.getElementById("nombres");
         nombre.innerHTML = txt;
    
}    
takeInput(); 
       
function names() {
             
    var ok = confirm("Desea cargar datos personales ?")
     if(ok == true){   
             
                  var nombresList = [];
                  
                    var direccion = prompt("Ingresa tu direccion:");
                    nombresList.push( direccion ); 
                    var telefono = prompt("Ingresa tu telefono:");
                    nombresList.push( telefono );
                       var correo = prompt("Ingresa tu correo:");
                    nombresList.push( correo );
                 
                  /* Con Join podemos unir los item de la lista */
                  document.getElementById("dire").innerHTML = nombresList[0];
                  document.getElementById("tel").innerHTML = nombresList[1];
                  document.getElementById("correo").innerHTML = nombresList[2];
                
             }
        else{
           alert("Que sigas bien.") 
        }
         
            } 
       
function names2() {
             
 var ok = confirm("Desea cargar experiencia profesional?")
             if(ok == true){   
             
                  var nombresList = [];
                  
                    var año = prompt("Ingresa cuanto tiempo trabajaste en ese lugar");
                    nombresList.push( año ); 
                    var empresa = prompt("Ingresa el nombre de la empresa:");
                    nombresList.push( empresa );
                       var tarea = prompt("Ingresa tu puesto de trabajo:");
                    nombresList.push( tarea );
                 
                  /* Con Join podemos unir los item de la lista */
                  document.getElementById("año1").innerHTML = nombresList[0];
                  document.getElementById("empresa1").innerHTML = nombresList[1];
                  document.getElementById("tarea1").innerHTML = nombresList[2];
                
               
                         
     var ok2 = confirm("Desea cargar otra experiencia profesional?")
             if(ok2 == true){   
                   var exp2 = document.getElementById("experiencia2");
                   exp2.classList.add("experiencia2"); 
                 
                    var nombresList = [];
                  
                    var año = prompt("Ingresa cuanto tiempo trabajaste en ese lugar");
                    nombresList.push( año ); 
                    var empresa = prompt("Ingresa el nombre de la empresa:");
                    nombresList.push( empresa );
                       var tarea = prompt("Ingresa tu puesto de trabajo:");
                    nombresList.push( tarea );
                 
                  /* Con Join podemos unir los item de la lista */
                 
          
                  document.getElementById("año2").innerHTML = nombresList[0];
                  document.getElementById("empresa2").innerHTML = nombresList[1];
                  document.getElementById("tarea2").innerHTML = nombresList[2];
                
                 
             }
        else{
           alert("Pone mas no seas boludo") 
        }
             
             }
    
        else{
           alert("Usa barbijo. Chau") 
        }
  
            }

       
function names3() {
             
var ok = confirm("Desea cargar datos de estudio?")
             if(ok == true){   
             
                  var nombresList = [];
                  
                    var fechapri = prompt("Ingresa año de inicio");
                    nombresList.push( fechapri ); 
                    var fechasegu = prompt("Ingresa el año que terminaste");
                    nombresList.push( fechasegu );
                       var cole = prompt("Ingresa nombre de colegio:");
                    nombresList.push( cole );
                    
                 var titulo = prompt("Ingresa nombre del titulo:");
                    nombresList.push( titulo );
                 
                  /* Con Join podemos unir los item de la lista */
                  document.getElementById("fecha1").innerHTML = nombresList[0];
                  document.getElementById("fecha2").innerHTML = nombresList[1];
                  document.getElementById("cole").innerHTML = nombresList[2];
                  
                  document.getElementById("titu").innerHTML = nombresList[3];
                
             }
        else{
           alert("Mantene distancia, no me contagies plz. Chau") 
        }
            
 } 


       
function aptitudes() {
             
    var ok = confirm("Desea cambiar aptitudes ?")
     if(ok == true){   
             
                  var nombresList = [];
                  
                    var apt1 = prompt("Ingresa Aptitud");
                    nombresList.push( apt1 ); 
                    var apt2 = prompt("Ingresa Aptitud");
                    nombresList.push( apt2 );
                       var apt3 = prompt("Ingresa Aptitud");
                    nombresList.push( apt3 );
                   var apt4 = prompt("Ingresa Aptitud");
                    nombresList.push( apt4 );
                       var apt5 = prompt("Ingresa Aptitud");
                    nombresList.push( apt5 );
                 
                  /* Con Join podemos unir los item de la lista */
                  document.getElementById("l1").innerHTML = nombresList[0];
                  document.getElementById("l2").innerHTML = nombresList[1];
                  document.getElementById("l3").innerHTML = nombresList[2];
          document.getElementById("l4").innerHTML = nombresList[3];
                  document.getElementById("l5").innerHTML = nombresList[4];
                
             }
        else{
           alert("Dale portate bien rompecuarentena.") 
        }
         
            } 

function cargainfoadi() {
             
    var ok = confirm("Desea cambiar info adicional ?")
     if(ok == true){   
             
                  var nombresList = [];
                  
                    var info1 = prompt("Ingresa Aptitud");
                    nombresList.push( info1 ); 
                    var info2 = prompt("Ingresa Aptitud");
                    nombresList.push( info2 );
                    
                 
                  /* Con Join podemos unir los item de la lista */
                  document.getElementById("ll1").innerHTML = nombresList[0];
                  document.getElementById("ll2").innerHTML = nombresList[1];
                  
                
             }
        else{
           alert("Dale portate bien rompecuarentena.") 
        }
         
            } 


function cargaperfil() {
             
    var ok = confirm("Desea cambiar perfil?")
     if(ok == true){   
               var nombresList = [];
                     var infoperfil = prompt("Ingresa Aptitud");
                    nombresList.push( infoperfil ); 
                   /* Con Join podemos unir los item de la lista */
                  document.getElementById("perfil").innerHTML = nombresList[0];
              }
        else{
           alert("Dale portate bien rompecuarentena.") 
        }
         
            } 
 /*--------------------------------------*/

   var boton1 = document.getElementById("redondo");
       boton1.addEventListener("mouseover", tarjeteando,true);
            boton1.addEventListener("mouseout", tarjeteando2,true);
          
        
        function tarjeteando(){
              var cardd = document.getElementById("tarje");
               cardd.classList.add("deco");
              cardd.classList.remove("deco2");
              var cardd2 = document.getElementById("tarje2");
               cardd2.classList.add("deco");
        }
            function tarjeteando2(){
              var cardd = document.getElementById("tarje");
               cardd.classList.remove("deco");
               cardd.classList.add("deco2"); 
              var cardd2 = document.getElementById("tarje2");
               cardd2.classList.remove("deco");
        }
          
          
            var boton2 = document.getElementById("redondo2");
       boton2.addEventListener("mouseover", tarjeteandoo,true);
            boton2.addEventListener("mouseout", tarjeteandoo2,true);
          
        
        function tarjeteandoo(){
              var cardd = document.getElementById("tarje");
            var cuadra = document.getElementById("conta");
            
               cardd.classList.remove("deco");
              cardd.classList.remove("deco2");
            cuadra.classList.add("cuadrado"); 
            
         
        }
            function tarjeteandoo2(){
                  var cuadra = document.getElementById("conta");
             var cardd = document.getElementById("tarje");
                
              cardd.classList.add("deco2"); 
               cuadra.classList.remove("cuadrado"); 
        }

  var boton3 = document.getElementById("redondo3");
       boton3.addEventListener("mouseover", tarjeteando3,true);
            boton3.addEventListener("mouseout", tarjeteando3out,true);
          
        
        function tarjeteando3(){
              var cardd = document.getElementById("tarje");
               cardd.classList.add("deco3");
              cardd.classList.remove("deco2");
              var cardd2 = document.getElementById("tarje2");
               cardd2.classList.add("deco3");
        }
            function tarjeteando3out(){
              var cardd = document.getElementById("tarje");
               cardd.classList.remove("deco3");
               cardd.classList.add("deco2"); 
              var cardd2 = document.getElementById("tarje2");
               cardd2.classList.remove("deco3");
                  cardd.classList.add("deco2"); 
        }


  var boton4 = document.getElementById("redondo4");
       boton4.addEventListener("mouseover", tarjeteando4,true);
            boton4.addEventListener("mouseout", tarjeteando4out,true);
          
        
        function tarjeteando4(){
              var cardd = document.getElementById("imagen");
               var fondos = document.getElementById("fondo");
          
               cardd.classList.add("ima1");
              cardd.classList.remove("ima2");
              fondos.classList.add("fondito1");
              
        }
            function tarjeteando4out(){
              var cardd = document.getElementById("imagen");
               var fondos = document.getElementById("fondo");
            
               cardd.classList.remove("ima1");
                   fondos.classList.remove("fondito1");
               cardd.classList.add("ima2"); 
          
              
        }


  var boton5 = document.getElementById("redondo5");
       boton5.addEventListener("mouseover", tarjeteando5,true);
            boton5.addEventListener("mouseout", tarjeteando5out,true);
          
        
        function tarjeteando5(){
              var cardd = document.getElementById("imagen");
               var fondos = document.getElementById("fondo");
          
               cardd.classList.add("ima1");
              cardd.classList.remove("ima2");
              fondos.classList.add("fondito2");
              
        }
            function tarjeteando5out(){
              var cardd = document.getElementById("imagen");
               var fondos = document.getElementById("fondo");
            
               cardd.classList.remove("ima1");
                   fondos.classList.remove("fondito2");
               cardd.classList.add("ima2"); 
          
              
        }


  var boton6 = document.getElementById("redondo6");
       boton6.addEventListener("mouseover", tarjeteando6,true);
            boton6.addEventListener("mouseout", tarjeteando6out,true);
          
        
        function tarjeteando6(){
              var cardd = document.getElementById("imagen");
               var fondos = document.getElementById("fondo");
          
                 cardd.setAttribute("src","../img/f3.jpg");
            
            
               cardd.classList.add("ima1");
              cardd.classList.remove("ima2");
              fondos.classList.add("fondito3");
              
        }
            function tarjeteando6out(){
              var cardd = document.getElementById("imagen");
               var fondos = document.getElementById("fondo");
                    cardd.removeAttribute("src","../img/f3.jpg");
                 cardd.setAttribute("src","../img/p1.jpg");
             
               cardd.classList.remove("ima1");
                  cardd.classList.add("ima2");
                   fondos.classList.remove("fondito3");
               cardd.classList.add("ima2"); 
          
              
        }


  var boton7 = document.getElementById("redondo7");
       boton7.addEventListener("mouseover", tarjeteando7,true);
            boton7.addEventListener("mouseout", tarjeteando7out,true);
          
        
        function tarjeteando7(){
                var fondos = document.getElementById("fondo");
           fondos.classList.add("fondito4");
              
        }
            function tarjeteando7out(){
                 var fondos = document.getElementById("fondo");
                  fondos.classList.remove("fondito4");
               
        }

  var boton8 = document.getElementById("redondo8");
       boton8.addEventListener("mouseover", tarjeteando8,true);
            boton8.addEventListener("mouseout", tarjeteando8out,true);
          
        
        function tarjeteando8(){
                var fondos = document.getElementById("fondo");
           fondos.classList.add("fondito5");
              
        }
            function tarjeteando8out(){
                 var fondos = document.getElementById("fondo");
                  fondos.classList.remove("fondito5");
               
        }