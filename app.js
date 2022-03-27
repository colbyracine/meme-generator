const imageInput = document.querySelector("#fileInput");
var uploadedImage = "";
let topText = document.getElementById("topText");
let bottomText = document.getElementById("bottomText");

imageInput.addEventListener("change", function () {
  const topText = document.querySelector("#topText");
  const bottomText = document.querySelector("#bottomText");
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    uploadedImage = reader.result;
    document.querySelector(
      "#displayImage"
    ).style.backgroundImage = `url(${uploadedImage})`;
  });
  let top = topText.value;
  let bottom = bottomText.value;
  let inputTop = document.getElementById("top");
  let inputBottom = document.getElementById("bottom");
  inputTop.innerHTML += top;
  inputBottom.innerHTML += bottom;
  reader.readAsDataURL(this.files[0]);
});
