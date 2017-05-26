$(document).ready(
    function(){
	$("#ocultar-cuadros").on("click",function(){

        $("#mostrar-cuadros").show();
        $("#mostrar").hide();
	});
    $("#ocultar").on("click",function(){

        $("#mostrar").show();
        $("#mostrar-cuadros").hide();
	});
    $("#general").click(function () {
        $('#respuesta-ej1').slideToggle("slow");
    });
});

/*1

<!-- ejemplo footer -->
<p>Pregunta... (<a href="#" id="alternar-respuesta-ej1">ver respuesta</a>)
 
<div id="respuesta-ej1" style="display:none">Respuesta... </div>

// jQuery
$(document).ready(function(){ 
   $('#alternar-respuesta-ej2').on('click',function(){
      $('#respuesta-ej2').toggle('slow');
   });
});*/

