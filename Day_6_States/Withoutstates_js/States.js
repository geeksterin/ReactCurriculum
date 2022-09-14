// buttons and counter text
const counter = document.querySelector("#counter");
const btns = document.querySelectorAll(".btn");

// initialize the count variable
let count = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;

    styles.contains("increase");
    count++;
    counter.classList.add("up");

    counter.textContent = count;
  });
});
