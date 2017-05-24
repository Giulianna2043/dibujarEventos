$(document).ready(function(){
	$("#ocultar-cuadros").on("click",function(){

        $("#mostrar-cuadros").show();
        $("#mostrar").hide();
	});
    $("#ocultar").on("click",function(){

        $("#mostrar").show();
        $("#mostrar-cuadros").hide();
	});
});

