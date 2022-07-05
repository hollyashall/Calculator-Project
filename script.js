

//GLOBAL VARIABLES
const Buttons = document.querySelectorAll(".button")
const Display = document.querySelector("#displayScreen");
const equals = document.querySelector("#equals")
const reset = document.querySelector("#all-clear")
let answer=0


//EVENT LISTENER FOR BUTTON PRESS

  // see that button has been pressed ie something happens
  // log something to the console ie the number that has been pressed
  
  console.log(Buttons);
  let equationString = ""
  const numberPressed = (event) =>{
  console.log("number has been pressed");
  // this is grabbing what has been clicked on
  // the inner text gets text from the button
  console.log(event.target.innerText);
  if (event.target.innerText === "+")  {
    currentOperator=event.target.innerText
    console.log(currentOperator);
  }
  // string together each of the numbers
  // equation string is a global variable, wont get reset when i click
  equationString = equationString + (event.target.innerText)
  console.log(equationString)
  
  Display. innerText = equationString
//  using this to modify the elements
  }


// SHOW NUMBER ON THE DISPLAY
  // need to use a query selector
  // need to update the HTML


  //  storing this in the Display which is an object - property and method
  // we interact with the inner display property
  // the innerText property is displayed on the screen



//SEPARATING THE FUNCTOINS WITH OPERATORS
let currentOperator = ""
const handleEquals = (event) =>{
  
  operators.forEach(operator => {
   
    if (equationString.includes(operator)){
      console.log(operator);
      // currentOperator=operator;
    }
    // currentOperator lets us take operator out of the loop
  });

  let calculationArray = equationString.split(currentOperator)
  console.log(calculationArray);

  //need to store all the operators that exist within an array
  // const operatorCalcArray


 if (currentOperator == "+") {
   const result= Number(calculationArray[0]) + Number(calculationArray[1])
   return result
 }
 if (currentOperator == "-") {
  const result= Number(calculationArray[0]) - Number(calculationArray[1])
  return result
}
if (currentOperator == "/") {
  const result= Number(calculationArray[0])/ Number(calculationArray[1])
  return result
}
if (currentOperator == "X") {
  const result= Number(calculationArray[0]) * Number(calculationArray[1])
  return result
}
}

const operators =["+","-","X","/"]
// loop will check if included in equation string and console.log if so

//-->next part: 

//  division multiplication addition subtraction)
// order of operations

// want to be able to also do 233 + 44 - 100 * 9 etc
//need to alter the loop to achieve this
// currently storing a single operator for each calculation
// need to store all the operators that exist in the equationString 
// (in an array?)
//  use the first operator in the array for the 1st and 2nd nums, 
//  then use the second operator and the third number and so on



//Event listeners for pressing on buttons

  Buttons.forEach(button => {
  button.addEventListener("click", numberPressed)

  });


//EQUALS BUTTON
  // STEP 4: equals button event listener
  // store the equals button in a variable
  // addEventListener to that button

  const equalsPressed = (event) =>{
   answerr = handleEquals(event)
  // return key word stored in anserr
  Display.innerText=answerr
  // HTML element stored in the display

  }

  equals. addEventListener("click", equalsPressed);


//ALL CLEAR BUTTON (reset)
  // when AC is pressed I want to make the display show ""

const handleReset=(event) =>{
  equationString=""
  Display.innerText= 0;
  console.log(answer, equationString);
}
reset.addEventListener("click",handleReset)



