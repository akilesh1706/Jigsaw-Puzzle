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

function areAdjacent(element1, element2) {
  const rect1 = element1.getBoundingClientRect();
  const rect2 = element2.getBoundingClientRect();

  // Check if the elements are vertically or horizontally adjacent
  return (
    (Math.abs(rect1.top - rect2.bottom) < 2 && Math.abs(rect1.left - rect2.left) < 2) ||
    (Math.abs(rect1.bottom - rect2.top) < 2 && Math.abs(rect1.left - rect2.left) < 2) ||
    (Math.abs(rect1.left - rect2.right) < 2 && Math.abs(rect1.top - rect2.top) < 2) ||
    (Math.abs(rect1.right - rect2.left) < 2 && Math.abs(rect1.top - rect2.top) < 2)
  );
}

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

    // Check if the tiles are adjacent before allowing the drop
    if (currTile && otherTile && currTile !== otherTile && areAdjacent(currTile, otherTile)) {
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



  box.addEventListener("dragend", function () {
    this.classList.remove("dragging");
    dragCount = dragCount + 1;
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
    // Retrieve the stored user name and drag count
    const userName = localStorage.getItem("userName");
    const storedDragCount = localStorage.getItem("dragCount");
    console.log(`User: ${userName}, Drag Count: ${storedDragCount}`);
  } else {
    alert("The puzzle is not completed successfully :(");
  }
}

function start() {
  // Use prompt to ask for the user's name
  let name = prompt("Enter your name");

  // Check if the user entered a name
  if (name !== null && name !== "") {
    // Store the user's name in local storage
    localStorage.setItem("userName", name);
    console.log(`User: ${name}`);
  } else {
    console.log("User did not enter a name.");
  }
}
