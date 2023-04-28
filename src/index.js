//console.log("%c HI", "color: firebrick");
document.addEventListener("DOMContentLoaded", () => {
  //fetch dog pics and build card for each
  //---------------------------------------
  fetch("https://dog.ceo/api/breeds/image/random/4")
    .then((res) => res.json())
    .then((dogPics) => dogPics.message.forEach(buildCard));
  //
  // -fetch dog breeds then make an array of just the names by getting the keys
  // -use .map on the array to create the li elements, adding on the event
  // listener to change color. Return the element so that i have an array
  // of editable elements (took me a while to figure out using map to create array of elements)
  // - use event listener to wait for dropdown to change, then check value and
  // hide the elements that dont start with value letter!
  // --------------------------------------------------------------------------
  fetch("https://dog.ceo/api/breeds/list/all")
    .then((res) => res.json())
    .then((breeds) => {
      const breedsArr = Object.keys(breeds.message);
      const elementArr = breedsArr.map((breed) => {
        let newLine = document.createElement("li");
        newLine.textContent = breed;
        newLine.setAttribute("class", "breeds");
        newLine.addEventListener("click", changeTextColor);
        document.getElementById("dog-breeds").append(newLine);
        return newLine;
      });
      let dropDown = document.querySelector("select");
      dropDown.addEventListener("change", (e) => {
        elementArr.forEach((breedEle) => {
          if (breedEle.textContent.charAt(0) === e.target.value) {
            breedEle.style.display = "grid";
          } else {
            breedEle.style.display = "none";
          }
        });
      });
    });
});

// Build card
function buildCard(arr) {
  let image = document.createElement("img");
  image.src = arr;
  document.getElementById("dog-image-container").append(image);
}

// change text color on click
function changeTextColor(e) {
  e.target.style.color = "red";
}

// the trickiest part of these practice labs has been remembering to do things after the fetch returns our data.
// i would forget that i cant select elements in my functions because javascript is trying to grab them before they are created,
// giving errors because the javascript would load first as fetch is async.
