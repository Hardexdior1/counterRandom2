let roll = document.querySelector(".roll");


let countUser=0
let countComputer=0
let  = document.querySelector(".message");



roll.addEventListener("click", () => {
  let numberOne = document.querySelector(".numberOne");
  let numberTwo = document.querySelector(".numberTwo");
  let numberThree = document.querySelector(".numberThree");
  let message = document.querySelector(".message");

  let userScores=document.querySelector('.userScores')
  let computerScores=document.querySelector('.computerScores');

  

 

 

  let number1 = Math.floor(Math.random() * 6) + 1;
  numberOne.textContent = number1;

  let number2 = Math.floor(Math.random() * 6) + 1;
  numberTwo.textContent = number2;

  let number3 = Math.floor(Math.random() * 6) + 1;
  numberThree.textContent = number3;





  if (number1 === number2 || number1 == number3 || number2 == number3) {
    console.log("you won");
    countUser++
    userScores.textContent=countUser
    console.log(countUser);
   
  
//  if(countUser ===10){
//     alert('you won in the final');
//  }


    message.textContent = "you won";
    message.style.color='green'

  } else {
    console.log("not this time");
    message.textContent = "sorry not your time";
    message.style.color='red'
    countComputer++
    console.log(countComputer);
    computerScores.textContent=countComputer
   
  }
});
