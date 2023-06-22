const defaultValue = 0; // first value when the program opens
let currentValue = defaultValue; // value when change
let logEntries = [];
// getting user's number
function getUserNumberInput() {
  return +userInput.value;
}

// taking the information operation that happend and stored in object and then push it towards an array

function logInfo(signOperation, preNum, enteredNumber, result) {
  const logInformation = {
    operation: signOperation,
    number: enteredNumber,
    prevValue: preNum,
    operationResult: result,
  };
  logEntries.push(logInformation);
}

// description of the last calculation

function descriptionCalc(operator, op1, op2) {
  const descriptionCalculation = `${op1} ${operator} ${op2}`;
  outputResult(null, `${descriptionCalculation}`);
}

// determine the type of the calculation

function typeOfCalculation(operationType) {
  const enteredNumber = getUserNumberInput();
  if (
    (operationType !== 'ADD' &&
      operationType !== 'SUBTRACT' &&
      operationType !== 'MULTIPLICATION' &&
      operationType !== 'DIVISION' &&
      operationType !== 'REMINDATION') ||
    !enteredNumber
  ) {
    return;
  }
  const previousValue = currentValue;
  let signType;
  if (operationType === 'ADD') {
    currentValue += enteredNumber;
    signType = '+';
  } else if (operationType === 'SUBTRACT') {
    currentValue -= enteredNumber;
    signType = '-';
  } else if (operationType === 'MULTIPLICATION') {
    currentValue *= enteredNumber;
    signType = '*';
  } else if (operationType === 'DIVISION') {
    currentValue /= enteredNumber;
    signType = '/';
  } else if (operationType === 'REMINDATION') {
    currentValue %= enteredNumber;
    signType = '%';
  }
  descriptionCalc(signType, previousValue, enteredNumber);
  logInfo(operationType, previousValue, enteredNumber, currentValue);
}

// Add function

function add() {
  typeOfCalculation('ADD');
}

// subtract function

function subtract() {
  typeOfCalculation('SUBTRACT');
}

// multiplication function

function multiply() {
  typeOfCalculation('MULTIPLICATION');
}

// divition function

function divide() {
  typeOfCalculation('DIVISION');
}

// remindation function

function remind() {
  typeOfCalculation('REMINDATION');
}
// equalition function

function equality() {
  outputResult(currentValue, null);
  console.log(logEntries);
}

addBtn.addEventListener('click', add); //add listener
subtractBtn.addEventListener('click', subtract); // subtraction listner
multiplyBtn.addEventListener('click', multiply); // multiplication listener
divideBtn.addEventListener('click', divide); // divition listener
remindBtn.addEventListener('click', remind); // remindation listener
equlBtn.addEventListener('click', equality); // equaltion listener
