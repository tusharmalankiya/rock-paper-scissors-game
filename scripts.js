  //Model
  let computer = document.getElementById('computer');
  let user = document.getElementById('user');
  let rock = document.getElementById('rock');
  rock.onclick = clicked;
  let paper = document.getElementById('paper');
  paper.onclick = clicked;
  let scissor = document.getElementById('scissor');
  scissor.onclick = clicked;
  let btns = document.getElementById('btns');
  let result = document.getElementById('result');
  let playAgain = document.getElementById('playAgain');
  let userPoints = document.getElementById('userPoints');
  let computerPoints = document.getElementById('computerPoints');
  let totalGames = document.getElementById('totalRounds');
  playAgain.onclick = playAgainClicked;
  let userCounts = 0;
  let computerCounts = 0;
  let totalRounds = 0;
  //Visuals
  function displayUser(id) {
      if (id === 'rock') {
          user.innerText = 'Rock';
      }
      else if (id === 'paper') {
          user.innerText = 'Paper';
      }
      else {
          user.innerText = 'Scissors';
      }
  }

  function displayComputer(computerMove){
  switch (computerMove) {
      case 1:
          computer.innerText = 'Rock';
          break;
      case 2:
          computer.innerText = 'Paper';
          break;
      case 3:
          computer.innerText = 'Scissors';
          break;
      // default:
      
  }
  displayWinner(winner());
  console.log(winner());       
}

function displayWinner(win){
    totalRounds = totalRounds + 1;
  let winnerId = document.getElementById("winner");
  result.style = "display : block;"
  if(win===0){
      winnerId.style = "color:red;"
      winnerId.innerText = "You Lose !";
      computerCounts = computerCounts + 1;
  }
  else if(win===1){
      winnerId.style = "color:green;"
      winnerId.innerText = "You Win !";
      userCounts = userCounts + 1;
  }
  if(win===2){
      winnerId.style = "color:blue;"
      winnerId.innerText = "Draw !";
  }
  playAgain.style = "display:block;"
  displayCounts();
}

function displayCounts(){
    userPoints.innerText = userCounts;
    computerPoints.innerText = computerCounts;
    totalGames.innerText = totalRounds;
}

  //Controller
  function clicked(event) {
      console.log(event.target.id);
      let clickedBtnId = event.target.id;
      displayUser(clickedBtnId);
      moveComputer();
      btns.style = "display:none;"
      
  }

  function moveComputer() {
      computerMove = Math.floor(((Math.random() * 100) + 1)/34) + 1;
      console.log(computerMove);
      displayComputer(computerMove);
  }

  function winner(){
      // win:
      // paper > rock
      // scissor > papper
      // rock > scissor
     if(user.innerText===computer.innerText){
         return 2;
     }
      else if(user.innerText==="Rock"){
          if(computer.innerText==='Paper'){
              return 0;
          }
          else{
              return 1;
          }
      }
      else if(user.innerText==="Scissors"){
          if(computer.innerText==='Rock'){
              return 0;
          }
          else{
              return 1;
          }
      }
      else if(user.innerText==="Paper"){
          if(computer.innerText==='Scissors'){
              return 0;
          }
          else{
              return 1;
          }
      }
  }
  function playAgainClicked(){
      if(window.innerWidth <= 600){
          btns.style = "display:flex;";
      }
      else{

          btns.style = "display:grid;";
      }
      result.style = "display:none;";
      playAgain.style = "display:none;";
      user.innerText = '';
      computer.innerText = '';

  }