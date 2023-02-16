const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

// btns.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     let target = e.target.classList;
//     let num = Number(value.innerHTML);

//     if (target.contains("increase")) {
//       num++;
//     } else if (target.contains("decrease")) {
//       num--;
//     } else {
//       num = 0;
//     }
//     value.textContent = num;

//     if (num > 0) {
//       value.style.color = "green";
//     } else if (num < 0) {
//       value.style.color = "red";
//     } else {
//       value.style.color = "#222";
//     }
//   });
// });

// better solution maybe :)----------------------------
let count = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let target = e.target.classList;

    if (target.contains("increase")) {
      count++;
    } else if (target.contains("decrease")) {
      count--;
    } else {
      count = 0;
    }
    value.textContent = count;

    if (count > 0) {
      value.style.color = "green";
    } else if (count < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "#222";
    }
  });
});
