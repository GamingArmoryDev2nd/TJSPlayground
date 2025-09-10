import * as THREE from 'three';

const scene = new THREE.Scene();
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color: 0xff0000});
const cube = new THREE.Mesh(geometry, material)
const plane = new THREE.PlaneGeometry(1, 1)
const planeMat = new THREE.MeshBasicMaterial({color: 0x0000ff});
const floor = new THREE.Mesh(plane, planeMat)
const sizes = {
    window: 800, height: 600,
}

cube.position.y = 2
scene.add(cube);
scene.add(floor);
const camera = new THREE.PerspectiveCamera(80, sizes.width / sizes.height, 1, 200);
camera.position.z = 3
camera.position.y = 1

const renderer = new THREE.WebGLRenderer();
renderer.setAnimationLoop(animate);

document.body.appendChild(renderer.domElement);

renderer.setSize(sizes.width, sizes.height);


renderer.render(scene, camera);


function animate() {
    cube.rotation.X += 0.01;
    cube.rotation.y += 0.01;
    cube.rotation.z += 0.01;
    floor.rotation.z += 0.01;

    renderer.render(scene, camera);
}
