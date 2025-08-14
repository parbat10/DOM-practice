let score = JSON.parse(localStorage.getItem('score'))||
         {
            wins:0,
            losses:0,
            ties:0
         } ;
         updatedScore();
      /*if(!score) {
         score={
            wins:0,
            losses:0,
            ties:0
         };
      }*/
      function playGame(playerMove){
            const ComputerMove = PickComputerMove();  
      let result = '';
      if (playerMove === 'rock'){   
               if (ComputerMove === 'rock'){
            result = `it's a tie`;
         }else if (ComputerMove === 'paper' ){
            result ='You lose';
         }else if( ComputerMove === 'scissor'){
            result ='You win';
         }

      }else if(playerMove === 'paper'){
               if (ComputerMove === 'rock'){
            result = 'You win';
         }else if (ComputerMove === 'paper' ){
            result =`it's a tie`;
         }else if( ComputerMove === 'scissor'){
            result ='You lose';
         }

      }else if(playerMove === 'scissor'){
               if (ComputerMove === 'rock'){
            result = 'You lose';
         }else if (ComputerMove === 'paper' ){
            result ='You win';
         }else if( ComputerMove === 'scissor'){
            result =`it's a tie`;
         }
      }
      
      
      if (result === 'You lose'){
         score.losses += 1;
      }else if (result === `it's a tie`){
         score.ties += 1;
      }else if (result === 'You win'){
         score.wins += 1;
      }
      
      
      localStorage.setItem('score', JSON.stringify(score));

      updatedScore();

      document.querySelector('.js-result')
        .innerHTML = result;
         document.querySelector('.js-moves')
        .innerHTML = `You ${playerMove} - ${ComputerMove} Computer`;  
      }

      function updatedScore(){
        document.querySelector('.js-score')
         .innerHTML = `wins:${score.wins},lose:${score.losses},tie:${score.ties}`;
      }
      
      
      function PickComputerMove(){
         const randomNumber = Math.random(); 

         let ComputerMove = '' ;
     if (randomNumber >= 0 && randomNumber < 1/3){
        ComputerMove='rock';
     } else if(randomNumber >= 1/3 && randomNumber < 2/3){
        ComputerMove='paper';
     } else if(randomNumber >= 2/3 && randomNumber < 1){
        ComputerMove = 'scissor';
     } 
     return ComputerMove;
   }