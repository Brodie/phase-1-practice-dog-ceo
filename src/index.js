console.log("%c HI", "color: firebrick");
document.addEventListener("DOMContentLoaded", () => {
  fetch("https://dog.ceo/api/breeds/image/random/4")
    .then((res) => res.json())
    .then((dogPics) => dogPics.message.forEach(buildCard));

  fetch("https://dog.ceo/api/breeds/list/all")
    .then((res) => res.json())
    .then((breeds) => addToUl(breeds.message));
});

// Build card
function buildCard(arr) {
  let image = document.createElement("img");
  image.src = arr;
  document.getElementById("dog-image-container").append(image);
}

// add to ul
function addToUl(obj) {
  for (const breed in obj) {
    let newLine = document.createElement("li");
    newLine.textContent = breed;
    document.getElementById("dog-breeds").append(newLine);
  }
}
