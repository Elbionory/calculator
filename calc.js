// for animation typing//

const span2 = document.querySelector(".animation");
const container = document.querySelector("#con");
const arr = ["HI IEEE 👋", "I AM YOUSIF", "THIS IS MY CALCULATOR"];
let i;
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
async function sleeploop(delayy) {
  for (i = 0; i < 3; i++) {
    span2.innerText = arr[i];
    await delay(delayy); //to make the loop wait
    if (i == 2) {
      span2.innerText = "";
      container.classList.add("move");
      break;
    }
  }
}
sleeploop(4000);
/////////////////////////////////////
//making the fanctionalty of numbers and other buttons//
const del = document.querySelector("[clear-one]");
const equal = document.querySelector("[operator-equal]");
const c = document.querySelector("[clear-all]");
const operators = document.querySelectorAll("[operator");
const ANS = document.querySelector("[ANS]");
let ans;
const numbers = document.querySelectorAll("[numbers]");
const previousCalc = document.querySelector(".previous-calc");
const currentCalc = document.querySelector(".current-calc");
let flag;
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    if (previousCalc.innerText.includes(".") && number.innerText == "."&&flag==false) return;
    previousCalc.innerText += number.innerText; //to type each number on screen but there is a condition to not to type . many times //
    if(number.innerText==".") flag=false;
  });
});
operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    previousCalc.innerText += operator.innerText; // to type each operator on screen  and after you type a operator you can add another .//
  flag=true;
  });
});
c.addEventListener("click", () => {
  previousCalc.innerText = ""; //to delete all that on screen//
  currentCalc.innerText = "";
});
del.addEventListener("click", () => {
  previousCalc.innerText = previousCalc.innerText.slice(
    0,
    previousCalc.innerText.length - 1
  ); //to delete one by one//
  currentCalc.innerText = "";
});

//making the function of computing  and showing (final) result//
equal.addEventListener("click", () => {
  currentCalc.innerText = eval(previousCalc.innerText);
  ans = currentCalc.innerText;
  // flag=false;
});

ANS.addEventListener("click", () => {
  let lastOperator= previousCalc.innerText[previousCalc.innerText.length-1]
  console.log(lastOperator)
  if(lastOperator=="+"||lastOperator=="-"||lastOperator=="*"||lastOperator=="/"){
  previousCalc.innerText += ans;
  currentCalc.innerText = "";
  }
});
