
// =====================================
// CODEBENCH // CURRICULUM ENGINE
// =====================================

console.log("CodeBench Curriculum Engine loading 📚");


// =====================================
// CURRICULUM DATA
// =====================================
//
// This is the source of truth for CodeBench.
// The map, lesson page, progress system, and
// interactive robot will eventually read from here.
//
// Structure:
//
// LEVEL
//   ├── preview
//   ├── learningGoals
//   └── lessons
//          ├── content
//          ├── modelFocus
//          └── checkpoint
//
// =====================================

const curriculum = [

    // =====================================
    // LEVEL 01
    // =====================================

    {
        id: 1,

        tag: "LEVEL 01 // ROBOT FOUNDATIONS",

        title: "FRC Robot Foundations",

        description:
            "Build a mental model of an FRC robot before learning how to program or troubleshoot one.",

        preview:
            "Start with the big picture. Learn what an FRC robot is, what its major systems do, and how those systems work together.",

        learningGoals: [
            "Understand what FRC is and what a competition robot does.",
            "Identify the major systems found on an FRC robot.",
            "Understand the purpose of a drivetrain.",
            "Recognize common robot mechanisms.",
            "Understand how hardware and software work together."
        ],

        xp: 100,

        lessons: [

            // =====================================
            // LESSON 01
            // =====================================

            {
                id: 1,

                title: "What Is FRC?",

                shortTitle: "What Is FRC?",

                description:
                    "Understand the basic idea of FIRST Robotics Competition and the role of a competition robot.",

                objective:
                    "By the end of this lesson, you should be able to explain what an FRC robot is designed to do and why teams build them.",

                modelFocus: [],

                sections: [

                    {
                        heading: "Welcome to FRC",

                        body:
                            "FIRST Robotics Competition is a team-based engineering program where students design, build, program, and operate robots to compete in a new game each season."
                    },

                    {
                        heading: "The Robot Has a Job",

                        body:
                            "An FRC robot is not built just to move around. Every mechanism, motor, sensor, and piece of software exists to help the robot accomplish specific tasks during a match."
                    },

                    {
                        heading: "A Robot Is a System",

                        body:
                            "The important idea for this course is that an FRC robot is made of many connected systems. Mechanical, electrical, and software systems must cooperate for the robot to work."
                    }

                ],

                keyConcepts: [
                    "FRC",
                    "Competition Robot",
                    "Mechanical Systems",
                    "Electrical Systems",
                    "Software"
                ],

                checkpoint: {

                    question:
                        "Which statement best describes an FRC competition robot?",

                    options: [
                        {
                            text: "A machine designed only to drive around a field.",
                            correct: false
                        },

                        {
                            text: "A collection of mechanical, electrical, and software systems designed to complete tasks in a competition.",
                            correct: true
                        },

                        {
                            text: "A computer that controls motors.",
                            correct: false
                        }
                    ]
                },

                xp: 20
            },


            // =====================================
            // LESSON 02
            // =====================================

            {
                id: 2,

                title: "Robot Anatomy",

                shortTitle: "Robot Anatomy",

                description:
                    "Meet the major parts that make up an FRC robot.",

                objective:
                    "Identify the major physical and electrical components that make up a competition robot.",

                modelFocus: [
                    "frame",
                    "drivetrain",
                    "battery",
                    "rio",
                    "camera"
                ],

                sections: [

                    {
                        heading: "Start With the Frame",

                        body:
                            "The robot frame provides the structure that holds the rest of the robot together. Mechanisms, electronics, and other components are mounted to or supported by the robot structure."
                    },

                    {
                        heading: "The Drivetrain",

                        body:
                            "The drivetrain is the part of the robot responsible for moving the robot around the field. It commonly includes wheels, motors, gearing, and supporting structure."
                    },

                    {
                        heading: "Mechanisms",

                        body:
                            "Mechanisms perform tasks beyond basic movement. Examples include intakes, elevators, arms, and other systems designed around the current FRC game."
                    },

                    {
                        heading: "Electronics",

                        body:
                            "Electronics provide power and control. Components such as the battery, roboRIO, motor controllers, and sensors allow software to interact with the physical robot."
                    }

                ],

                keyConcepts: [
                    "Frame",
                    "Drivetrain",
                    "Mechanisms",
                    "Battery",
                    "roboRIO",
                    "Sensors"
                ],

                checkpoint: {

                    question:
                        "Which robot system is primarily responsible for moving the robot around the field?",

                    options: [
                        {
                            text: "Drivetrain",
                            correct: true
                        },

                        {
                            text: "Battery",
                            correct: false
                        },

                        {
                            text: "Camera",
                            correct: false
                        }
                    ]
                },

                xp: 20
            },


            // =====================================
            // LESSON 03
            // =====================================

            {
                id: 3,

                title: "Major Robot Systems",

                shortTitle: "Major Systems",

                description:
                    "Learn how the major robot systems divide responsibilities.",

                objective:
                    "Explain the difference between drivetrain, mechanisms, electronics, sensors, and software.",

                modelFocus: [
                    "drivetrain",
                    "frame",
                    "battery",
                    "rio",
                    "camera"
                ],

                sections: [

                    {
                        heading: "Divide the Problem",

                        body:
                            "Large engineering systems become easier to understand when their responsibilities are divided into smaller systems."
                    },

                    {
                        heading: "Movement",

                        body:
                            "The drivetrain handles the robot's basic movement."
                    },

                    {
                        heading: "Game Mechanisms",

                        body:
                            "Mechanisms interact with game pieces or perform other game-specific actions."
                    },

                    {
                        heading: "Control and Information",

                        body:
                            "Electronics provide power and communication, while sensors provide information that software can use to make decisions."
                    }

                ],

                keyConcepts: [
                    "Drivetrain",
                    "Mechanism",
                    "Electronics",
                    "Sensors",
                    "Software"
                ],

                checkpoint: {

                    question:
                        "Why are robot systems divided into separate responsibilities?",

                    options: [
                        {
                            text: "So every system can work independently without communicating.",
                            correct: false
                        },

                        {
                            text: "So the complex robot can be organized into smaller systems with specific jobs.",
                            correct: true
                        },

                        {
                            text: "Because only the drivetrain matters during a match.",
                            correct: false
                        }
                    ]
                },

                xp: 20
            },


            // =====================================
            // LESSON 04
            // =====================================

            {
                id: 4,

                title: "Hardware Meets Software",

                shortTitle: "Hardware + Software",

                description:
                    "Understand how robot code interacts with physical hardware.",

                objective:
                    "Trace a simple command from a human input through software to a physical robot component.",

                modelFocus: [
                    "rio",
                    "drivetrain"
                ],

                sections: [

                    {
                        heading: "Software Gives Instructions",

                        body:
                            "Robot software contains the instructions that tell hardware what to do."
                    },

                    {
                        heading: "Hardware Does the Work",

                        body:
                            "Motors, controllers, sensors, and mechanisms are physical systems. They receive commands or provide information to the software."
                    },

                    {
                        heading: "The Connection",

                        body:
                            "A driver input can become a software command, which can then control a motor. Sensors can send information back to the software so the robot knows what is happening."
                    }

                ],

                keyConcepts: [
                    "Input",
                    "Software",
                    "Motor",
                    "Sensor",
                    "Feedback"
                ],

                checkpoint: {

                    question:
                        "What is the basic relationship between robot software and hardware?",

                    options: [
                        {
                            text: "Software sends instructions to hardware, while sensors can provide information back to software.",
                            correct: true
                        },

                        {
                            text: "Hardware writes all of the robot's software automatically.",
                            correct: false
                        },

                        {
                            text: "Software and hardware never interact directly.",
                            correct: false
                        }
                    ]
                },

                xp: 20
            },


            // =====================================
            // LESSON 05
            // =====================================

            {
                id: 5,

                title: "Robot Foundations Checkpoint",

                shortTitle: "Level Checkpoint",

                description:
                    "Put your new robot knowledge together before moving to the drivetrain.",

                objective:
                    "Demonstrate that you understand the major systems and basic architecture of an FRC robot.",

                modelFocus: [
                    "frame",
                    "drivetrain",
                    "battery",
                    "rio",
                    "camera"
                ],

                sections: [

                    {
                        heading: "Ready?",

                        body:
                            "You've now seen the robot from the big picture down to the relationship between hardware and software. This checkpoint brings those ideas together."
                    }

                ],

                keyConcepts: [
                    "Robot Architecture",
                    "Drivetrain",
                    "Mechanisms",
                    "Electronics",
                    "Software"
                ],

                checkpoint: {

                    question:
                        "A driver presses a control to move the robot forward. Which sequence best describes what happens?",

                    options: [
                        {
                            text: "Driver input → software → robot hardware",
                            correct: true
                        },

                        {
                            text: "Battery → camera → driver",
                            correct: false
                        },

                        {
                            text: "Wheel → software → driver",
                            correct: false
                        }
                    ]
                },

                xp: 20
            }

        ]
    },


    // =====================================
    // LEVEL 02
    // =====================================

    {
        id: 2,

        tag: "LEVEL 02 // DRIVETRAIN",

        title: "Drivetrain Fundamentals",

        description:
            "Learn how an FRC robot turns motor power into controlled movement.",

        preview:
            "Explore wheels, motors, gearing, drivetrain layouts, and the basic relationship between driver input and robot movement.",

        learningGoals: [
            "Understand how a drivetrain moves a robot.",
            "Identify wheels, motors, and gearing.",
            "Compare common drivetrain layouts.",
            "Understand basic movement commands."
        ],

        xp: 100,

        lessons: []
    },


    // =====================================
    // LEVEL 03
    // =====================================

    {
        id: 3,

        tag: "LEVEL 03 // ELECTRICAL SYSTEMS",

        title: "Robot Electrical Systems",

        description:
            "Learn how power and communication travel through an FRC robot.",

        preview:
            "Follow the electrical path from the battery through power distribution and motor controllers, then learn how CAN communication connects devices.",

        learningGoals: [
            "Understand the robot's power path.",
            "Identify major electrical components.",
            "Understand the purpose of CAN communication.",
            "Recognize basic electrical troubleshooting concepts."
        ],

        xp: 100,

        lessons: []
    },


    // =====================================
    // LEVEL 04
    // =====================================

    {
        id: 4,

        tag: "LEVEL 04 // MECHANISMS",

        title: "Mechanisms & Motors",

        description:
            "Learn how robots use motors and mechanical systems to perform tasks.",

        preview:
            "Explore motors, gearing, belts, chains, intakes, elevators, arms, and other mechanisms.",

        learningGoals: [
            "Understand how motors create mechanical motion.",
            "Recognize common mechanical power-transfer systems.",
            "Understand the purpose of robot mechanisms."
        ],

        xp: 100,

        lessons: []
    },


    // =====================================
    // LEVEL 05
    // =====================================

    {
        id: 5,

        tag: "LEVEL 05 // SENSORS",

        title: "Sensors & Robot Feedback",

        description:
            "Learn how robots gather information about movement and their environment.",

        preview:
            "Discover encoders, limit switches, gyroscopes, distance sensors, and how sensor information becomes useful to robot software.",

        learningGoals: [
            "Identify common FRC sensors.",
            "Understand what sensors measure.",
            "Understand why robots need feedback."
        ],

        xp: 100,

        lessons: []
    },


    // =====================================
    // LEVEL 06
    // =====================================

    {
        id: 6,

        tag: "LEVEL 06 // PROGRAMMING",

        title: "Robot Programming Fundamentals",

        description:
            "Learn the programming concepts needed to control a robot.",

        preview:
            "Build the programming foundation you'll need before learning advanced FRC software architecture.",

        learningGoals: [
            "Understand variables and data.",
            "Use conditions and loops.",
            "Understand methods and basic program structure.",
            "Connect programming concepts to robot behavior."
        ],

        xp: 100,

        lessons: []
    },


    // =====================================
    // LEVEL 07
    // =====================================

    {
        id: 7,

        tag: "LEVEL 07 // COMMAND ARCHITECTURE",

        title: "Command-Based Robot Architecture",

        description:
            "Learn how larger FRC robot programs are organized.",

        preview:
            "Learn how subsystems, commands, triggers, and the command scheduler work together.",

        learningGoals: [
            "Understand subsystems.",
            "Understand commands.",
            "Understand triggers and scheduling.",
            "Organize robot code into maintainable systems."
        ],

        xp: 100,

        lessons: []
    },


    // =====================================
    // LEVEL 08
    // =====================================

    {
        id: 8,

        tag: "LEVEL 08 // AUTONOMOUS & CONTROL",

        title: "Feedback, Control & Autonomous",

        description:
            "Learn how robots make precise movements and operate without direct driver control.",

        preview:
            "Connect sensors, feedback, PID control, paths, and autonomous routines into one larger control system.",

        learningGoals: [
            "Understand closed-loop control.",
            "Understand the purpose of PID.",
            "Understand autonomous routines.",
            "Understand paths and trajectories."
        ],

        xp: 100,

        lessons: []
    },


    // =====================================
    // LEVEL 09
    // =====================================

    {
        id: 9,

        tag: "LEVEL 09 // VISION",

        title: "Vision & Field Awareness",

        description:
            "Learn how cameras and vision systems help robots understand their surroundings.",

        preview:
            "Explore cameras, AprilTags, target detection, and robot localization.",

        learningGoals: [
            "Understand basic computer vision.",
            "Understand how cameras provide useful data.",
            "Understand the purpose of AprilTags.",
            "Understand basic field localization."
        ],

        xp: 100,

        lessons: []
    },


    // =====================================
    // LEVEL 10
    // =====================================

    {
        id: 10,

        tag: "LEVEL 10 // COMPETITION READINESS",

        title: "Competition Readiness",

        description:
            "Bring everything together and prepare a robot for real competition.",

        preview:
            "Learn driver controls, diagnostics, match preparation, troubleshooting, pit workflow, and safety.",

        learningGoals: [
            "Understand driver controls.",
            "Use a systematic troubleshooting process.",
            "Prepare a robot before a match.",
            "Understand basic competition workflow and safety."
        ],

        xp: 100,

        lessons: []
    }

];


