let count=0;

// when player1 button clicked 
document.getElementById("player1").addEventListener('click', function(){
       const name = document.getElementById("first-player").innerText;
       common(name);   
       
       // Disable Button after being clicked
        const buttonDisable = document.getElementById("player1");  
        buttonDisable.setAttribute("disabled",true);
        buttonDisable.classList.add("btn-secondary");

});

// when player2 button clicked
document.getElementById("player2").addEventListener('click', function(){
    const name = document.getElementById("second-player").innerText;
    common(name);


    // Disable Button after being clicked
    const buttonDisable = document.getElementById("player2");    
    buttonDisable.setAttribute("disabled",true);
    buttonDisable.classList.add("btn-secondary");

});     

// when player3 button clicked
document.getElementById("player3").addEventListener('click', function(){
    const name = document.getElementById("third-player").innerText;
    common(name);

    // Disable Button after being clicked
    const buttonDisable = document.getElementById("player3");     
    buttonDisable.setAttribute("disabled",true);
    buttonDisable.classList.add("btn-secondary");

});     

// when player4 button clicked
document.getElementById("player4").addEventListener('click', function(){
    const name = document.getElementById("fourth-player").innerText;
    common(name);

    // Disable Button after being clicked
    const buttonDisable = document.getElementById("player4");      
    buttonDisable.setAttribute("disabled",true);
    buttonDisable.classList.add("btn-secondary");

});

// when player5 button clicked
document.getElementById("player5").addEventListener('click', function(){
    const name = document.getElementById("fifth-player").innerText;
    common(name);

    // Disable Button after being clicked
    const buttonDisable = document.getElementById("player5");      
    buttonDisable.setAttribute("disabled",true);
    buttonDisable.classList.add("btn-secondary");

});

// when player6 button clicked
document.getElementById("player6").addEventListener('click', function(){
    const name = document.getElementById("sixth-player").innerText;
    common(name);

    // Disable Button after being clicked
    const buttonDisable = document.getElementById("player6");     
    buttonDisable.setAttribute("disabled",true);
    buttonDisable.classList.add("btn-secondary");

});

// when player7 button clicked
document.getElementById("player7").addEventListener('click', function(){
    const name = document.getElementById("seventh-player").innerText;
    common(name);

    // Disable Button after being clicked
    const buttonDisable = document.getElementById("player7");    
    buttonDisable.setAttribute("disabled",true);
    buttonDisable.classList.add("btn-secondary");

});

// when player8 button clicked
document.getElementById("player8").addEventListener('click', function(){
    const name = document.getElementById("eighth-player").innerText;
    common(name);

    // Disable Button after being clicked
    const buttonDisable = document.getElementById("player8");     
    buttonDisable.setAttribute("disabled",true);
    buttonDisable.classList.add("btn-secondary");

});

// when player9 button clicked
document.getElementById("player9").addEventListener('click', function(){
    const name = document.getElementById("ninth-player").innerText;
    common(name);

    // Disable Button after being clicked
    const buttonDisable = document.getElementById("player9");     
    buttonDisable.setAttribute("disabled",true);
    buttonDisable.classList.add("btn-secondary");

});     



//common function
function common(name){
    //player select list
    count++;

    if(count<=5)
    {
        const select = document.getElementById("player-select");

        const playerRow = document.createElement("tr");
        playerRow.innerHTML=`
            <th>${count}</th>
            <td>${name}</td>
        `

        select.appendChild(playerRow);
    
    }
    else{
        alert("You can't select more than 5 players");


        disableAllButtons = document.getElementsByClassName("button-disable");
        
        for(const eachButton of disableAllButtons){
           eachButton ;
           eachButton.setAttribute("disabled",true);
           eachButton.classList.add("btn-secondary");


           
        }
   }

   //////////////////////////////////////////////////////////////////
  //  Budget Section calculation
 ////////////////////////////////////////////////////////////////

  document.getElementById("calculate").addEventListener('click',function(){
          
         const perPlayerCost = document.getElementById("per-player");
         const perPlayerExpense = perPlayerCost.value;

       
        
        
         let playerExpenses = perPlayerExpense * count ;

         document.getElementById("player-expenses").innerText =  playerExpenses;
   
        
         
         
         
         /////////////////////////////////////////////////////////////////////////////
          ////                  Calculate Total Expenses 
         ////////////////////////////////////////////////////////////////////////////
         
         document.getElementById("total").addEventListener('click', function(){

            const managerCost = document.getElementById("manager");         
            const managerExpense = managerCost.value;

            const managerExpense1 = parseInt(managerExpense);   // The variable  managerExpense  is in string type... That's why I convert it into Number type  in order to perform the ADDITION  operation. 
                                                                //  parseInt(string) ========>  this is used to convert string into Number  


            const coachCost = document.getElementById("coach");
            const coachExpense = coachCost.value;                

            const coachExpense1 = parseInt(coachExpense);     // The variable   coachExpense    is in string type ..... That's why I convert it into Number type  in order to perform the ADDITION operation.
                                                              // parseInt(string) ========>  this is used to convert string into Number  

        let  totalExpenses =  playerExpenses + managerExpense1 + coachExpense1;
             
        console.log("Player :",playerExpenses, "Total:", totalExpenses);

        document.getElementById("budget").innerText = totalExpenses;
        

     });

  });

         






}









