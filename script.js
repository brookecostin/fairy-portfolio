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

// =========================================
// PROJECTS HOUSE POPUP
// =========================================

const projectsHouse =
  document.getElementById("projectsHouse");

const projectsPopup =
  document.getElementById("projectsPopup");

projectsHouse.addEventListener(
  "click",
  (event) => {

    event.preventDefault();

    projectsPopup.classList.remove("hidden");

  }
);
// Close projects popup button
const closeProjects =
  document.getElementById("closeProjects");

// Closes project popup
closeProjects.addEventListener(
  "click",
  () => {

    projectsPopup.classList.add("hidden");

  }
);
// =========================================
// PROJECT DETAIL ELEMENTS
// =========================================

// Pressure insole book button
const insoleTab =
  document.getElementById("insoleTab");

// Pill dispenser book button
const pillTab =
  document.getElementById("pillTab");

// Portfolio website book button
const websiteTab =
  document.getElementById("websiteTab");

// Project detail popup
const projectDetailPopup =
  document.getElementById("projectDetailPopup");

// Project detail page
const projectDetailPage =
  document.getElementById("projectDetailPage");

// Project title
const projectTitle =
  document.getElementById("projectTitle");

// Project description
const projectDescription =
  document.getElementById("projectDescription");

// Project cover image
const projectCover =
  document.getElementById("projectCover");

// Documentation button
const documentationButton =
  document.getElementById("documentationButton");

// 360 model button
const viewModelButton =
  document.getElementById("viewModelButton");

// 3D model section
const modelSection =
  document.getElementById("modelSection");

// Interactive model viewer
const cadViewer =
  document.getElementById("cadViewer");

// Back to project book button
const backToProjects =
  document.getElementById("backToProjects");

// Close project detail button
const closeProjectDetail =
  document.getElementById("closeProjectDetail");

// =========================================
// WEBSITE PROJECT ELEMENTS
// =========================================

// Website-only button container
const websiteActionButtons =
  document.getElementById("websiteActionButtons");

// Design & Development button
const designDevelopmentButton =
  document.getElementById("designDevelopmentButton");

// Key Features button
const keyFeaturesButton =
  document.getElementById("keyFeaturesButton");

// Website information box
const websiteInfo =
  document.getElementById("websiteInfo");

// =========================================
// PROJECT SECTION INFORMATION
// =========================================

// Stores the information for each project
const projectData = {

  insole: {

    title: "3D-Printed Gait Insole",

    description:
      "A 3D-printed capacitive sensing insole developed for gait analysis and plantar pressure monitoring. The project included CAD design, sensor prototyping, multi-material 3D printing, hardware integration, and human testing.",

    cover:
      "Images/insole-cover.jpg",

    documentation:
      "Documents/insole-finalreport.pdf",

    documentationLabel:
    "View Documentation",

    model:
      "Models/InsoleV5.glb"
  },


  pill: {

    title: "Pillz Dispenser",

    description:
      "An engineering design project focused on developing a functional pill dispensing system using CAD, prototyping, and user-centered design. For a fun innovative approach to daily medication.",

    cover:
      "Images/pillz-cover.jpg",

    documentation:
      "Documents/blueprint.jpg",

    // Changes the first button wording for Pillz only
    documentationLabel:
      "View Blueprint",

    model:
      "Models/pillz.glb"
  },


  website: {

  title: "Interactive Portfolio Website",

  description:
    "A hand-drawn interactive portfolio designed and coded using HTML, CSS, and JavaScript. The site combines original digital artwork with responsive web design and interactive elements.",

  cover: "",
  documentation: "",
  documentationLabel: "",
  model: ""
}
  };

 // =========================================
 // OPEN PROJECT FUNCTION
 // =========================================

