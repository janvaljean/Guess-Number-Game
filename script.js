
let computersNumber = Math.floor(Math.random() * 20) + 1 // random value generated
console.log(computersNumber)
;


const check = document.querySelector('.check')

let score = 10




const voice = document.querySelector(".voice");
      
  
      // counting the number of guesses
      // made for correct Guess
      
  
     check.onclick = () => {
  
        // number guessed by user    
          let myNumber = document.querySelector('.guess').value;
  
          if(myNumber == computersNumber)
          {    
            alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
                  + score + " GUESS ");
            document.querySelector('.score').textContent = score
            document.querySelector('.top-score').textContent = score
            document.querySelector(".containers").style.display = "none";
            document.body.style.backgroundImage = "url('well-done-3182_512.gif')"
            document.body.style.backgroundPosition = "center"
            document.body.style.backgroundRepeat = "no-repeat"
            document.body.style.backgroundSize = "cover"
            document.body.style.backgroundColor = "red"
            voice.play();
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

      }
      document.querySelector(".guess").onkeydown = (tus) => {
        if (tus.keyCode === 13) {
        document.querySelector(".check").click();;
  }}