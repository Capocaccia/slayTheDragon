var slaying = true

var youHit = Math.floor(Math.random() * 2)

var damageThisRound = Math.floor(Math.random()*5 + 1)

var totalDamage = 0

var dragonSlayer = function(){
    while(slaying){
      if(youHit === 1){
          alert("Damage inflicted on the dragon = " + damageThisRound)
          alert("You hit the dragon with " + damageThisRound + " damage!")
          totalDamage += damageThisRound;
          if(totalDamage >= 4){
              alert("You slew the dragon with " + totalDamage + " damage!")
              slaying = false
          } else {
              youHit = Math.floor(Math.random() * 2)
          }
      } else {
          alert("You were defeated by the dragon!")
      }
      slaying = false
  }
}
