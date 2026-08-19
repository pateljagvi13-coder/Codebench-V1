/* =====================================================
   THREE.JS ROBOT GARAGE
===================================================== */

const container = document.getElementById("robotCanvas");


/* =========================
   SCENE
========================= */

const scene = new THREE.Scene();

scene.background = new THREE.Color(0xf1ece3);


/* =========================
   CAMERA
========================= */

const camera = new THREE.PerspectiveCamera(
    45,
    container.clientWidth / container.clientHeight,
    0.1,
    2000
);

camera.position.set(
    6,
    4.5,
    7
);


/* =========================
   RENDERER
========================= */

const renderer = new THREE.WebGLRenderer({
    antialias: true
});

renderer.setPixelRatio(window.devicePixelRatio);

renderer.setSize(
    container.clientWidth,
    container.clientHeight
);

renderer.shadowMap.enabled = true;

container.appendChild(renderer.domElement);


/* =========================
   CONTROLS
========================= */

const controls = new THREE.OrbitControls(
    camera,
    renderer.domElement
);

controls.enableDamping = true;

controls.dampingFactor = 0.06;

controls.minDistance = 4;

controls.maxDistance = 13;

controls.target.set(0, 1.5, 0);


/* =========================
   LIGHTING
========================= */

const ambientLight = new THREE.HemisphereLight(
    0xffffff,
    0xd7cec0,
    2.4
);

scene.add(ambientLight);


const keyLight = new THREE.DirectionalLight(
    0xffffff,
    2.5
);

keyLight.position.set(
    5,
    10,
    6
);

keyLight.castShadow = true;

scene.add(keyLight);


const fillLight = new THREE.DirectionalLight(
    0xf4d8c3,
    1.2
);

fillLight.position.set(
    -6,
    5,
    -4
);

scene.add(fillLight);


/* =====================================================
   ROBOT
===================================================== */

const robot = new THREE.Group();

scene.add(robot);


/* =========================
   MATERIALS
========================= */

const frameMaterial = new THREE.MeshStandardMaterial({
    color: 0x6d7374,
    metalness: 0.75,
    roughness: 0.32
});


const aluminumMaterial = new THREE.MeshStandardMaterial({
    color: 0xb9bdbb,
    metalness: 0.65,
    roughness: 0.4
});


const darkMaterial = new THREE.MeshStandardMaterial({
    color: 0x343536,
    metalness: 0.35,
    roughness: 0.55
});


const orangeMaterial = new THREE.MeshStandardMaterial({
    color: 0xe49a65,
    metalness: 0.3,
    roughness: 0.45
});


const purpleMaterial = new THREE.MeshStandardMaterial({
    color: 0xa89bc8,
    metalness: 0.25,
    roughness: 0.5
});


/* =========================
   HELPER
========================= */

function cube(
    width,
    height,
    depth,
    material,
    x,
    y,
    z
) {

    const geometry =
        new THREE.BoxGeometry(
            width,
            height,
            depth
        );

    const mesh =
        new THREE.Mesh(
            geometry,
            material
        );

    mesh.position.set(x, y, z);

    mesh.castShadow = true;

    mesh.receiveShadow = true;

    robot.add(mesh);

    return mesh;
}


/* =========================
   BASE CHASSIS
========================= */

cube(
    4.8,
    .22,
    3.1,
    frameMaterial,
    0,
    .55,
    0
);


cube(
    4.5,
    .18,
    .18,
    aluminumMaterial,
    0,
    .9,
    -1.35
);


cube(
    4.5,
    .18,
    .18,
    aluminumMaterial,
    0,
    .9,
    1.35
);


/* =========================
   VERTICAL STRUCTURE
========================= */

cube(
    .18,
    4.3,
    .18,
    frameMaterial,
    -1.9,
    2.5,
    -1.1
);


cube(
    .18,
    4.3,
    .18,
    frameMaterial,
    1.9,
    2.5,
    -1.1
);


cube(
    .18,
    4.3,
    .18,
    frameMaterial,
    -1.9,
    2.5,
    1.1
);


cube(
    .18,
    4.3,
    .18,
    frameMaterial,
    1.9,
    2.5,
    1.1
);


