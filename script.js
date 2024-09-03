const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (btn) {
  btn.addEventListener("click", (e) => {
    console.log(e.target)
    if (e.target.id === "yellow") {
      body.style.backgroundColor = "yellow"
    }
    if (e.target.id === "green") {
      body.style.backgroundColor = "greenyellow"
    }
    if (e.target.id === "red") {
      body.style.backgroundColor = "red"
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = "blue"
    }
    if (e.target.id === "purple") {
      body.style.backgroundColor = "purple"
    }
    if (e.target.id === "orange") {
      body.style.backgroundColor = "orange"
    }
    if (e.target.id === "pink") {
      body.style.backgroundColor = "pink"
    }
    if (e.target.id === "grey") {
      body.style.backgroundColor = "grey"
    }
    if (e.target.id === "black") {
      body.style.backgroundColor = "black"
      body.style.color = "white"
    }
  })
})