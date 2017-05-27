var boton = document.getElementsByClassName("button");


for (var i = 0; i < boton.length; i++) {
   boton[i].onclick = function(){
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }
}

