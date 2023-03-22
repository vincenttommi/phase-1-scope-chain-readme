//scope chain
//What matters for the scope chain is where the 
//function is declared — not where it is invoked.



const globalVar = 1;


function firstfunc(){

  const firstVar = 2;


  function secondfunc(){
   
    const secondVar = 3;


    return secondVar + firstVar +globalVar;

    const resultfromsecondfunc = secondfunc();


    return resultfromsecondfunc
  



console.log(firstfunc());

  }



}