// =====================================
// PROGRESS SYSTEM
// =====================================
//
// Progress is stored locally for the MVP.
//
// Example:
//
// {
//     completedLessons: {
//         "1-1": true,
//         "1-2": true
//     }
// }
//
// The key "1-2" means:
// Level 1, Lesson 2
//
// =====================================

const PROGRESS_KEY = "codebenchProgress";


function getProgress() {

    const saved = localStorage.getItem(PROGRESS_KEY);

    if (!saved) {

        return {
            completedLessons: {}
        };

    }

    try {

        const parsed = JSON.parse(saved);

        return {
            completedLessons:
                parsed.completedLessons || {}
        };

    } catch (error) {

        console.error(
            "Could not load CodeBench progress:",
            error
        );

        return {
            completedLessons: {}
        };

    }

}


// =====================================
// SAVE PROGRESS
// =====================================

function saveProgress(progress) {

    localStorage.setItem(
        PROGRESS_KEY,
        JSON.stringify(progress)
    );

}


// =====================================
// LESSON KEY
// =====================================

function getLessonKey(levelId, lessonId) {

    return `${Number(levelId)}-${Number(lessonId)}`;

}


// =====================================
// CHECK COMPLETION
// =====================================

function isLessonComplete(levelId, lessonId) {

    const progress = getProgress();

    const key =
        getLessonKey(levelId, lessonId);

    return Boolean(
        progress.completedLessons[key]
    );

}


