
let personagem = document.querySelector("#personagem");

let topo = 0;
let esquerdo = 0;

document.addEventListener("keydown",teclapressionada);

function teclapressionada(evento){
    let tecla = evento.keyCode; //Recupero o código da tecla
    
    if(tecla == 40){
        topo += 10; //topo = topo + 10
        if(topo >= 412){
            topo = 412;
        }
        personagem.style.top = topo + "px";
    }
    if(tecla == 38){
        topo -= 10; //topo = topo - 10
        if(topo <= 0){
            topo = 0;
        }
        personagem.style.top = topo + "px";
    }
    if(tecla == 39){
       esquerdo += 10;
       if(esquerdo >= 608){
        esquerdo = 608;
       }
       personagem.style.left = esquerdo + "px"; 
    }

    if(tecla == 37){
        esquerdo -= 10;
        if(esquerdo <= 0){
            esquerdo = 0;
        }
        personagem.style.left = esquerdo + "px"; 
     }



}

