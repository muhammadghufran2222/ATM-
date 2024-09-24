let pin = 1234;
let balance = 500;
let attempts = 3;
function showMenu() {
  console.log("1 Check Balance");
  console.log("2 Deposit Cash");
  console.log("3 Withdraw Cash");
  console.log("4 Exit");

  let option = prompt("Choose an option");
  return parseInt(option);
}
function checkBalance() {
  console.log("Your current balance is " + balance + "$");
}
function depositCash() {
  let depositAmount = prompt("Entre the amount to deposit");
  balance += parseInt(depositAmount);
  console.log(depositAmount + "$ Deposit Successfully");
  console.log("Your new balance " + balance + "$");
}
function WithdrawCash() {
  let WithdrawAmount = prompt("Entre the amount to withdraw");
  if (parseInt(WithdrawAmount) <= balance) {
    balance -= parseInt(WithdrawAmount);
    console.log(WithdrawAmount + "$ withdraw Successfully");
    console.log("Your new balance " + balance + "$");
  } else {
    console.log("Insufficient balance! You have only " + balance + "$");
  }
}
function atmOperation() {
  let exit = false;
  while (!exit) {
    let option = showMenu();
    if (option === 1) {
      checkBalance();
    } else if (option === 2) {
      depositCash();
    } else if (option === 3) {
      WithdrawCash();
    } else if (option === 4) {
      console.log("Exiting the ATM. Thank you for using our service");
      exit = true;
    } else {
      console.log("Invalid option! Please try again.");
    }
  }
}
function mainAtm() {
  if (attempts > 0) {
    let userPin = prompt("Please enter your PIN");
    if (parseInt(userPin) === pin) {
      console.log("Login Successful");
      atmOperation();
    } else {
      attempts--;
      if (attempts > 0) {
        console.log("Wrong PIN! " + attempts + " chance(s) remaining.");
        mainAtm();
      } else {
        console.log("No attempts left. Access denied.");
      }
    }
  }
}
mainAtm();
