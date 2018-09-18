

var button = document.getElementById("button");

button.addEventListener("click", function(){
    var lottoNumbers = []
    for (var i = 1; i < 50; i++) {
        lottoNumbers.push(i)        
    }
    
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
      }
      
      // Used like so
      var numbers = lottoNumbers
      numbers = shuffle(numbers);
      

    document.getElementById("num1").innerHTML = numbers[0]
    document.getElementById("num2").innerHTML = numbers[1]
    document.getElementById("num3").innerHTML = numbers[2]
    document.getElementById("num4").innerHTML = numbers[3]
    document.getElementById("num5").innerHTML = numbers[4]
    document.getElementById("num6").innerHTML = numbers[5]
    document.getElementById("bonusNumber").innerHTML = numbers[6]
})