// =====================================
// MARK LESSON COMPLETE
// =====================================

function completeLesson(levelId, lessonId) {

    const progress = getProgress();

    const key =
        getLessonKey(levelId, lessonId);

    progress.completedLessons[key] = true;

    saveProgress(progress);

    console.log(
        `Lesson ${key} completed! 🎉`
    );

    return true;

}


// =====================================
// GET LEVEL
// =====================================

function getLevel(levelId) {

    return curriculum.find(
        level => level.id === Number(levelId)
    );

}


// =====================================
// GET LESSON
// =====================================

function getLesson(levelId, lessonId) {

    const level =
        getLevel(levelId);

    if (!level) {
        return null;
    }

    return level.lessons.find(
        lesson =>
            lesson.id === Number(lessonId)
    ) || null;

}


// =====================================
// GET LEVEL PROGRESS
// =====================================

function getLevelProgress(levelId) {

    const level =
        getLevel(levelId);

    if (!level || level.lessons.length === 0) {

        return 0;

    }

    const completed =
        level.lessons.filter(
            lesson =>
                isLessonComplete(
                    levelId,
                    lesson.id
                )
        ).length;

    return Math.round(
        (completed / level.lessons.length) * 100
    );

}


// =====================================
// CHECK IF LEVEL IS UNLOCKED
// =====================================
//
// Level 1 is always unlocked.
//
// Every later level requires the
// previous level to be completely finished.
//
// =====================================

