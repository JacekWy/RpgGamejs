//Statistic character
class Character {
  constructor(Hp, Mana, AttactMin, AttactMax, Defense, Lvl, Exp) {
    this.Hp = Hp;
    this.Mana = Mana;
    this.AttactMin = AttactMin;
    this.AttactMax = AttactMax;
    this.Defense = Defense;
    this.Lvl = Lvl;
    this.Exp = Exp;
  }
  //Attack melle
  AttackPlayerMelee() {
    var meleeAttack =
      Math.floor(Math.random() * this.AttactMax) + this.AttactMin;
    enemy.Hp -= meleeAttack;
    $(".player-stats .hp p").text("Hp: " + player.Hp);
    $(".enemy-stats .hp p").text("Hp: " + enemy.Hp);
    $(".player-stats .player-exp p").text("Experiense: " + player.Exp);
    const screenStat = "Player uderzył z Miecza: " + meleeAttack + "</br>";
    $(".screen-play").prepend(screenStat);
    //enemy attack
    enemy.AttackEnemy();
  }
  //Magic fireball
  AttackPlayerFireball() {
    var fireballLvl = 1;
    var fireballAttackMin = 10;
    var fireballAttackMax = 20;
    var fireballMana = 20;
    var fireballFire =
      Math.floor(Math.random() * fireballAttackMax) + fireballAttackMin;
    enemy.Hp -= fireballFire;
    player.Mana -= fireballMana;
    $(".player-stats .mana p").text("Mana: " + player.Mana);
    $(".enemy-stats .hp p").text("Hp: " + enemy.Hp);
    $(".player-stats .player-exp p").text("Experiense: " + player.Exp);
    const screenStatFire =
      "Player uderzył z Fireball: " + fireballFire + "</br>";
    $(".screen-play").prepend(screenStatFire);
    //enemy attack
    enemy.AttackEnemy();
  }
  AttackEnemy() {
    var meleeAttackEnemy =
      Math.floor(Math.random() * this.AttactMax) + this.AttactMin;
    player.Hp -= meleeAttackEnemy;
    $(".player-stats .hp p").text("Hp: " + player.Hp);
    const screenStatEnemy = "Enemy uderzył: " + meleeAttackEnemy + "</br>";
    $(".screen-play").prepend(screenStatEnemy);
  }
}

//Declaration obiect
var player = new Character(2200, 1500, 100, 230, 40, 1, 0);
var enemy = new Character(1000, 1200, 13, 18, 20, 2, 0);

//jQuery connect stats  show
//Player
$(".player-stats .hp p").text("Hp: " + player.Hp);
$(".player-stats .mana p").text("Mana: " + player.Mana);
$(".player-stats .attack p").text(
  "Attack: " + player.AttactMin + " - " + player.AttactMax
);
$(".player-stats .defense p").text("Defense: " + player.Defense);
$(".player-stats .player-lvl p").text("Lvl: " + player.Lvl);
$(".player-stats .player-exp p").text("Experiense: " + player.Exp);
//Enemy
$(".enemy-stats .hp p").text("Hp: " + enemy.Hp);
$(".enemy-stats .mana p").text("Mana: " + enemy.Mana);
$(".enemy-stats .attack p").text(
  "Attack: " + enemy.AttactMin + " - " + enemy.AttactMax
);
$(".enemy-stats .defense p").text("Defense: " + enemy.Defense);
$(".enemy-stats .enemy-lvl p").text("Lvl: " + enemy.Lvl);

// Button melle sword and Fireball
$(".attack-sword").click(function () {
  player.AttackPlayerMelee();
});
$(".attack-fireball").click(function () {
  player.AttackPlayerFireball();
});
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
