
let computersNumber = Math.floor(Math.random() * 20) + 1 // random value generated
console.log(computersNumber)
;


const check = document.querySelector('.check')

let score = 10


//*localStrorage den topScore u getir, topScore daha yoksa enYuksekSkor 0 olsun
// let enYuksekSkor = localStorage.getItem("topScore") || 0;

document.querySelector(".top-score").textContent =
  localStorage.getItem("topScore") || 0;


// const voice = document.querySelector(".voice");
      
  
      // counting the number of guesses
      // made for correct Guess
      
  
     check.onclick = () => {
  
        // number guessed by user    
          let myNumber = document.querySelector('.guess').value;
          document.querySelector('.score').textContent = score
          if(myNumber == computersNumber)
          {    
            alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
                  + score + " GUESS ");
            document.querySelector('.score').textContent = score
            document.querySelector('.top-score').textContent = score
            document.querySelector(".number").textContent = computersNumber;
            // document.querySelector(".containers").style.display = "none";
            // document.body.style.backgroundImage = "url('well-done-3182_512.gif')"
            // document.body.style.backgroundPosition = "center"
            // document.body.style.backgroundRepeat = "no-repeat"
            // document.body.style.backgroundSize = "cover"
            // document.body.style.backgroundColor = "red"
            // voice.play();
           document.querySelector('.endscore').textContent = "TOTAL SCORE: " + score
 ;
            document.querySelector('.company').textContent = "made by Sefa Kurtuldu©  "
            


            
            
            
          }
          else if(myNumber > computersNumber) /* if guessed number is greater than actual number*/
          {    
            score --;
            alert("OOPS SORRY!! TRY A SMALLER NUMBER");
            document.querySelector('.score').textContent = score
            document.querySelector('.msg').textContent = "TRY A SMALLER NUMBER"
          }
          else if (myNumber < computersNumber)
          {
            score --;
            alert("OOPS SORRY!! TRY A GREATER NUMBER")
            document.querySelector('.score').textContent = score
            document.querySelector('.msg').textContent = "TRY A BIGGER NUMBER"
          }
          else if (score == 0){
            
            document.querySelector('.msg').textContent = "game over "
          }
          if (Math.abs(myNumber - computersNumber) == 1){
            document.querySelector('.msg').textContent = "VERY CLOSE One more or less "
          }

      
      document.querySelector(".guess").onkeydown = (tus) => {
        if (tus.keyCode === 13) {
        document.querySelector(".check").click();;
  } }
      if (score > localStorage.getItem("topScore")) {
      localStorage.setItem("topScore", score);
      document.querySelector(".top-score").textContent = score;
    }
}
// -----------again---------------

  document.querySelector(".again").onclick = () => {
    computersNumber = Math.ceil(Math.random() * 20)  // random value
    console.log(computersNumber);
    document.querySelector(".msg").textContent = "new game starting"
    
    document.querySelector("body").style.backgroundColor = "#2d3436";
    score = 10
    document.querySelector('.score').textContent = score
    document.querySelector(".guess").value = "";
    document.querySelector('.company').textContent =""
     document.querySelector('.endscore').textContent = ""
 ;
  }
