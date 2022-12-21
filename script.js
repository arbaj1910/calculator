let str = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      str = eval(str);
      document.querySelector("input").value = str;
    } else if (e.target.innerHTML == "AC") {
      str = "";
      document.querySelector("input").value = str;
    } else if (e.target.innerHTML == "C") {
      str = str.substring(0, str.length - 1);
      document.querySelector("input").value = str;
    } else if (e.target.innerHTML == "sqr") {
        function square(n) {
            let result = 0;
            for (let i = 1; i <= n; i++) {
                for (let j = 1; j <= n; j++) {
                    result += 1;
                }
            }
            return result;
        }
        document.querySelector("input").value = square(str);

    } else {
      str += e.target.innerHTML;
      document.querySelector("input").value = str;
    }
  });
});
