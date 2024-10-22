// import necessary modules
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as THREE from 'three';

// create a scene
const scene = new THREE.Scene();

// create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 0, 5);



// set up renderer
const canvas = document.querySelector('canvas');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, roundPixels: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1;
renderer.outputEncoding = THREE.sRGBEncoding;


// add a directional light
const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
directionalLight.position.set(1, -1, 0);
scene.add(directionalLight);

// add a point light
const pointLight = new THREE.PointLight(0xffffff, 3);
pointLight.position.set(1, 1, 2);
scene.add(pointLight);

// add a ambient light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// add a hemisphere light
const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x080808, 3);
scene.add(hemisphereLight);


// create a spot light
const spotLight = new THREE.SpotLight(0xffffff, 3);
spotLight.position.set(1, 3, 2);
scene.add(spotLight);




// Orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

// Add HDRI lighting
const hdriLoader = new RGBELoader();
hdriLoader.load('./zwartkops_pit_1k.exr', function (texture) {
  texture.mapping = THREE.EquirectangularReflectionMapping;
  scene.background = texture;
  scene.environment = texture;
});

// Load a GLTF model
const loader = new GLTFLoader();
 loader.load('./wooden_box.glb', function (gltf) {
  gltf.scene.position.y = -1;
  scene.add(gltf.scene);
});






// Handle window resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

    



// Animate the scene
function animate() {
  requestAnimationFrame(animate);
 
  controls.update();
  renderer.render(scene, camera);
}
animate();