function isLevelUnlocked(levelId) {

    const id = Number(levelId);

    if (id === 1) {
        return true;
    }

    const previousLevel =
        getLevel(id - 1);

    if (!previousLevel) {
        return false;
    }

    if (previousLevel.lessons.length === 0) {

        return false;

    }

    return previousLevel.lessons.every(
        lesson =>
            isLessonComplete(
                id - 1,
                lesson.id
            )
    );

}


// =====================================
// CHECK IF LESSON IS UNLOCKED
// =====================================
//
// First lesson of an unlocked level
// is available.
//
// Every later lesson requires the
// previous lesson to be completed.
//
// =====================================

function isLessonUnlocked(levelId, lessonId) {

    const level =
        getLevel(levelId);

    if (!level) {
        return false;
    }

    if (!isLevelUnlocked(levelId)) {
        return false;
    }

    const id =
        Number(lessonId);

    if (id === 1) {
        return true;
    }

    return isLessonComplete(
        levelId,
        id - 1
    );

}


// =====================================
// GET CURRENT LESSON
// =====================================

function getCurrentLesson() {

    for (const level of curriculum) {

        for (const lesson of level.lessons) {

            if (
                isLessonUnlocked(
                    level.id,
                    lesson.id
                ) &&
                !isLessonComplete(
                    level.id,
                    lesson.id
                )
            ) {

                return {
                    levelId: level.id,
                    lessonId: lesson.id,
                    level,
                    lesson
                };

            }

        }

    }

    return null;

}


