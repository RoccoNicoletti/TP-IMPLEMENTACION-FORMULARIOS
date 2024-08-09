const listaDeseos= new Set();

function listaDeseados(boton, producto){
    
    const mensajeCadaUno= `mensaje${producto}`
    const mensaje=document.getElementById(mensajeCadaUno);
    const mensajeCadaUnoError= `mensajeError${producto}`
    const mensajeError=document.getElementById(mensajeCadaUnoError);
    

    if(!boton.classList.contains("agregado") && !listaDeseos.has(producto)){
        
        boton.classList.add("agregado");
        listaDeseos.add(producto);
        mensaje.style.display= "inline";

        

    mostrarListaDeseos();
   
    setTimeout(function(){

        boton.classList.remove("agregado");
        mensaje.style.display="none";
       
        
    }, 1800);

}

else if(boton.classList.contains("agregado") || listaDeseos.has(producto)){

    boton.classList.add("yaagregado");
    mensajeError.style.display= "inline";
    

    setTimeout(function(){

        boton.classList.remove("yaagregado");
        mensajeError.style.display="none";
    }, 1800);

}
}


function mostrarListaDeseos() {
    const listaDeseosElement = document.getElementById("listaDeseos");
    

    listaDeseosElement.innerHTML = "";
  
    listaDeseos.forEach(producto => {
        if (!productoEliminado(producto)) {
      const listItem = document.createElement("li");
      listItem.textContent = producto;
      const boton= document.createElement("button")
      boton.innerText=" " +"Eliminar Producto.";
      boton.onclick=()=> eliminarProducto(producto);

      listItem.appendChild(boton);

      listaDeseosElement.appendChild(listItem);
      
    
      }


    });

}

function productoEliminado(producto) {
    return !listaDeseos.has(producto); 
  }

    function eliminarProducto(producto){

        listaDeseos.delete(producto);
        mostrarListaDeseos();
    }

      



    
    
