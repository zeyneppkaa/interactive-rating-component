const btn_submit = document.querySelector("#btn_submit");
const thanks_box = document.querySelector("#thanks_box");
const numbers = document.querySelector(".numbers");
const btn_1 = document.getElementById("btn1");
const btn_2 = document.getElementById("btn2");
const btn_3 = document.getElementById("btn3");
const btn_4 = document.getElementById("btn4");
const btn_5 = document.getElementById("btn5");

let score;

function disabled() {
  for (let i = 0; i < numbers.children.length; i++) {
    numbers.children[i].classList.add("disabled");
  }
  btn_submit.classList.remove("disabled");
}

btn_1.onclick = function () {
  btn_1.style.background = "hsl(25, 97%, 53%)";
  btn_1.style.color = "hsl(0, 0%, 100%)";
  score = btn_1.innerHTML;
  console.log(score);
  disabled();
  let tag = "You selected 1 out of 5";
  document.querySelector("#thanks_box #feedback").innerHTML = tag;
};
btn_2.onclick = function () {
  btn_2.style.background = "hsl(25, 97%, 53%)";
  btn_2.style.color = "hsl(0, 0%, 100%)";
  score = btn_2.innerHTML;
  console.log(score);
  disabled();
  let tag = "You selected 2 out of 5";
  document.querySelector("#thanks_box #feedback").innerHTML = tag;
};
btn_3.onclick = function () {
  btn_3.style.background = "hsl(25, 97%, 53%)";
  btn_3.style.color = "hsl(0, 0%, 100%)";
  score = btn_3.innerHTML;
  console.log(score);
  disabled();
  let tag = "You selected 3 out of 5";
  document.querySelector("#thanks_box #feedback").innerHTML = tag;
};
btn_4.onclick = function () {
  btn_4.style.background = "hsl(25, 97%, 53%)";
  btn_4.style.color = "hsl(0, 0%, 100%)";
  score = btn_4.innerHTML;
  console.log(score);
  disabled();
  let tag = "You selected 4 out of 5";
  document.querySelector("#thanks_box #feedback").innerHTML = tag;
};
btn_5.onclick = function () {
  btn_5.style.background = "hsl(25, 97%, 53%)";
  btn_5.style.color = "hsl(0, 0%, 100%)";
  score = btn_5.innerHTML;
  console.log(score);
  disabled();
  let tag = "You selected 5 out of 5";
  document.querySelector("#thanks_box #feedback").innerHTML = tag;
};

btn_submit.addEventListener("click", () => {
  thanks_box.classList.add("show");
});

// function feedbackGoster(score) {
//   let tag = `You selected ${score} out of 5`;
//   document.querySelector("#thanks_box #feedback").innerHTML = tag;
//   console.log(tag);
// }
// let tag;
// btn_submit.addEventListener("click", function (score) {
//   thanks_box.classList.add("show");
//   feedbackGoster(score);
//   console.log(tag);
// });
