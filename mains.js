var inputEl = document.querySelector("#bday-input");
var btnEl = document.querySelector("#click-btn");
var outputEl = document.querySelector("#result");

function calculatePalindrome() {
  var inputVal = inputEl.value;
  let j = inputVal.length - 1;
  for (let i = 0; i <= j; i++)
    if (inputVal[i] == inputVal[j]) {
      if (i == j) {
        console.log("palindrome");
        outputEl.innerHTML = "<h1>Palindrome</h1>";
        outputEl.style.color = "green";
        return true;
      }
      //i++;
      j--;
    } else {
      console.log("Not a palindrome number");
      outputEl.innerHTML = " Not a Palindrome";
      outputEl.style.color = "red";
      return false;
    }
}
btnEl.addEventListener("click", calculatePalindrome);