/* =========================
   TOP FRAME
========================= */

cube(
    4,
    .18,
    .18,
    aluminumMaterial,
    0,
    4.55,
    -1.1
);


cube(
    4,
    .18,
    .18,
    aluminumMaterial,
    0,
    4.55,
    1.1
);


cube(
    .18,
    .18,
    2.2,
    aluminumMaterial,
    -1.9,
    4.55,
    0
);


cube(
    .18,
    .18,
    2.2,
    aluminumMaterial,
    1.9,
    4.55,
    0
);


/* =========================
   WHEELS
========================= */

function wheel(x, z) {

    const geometry =
        new THREE.CylinderGeometry(
            .68,
            .68,
            .38,
            32
        );

    const mesh =
        new THREE.Mesh(
            geometry,
            darkMaterial
        );

    mesh.rotation.z = Math.PI / 2;

    mesh.position.set(
        x,
        .68,
        z
    );

    mesh.castShadow = true;

    robot.add(mesh);


    const hubGeometry =
        new THREE.CylinderGeometry(
            .22,
            .22,
            .41,
            24
        );

    const hub =
        new THREE.Mesh(
            hubGeometry,
            aluminumMaterial
        );

    hub.rotation.z = Math.PI / 2;

    hub.position.set(
        x,
        .68,
        z
    );

    robot.add(hub);

}


wheel(-2.35, 1.35);
wheel(-2.35, -1.35);

wheel(2.35, 1.35);
wheel(2.35, -1.35);


/* =========================
   CENTRAL MECHANISM
========================= */

cube(
    1.4,
    2.7,
    .22,
    frameMaterial,
    0,
    2.5,
    0
);


cube(
    .18,
    2.6,
    2.2,
    aluminumMaterial,
    -.7,
    2.5,
    0
);


cube(
    .18,
    2.6,
    2.2,
    aluminumMaterial,
    .7,
    2.5,
    0
);


/* =========================
   ROLLERS
========================= */

function roller(y, color) {

    const geometry =
        new THREE.CylinderGeometry(
            .24,
            .24,
            2.1,
            24
        );

    const material =
        color === "orange"
            ? orangeMaterial
            : purpleMaterial;

    const mesh =
        new THREE.Mesh(
            geometry,
            material
        );

    mesh.rotation.z = Math.PI / 2;

    mesh.position.set(
        0,
        y,
        1.35
    );

    mesh.castShadow = true;

    robot.add(mesh);

}


roller(2.3, "orange");
roller(1.7, "purple");
roller(1.1, "orange");


/* =========================
   FRONT FRAME
========================= */

cube(
    2.8,
    .16,
    .16,
    frameMaterial,
    0,
    1.0,
    1.65
);


cube(
    2.8,
    .16,
    .16,
    frameMaterial,
    0,
    2.7,
    1.65
);


/* =========================
   MOTORS
========================= */

function motor(x, z) {

    const geometry =
        new THREE.CylinderGeometry(
            .3,
            .3,
            .5,
            24
        );

    const mesh =
        new THREE.Mesh(
            geometry,
            orangeMaterial
        );

    mesh.rotation.z = Math.PI / 2;

    mesh.position.set(
        x,
        .95,
        z
    );

    mesh.castShadow = true;

    robot.add(mesh);

}


motor(-1.5, 1.42);
motor(1.5, 1.42);


/* =========================
   FLOOR
========================= */

const floorGeometry =
    new THREE.PlaneGeometry(
        40,
        40
    );


const floorMaterial =
    new THREE.MeshStandardMaterial({
        color: 0xeee9df,
        roughness: .95
    });


const floor =
    new THREE.Mesh(
        floorGeometry,
        floorMaterial
    );


floor.rotation.x = -Math.PI / 2;

floor.position.y = 0;

floor.receiveShadow = true;

scene.add(floor);


/* =========================
   GRID
========================= */

const grid =
    new THREE.GridHelper(
        30,
        30,
        0xd8d1c5,
        0xe2ddd4
    );

grid.position.y = .01;

scene.add(grid);


/* =========================
   CAMERA BUTTONS
========================= */

