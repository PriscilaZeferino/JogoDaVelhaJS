var player = "X";
var positions = [];
var positionsOcupadas = 0;

window.onload = function()
{

    //Cria o head da página
    var head = document.querySelector('#app #head');

    var h1 = document.createElement('h1');
    var textH1 = document.createTextNode('Jogo da velha')

    head.appendChild(h1);
    h1.appendChild(textH1);

    var h2 = document.createElement('h2');
    var textH2 = document.createTextNode('Player: ');

    var p = document.createElement('p');

    head.appendChild(h2);
    head.appendChild(p);
    h2.appendChild(textH2);

    createTable();
}

//Cria o tabuleiro
function createTable()
{
    var table = document.querySelector('#app #table');

    for(let i = 0; i < 9; i++)
    {  
        var buttons = document.createElement('button');
        buttons.setAttribute('id', i);
        buttons.setAttribute('onclick', 'choosed(' + i + ');');
        table.appendChild(buttons);

        var btnText = document.createTextNode('*');
        buttons.appendChild(btnText);


        if(i == 2)
        {
            var br = document.createElement('br');
            table.appendChild(br);
        }
        else if(i == 5)
        {
            var br = document.createElement('br');
            table.appendChild(br);
        }
    }
    
    definePlayer(player);
}

//Define o jogador
function definePlayer(player)
{    
    
    var div = document.querySelector('#app #text');
    var divP = document.createElement('p');

    div.appendChild(divP);

    var textPlayer = document.createTextNode("Vez de " + player + '  ');
    divP.appendChild(textPlayer);

}

//Marca o botão escolhido
function choosed(id)
{
    if(positions[id] != "X" && positions[id] != "O")
    {
        positionsOcupadas++;        
        positions[id] = player;

        var buttonChoosed = document.getElementById(id);
        var textPlayer = document.createTextNode(player);
        buttonChoosed.appendChild(textPlayer);
    
        if(player == "X")
        {
            player = "O";
        }
        else
        {
            player = "X";
        }
        definePlayer(player);
    }
    else
    {
        alert("Essa casa nao pode mais ser marcada");
    }
    console.log(positions);
    checkWin()

}

function checkWin()
{
    //Verifica as linhas
    if(positions[0] === "X" && positions[1] === "X" && positions[2] === "X" || positions[0] === "O" && positions[1] === "O" && positions[2] === "O")
    {
        if(positions[0] === "X")
        {
            writeWin("O jogador 'X' ganhou");
        }
        else
        {
            writeWin("O jogador 'O' ganhou");

        }
    }
    else if(positions[3] === "X" && positions[4] === "X" && positions[5] === "X" || positions[3] === "O" && positions[4] === "O" && positions[5] === "O")
    {
        if(positions[3] === "X")
        {
            writeWin("O jogador 'X' ganhou");

        }
        else
        {
            document.write("O jogador 'O' ganhou");

        } 
    }
    else if(positions[6] === "X" && positions[7] === "X" && positions[8] === "X" || positions[6] === "O" && positions[7] === "O" && positions[8] === "O" )
    {
        if(positions[6] === "X")
        {
            console.log("X ganhou")
        }
        else
        {
            console.log("O ganhou")
        }     
    }
    //Verifica as colunas
    else if(positions[0] === "X" && positions[3] === "X" && positions[6] === "X")
    {
        writeWin("O jogador 'X' ganhou");
    }
    else if(positions[1] === "X" && positions[4] === "X" && positions[7] === "X")
    {
        writeWin("O jogador 'X' ganhou");
    }
    else if(positions[2] === "X" && positions[5] === "X" && positions[8] === "X")
    {
        writeWin("O jogador 'O' ganhou");
    }
    else if(positions[0] === "O" && positions[3] === "O" && positions[6] === "O")
    {
        writeWin("O jogador 'O' ganhou");
    }
    else if(positions[1] === "O" && positions[4] === "O" && positions[7] === "O")
    {
        writeWin("O jogador 'O' ganhou");
    }
    else if(positions[2] === "O" && positions[5] === "O" && positions[8] === "O")
    {
        writeWin("O jogador 'O' ganhou");
    }
    //Verifica as diagonais
    else if(positions[0] === "X" && positions[4] === "X" && positions[8] === "X")
    {
        writeWin("O jogador 'X' ganhou");
    }
    else if(positions[0] === "O" && positions[4] === "O" && positions[8] === "O")
    {
        writeWin("O jogador 'O' ganhou");
    }
    else if(positions[2] === "X" && positions[4] === "X" && positions[6] === "X")
    {
        writeWin("O jogador 'X' ganhou");
    }
    else if(positions[2] === "O" && positions[4] === "O" && positions[6] === "O")
    {
        writeWin("O jogador 'O' ganhou");
    }
    else
    {
       console.log('Continuem jogando')
       if(positionsOcupadas == 9)
       {
            writeWin("Empate");
       }
    }
}

function writeWin(text)
{
    var win = document.querySelector("#app");
    var winElement = document.createElement('p');
    winElement.setAttribute('id', 'win');
    win.appendChild(winElement);

    var textWin = document.createTextNode(text);
    winElement.appendChild(textWin);
}

