import * as THREE from 'three';

const scene = new THREE.Scene();
const sizes = {
    width: window.innerWidth, height: window.innerHeight,
}

// LIGHTS
const ambient = new THREE.AmbientLight(0xffffff, 0.3);
scene.add(ambient);

// Sun
const sun = new THREE.DirectionalLight(0xffffff, 1.1);
sun.position.set(5, 10, 3);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
scene.add(sun);

// Floor
const floorGeo = new THREE.PlaneGeometry(200, 200);
const floorMat = new THREE.MeshStandardMaterial({
    color: 0x808080, roughness: 1, metalness: 0,
});
const floor = new THREE.Mesh(floorGeo, floorMat);
floor.rotation.x = -Math.PI / 2;   // lay it flat
floor.position.y = 0;
floor.receiveShadow = true;        // catches shadows
scene.add(floor);

// Cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color: 0xff0000});
const cube = new THREE.Mesh(geometry, material)
cube.castShadow = true;
cube.position.y = 1
scene.add(cube);

// Camera
const camera = new THREE.PerspectiveCamera(70, innerWidth / innerHeight, 0.1, 1000);
camera.position.set(6, 6, 10);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer();
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);


function animate() {
    cube.rotation.X += 0.01;
    cube.rotation.y += 0.01;
    cube.rotation.z += 0.01;

    renderer.render(scene, camera);
}

addEventListener('resize', () => {
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
});
