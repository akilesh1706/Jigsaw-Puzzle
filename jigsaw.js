arr = ["-240px 0", "-120px 0", "0 0", "-120px -120px", "0 -120px", "-120px -240px", "-240px -120px", "-240px -240px", "0 -240px"];
brr = ["second", "seventh", "third", "fourth", "fifth", "sixth", "first", "eighth", "ninth"];
for (let i = 8; i >= 0; i--) {

  document.getElementById(`${brr[i]}`).style.backgroundPosition = `${arr[i]}`;
  arr.pop();
  brr.pop();

}

const img = document.querySelector('img');
const input = document.querySelector('input');
const firstDiv = document.getElementById('first');
const secDiv = document.getElementById('second');
const thirdDiv = document.getElementById('third');
const fourthDiv = document.getElementById('fourth');
const fifthDiv = document.getElementById('fifth');
const sixthDiv = document.getElementById('sixth');
const seventhDiv = document.getElementById('seventh');
const eighthDiv = document.getElementById('eighth');
const ninthDiv = document.getElementById('ninth');

let draggs = document.getElementsByClassName('draggable');

input.addEventListener("change", () => {
  img.src = URL.createObjectURL(input.files[0]);
  firstDiv.style.backgroundImage = `url(${img.src})`;
  secDiv.style.backgroundImage = `url(${img.src})`;
  thirdDiv.style.backgroundImage = `url(${img.src})`;
  fourthDiv.style.backgroundImage = `url(${img.src})`;
  fifthDiv.style.backgroundImage = `url(${img.src})`;
  sixthDiv.style.backgroundImage = `url(${img.src})`;
  seventhDiv.style.backgroundImage = `url(${img.src})`;
  eighthDiv.style.backgroundImage = `url(${img.src})`;
  ninthDiv.style.backgroundImage = `url(${img.src})`;

});

const draggables = document.querySelectorAll(".draggable");
let currTile;
let otherTile;
let dragCount = 0;

draggables.forEach((box) => {
  box.addEventListener("dragstart", function () {
    currTile = this;
    this.classList.add("dragging");
  });

  box.addEventListener("dragover", function (e) {
    e.preventDefault();
  });

  box.addEventListener("dragenter", function (e) {
    e.preventDefault();
    this.classList.add("dragover");
  });

  box.addEventListener("dragleave", function () {
    this.classList.remove("dragover");
  });

  box.addEventListener("drop", function () {
    otherTile = this;
    this.classList.remove("dragover");
  });

  box.addEventListener("dragend", function () {
    this.classList.remove("dragging");
    dragCount = dragCount + 1;

    if (currTile && otherTile && currTile !== otherTile) {
      const currIndex = Array.from(draggables).indexOf(currTile);
      const otherIndex = Array.from(draggables).indexOf(otherTile);

      if (currIndex !== -1 && otherIndex !== -1) {
        // Swap the background positions
        const currBackgroundPosition = currTile.style.backgroundPosition;
        const otherBackgroundPosition = otherTile.style.backgroundPosition;
        currTile.style.backgroundPosition = otherBackgroundPosition;
        otherTile.style.backgroundPosition = currBackgroundPosition;
      }
    }
  });
});

function submit() {
  crr = ["0px 0px", "-120px 0px", "-240px 0px", "0px -120px", "-120px -120px", "-240px -120px", "0px -240px", "-120px -240px", "-240px -240px"];
  drr = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth"];
  let cnt = 0;
  for (let j = 0; j < 9; j++) {
    if (document.getElementById(`${drr[j]}`).style.backgroundPosition == `${crr[j]}`) {
      cnt = cnt + 1;
    }
  }
  if (cnt == 9) {
    alert("You have completed the puzzle successfully :)");
  } else {
    console.log();
    alert("The puzzle is not completed successfully :(");
  }

}
function start() {
  let name = prompt("Enter your name");
  localStorage.setItem("name", "dragCount");
  console.log(localStorage.getItem("name", "dragCount"));
}
