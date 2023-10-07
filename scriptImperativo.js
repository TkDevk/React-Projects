//Vanilla Js

//Obtener el boton 

const button = document.querySelector('button'); // Creo constante para atravez del dom traer la etiqueta button

//Al hacer click en boton, tenemos que ejecutar una funcion

//Le digo a mi variable boton (objeto ?)
//Le digo a button que use el metodo addeventlistener
button.addEventListener('click', function(){ // Aqui le estoy diciendo que cuando escuche un click ejecture la funcion
      alert('Que hace pa?');
}) // Escribo todo dentro del metodo addEventlistener, cual es el trigger y que va a activar ({})


//Ahora le doy una identidad al boton para jugar con el 

//This es como un contexto de que estamos hablando, pero como se que estoy usando correctamente el this??

// Cuando hace click me recupera la id del atributo
button.addEventListener('click', ()=>{ //Uso mi const button y le digo que use el evento addevent listener
    // Creo una funcion flecha para que cuando escuche click ejececute lo que esta dentro
    const id = button.getAttribute('data-id');  // Entonces declaro que id es igual a, que use mi const button y use el metodo getAttribute, va a ser el de mi boton, con esto 


    //Esto es un servicio, llamar para actualizar mi botton


    if(button.classList.contains('uso')){
        button.classList.remove('uso');
        button.innerText = 'Hola';

    }else{
        button.classList.add('uso');
        button.innerText = 'Quitar Saludo';
    }
})