document
    .getElementById("resetCamera")
    .addEventListener("click", () => {

        camera.position.set(
            6,
            4.5,
            7
        );

        controls.target.set(
            0,
            1.5,
            0
        );

        controls.update();

    });


document
    .getElementById("frontCamera")
    .addEventListener("click", () => {

        camera.position.set(
            0,
            3,
            9
        );

        controls.target.set(
            0,
            2,
            0
        );

        controls.update();

    });


/* =========================
   COMPONENT DATA
========================= */

const parts = document.querySelectorAll(".part");

const componentTitle =
    document.getElementById("componentTitle");

const componentDescription =
    document.getElementById("componentDescription");

const componentSystem =
    document.getElementById("componentSystem");

const componentRole =
    document.getElementById("componentRole");


const data = {

    drivetrain: {
        title: "Drivetrain",
        description:
            "The drivetrain is what allows the robot to move around the field.",
        system: "DRIVETRAIN",
        role: "MOVEMENT"
    },

    intake: {
        title: "Intake",
        description:
            "The intake brings game pieces into the robot.",
        system: "INTAKE",
        role: "GAME PIECES"
    },

    elevator: {
        title: "Elevator",
        description:
            "The elevator moves a mechanism vertically.",
        system: "ELEVATOR",
        role: "VERTICAL MOTION"
    },

    sensors: {
        title: "Sensors",
        description:
            "Sensors allow the robot to understand its position and surroundings.",
        system: "SENSORS",
        role: "AWARENESS"
    }

};


parts.forEach(part => {

    part.addEventListener("click", () => {

        parts.forEach(p =>
            p.classList.remove("active")
        );

        part.classList.add("active");

        const selected =
            data[part.dataset.part];

        componentTitle.textContent =
            selected.title;

        componentDescription.textContent =
            selected.description;

        componentSystem.textContent =
            selected.system;

        componentRole.textContent =
            selected.role;

    });

});


/* =========================
   RESIZE
========================= */

window.addEventListener(
    "resize",
    () => {

        camera.aspect =
            container.clientWidth /
            container.clientHeight;

        camera.updateProjectionMatrix();

        renderer.setSize(
            container.clientWidth,
            container.clientHeight
        );

    }
);


/* =========================
   ANIMATION
========================= */

function animate() {

    requestAnimationFrame(animate);

    controls.update();

    renderer.render(
        scene,
        camera
    );

}

animate();

/* =====================================================
   COMPONENT EXPLORER
===================================================== */

const exploreButton =
    document.querySelector(".learn-button");

const componentModal =
    document.getElementById("componentModal");

const closeComponent =
    document.getElementById("closeComponent");

const modalBackdrop =
    document.getElementById("modalBackdrop");

const modalTitle =
    document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");

const modalSystem =
    document.getElementById("modalSystem");

const modalRole =
    document.getElementById("modalRole");


/* ---------- OPEN ---------- */

exploreButton.addEventListener("click", () => {

    const activePart =
        document.querySelector(".part.active");

    const selected =
        data[activePart.dataset.part];


    modalTitle.textContent =
        selected.title;

    modalDescription.textContent =
        selected.description;

    modalSystem.textContent =
        selected.system;

    modalRole.textContent =
        selected.role;


    componentModal.classList.add("open");

});


/* ---------- CLOSE ---------- */

function closeModal() {

    componentModal.classList.remove("open");

}


closeComponent.addEventListener(
    "click",
    closeModal
);


modalBackdrop.addEventListener(
    "click",
    closeModal
);


/* ---------- ESC ---------- */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeModal();

        }

    }
);

// =====================================
// CODEBENCH // Start Exploring
// =====================================

const startExploringBtn =
    document.getElementById("startExploringBtn");

if (startExploringBtn) {

    startExploringBtn.addEventListener(
        "click",
        () => {

            // Find the currently selected component
            const activePart =
                document.querySelector(
                    ".part.active"
                );

            // If nothing is selected,
            // default to the drivetrain
            const component =
                activePart?.dataset.part ||
                "drivetrain";

            // Open Training Lab with
            // the selected component
            window.location.href =
                `lesson.html?component=${encodeURIComponent(component)}`;

        }
    );

}