// andiamo a dichiarare la costante container
const container = document.querySelector(".container");

const play = document.querySelector(".play");

play.addEventListener ("click", 

    function(){

        for (let i = 1; i <= 100; i++) {
        
            // andiamo a creare il div
            square =  `<div class="square"> ${i} </div>` ;
    
            // andiamo ad aggiungere il div al container 
            container.innerHTML += square;
    }

    }
)
