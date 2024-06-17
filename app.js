
let contador = 0; 


//referencias al html

const btnCrear = document.querySelector("#crear");
const div = document.querySelector("#notas_anteriores");
const formulario = document.getElementById("formulario");


let crearAnteriores = ( ) =>{

    let nuevoContador = localStorage.getItem("contador");
    if(!nuevoContador){
        return
    }

    nuevoContador = parseInt(nuevoContador)
    for(let i = 1; i <= nuevoContador; i++){
        let notaAnterior = localStorage.getItem("idNuevo" + i)
        
        if(!notaAnterior){
            continue
        }

        const botonBorrar = document.createElement("button");
        botonBorrar.setAttribute("id", contador);
        botonBorrar.classList.add("idBorrar");
        botonBorrar.textContent = "Borrar"
    
        // crear, definir id, definir clase del div nuevo
        const divNuevo = document.createElement("div");
        divNuevo.setAttribute("id", "idNuevo" + contador);
        divNuevo.classList.add("idNuevo"); //para estilos css
    
        //agregar el texto ingresado en el div nuevo y agregar boton borrar en div nuevo
        divNuevo.textContent = notaAnterior;
        divNuevo.append(botonBorrar);
    
        //agregar el div nuevo creado al div del html
        div.append(divNuevo);
    
        botonBorrar.addEventListener("click",()=>{

            div.removeChild(divNuevo);
            localStorage.removeItem(("idNuevo" + i))
        })
    
        formulario.reset();
    
    
    }

    contador  = nuevoContador
}

crearAnteriores();


btnCrear.addEventListener("click", ()=>{

    contador++;

    //guardar la informacion ingresada 
    let notaNueva = document.getElementById("campo").value;

    //crear, definir id, definir clase, definir texto del boton borrar

    const botonBorrar = document.createElement("button");
    botonBorrar.setAttribute("id", contador);
    botonBorrar.classList.add("idBorrar");
    botonBorrar.textContent = "Borrar"

    // crear, definir id, definir clase del div nuevo
    const divNuevo = document.createElement("div");
    divNuevo.setAttribute("id", "idNuevo" + contador);
    divNuevo.classList.add("idNuevo"); //para estilos css

    //agregar el texto ingresado en el div nuevo y agregar boton borrar en div nuevo
    divNuevo.textContent = notaNueva;
    divNuevo.append(botonBorrar);

    //agregar el div nuevo creado al div del html
    div.append(divNuevo);

    //localstorage 
    localStorage.setItem("idNuevo" + contador, notaNueva);
    localStorage.setItem("contador", contador);
    //console.log(localStorage.getItem("idNuevo" + contador))
    //console.log(localStorage.getItem("contador"))
    
    //funcion del boton borrar
    botonBorrar.addEventListener("click",(e)=>{
        div.removeChild(divNuevo);
       localStorage.removeItem("idNuevo" + e.target.attributes.id.value)

    })

    formulario.reset();


 });


