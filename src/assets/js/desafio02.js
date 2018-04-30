(function (){
    var vai = document.getElementById("vai")
    var resultado = document.getElementById("resultado")
    
    vai.addEventListener("click", function(){
        var jogador1 = document.getElementById("jogador1")
        var jogador2 = document.getElementById("jogador2")

        resultado.innerHTML = ""
        jogador1 = jogador1[jogador1.selectedIndex].value
        jogador2 = jogador2[jogador2.selectedIndex].value

        if(jogador1 == jogador2){
            resultado.innerHTML = "EMPATE!"
        }
            if(jogador1 == "pedra" && jogador2 == "tesoura"){
                resultado.innerHTML = "JOGADOR1 VENCEU!"
            }
            else if(jogador1 == "tesoura" && jogador2 == "pedra"){
                resultado.innerHTML = "JOGADOR2 VENCEU!"
            }
            else if(jogador1 == "pedra" && jogador2 == "papel" ){
                resultado.innerHTML = "JOGADOR2 VENCEU!"
            }
            else if(jogador1 == "papel" && jogador2 == "pedra"){
                resultado.innerHTML = "JOGADOR1 VENCEU!"
            }
            else if(jogador1 == "tesoura" && jogador2 == "papel"){
                resultado.innerHTML = "JOGADOR1 VENCEU!"
            }
            else if(jogador1 == "papel" && jogador2 == "tesoura"){
                resultado.innerHTML = "JOGADOR2 VENCEU!"
            }

        
    })
})();