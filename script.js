const boton = document.getElementById("toggle");
const extra = document.getElementById("extra");

console.log({ extra })

boton.addEventListener('click', () => {
    if(extra.classList.contains('hidden')){
        extra.classList.remove('hidden');
        boton.textContent = "Mostrar menos"
    }else{
        extra.classList.add('hidden');
        boton.textContent = "Mostrar más";
    }
})