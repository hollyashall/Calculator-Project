
const calculator = document.querySelector(".wholeCalculator");
console.dir(calculator)





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
  const newEquation = equationString.split("+");

  console.log(newEquation);
//  new section

  const part1= Number(newEquation[0])
  const part2= Number(newEquation[1])

  answer = part1 + part2;
  console.log(answer)

  const newEquationMinus = equationString.split("-")
  console.log(newEquationMinus)
  const part1Minus= Number(newEquationMinus[0])
  const part2Minus= Number(newEquationMinus[1])
  answerMinus = part1Minus - part2Minus;
  console.log(answerMinus);

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

const Operator = document.querySelectorAll("operator");
console.log("operator");

 const newEquation = equationString.split("+");
 console.log(newEquation)



// STEP 4: equals button event listener
  // store the equals button in a variable
  // addEventListener to that button
  
  const equals = document.querySelector("#equals")

  const equalsPressed = (event) =>{
 
  Display.innerText= answer;
  Display.innerText= answerMinus;
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