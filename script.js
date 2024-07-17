let square=document.querySelectorAll("button");
let redo=document.querySelector(".redo");
let reset=document.querySelector(".reset");
let message=document.querySelector(".message");

var count=0;


var turn=true;    // turn 1 = X  and -1= O

const winPatterns=[
    [0,1,2],[3,4,5],[6,7,8], // horizobtal 
    [0,3,6],[1,4,7],[2,5,8], // Vertical
    [0,4,8],[2,4,6]          // Diagonal
];


const checkWinner=()=>{

    for(let pattern of winPatterns){
        // console.log(pattern);
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(square[pattern[0]],square[pattern[1]],square[pattern[2]]);

        let position1=square[pattern[0]].innerText;
        let position2=square[pattern[1]].innerText;
        let position3=square[pattern[2]].innerText;


        


       if(position1!="" && position2!="" && position3!=""){

       
        if(position1===position2 && position2===position3 && position1===position3){
            console.log("Winner is  : ",position1);
           
            message.innerText=`Congratualations the winner is : ${position1} `;
            message.classList.remove("message");
            disableSquares();
            alert(`Winner is : ${position1}`);
            count=0;
            break;

            

        }

       

     }
    }
   };



   const enableSquares=()=>{
    for(i of square){
        i.disabled=false;
        i.innerText="";

    }

   };
   

   const disableSquares=()=>{
    for(i of square){
        i.disabled=true;
    }
   };



   const resetgame=()=>{
    turn=true;
    enableSquares();
    message.classList.add("message");
    count=0;

    };

    

   const redoturn=()=>{
   
    message.classList.remove("message");
    console.log("Function has been called succesfully.");
    console.log(pos.innerText);
        (pos.innerText="");
        if(turn){
            turn=false;
        }
        else{
            turn=true;
        }

        pos.disabled=false;
        count--;
    };





    let pos;
    square.forEach((button) => {
      

    button.addEventListener("click",()=>{

      
        if (turn){
            button.innerText="X";
            button.style.color="red";
            turn=false;
          
        }
        else{
            button.innerText="O";
            button.style.color="green";
            turn=true;

        }
       button.disabled=true;

       checkWinner();
        pos= button;
        
        if(count<8){
            ++count;
            console.log("count is : ",count);
        }
        else{
            console.log("Game is a draw.");
            alert("Game is a draw!!!");
        }
       
    });

});




reset.addEventListener("click",()=>{
    resetgame();
    console.log("Game has been reseted!!!");
    alert("Game has been reseted!!!");
});

redo.addEventListener("click",()=>{
    console.log(pos);
    redoturn();

    console.log("The move has been redoed.");
    alert("Game has been redoed!!!");
});





