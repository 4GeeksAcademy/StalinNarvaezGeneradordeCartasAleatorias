/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const pinta = ["♦", "♥", "♠", "♣"];
  const digito = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  function nuevaCarta() {
    let cartaPinta = pinta[Math.floor(Math.random() * pinta.length)];
    let cartaDigito = digito[Math.floor(Math.random() * digito.length)];

    document.getElementById("valor").innerHTML = cartaDigito;
    let paloSuperior = (document.getElementById("palo").innerHTML = cartaPinta);
    document.getElementById("palo2").innerHTML = paloSuperior;

    if (cartaPinta === "♦" || cartaPinta === "♥") {
      document.getElementById("palo").style.color = "red";
      document.getElementById("palo").style.fontSize = "80px";
    } else {
      document.getElementById("palo").style.color = "black";
      document.getElementById("palo").style.fontSize = "80px";
    }
    if (cartaPinta === "♦" || cartaPinta === "♥") {
      document.getElementById("palo2").style.color = "red";
      document.getElementById("palo2").style.fontSize = "80px";
    } else {
      document.getElementById("palo2").style.color = "black";
      document.getElementById("palo2").style.fontSize = "80px";
    }
  }
  document.getElementById("boton").onclick = function() {
    nuevaCarta();
  };
  const intervalId = setInterval(nuevaCarta, 10000);
  function redimensionarCarta() {
    let ancho = document.getElementById("ancho").value;
    let alto = document.getElementById("alto").value;
    document.getElementById("contenidoCarta").style.width = ancho + "px";
    document.getElementById("contenidoCarta").style.height = alto + "px";
  }
  document.getElementById("botonRedimensionar").onclick = function() {
    redimensionarCarta();
  };
};
