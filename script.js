// =========================================
// ENTRANCE PAGE ELEMENTS
// =========================================

// Entire entrance screen
const entrancePage = document.getElementById("entrancePage");

// Fairy village screen
const villagePage = document.getElementById("villagePage");

// Flying fairy image
const entranceFairy = document.getElementById("entranceFairy");

// Variable that repeatedly creates sparkles
let sparkleInterval;

// =========================================
// WHEN USER CLICKS ENTRANCE PAGE
// =========================================

entrancePage.addEventListener("click", () => {

  // Starts fairy flying animation
  entranceFairy.classList.add("fly-away");

  // Starts portal glow animation
  entrancePage.classList.add("opening");

  // Creates sparkles every 80 milliseconds
  sparkleInterval = setInterval(createSparkle, 80);

  // After animation finishes
  setTimeout(() => {

    // Stops sparkle creation
    clearInterval(sparkleInterval);

    // Hides entrance page
    entrancePage.classList.add("hidden");

    // Shows fairy village
    villagePage.classList.remove("hidden");

    // Adds fade in effect
    villagePage.classList.add("fade-in");

  }, 2600);

});

// =========================================
// CREATE FAIRY SPARKLES
// =========================================

function createSparkle() {

  // Creates new sparkle element
  const sparkle = document.createElement("span");

  // Adds sparkle styling class
  sparkle.classList.add("fairy-sparkle");

  // Gets fairy position on screen
  const fairyRect = entranceFairy.getBoundingClientRect();

  // Positions sparkle near fairy
  sparkle.style.left =
    fairyRect.left + fairyRect.width * 0.25 + "px";

  sparkle.style.top =
    fairyRect.top + fairyRect.height * 0.55 + "px";

  // Adds sparkle to entrance page
  entrancePage.appendChild(sparkle);

  // Removes sparkle after animation
  setTimeout(() => {
    sparkle.remove();
  }, 1000);

}

// =========================================
// ABOUT HOUSE POPUP
// =========================================

// About house button
const aboutHouse = document.getElementById("aboutHouse");

// Popup window
const aboutPopup = document.getElementById("aboutPopup");

// Close popup button
const closeAbout = document.getElementById("closeAbout");

// Opens popup when clicking about house
aboutHouse.addEventListener("click", (event) => {

  // Prevents page from jumping
  event.preventDefault();

  // Shows popup
  aboutPopup.classList.remove("hidden");

});

// Closes popup
closeAbout.addEventListener("click", () => {

  // Hides popup
  aboutPopup.classList.add("hidden");

});

// =========================================
// SKILLS HOUSE POPUP
// =========================================

const skillsHouse = document.getElementById("skillsHouse");
const skillsPopup = document.getElementById("skillsPopup");
const closeSkills = document.getElementById("closeSkills");

skillsHouse.addEventListener("click", (event) => {
  event.preventDefault();
  skillsPopup.classList.remove("hidden");
});

closeSkills.addEventListener("click", () => {
  skillsPopup.classList.add("hidden");
});