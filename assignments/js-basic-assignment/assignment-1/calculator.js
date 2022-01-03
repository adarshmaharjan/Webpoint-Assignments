const firstNum = prompt('Enter a first Number');
const operation = prompt(
  'Enter the calculation operation(+,-,/,*) you want to perform'
);
const secondNum = prompt('Enter a second Number');
// DOM elements

const root = document.getElementById('root');

// just a good idea about the code

try {
  const show = (firstNum, secondNum, operation) => {
    if (
      operation === '+' ||
      operation === '-' ||
      operation === '/' ||
      operation === '*'
    ) {
      let result = eval(firstNum + operation + secondNum);
      root.textContent = `${firstNum}  ${operation}  ${secondNum} = ${result}`;
    } else {
      throw new Error('Invalid operation');
    }
  };
  show(firstNum, secondNum, operation);
} catch (err) {
  alert(`Please enter a valid inputs`, err.name);
  root.textContent = 'Please enter a valid inputs';
}
