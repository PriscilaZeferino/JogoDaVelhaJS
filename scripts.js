var player = 'X'
var positions = []
var positionsOcupadas = 0

window.onload = function () {
  createTable()
}

//Cria o tabuleiro
function createTable () {
  var table = document.querySelector('.cards')

  for (let i = 0; i < 9; i++) {
    var buttons = document.createElement('button')

    buttons.setAttribute('id', `btn-${i}`)
    buttons.setAttribute('onclick', 'choosed(' + i + ');')
    buttons.textContent = ''

    table.appendChild(buttons)
  }

  atualizaPlayer(player)
}

//Atualiza player
function atualizaPlayer (player) {
  var div = document.querySelector('.timeplayer p')
  div.textContent = player
}

//Marca o botão escolhido
function choosed (id) {
  if (checkWinner() || positions[id] === 'X' || positions[id] === 'O') {
    return
  }

  if (positions[id] != 'X' && positions[id] != 'O') {
    positionsOcupadas++
    positions[id] = player

    var buttonChoosed = document.getElementById(`btn-${id}`)
    buttonChoosed.textContent = player

    if (player == 'X') {
      player = 'O'
    } else {
      player = 'X'
    }
    atualizaPlayer(player)

    const resultado = checkWinner()
    if (resultado === 'empate') {
      alert('O jogo terminou em empate')
    } else if (resultado) {
      alert(`O jogador ${resultado} venceu!`)
    }
  } else {
    alert('Essa casa nao pode mais ser marcada')
  }
}

function checkWinner () {
  const winner = [
    [0, 1, 2], //linhas
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 4], //colunas
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], //diagonais
    [2, 4, 5]
  ]

  for (const condition of winner) {
    const [a, b, c] = condition

    if (
      positions[a] &&
      positions[a] == positions[b] &&
      positions[a] == positions[c]
    ) {
      return positions[a]
    }
  }

  if (positionsOcupadas === 9) {
    return 'empate'
  }

  return null
}

function clearTable () {
  positionsOcupadas = 0
  positions = []

  for (let i = 0; i < 9; i++) {
    var btn = document.querySelector(`#btn-${i}`)
    btn.textContent = ''
  }

  atualizaPlayer(player)
}
