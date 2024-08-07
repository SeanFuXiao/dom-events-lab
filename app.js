const buttons = document.querySelectorAll('.button');
const displayArea = document.querySelector('.display');
displayArea.textContent = '0';

let num1 = '';
let num2 = '';
let operator = '';

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {

    const value = event.target.textContent;

    console.log(value);

    if (event.target.classList.contains('number')) {

      if (operator) {
        num2 += value;
        displayArea.textContent = num2;
      } else {
        num1 += value;
        displayArea.textContent = num1;
      }

    } else if (event.target.classList.contains('operator')) {

      if (value === 'C') {
        num1 = '';
        num2 = '';
        operator = '';
        displayArea.textContent = '0';
      } else {
        if (num1 && num2 && operator) {
          const result = calculator(num1, num2, operator);
          displayArea.textContent = result;
          num1 = result;
          num2 = '';
        }


        operator = value;
      }

    } else if (event.target.classList.contains('equals')) {
      if (num1 && num2 && operator) {

        const result = calculator(num1, num2, operator);

        displayArea.textContent = result;
        
        num1 = result;
        num2 = '';
        operator = '';
      }
    }
  });
});

function calculator(number1, number2, operator) {
  const n1 = parseFloat(number1);
  const n2 = parseFloat(number2);
  switch (operator) {
    case '+':
      return n1 + n2;
    case '-':
      return n1 - n2;
    case '*':
      return n1 * n2;
    case '/':
      return n1 / n2;
    default:
      return 0;
  }
}
