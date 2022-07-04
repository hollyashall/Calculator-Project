
const calculator = document.querySelector(".wholeCalculator");
console.dir(calculator)


let answer=0
let answerMinus=0
let answerDivide=0

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

  // const newEquationMinus = equationString.split("-")
  // console.log(newEquationMinus)
  // const part1Minus= Number(newEquationMinus[0])
  // const part2Minus= Number(newEquationMinus[1])
  // answerMinus = part1Minus - part2Minus;
  // console.log(answerMinus);

  }

const functionAdd =(event) => {

  //  this add test looks for a plus sign, the /[]/ is the syntax to look for a number that is not a digit
  // if there was no plus sign would return a minus sign which is why when it is bigger than zero use if statement
  let addTest = equationString.search(/[+]/)
  if (addTest >= 0) {
    const newEquation = equationString.split("+");
    console.log(newEquation);
    // ^ here this splits the equation string where there is a plus sign
    //  new section
    const part1= Number(newEquation[0])
    const part2= Number(newEquation[1])
  
     answer = part1 + part2;
    
    console.log(answer)
    return answer;
  }
}
 
const functionMinus = (event) => {
  let minusTest = equationString.search(/[-]/)
  if (minusTest >= 0) {
    const newEquationMinus = equationString.split("-");
    console.log(newEquationMinus);
    const part1Minus= Number(newEquationMinus[0])
    const part2Minus= Number(newEquationMinus[1])
    answerMinus = part1Minus - part2Minus;
  console.log(answerMinus);
  return answerMinus
}
}

const functionDivide = (event) =>{
  let divideTest = equationString.search(/[/]/)
  if (divideTest >= 0){
    const newEquationDivide = equation.split("/");
    console.log(newEquationDivide);
    const part1Divide=Number(newEquationDivide[0])
    const part2Divide=Number(newEquationDivide[1])
    answerDivide =part1Divide/part2Divide;
    console.log(answerDivide);
    return answerDivide
  }
}




  
  Buttons.forEach(button => {
  button.addEventListener("click", numberPressed)

  });

// STEP 3: SHOW NUMBER ON THE DISPLAY
  // need to use a query selector
  // need to update the HTML

  const Display = document.querySelector("#displayScreen");
 


// STEP 4: equals button event listener
  // store the equals button in a variable
  // addEventListener to that button
  
  const equals = document.querySelector("#equals")

  const equalsPressed = (event) =>{
  functionAdd(event)
  Display.innerText= answer;
  functionMinus(event)
   Display.innerText=answerMinus;

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
