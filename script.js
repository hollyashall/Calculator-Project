

let answer=0

// STEP 1: first see that button has been pressed ie something happens
  // log something to the console ie the number that has been pressed
  const Buttons = document.querySelectorAll(".button")
  console.log(Buttons);
  let equationString = ""
  const numberPressed = (event) =>{
  console.log("number has been pressed");
  // this is grabbing what has been clicked on
  // the inner text gets text from the button
  console.log(event.target.innerText);
// STEP 2: string together each of the numbers
  // equation string is a global variable, wont get reset when i click
  equationString = equationString + (event.target.innerText)
  console.log(equationString)
  
  Display. innerText = equationString
//  using this to modify the elements
  }

 

const handleEquals = (event) =>{
  let currentOperator = ""
  operators.forEach(operator => {
   
    if (equationString.includes(operator)){
      console.log(operator);
      currentOperator=operator;
    }
    // currentOperator lets us take operator out of the loop
  });

  let calculationArray = equationString.split(currentOperator)
  console.log(calculationArray);

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







  Buttons.forEach(button => {
  button.addEventListener("click", numberPressed)

  });

// STEP 3: SHOW NUMBER ON THE DISPLAY
  // need to use a query selector
  // need to update the HTML

  const Display = document.querySelector("#displayScreen");
//  storing this in the Display which is an object - property and method
// we interact with the inner display property
// the innerText property is displayed on the screen


// STEP 4: equals button event listener
  // store the equals button in a variable
  // addEventListener to that button
  
  const equals = document.querySelector("#equals")

  const equalsPressed = (event) =>{
  const answerr = handleEquals(event)
  // return key word stored in anserr
  Display.innerText=answerr
  // HTML element stored in the display

  }

  equals. addEventListener("click", equalsPressed);




// MAKE THE ALL CLEAR BUTTON

const reset = document.querySelector("#all-clear")
const resetPressed =(event) =>{
  console.log("reset")
  Display.innerText=""
}
resetPressed.addEventListener("click", reset)


