new Vue({
  el: '#app',
  data: {
    hp: 100,
    hp_m: 100,
    log: [],
    isRunning: false
  },
  computed: {

  },
  methods: {
    newGame: function(){
      this.hp = 100;
      this.hp_m = 100;
      this.log = []
      this.isRunning = true;
    },
    atack: function(valueToRandomize, type){
      var damage = Math.floor((Math.random() * valueToRandomize) + 3);
      if(type == "player"){
        var other = 'monster'
        this.hp_m -= damage;
      }
      else {
        var other = 'player'
        this.hp -= damage;
      }
      this.log.unshift({
        type: type,
        text: type + ' hits ' + other + ' for ' + damage
      });
    },
    heal: function(valueToRandomize){
      var heal_value = Math.floor((Math.random() * valueToRandomize) + 3);
      this.hp += heal_value;
      this.log.unshift({
        type: 'player',
        text: 'player heals himself for ' + heal_value
      });
    },
    turnAtack: function(){
      this.atack(3,'monster');
      this.atack(3,'player');
      this.checkIfEnded();
    },
    turnHeal: function(){
      this.atack(3,'monster');
      this.heal(3);
      this.checkIfEnded();
    },
    turnSpecialAtack: function(){
      this.atack(3,'monster');
      this.atack(5,'player');
      this.checkIfEnded();
    },
    checkIfEnded: function(){
      this.isRunning = (this.hp > 0 && this.hp_m > 0);
    }
  }
});