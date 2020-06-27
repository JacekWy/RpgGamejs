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
    player.Exp += meleeAttack;
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
    var tabLvel = [
      [10, 20, 20], //0 lvl
      [10, 20, 20], // 1 lvl
      [20, 50, 80],
    ];

    var fireballAttackMin = tabLvel[player.Lvl][0];
    var fireballAttackMax = tabLvel[player.Lvl][1];
    var fireballMana = tabLvel[player.Lvl][2];
    var fireballFire =
      Math.floor(Math.random() * fireballAttackMax) + fireballAttackMin;
    enemy.Hp -= fireballFire;
    player.Mana -= fireballMana;
    player.Exp += fireballFire;
    $(".player-stats .mana p").text("Mana: " + player.Mana);
    $(".enemy-stats .hp p").text("Hp: " + enemy.Hp);
    $(".player-stats .player-exp p").text("Experiense: " + player.Exp);
    const screenStatFire =
      "Player uderzył z Fireball: " + fireballFire + "</br>";
    $(".screen-play").prepend(screenStatFire);
    //enemy attack
    enemy.AttackEnemy();
    $(".attack-fireball").text(
      "Fireball Attack: " + fireballAttackMin + " - " + fireballAttackMax
    );
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
$(".attack-sword").text(
  "Sword Attack: " + +player.AttactMin + " - " + player.AttactMax
);

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
