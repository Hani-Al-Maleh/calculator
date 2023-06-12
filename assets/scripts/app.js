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

// Add function

function add() {
  const enteredNumber = getUserNumberInput();
  descriptionCalc('+', currentValue, enteredNumber);
  const previousValue = currentValue;
  currentValue += enteredNumber;
  logInfo('ADD', previousValue, enteredNumber, currentValue);
}

// subtract function

function subtract() {
  const enteredNumber = getUserNumberInput();
  descriptionCalc('-', currentValue, enteredNumber);
  const previousValue = currentValue;
  currentValue -= enteredNumber;
  logInfo('Subtract', previousValue, enteredNumber, currentValue);
}

// multiplication function

function multiply() {
  const enteredNumber = getUserNumberInput();
  descriptionCalc('*', currentValue, enteredNumber);
  const previousValue = currentValue;
  currentValue *= enteredNumber;
  logInfo('multiplication', previousValue, enteredNumber, currentValue);
}

// divition function

function divide() {
  const enteredNumber = getUserNumberInput();
  descriptionCalc('/', currentValue, enteredNumber);
  const previousValue = currentValue;
  currentValue /= enteredNumber;
  logInfo('Division', previousValue, enteredNumber, currentValue);
}

// remindation function

function remind() {
  const enteredNumber = getUserNumberInput();
  descriptionCalc('%', currentValue, enteredNumber);
  const previousValue = currentValue;
  currentValue %= enteredNumber;
  logInfo('Remindation', previousValue, enteredNumber, currentValue);
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
