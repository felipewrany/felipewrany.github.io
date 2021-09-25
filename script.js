const button = document.querySelector(".button");
const imagemBob = document.querySelector('#fotobob');
const humorBob = document.querySelector('#humorBob');
button.value = 1

button.addEventListener("mouseover", function() {
    button.style.color = "white";
});
button.addEventListener("mouseout", function() {
    button.style.color = "black";
});
button.addEventListener('click', function() {
    if(button.value == 1){
        imagemBob.src = 'bobnormal.png';
        humorBob.innerText = 'Bob tá normal';
        button.value = 2 
    } else if(button.value == 2) { 
        imagemBob.src = 'bobfeliz.png'; 
        humorBob.innerText = 'Bob tá feliz';
        button.value = 3  
    } else if (button.value == 3) { 
        imagemBob.src = 'bobassustado.png'; 
        humorBob.innerText = 'Bob tá assustado';
        button.value = 4;
    } else { 
        imagemBob.src = 'bobdesconfiado.png'; 
        humorBob.innerText = 'Bob tá desconfiado';
        button.value = 1;
    }
})
