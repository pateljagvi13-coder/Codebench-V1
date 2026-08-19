// =====================================
// CODEBENCH // CAMPAIGN MAP ENGINE
// =====================================

console.log("CodeBench Campaign Map loading 🗺️");


// =====================================
// DOM ELEMENTS
// =====================================

const campaignPath =
    document.getElementById("campaignPath");

const overallProgress =
    document.getElementById("overallProgress");

const currentLevelTag =
    document.getElementById("currentLevelTag");

const currentLevelTitle =
    document.getElementById("currentLevelTitle");

const currentLevelDescription =
    document.getElementById("currentLevelDescription");

const continueMissionBtn =
    document.getElementById("continueMissionBtn");


// =====================================
// RENDER CAMPAIGN
// =====================================

function renderCampaign() {

    if (!campaignPath) {
        console.error(
            "Campaign path element not found."
        );
        return;
    }


    campaignPath.innerHTML = "";


    curriculum.forEach((level, index) => {

        const unlocked =
            isLevelUnlocked(level.id);

        const progress =
            getLevelProgress(level.id);


        // ---------------------------------
        // CREATE LEVEL CARD
        // ---------------------------------

        const article =
            document.createElement("article");

        article.className =
            `campaign-node ${unlocked ? "unlocked" : "locked"
            }`;

        article.dataset.level =
            level.id;


        // ---------------------------------
        // ICON
        // ---------------------------------

        const icon =
            unlocked
                ? String(level.id).padStart(2, "0")
                : "🔒";


        // ---------------------------------
        // STATUS
        // ---------------------------------

        let statusText = "Locked";

        if (unlocked) {

            if (progress >= 100) {
                statusText = "Completed";
            } else {
                statusText = "Available";
            }

        }


        // ---------------------------------
        // BUTTON
        // ---------------------------------

        const hasLessons =
            level.lessons &&
            level.lessons.length > 0;


        let buttonText =
            "Enter Level →";


        if (!unlocked) {
            buttonText = "Locked";
        }


        if (progress >= 100) {
            buttonText = "Review Level →";
        }


        // ---------------------------------
        // CARD HTML
        // ---------------------------------

        article.innerHTML = `

            <div class="node-icon">
                ${icon}
            </div>


            <div class="node-content">

                <span class="node-tag">
                    LEVEL ${String(level.id).padStart(2, "0")}
                </span>


                <h3>
                    ${level.title}
                </h3>


                <p>
                    ${level.description}
                </p>


                <div class="node-progress">

                    <div class="node-progress-bar">

                        <div
                            class="node-progress-fill"
                            style="width: ${progress}%;">
                        </div>

                    </div>

                    <span>
                        ${hasLessons ? `${progress}%` : "Coming Soon"}
                    </span>

                </div>


                <span class="node-status">
                    ${statusText}
                </span>

            </div>


            <button
                type="button"
                class="btn ${unlocked
                ? "btn-primary"
                : "btn-secondary"
            } node-button"
                ${unlocked && hasLessons ? "" : "disabled"}>

                ${buttonText}

            </button>

        `;


        // ---------------------------------
        // LEVEL BUTTON
        // ---------------------------------

        const button =
            article.querySelector(".node-button");


        if (unlocked && hasLessons) {

            button.addEventListener(
                "click",
                () => {

                    openLevel(level.id);

                }
            );

        }


        campaignPath.appendChild(article);


        // ---------------------------------
        // PATH CONNECTOR
        // ---------------------------------

        if (index < curriculum.length - 1) {

            const line =
                document.createElement("div");

            line.className = "path-line";

            campaignPath.appendChild(line);

        }

    });

}


// =====================================
// OPEN LEVEL
// =====================================

function openLevel(levelId) {

    const level =
        getLevel(levelId);

    if (!level) {
        return;
    }


    if (!isLevelUnlocked(levelId)) {

        console.log(
            `Level ${levelId} is locked 🔒`
        );

        return;

    }


    if (!level.lessons.length) {

        console.log(
            `Level ${levelId} does not have lessons yet.`
        );

        return;

    }


    // ---------------------------------
    // Find first incomplete lesson
    // ---------------------------------

    let targetLesson =
        level.lessons.find(
            lesson =>
                !isLessonComplete(
                    level.id,
                    lesson.id
                )
        );


    // If everything is complete,
    // open the first lesson for review.

    if (!targetLesson) {
        targetLesson = level.lessons[0];
    }


    window.location.href =
        `lesson.html?level=${level.id}&lesson=${targetLesson.id}`;

}


// =====================================
// UPDATE CURRENT MISSION
// =====================================

function updateCurrentMission() {

    const current =
        getCurrentLesson();


    if (!current) {

        if (currentLevelTag) {
            currentLevelTag.textContent =
                "CAMPAIGN COMPLETE";
        }

        if (currentLevelTitle) {
            currentLevelTitle.textContent =
                "All Training Complete";
        }

        if (currentLevelDescription) {
            currentLevelDescription.textContent =
                "You've completed every available CodeBench lesson.";
        }

        if (continueMissionBtn) {
            continueMissionBtn.disabled = true;
        }

        return;

    }


    const {
        levelId,
        lessonId,
        level,
        lesson
    } = current;


    if (currentLevelTag) {

        currentLevelTag.textContent =
            `LEVEL ${String(levelId).padStart(2, "0")}`;

    }


    if (currentLevelTitle) {

        currentLevelTitle.textContent =
            level.title;

    }


    if (currentLevelDescription) {

        currentLevelDescription.textContent =
            lesson.title;

    }


    if (continueMissionBtn) {

        continueMissionBtn.disabled = false;


        continueMissionBtn.onclick =
            () => {

                window.location.href =
                    `lesson.html?level=${levelId}&lesson=${lessonId}`;

            };

    }

}


// =====================================
// CALCULATE OVERALL PROGRESS
// =====================================

function updateOverallProgress() {

    let totalLessons = 0;

    let completedLessons = 0;


    curriculum.forEach(level => {

        level.lessons.forEach(lesson => {

            totalLessons++;

            if (
                isLessonComplete(
                    level.id,
                    lesson.id
                )
            ) {

                completedLessons++;

            }

        });

    });


    const progress =
        totalLessons === 0
            ? 0
            : Math.round(
                (completedLessons / totalLessons) * 100
            );


    if (overallProgress) {

        overallProgress.textContent =
            `${progress}%`;

    }

}


// =====================================
// REFRESH MAP
// =====================================

function refreshCampaignMap() {

    renderCampaign();

    updateCurrentMission();

    updateOverallProgress();

}


// =====================================
// START
// =====================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        refreshCampaignMap();

        console.log(
            "CodeBench Campaign Map ready 🗺️⚙️"
        );

    }
);