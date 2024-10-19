import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 50);

const geometry = new THREE.SphereGeometry(15, 20, 10);
// (radius, widthSegments, heightSegments)
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });

const sphere = new THREE.Mesh(geometry, material);

scene.add(sphere);

const canvas = document.getElementById('canvas');

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});


const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;




function animate() {
  renderer.setAnimationLoop(animate);
	renderer.render(scene, camera);
  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.01;
	controls.update();
}

animate();