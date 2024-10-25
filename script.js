function startGame(){
    var player1=(Math.floor(Math.random()*6+1));
    var player2=(Math.floor(Math.random()*6+1));

    var elem = document.querySelectorAll('img')
    // src="/assests/dice6.jpg"        

    elem[0].setAttribute("src",`dice${player1}.jpg`)
    elem[1].setAttribute("src",`dice${player2}.jpg`)

    var result = document.getElementById("result")

    if (player1 > player2){
        result.innerHTML = "player 1 won the match"
    }else if (player1 < player2){
        result.innerHTML = "player 2 won the match"
    }else{
        result.innerHTML = "Draw match"
    }
}