// =====================================
// GET NEXT LESSON
// =====================================

function getNextLesson(levelId, lessonId) {

    const level =
        getLevel(levelId);

    if (!level) {
        return null;
    }

    const nextLesson =
        level.lessons.find(
            lesson =>
                lesson.id === Number(lessonId) + 1
        );

    if (nextLesson) {

        return {
            levelId: level.id,
            lessonId: nextLesson.id,
            level,
            lesson: nextLesson
        };

    }


    // ---------------------------------
    // Look for next level
    // ---------------------------------

    const nextLevel =
        getLevel(Number(levelId) + 1);

    if (
        nextLevel &&
        nextLevel.lessons.length > 0
    ) {

        const firstLesson =
            nextLevel.lessons[0];

        return {
            levelId: nextLevel.id,
            lessonId: firstLesson.id,
            level: nextLevel,
            lesson: firstLesson
        };

    }

    return null;

}


// =====================================
// EXPORT TO WINDOW
// =====================================
//
// These are temporarily exposed globally
// because CodeBench currently uses regular
// script tags instead of ES modules.
//
// =====================================

window.curriculum = curriculum;

window.getLevel = getLevel;
window.getLesson = getLesson;

window.getProgress = getProgress;
window.saveProgress = saveProgress;

window.isLessonComplete =
    isLessonComplete;

