var teclas={
    UP:38,
    DOWN:40 ,
    left:37,
    RIGTH:39
};

    console.log(teclas);
    document.addEventListener("keydown",dibujarTeclado);
    var cuadrito=document.getElementById("area_de_dibujo");
    var papel = cuadrito.getContext("2d");
    var x=150;
    var y=150;


    dibujarLinea("red",149,149,151,151,papel);
function dibujarLinea(color,xinicial, yinicial, xfinal, yfinal,lienzo)
{
    lienzo.beginPath(); //empieza un dibujo
    lienzo.strokeStyle=color;
    lienzo.lineWidth=3;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke(); //trazar raya
    lienzo.closePath();//termina el dibujo
 
}


function dibujarTeclado(evt)
{
    var colorcito="blue";
    var movimiento=10;
        
    switch(evt.keyCode){
        case teclas.UP:
            dibujarLinea(colorcito,x,y,x,y-movimiento,papel);
            y=y-movimiento;
        break;
        case teclas.DOWN:
            dibujarLinea(colorcito,x,y,x,y+movimiento,papel);
            y=y+movimiento;
        break;
        case teclas.left:
            dibujarLinea(colorcito,x,y,x-movimiento,y,papel);
            x=x-movimiento;
        break;
        case teclas.RIGTH:
            dibujarLinea(colorcito,x,y,x+movimiento,y,papel);
            x=x+movimiento;
        break;
        default:
        console.log("otra teclz");
        break;
    //alert("ofdkfkvida");
}
}