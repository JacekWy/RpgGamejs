//Statistic character
class Character {
  constructor(Hp, Mana, Attact, Defense) {
    this.Hp = Hp;
    this.Mana = Mana;
    this.Attact = Attact;
    this.Defense = Defense;
  }
}
//Declaration obiect
var player = new Character(2000, 1500, 23, 40);
var enemy = new Character(1000, 1200, 13, 20);

//jQuery connect stats  show
$(document).ready(function () {
  //Player
  $(".player-stats .hp p").text("Hp: " + player.Hp);
  $(".player-stats .mana p").text("Mana: " + player.Mana);
  $(".player-stats .attack p").text("Attack: " + player.Attact);
  $(".player-stats .defense p").text("Defense: " + player.Defense);
  //Enemy
  $(".enemy-stats .hp p").text("Hp: " + enemy.Hp);
  $(".enemy-stats .mana p").text("Mana: " + enemy.Mana);
  $(".enemy-stats .attack p").text("Attack: " + enemy.Attact);
  $(".enemy-stats .defense p").text("Defense: " + enemy.Defense);
});

//var hp = document.getElementsByTagName("p")[0].innerText;

/*
document.getElementsByTagName("p")[4].innerText = "HP: " + hpPlayer;

//Player button atack
document.querySelectorAll("button")[0].addEventListener("click", attact);
document.querySelectorAll("button")[1].addEventListener("click", magic);

function attact() {
  var sword_att = Math.floor(Math.random() * 50) + 20;
  hpPlayer = hpPlayer - sword_att + 20;
  document.getElementsByTagName("p")[4].innerText = "HP: " + hpPlayer;

  var h2 = document.createElement("h4");
  var div = document.getElementsByClassName("screen-play")[0];
  h2.innerHTML = "Player uzył miecza: " + sword_att + " Obrazen";
  div.appendChild(h2);
  //return hpPlayer;
}

function magic() {
  if (manaPlayer <= 0) {
    var h2 = document.createElement("h4");
    var div = document.getElementsByClassName("screen-play")[0];
    h2.innerHTML = "Brak Many";
    div.appendChild(h2);
  } else {
    var fireball = Math.floor(Math.random() * 80) + 10;
    hpPlayer = hpPlayer - fireball;
    document.getElementsByTagName("p")[4].innerText = "HP: " + hpPlayer;
    manaPlayer = manaPlayer - 25;
    document.getElementsByTagName("p")[1].innerText = "Mana: " + manaPlayer;

    var h2 = document.createElement("h4");
    var div = document.getElementsByClassName("screen-play")[0];
    h2.innerHTML = "Player uzył fireball: " + fireball + " Obrazen";
    div.appendChild(h2);
    //return hpPlayesdfdsfr;
  }
}
//console.log(hpPlayer);
*/
