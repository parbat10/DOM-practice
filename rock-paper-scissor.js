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
     let isAutoPlaying = false;
     let intervalId;
     function autoPlay(){

      if(!isAutoPlaying){
      intervalId = setInterval(function(){
         const playerMove = PickComputerMove();
         playGame(playerMove);
      },1000) ;
      isAutoPlaying = true;
   }else{
      clearInterval(intervalId);
      isAutoPlaying = false;
   }
}

   document.querySelector('.js-rock-button')
      .addEventListener('click', ()=>{
         playGame('rock');
      });
   document.querySelector('.js-paper-button')
      .addEventListener('click', ()=>{
         playGame('paper');
      });
   document.querySelector('.js-scissor-button')
      .addEventListener('click', ()=>{
         playGame('scissor');
      });

   document.querySelector('.js-auto-button')
      .addEventListener('click', () => {
         autoPlay();
      });
   document.querySelector('.js-reset-button')
      .addEventListener('click',() => {
         score.wins = 0;
         score.ties = 0;
         score.losses = 0;
         localStorage.removeItem('score');
         alert('The game was reset');
         updatedScore();
      });
   
      document.body.addEventListener('keydown', (event) => {
         if(event.key === 'r'){
            playGame('rock');
         }else if(event.key === 'p'){
            playGame('paper');
         }else if(event.key === 's'){
            playGame('scissor');
         }

      });

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
        .innerHTML = `you <img src="./images/${playerMove}-emoji.png" class="move" > --- <img src="./images/${ComputerMove}-emoji.png" class="move"> computer`;  
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