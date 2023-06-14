const display = document.querySelector('.display');
const botones = document.querySelectorAll('.btn');

botones.forEach(boton => {
    boton.addEventListener('click', () => {
       const botonApretado = boton.textContent;

        if (boton.id === 'c') {
            display.textContent = '0';
            return;
        }

        if (boton.id === 'borrar') {
            if (display.textContent.length === 1 || display.textContent === 'Error!') {
                display.textContent = '0';
            } else {
                display.textContent = display.textContent.slice(0, -1);
            }
            return;
        }

        if (boton.id === 'igual') {
            try {
                display.textContent = eval(display.textContent);
            } catch {
                display.textContent = 'Error!';
            }
            return;
        }

       if (display.textContent === '0' || display.textContent === 'Error!'){
        display.textContent = botonApretado;
       } else {
           display.textContent += botonApretado;
       }

       if (display.textContent.length < 14) {      
        display.style.setProperty("font-size", "2rem");       
      } else if (display.textContent.length >  14 && display.textContent.length < 28){
        display.style.setProperty("font-size", "1rem");   
      } else if (display.textContent.length > 28 && display.textContent.length < 34){
        display.style.setProperty("font-size", ".7rem");   
      } else if (display.textContent.length >= 34){
        display.textContent = "Límite alcanzado";
      }
    })
    
});