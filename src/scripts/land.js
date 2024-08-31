import * as THREE from "three";

import "../styles/global.css";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
import { MTLLoader } from "three/addons/loaders/MTLLoader.js";
// import * as Stats from "stats.js";
var object;

var scene;
var camera;
var renderer;
var loaded = false;
let mixer;
var tt;
var playing = false;
var stats;
var starArray = [];
let fbxAction;
var darkTheme = false;
const clock = new THREE.Clock();
setScene();
setLight();
// obj();
fbx();

const controls = new OrbitControls(camera, renderer.domElement);

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({ color: 0xbb3311 });
const torus = new THREE.Mesh(geometry, material);
const theme = document.getElementById("darkLight");

theme.addEventListener("click", () => {
  darkTheme = document.documentElement.classList.contains("theme-dark");
  if (!darkTheme) {
    scene.background = new THREE.Color(0x1b242c);
    for (let i = 0; i < 300; i++) {
      starArray[i].material.color.setHex(0xffffff);
    }
  } else {
    scene.background = new THREE.Color(0xffffff);
    for (let i = 0; i < 300; i++) {
      starArray[i].material.color.setHex(0xff0000);
    }
  }
});

scene.add(torus);

Array(300).fill().forEach(addStar);

document.body.onscroll = moveCamera;
animate();

function setScene() {
  scene = new THREE.Scene();

  darkTheme = document.documentElement.classList.contains("theme-dark");
  if (darkTheme) scene.background = new THREE.Color(0x1b242c);
  else {
    scene.background = new THREE.Color(0xffffff);
  }
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.setZ(30);
  camera.position.y = 20;
  camera.position.x = 20;

  renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#bg"),
  });
  renderer.setPixelRatio(window.innerWidth / window.innerHeight);
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function setLight() {
  const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 5);
  hemiLight.position.set(0, 200, 0);
  scene.add(hemiLight);

  const dirLight = new THREE.DirectionalLight(0xffffff, 3);
  dirLight.position.set(0, 200, 100);
  dirLight.castShadow = true;
  dirLight.shadow.camera.top = 180;
  dirLight.shadow.camera.bottom = -100;
  dirLight.shadow.camera.left = -120;
  dirLight.shadow.camera.right = 120;
  scene.add(dirLight);

  const gridHelper = new THREE.GridHelper(200, 50);
  scene.add(gridHelper);
}
function animate() {
  requestAnimationFrame(animate);

  torus.rotation.y += 0.005;
  torus.rotation.x += 0.01;
  torus.rotation.z += 0.01;

  // if (loaded) object.rotation.y += 0.0;
  controls.update();
  const delta = clock.getDelta();
  if (mixer) mixer.update(delta);
  // Render the scene
  renderer.render(scene, camera);
}

function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  if (darkTheme) material.color.setHex(0xffffff);
  else material.color.setHex(0xff0000);
  const star = new THREE.Mesh(geometry, material);
  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(150));
  star.position.set(x, y, z);
  starArray.push(star);
  scene.add(star);
}

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;

  if (t == 0) {
    // fbxAction.reset();
    fbxAction.stop();

    playing = false;
  } else {
    if (!playing) {
      fbxAction.play();
      playing = true;
    }
  }

  torus.position.x += 0.0001;
  camera.position.z = t * -0.01 + 30;
  camera.position.x = 20 + t * -0.0002;
  camera.rotation.y = t * -0.0002;
  if (loaded) {
    tt.position.z = 1 + t / 10;
    tt.position.y = -t * 0.05 - 3.5;

    torus.position.y = -t * 0.025 - 3.5;
    torus.position.x = -t * 0.03 - 3.5;
    torus.position.z = 1 - t / 23;

    tt.rotation.y = t * 0.005;
    tt.rotation.x = t * 0.008;
    tt.rotation.z = t * 0.005;
  }
}

//
function fbx() {
  const loader = new FBXLoader();
  loader.load("/astroChen.fbx", function (object) {
    mixer = new THREE.AnimationMixer(object);

    const action = mixer.clipAction(object.animations[0]);

    fbxAction = action;
    tt = object;
    loaded = true;
    action.clampWhenFinished = true;
    action.setLoop(THREE.LoopOnce);

    object.traverse(function (child) {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    object.position.y = -3.5;
    object.position.x = 20;
    object.scale.setScalar(0.22);
    scene.add(object);
  });
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}

//
