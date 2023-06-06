let toggle = document.getElementById("toggle");
let label_toggle = document.getElementById("label_toggle");
toggle.addEventListener("change", (event)=>{
    let checked = event.target.checked;
    //document.body.classList.toggle("dark");//
    if (checked == true) {
        label_toggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
        label_toggle.style.color = "yellow";
        //document.documentElement.style.backgroundColor = "blue";//
        document.body.style.backgroundColor = "#b7d4e5";
    }else {
        label_toggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
        label_toggle.style.color = "rebeccapurple";
        //document.documentElement.style.backgroundColor = "orange";//
        document.body.style.backgroundColor = "orange";
    }
})

document.addEventListener("DOMContentLoaded", function() {
    var animacionTrigger = document.getElementById("animacion-trigger");
    var containerAnimacion = document.querySelector(".container-animacion");
  
    animacionTrigger.addEventListener("click", function() {
      containerAnimacion.style.display = "flex"; // o "block"
    });
  });
  
const animacionTrigger = document.getElementById('animacion-trigger');
const containerAnimacion = document.querySelector('.container-animacion');

animacionTrigger.addEventListener('click', () => {
  //containerAnimacion.classList.remove('animacion-activa');
  containerAnimacion.classList.remove('.container-animacion');
});
