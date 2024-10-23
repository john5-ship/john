// const display = document.querySelector('.display')
// const buttons = document.querySelectorAll('button')
// const specialchars =['%', '*','/' ,'.','+' ,'=']
// let output =''

// // define functions to calculate basedon button clicked
// const calculate = (btnValue) =>{
//   if(btnValue=== '=' && btnValue !==''){
//     //if ouput hass'%' replace with '/100' before evaluating.
//     output =eval(output.replace('%','/100'))
//    } else if(btnValue === 'AC'){
//       output = ''
//     }else if(btnValue ==='DEL'){
//       //if if DEL is clicked ,remove the last character from the output.
//       output =output.toString().slice(0,-1)
    
//     }else{
//       //if output if empty and button is specialchars then return
//       if(output ==='' && specialchars.includes(btnValue))return;
//       output += btnValue
//     }
//   display.value =output;
// };

// // add eventListener to buttons, call calculate() on click
// buttons.forEach((button) => {
//   // button click listener calls calculate() with dataset value as argument
//   button .addEventListener('click' ,(e) => calculate(e.target.dataset.value));
  
// });

const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
let expression = '';
let isResultShown = false;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');

    if (value === 'AC') {
      // Clear the expression and the display
      expression = '';
      display.value = '';
    } 
    else if (value === 'DEL') {
      // Delete the last character in the expression
      expression = expression.slice(0, -1);
      display.value = expression;
    } 
    else if (value === '=') {
      // Evaluate the expression and show the result
      try {
        expression = eval(expression).toString();
        display.value = expression;
        isResultShown = true; // Mark that the result has been shown
      } catch (error) {
        display.value = 'Error';
        expression = '';
      }
    } 
    else {
      // If a result was shown, start a new expression on number/decimal input
      if (isResultShown && !['+', '-', '*', '/', '%'].includes(value)) {
        expression = '';
        isResultShown = false;
      }

      // Append the pressed button value to the expression
      expression += value;
      display.value = expression;
    }
  });
});

