let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];
let puntosJugador = 0;

const btnNuevaPartida = document.querySelector('#nueva-partida');
const btnPedirCarta = document.querySelector('#pedir-carta');
const btnPasar = document.querySelector('#pasar');
const divJugadorCartas = document.querySelector('#jugador-cartas');
const puntosJugadorTexto = document.querySelector('#puntos-jugador');

const crearDeck = () => {
    deck = [];
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipos) {
            deck.push(i + tipo);
        }
    }
    for (let tipo of tipos) {
        for (let esp of especiales) {
            deck.push(esp + tipo);
        }
    }
    deck = deck.sort(() => Math.random() - 0.5);
};

const pedirCarta = () => deck.pop();

btnNuevaPartida.addEventListener('click', () => {
    crearDeck();
    puntosJugador = 0;
    puntosJugadorTexto.innerText = '0';
    divJugadorCartas.innerHTML = '';
});

btnPedirCarta.addEventListener('click', () => {
    const carta = pedirCarta();
    const imgCarta = document.createElement('img');
    imgCarta.src = `cartas/${carta}.jpg`;
    imgCarta.classList.add('cartas/9C.jpg');
    divJugadorCartas.append("cartas/4D.jpg");
});
