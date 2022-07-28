const charVal = document.getElementById("textarea");
const totalChar = document.getElementById("total-counter");
const remainChar = document.getElementById("remain-counter");
let userChar = 0;
const charCount = (elem) => {
  totalCount = 0;
  for (let i = 0; i < elem.length; i++) {
    if (elem[i] === " ") {
      continue;
    } else {
      totalCount++;
    }
  }
  return totalCount;
};
const limitReach = (val) => {
  if (val > 150) {
    alert("Max Limit Reached !");
    charVal.setAttribute("maxlength", charVal.value.length);
    return true;
  } else {
    charVal.setAttribute("maxlength", " ");

    return false;
  }
};
const updateCounter = () => {
  char = charCount(charVal.value);
  if (limitReach(char)) {
    totalChar.innerText = 150;
    remainChar.innerText = 0;
  } else {
    totalChar.innerText = char;
    remainChar.innerText = 150 - char;
  }
};
const copyText = () => {
  charVal.select();
  charVal.setSelectionRange(0, 9999);
  navigator.clipboard.writeText(charVal.value);
};
charVal.addEventListener("keyup", () => updateCounter());
