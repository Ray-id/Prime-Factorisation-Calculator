function handleClick() {
  let numb = document.getElementById("input-box").value;
  let input = numb;
  let factors = [];

  for (let i = 2; input != 1; i++) {
    if (Number.isInteger(input / i) == true) {
      factors.push(i);
      input = input / i;
      i = 1;
    }
  }

  if (factors.length == 1) {
    document.getElementById("output").innerHTML = `${numb} is a Prime Number.`;
  } else {
    document.getElementById("text").style.display = "block";
    document.getElementById("num").innerHTML = numb;
    document.getElementById("output").innerHTML = factors.join(" x ");
  }
}
