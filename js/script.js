// andiamo a dichiarare la costante container
const container = document.querySelector(".container");

const play = document.querySelector(".play");

play.addEventListener ("click", 

    function(){

        for (let i = 1; i <= 100; i++) {
        
            const divElement = document.createElement("div");
            divElement.classList.add("square");

            divElement.innerHTML = i;

            divElement.addEventListener ("click",

                    function(){

                        divElement.classList.add("clicked");
                        console.log(i);
                    }
            );

            container.append(divElement);


        }
        
    }

    
)

