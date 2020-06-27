//Statistic character
class Character {
  constructor(Hp, Mana, AttactMin, AttactMax, Defense) {
    this.Hp = Hp;
    this.Mana = Mana;
    this.AttactMin = AttactMin;
    this.AttactMax = AttactMax;
    this.Defense = Defense;
  }
  AttackPlayerMelee() {
    var meleeAttack =
      Math.floor(Math.random() * this.AttactMax) + this.AttactMin;
    enemy.Hp = enemy.Hp - meleeAttack;
    console.log(meleeAttack);
    $(".player-stats .hp p").text("Hp: " + player.Hp);
    $(".enemy-stats .hp p").text("Hp: " + enemy.Hp);
  }
  AttackPlayerMagic() {}
}
//Declaration obiect
var player = new Character(2200, 1500, 100, 230, 40);
var enemy = new Character(1000, 1200, 13, 18, 20);

//jQuery connect stats  show
//Player
$(".player-stats .hp p").text("Hp: " + player.Hp);
$(".player-stats .mana p").text("Mana: " + player.Mana);
$(".player-stats .attack p").text(
  "Attack: " + player.AttactMin + " - " + player.AttactMax
);
$(".player-stats .defense p").text("Defense: " + player.Defense);
//Enemy
$(".enemy-stats .hp p").text("Hp: " + enemy.Hp);
$(".enemy-stats .mana p").text("Mana: " + enemy.Mana);
$(".enemy-stats .attack p").text(
  "Attack: " + enemy.AttactMin + " - " + enemy.AttactMax
);
$(".enemy-stats .defense p").text("Defense: " + enemy.Defense);

/*

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
