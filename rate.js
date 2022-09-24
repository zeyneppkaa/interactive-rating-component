let btn_submit = document.querySelector("#btn_submit");
let thanks_box = document.querySelector("#thanks_box");
let numbers = document.querySelector(".numbers");

let score;

function disabled() {
  for (let i = 0; i < numbers.children.length; i++) {
    numbers.children[i].classList.add("disabled");
  }
  btn_submit.classList.remove("disabled");
}

document.querySelector("#btn1").onclick = function () {
  document.querySelector("#btn1").style.background = "hsl(25, 97%, 53%)";
  document.querySelector("#btn1").style.color = "hsl(0, 0%, 100%)";
  score = document.querySelector(".numbers #btn1").innerHTML;
  console.log(score);
  disabled();
};
document.querySelector("#btn2").onclick = function () {
  document.querySelector("#btn2").style.background = "hsl(25, 97%, 53%)";
  document.querySelector("#btn2").style.color = "hsl(0, 0%, 100%)";
  score = document.querySelector(".numbers #btn2").innerHTML;
  console.log(score);
  disabled();
};
document.querySelector("#btn3").onclick = function () {
  document.querySelector("#btn3").style.background = "hsl(25, 97%, 53%)";
  document.querySelector("#btn3").style.color = "hsl(0, 0%, 100%)";
  score = document.querySelector(".numbers #btn3").innerHTML;
  console.log(score);
  disabled();
};
document.querySelector("#btn4").onclick = function () {
  document.querySelector("#btn4").style.background = "hsl(25, 97%, 53%)";
  document.querySelector("#btn4").style.color = "hsl(0, 0%, 100%)";
  score = document.querySelector(".numbers #btn4").innerHTML;
  console.log(score);
  disabled();
};
document.querySelector("#btn5").onclick = function () {
  document.querySelector("#btn5").style.background = "hsl(25, 97%, 53%)";
  document.querySelector("#btn5").style.color = "hsl(0, 0%, 100%)";
  score = document.querySelector(".numbers #btn5").innerHTML;
  console.log(score);
  disabled();
  feedbackGoster(score);
};

function feedbackGoster(score) {
  let tag = `You selected ${score} out of 5`;
  document.querySelector("#thanks_box #feedback").innerHTML = tag;
}

btn_submit.addEventListener("click", function (score) {
  thanks_box.classList.add("show");
  feedbackGoster(score);
});

// var clicked = false;
// document.querySelector(".numbers .btn").addEventListener("click", function () {
//   clicked = true;
// });
// console.log(clicked);
// while (!clicked) {
//   document.getElementById("btn_submit").classList.add("disabled");
// }
