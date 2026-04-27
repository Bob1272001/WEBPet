let webBar = 60;
let currentPet = 0;

const pets = [
  { name: "Leopold", adoptedName: "Ruby", type: "Dog", base: "Dog" },
  { name: "Tabby", adoptedName: "Tabby", type: "Cat", base: "Cat" },
  { name: "Dory", adoptedName: "Dory", type: "Fish", base: "Fish" }
];

function updateUI() {
  const pet = pets[currentPet];

  document.getElementById("petName").innerText = pet.name;
  document.getElementById("petStatus").innerText = pet.type;

  let mood = "Normal";
  let emoji = "🙂";

  if (webBar >= 75) {
    mood = "Happy";
    emoji = "😄";
  } else if (webBar >= 25) {
    mood = "Normal";
    emoji = "🙂";
  } else if (webBar > 0) {
    mood = "Normal";
    emoji = "😵";
  } else {
    mood = "Dead";
    emoji = "💀";
  }

  const imagePath = `images/${pet.base}_${mood}.png`;
  document.getElementById("petImage").src = imagePath;

  document.getElementById("webValue").innerText = "WEB™Bar: " + webBar + "/100";
  document.getElementById("webFill").style.width = webBar + "%";
  document.getElementById("moodBubble").innerText = emoji;
}

function decreaseWebBar() {
  webBar -= 20;

  if (webBar < 0) {
    webBar = 0;
  }

  updateUI();
}

function increaseWebBar() {
  webBar += 20;

  if (webBar > 100) {
    webBar = 100;
  }

  updateUI();
}

function adoptPet(index) {
  currentPet = index;
  webBar = 60;

  if (index === 0) {
    pets[0].name = pets[0].adoptedName;
  }

  updateUI();
}

updateUI();