import * as THREE from "three";

import * as BufferGeometryUtils from "three/addons/utils/BufferGeometryUtils.js";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
let renderer, scene, camera, stats;

let sphere;
let mixer;
let fbxAction;
var astronutModel;
var loaded = false;
const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;
var off = 500;
var inAngle = 0;
var astronutAngle = 0;

var r = 0.01;
const clock = new THREE.Clock();
document.addEventListener("DOMContentLoaded", function () {
  // Your code here

  console.log("DOM fully loaded and parsed");
});
init();
animate();
fbx();
setLight();
var t = 1.0;
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
}
function init() {
  camera = new THREE.PerspectiveCamera(40, WIDTH / HEIGHT, 1, 10000);
  camera.position.z = 300;

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x1b242c);
  var amount = 20000;
  const radius = 70;
  document.getElementById("showAfter").style.display = "none";
  const positions = new Float32Array(amount * 3);
  const colors = new Float32Array(amount * 3);
  const sizes = new Float32Array(amount);

  const offs = new Float32Array(amount);
  const alps = new Float32Array(amount);

  const vertex = new THREE.Vector3();
  const v = new THREE.Vector3();
  const color = new THREE.Color(0xffffff);

  const segments = 38,
    rings = 28;
  let sphereGeometry = new THREE.SphereGeometry(radius, segments, rings);

  // scene.background = new THREE.Color( 0xffffff );
  // scene.fog = new THREE.Fog( 0xcccccc, 100, 1500 );
  // if normal and uv attributes are not removed, mergeVertices() can't consolidate identical vertices with different normal/uv data

  sphereGeometry.deleteAttribute("normal");
  sphereGeometry.deleteAttribute("uv");

  const positionAttribute = sphereGeometry.getAttribute("position");

  var length1 = sphereGeometry.getAttribute("position").count;
  amount = length1;

  for (let i = 0, l = positionAttribute.count; i < l; i++) {
    vertex.fromBufferAttribute(positionAttribute, i).toArray(positions, i * 3);

    color.setHSL(0.01 + 0.05 * (i / length1), 0.99, 0.5);

    color.toArray(colors, i * 3);

    sizes[i] = i < length1 ? 10 : 40;
  }

  for (let i = 0; i < amount; i++) {
    const off = Math.random() * 600 - 150;
    // off = i % 5;
    var alp = (i % 10) - 8;

    sizes[i] = 10;

    offs[i] = off;
    alps[i] = alp;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", positionAttribute);
  // geometry.setAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) );
  geometry.setAttribute("customColor", new THREE.BufferAttribute(colors, 3));
  geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

  geometry.setAttribute("off", new THREE.BufferAttribute(offs, 1));
  geometry.setAttribute("alp", new THREE.BufferAttribute(alps, 1));

  //

  const material = new THREE.ShaderMaterial({
    uniforms: {
      color: { value: new THREE.Color(0xffffff) },
      pointTexture: { value: new THREE.TextureLoader().load("/website/k.png") },

      time: { value: 1.0 },
      angle: { value: 0.0 },
      ratio: { value: 0.001 },
    },
    vertexShader: document.getElementById("vertexshader").textContent,
    fragmentShader: document.getElementById("fragmentshader").textContent,

    // blending: THREE.AdditiveBlending,
    depthTest: false,
    transparent: true,
  });

  //

  sphere = new THREE.Points(geometry, material);
  scene.add(sphere);

  //

  renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#bg"),
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(WIDTH, HEIGHT);

  const container = document.getElementById("container");
  container.appendChild(renderer.domElement);

  //

  window.addEventListener("resize", onWindowResize);
  window.addEventListener("click", myFunction);
}
function myFunction() {
  // t = 1;
  // r = 0.01;
  // inAngle = 0;
  console.log(inAngle);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);
  const delta = clock.getDelta();

  render();
  if (mixer) mixer.update(delta);
}

function render() {
  const time = Date.now() * 0.005;

  if (t < 0.01) {
    sphere.rotation.y += 0.002;

    sphere.rotation.z += 0.002;
  } else {
    sphere.rotation.y = 0.7;
    sphere.rotation.z = 0.3;
  }
  //

  const geometry = sphere.geometry;
  const attributes = geometry.attributes;

  for (let i = 0; i < attributes.size.array.length; i++) {
    attributes.size.array[i] = 10;
  }

  for (let i = 0; i < attributes.size.array.length; i++) {
    attributes.size.array[i] =
      16 * (1 - t) +
      (1 - t / 2) *
        6 *
        (Math.sin(0.01 * i + time) + Math.cos(0.01 * i + time / 2));
  }
  const object = scene.children[0];
  if (loaded) {
    t = t * 0.998;
    if (t < 0.25) {
      t = t * 0.995;
    }
    if (t < 0.1) {
      t = t * 0.98;
      document.getElementById("showAfter").style.display = "flex";
    }
    inAngle = inAngle + 0.01;

    if (r < 1) {
      r = r + 0.001;
    }
  }
  if (loaded) {
    var speedR = 11;
    if (inAngle > 6 && inAngle < 9) {
      astronutAngle += 0.01;
    }
    if (inAngle > 8) {
      speedR = 6;
      astronutModel.rotation.z = inAngle / 3;
      astronutModel.rotation.x = inAngle / 10;
    } else {
      astronutModel.rotation.z = -1.1;
      astronutModel.rotation.x = 0;
    }
    astronutModel.position.z =
      0 +
      (270 + 0) * (Math.cos(-0.33 + (inAngle + astronutAngle) / speedR) + 0.0);
    astronutModel.position.x =
      (270 + 0) * Math.sin(-0.33 + (inAngle + astronutAngle) / speedR);

    astronutModel.rotation.y = inAngle / speedR - 0.3;
  }
  object.material.uniforms["time"].value = t;
  object.material.uniforms["angle"].value = inAngle;
  object.material.uniforms["ratio"].value = r;
  attributes.size.needsUpdate = true;

  renderer.render(scene, camera);
}

function fbx() {
  const loader = new FBXLoader();
  loader.load("/website/astroChen.fbx", function (object) {
    mixer = new THREE.AnimationMixer(object);

    const action = mixer.clipAction(object.animations[0]);

    fbxAction = action;
    astronutModel = object;
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
