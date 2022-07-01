
const calculator = document.querySelector(".wholeCalculator");
console.dir(calculator)





// STEP 1: first see that button has been pressed ie something happens
  // log something to the console ie the number that has been pressed
  const Buttons = document.querySelectorAll("button")
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
  }

  Buttons.forEach(button => {
  button.addEventListener("click", numberPressed)

  });

// STEP 3: SHOW NUMBER ON THE DISPLAY
  // need to use a query selector
  // need to update the HTML

  const Display = document.querySelector("#displayScreen");
 

// STEP 4: OPERATOR AND SPLIT

// query selector for operator
// console log for operator and variable


let var1=""
let var 2=""

const Operator = document.querySelectorAll("operator");
console.log("operator")

 




// STEP 4: equals button event listener
  // store the equals button in a variable
  // addEventListener to that button
  
  const equals = document.querySelector("#equals")

  const equalsPressed = event =>{
  console.log("the equals buttton has been pressed, which means need to apply an operator");
  

  // i think here is where I need to put the part in to tell it do do the sum?

  }
  equals. addEventListener("click", equalsPressed);

// STEP 5: 
  // evaluate equationString
  // NOTE: currently a string... will need to convert numbers to type Number
  // conditional statement required to see which operation to perform

  


// the next number is the second number, update to the screen the same as the first number
// store this number 

// when equals is pressed apply the operator
// use the operator to apply the function

// log the value and display on the screen 