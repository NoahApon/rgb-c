// RGB Colors

//button click
document.getElementById("previewBtn").addEventListener("click", btnClick);
function btnClick() {
  //INPUT
  let r = +document.getElementById("red").value;
  let g = +document.getElementById("green").value;
  let b = +document.getElementById("blue").value;

  //Process
  let rgbText = `rgb(${r},${g},${b})`;
  let rgbValue = `rgb(${r},${g},${b})`;
  //Output
  document.getElementById("rgbNumbers").innerHTML = rgbText;
  document.getElementById("display").style.backgroundColor = rgbValue;
}

document.getElementById("blackBtn").addEventListener("click", blackClick);
function blackClick() {
  document.getElementById("display").style.background = "black";
}

document.getElementById("whiteBtn").addEventListener("click", whiteClick);
function whiteClick() {
  document.getElementById("display").style.background = "white";
}