// Opens the selected project
function openProject(projectName) {

  // Gets information for selected project
  const project =
    projectData[projectName];

  // =========================================
  // PROJECT-SPECIFIC STYLING CLASS
  // =========================================

  // Removes the class from whichever project
  // was previously open
  projectDetailPage.classList.remove(
    "insole-project",
    "pill-project",
    "website-project"
  );

  // Adds a unique class for the project
  // that was just clicked
  projectDetailPage.classList.add(
    projectName + "-project"
  );

  // =========================================
  // WEBSITE PROJECT SPECIAL LAYOUT
  // =========================================

if (projectName === "website") {

  // Hide things Website does not need
  projectCover.classList.add("hidden");

  documentationButton.classList.add("hidden");

  viewModelButton.classList.add("hidden");

  modelSection.classList.add("hidden");


  // Show Website-specific buttons
  websiteActionButtons.classList.remove("hidden");

  // Start with information box hidden
  websiteInfo.classList.add("hidden");

} else {

  // Show normal project content for Insole and Pillz
  projectCover.classList.remove("hidden");

  documentationButton.classList.remove("hidden");

  viewModelButton.classList.remove("hidden");


  // Hide Website-specific content
  websiteActionButtons.classList.add("hidden");

  websiteInfo.classList.add("hidden");
}
  

  // Updates title
  projectTitle.textContent =
    project.title;

  // Updates description
  projectDescription.textContent =
    project.description;

  // Updates cover image
  projectCover.src =
    project.cover;

  // Updates documentation link
  documentationButton.href =
    project.documentation;

  // Updates the documentation button wording
  documentationButton.textContent =
    project.documentationLabel;

  // Updates 3D model
  cadViewer.src =
    project.model;

  // Hides the model section until user clicks
  modelSection.classList.add("hidden");

  // Hides project book
  projectsPopup.classList.add("hidden");

  // Shows project detail popup
  projectDetailPopup.classList.remove(
    "hidden"
  );

  // Restarts page turn animation
  projectDetailPage.classList.remove(
    "page-turn"
  );

  void projectDetailPage.offsetWidth;

  projectDetailPage.classList.add(
    "page-turn"
  );
}
// =========================================
// WEBSITE PROJECT INFORMATION BUTTONS
// =========================================


// Design & Development
designDevelopmentButton.addEventListener(
  "click",
  () => {

    websiteInfo.innerHTML = `
      <h3>Design & Development</h3>

      <p>
        Designed and developed from scratch using HTML,
        CSS, and JavaScript. The portfolio combines
        original hand-drawn artwork with responsive
        layouts, custom animations, interactive
        navigation, and project-specific experiences.
      </p>
    `;

    websiteInfo.classList.remove("hidden");

  }
);


// Key Features
keyFeaturesButton.addEventListener(
  "click",
  () => {

    websiteInfo.innerHTML = `
      <h3>Key Features</h3>

      <div class="website-feature-list">
        <p>✦ Original hand-drawn digital artwork</p>
        <p>✦ Responsive desktop and mobile design</p>
        <p>✦ Interactive fairy-village navigation</p>
        <p>✦ Animated project book and page transitions</p>
        <p>✦ Interactive 3D CAD model integration</p>
        <p>✦ Custom HTML, CSS, and JavaScript</p>
      </div>
    `;

    websiteInfo.classList.remove("hidden");

  }
);


// =========================================
// PROJECT BOOK BUTTONS
// =========================================

// Opens insole project
insoleTab.addEventListener(
  "click",
  () => {

    openProject("insole");

  }
);


// Opens pill dispenser project
pillTab.addEventListener(
  "click",
  () => {

    openProject("pill");

  }
);


// Opens website project
websiteTab.addEventListener(
  "click",
  () => {

    openProject("website");

  }
);


// =========================================
// SHOW 360 MODEL
// =========================================

// Shows interactive model section
viewModelButton.addEventListener(
  "click",
  () => {

    // Reveals the hidden 3D model section
    modelSection.classList.remove("hidden");

    // Waits until the section has been added
    // to the page layout
    setTimeout(() => {

      // Scrolls directly to the CAD viewer
      modelSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    }, 250);

  }
);

// =========================================
// CHANGE BETWEEN CAD MODELS
// =========================================

// Finds every model selector button
document
  .querySelectorAll(".model-choice")
  .forEach((button) => {

    button.addEventListener(
      "click",
      () => {

        // Gets model path from button
        const modelPath =
          button.dataset.model;

        // Loads selected model
        cadViewer.src =
          modelPath;

      }
    );

  });


// =========================================
// BACK TO PROJECT BOOK
// =========================================

backToProjects.addEventListener(
  "click",
  () => {

    // Hides project detail
    projectDetailPopup.classList.add(
      "hidden"
    );

    // Shows project book again
    projectsPopup.classList.remove(
      "hidden"
    );

  }
);


// =========================================
// CLOSE PROJECT DETAIL
// =========================================

closeProjectDetail.addEventListener(
  "click",
  () => {

    projectDetailPopup.classList.add(
      "hidden"
    );

  }
);