window.completeLesson =
    completeLesson;

window.getLevelProgress =
    getLevelProgress;

window.isLevelUnlocked =
    isLevelUnlocked;

window.isLessonUnlocked =
    isLessonUnlocked;

window.getCurrentLesson =
    getCurrentLesson;

window.getNextLesson =
    getNextLesson;

// =====================================
// LESSON PAGE RENDERER
// =====================================

function renderLesson(levelId = 1, lessonId = 1) {

    const level = getLevel(levelId);
    const lesson = getLesson(levelId, lessonId);

    if (!level || !lesson) {

        console.error(
            "Could not find lesson:",
            levelId,
            lessonId
        );

        return;
    }


    // =====================================
    // LESSON HERO
    // =====================================

    const lessonTag =
        document.getElementById("lessonTag");

    const lessonTitle =
        document.getElementById("lessonTitle");

    const lessonDescription =
        document.getElementById("lessonDescription");


    if (lessonTag) {
        lessonTag.textContent =
            `LESSON ${String(lesson.id).padStart(2, "0")}`;
    }

    if (lessonTitle) {
        lessonTitle.textContent =
            lesson.title;
    }

    if (lessonDescription) {
        lessonDescription.textContent =
            lesson.description;
    }


    // =====================================
    // LEVEL TAG
    // =====================================

    const levelTag =
        document.getElementById("levelTag");

    if (levelTag) {

        levelTag.textContent =
            `LEVEL ${String(level.id).padStart(2, "0")}`;

    }


    // =====================================
    // LESSON PROGRESS
    // =====================================

    const totalLessons =
        level.lessons.length;

    const completedBefore =
        level.lessons.filter(
            currentLesson =>
                currentLesson.id < lesson.id &&
                isLessonComplete(
                    level.id,
                    currentLesson.id
                )
        ).length;


    const progressPercent =
        totalLessons > 0
            ? Math.round(
                (completedBefore / totalLessons) * 100
            )
            : 0;


    const lessonProgress =
        document.getElementById("lessonProgress");

    const lessonProgressFill =
        document.getElementById("lessonProgressFill");


    if (lessonProgress) {

        lessonProgress.textContent =
            `${lesson.id} / ${totalLessons}`;

    }


    if (lessonProgressFill) {

        lessonProgressFill.style.width =
            `${Math.max(progressPercent, 20)}%`;

    }


    // =====================================
    // LEARNING GOALS
    // =====================================

    const learningGoals =
        document.getElementById("learningGoals");


    if (learningGoals) {

        learningGoals.innerHTML = "";


        if (level.learningGoals) {

            level.learningGoals.forEach(
                (goal, index) => {

                    const goalElement =
                        document.createElement("div");

                    goalElement.className =
                        "learning-goal";


                    goalElement.innerHTML = `
                        <span class="goal-number">
                            ${String(index + 1).padStart(2, "0")}
                        </span>

                        <span>
                            ${goal}
                        </span>
                    `;


                    learningGoals.appendChild(
                        goalElement
                    );

                }
            );

        }

    }


    // =====================================
    // LESSON CONTENT
    // =====================================

    const lessonContent =
        document.getElementById("lessonContent");


    if (lessonContent) {

        lessonContent.innerHTML = "";


        lesson.sections.forEach(
            section => {

                const sectionElement =
                    document.createElement("article");

                sectionElement.className =
                    "lesson-section";


                sectionElement.innerHTML = `
                    <h2>
                        ${section.heading}
                    </h2>

                    <p>
                        ${section.body}
                    </p>
                `;


                lessonContent.appendChild(
                    sectionElement
                );

            }
        );

    }


    // =====================================
    // KEY CONCEPTS
    // =====================================

    const keyConcepts =
        document.getElementById("keyConcepts");


    if (keyConcepts) {

        keyConcepts.innerHTML = "";


        lesson.keyConcepts.forEach(
            concept => {

                const conceptElement =
                    document.createElement("div");

                conceptElement.className =
                    "concept-item";


                conceptElement.textContent =
                    concept;


                keyConcepts.appendChild(
                    conceptElement
                );

            }
        );

    }


    // =====================================
    // CHECKPOINT QUESTION
    // =====================================

    const checkpointQuestion =
        document.getElementById(
            "checkpointQuestion"
        );


    if (checkpointQuestion) {

        checkpointQuestion.textContent =
            lesson.checkpoint.question;

    }


    // =====================================
    // CHECKPOINT OPTIONS
    // =====================================

    const checkpointOptions =
        document.getElementById(
            "checkpointOptions"
        );


    if (checkpointOptions) {

        checkpointOptions.innerHTML = "";


        lesson.checkpoint.options.forEach(
            (option, index) => {

                const button =
                    document.createElement("button");

                button.type = "button";

                button.className =
                    "checkpoint-option";


                button.textContent =
                    `${String.fromCharCode(65 + index)}. ${option.text}`;


                button.dataset.correct =
                    option.correct;


                checkpointOptions.appendChild(
                    button
                );

            }
        );

    }


    // =====================================
    // ROBOT MODEL FOCUS
    // =====================================
    //
    // The actual robot model will use this
    // later. For now we just expose the data.
    //

    window.currentModelFocus =
        lesson.modelFocus || [];


    console.log(
        "Robot model focus:",
        window.currentModelFocus
    );


    // =====================================
    // COMPLETION STATE
    // =====================================

    const completeButton =
        document.getElementById(
            "completeLessonBtn"
        );

    const completionTitle =
        document.getElementById(
            "completionTitle"
        );

    const completionMessage =
        document.getElementById(
            "completionMessage"
        );


    if (
        isLessonComplete(
            level.id,
            lesson.id
        )
    ) {

        if (completeButton) {

            completeButton.disabled =
                false;

            completeButton.textContent =
                "Lesson Complete ✓";

        }


        if (completionTitle) {

            completionTitle.textContent =
                "Lesson Complete";

        }


        if (completionMessage) {

            completionMessage.textContent =
                "You've already completed this lesson.";

        }

    }


    console.log(
        `Rendered Level ${level.id}, Lesson ${lesson.id}: ${lesson.title} 📚`
    );

}


// =====================================
// LOAD CURRENT LESSON
// =====================================

function loadCurrentLesson() {

    const params =
        new URLSearchParams(
            window.location.search
        );


    const levelId =
        Number(
            params.get("level")
        ) || 1;


    const lessonId =
        Number(
            params.get("lesson")
        ) || 1;


    renderLesson(
        levelId,
        lessonId
    );

}


// =====================================
// EXPOSE RENDERER
// =====================================

window.renderLesson =
    renderLesson;

window.loadCurrentLesson =
    loadCurrentLesson;




// =====================================
// START
// =====================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        loadCurrentLesson();

        console.log(
            "CodeBench Curriculum Engine ready 🧠⚙️"
        );

        console.log(
            "Current progress:",
            getProgress()
        );

    }
);


