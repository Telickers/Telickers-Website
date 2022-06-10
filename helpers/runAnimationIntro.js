import * as THREE from "three";
import gsap from "gsap";

export default function runAnimationIntro() {
  let renderer, scene, camera;
  let width, height, cx, cy, wWidth, wHeight;
  let objects = [];
  let nx, ny;

  const TMath = THREE.MathUtils;

  let parameters = {
    color: 0xffffff,
    objectWidth: 12,
    objectThickness: 3,
    ambientColor: 0x808080,
    light1Color: 0xffffff,
    shadow: false,
    perspective: 75,
    cameraZ: 75,
  };

  // Renderer
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  document.body.appendChild(renderer.domElement);

  // Camera
  camera = new THREE.PerspectiveCamera(
    parameters.perspective,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = parameters.cameraZ;

  // Scene
  scene = new THREE.Scene();

  animate();

  window.addEventListener("resize", () => onResize());

  function initLights() {
    scene.add(new THREE.AmbientLight(parameters.ambientColor));
    let light = new THREE.PointLight(0xffffff);
    light.position.z = 100;
    scene.add(light);
  }

  function initObjects() {
    let mesh, x, y;

    nx = Math.round(wWidth / parameters.objectWidth) + 1;
    ny = Math.round(wHeight / parameters.objectWidth) + 1;

    // Box geometry
    const geometry = new THREE.BoxGeometry(
      parameters.objectWidth,
      parameters.objectWidth,
      parameters.objectThickness
    );
    // Box material
    const material = new THREE.MeshLambertMaterial({
      color: parameters.color,
      transparent: true,
      opacity: 1,
    });

    for (let i = 0; i < nx; i++)
      for (let j = 0; j < ny; j++) {
        mesh = new THREE.Mesh(geometry, material);
        x = -wWidth / 2 + i * parameters.objectWidth;
        y = -wHeight / 2 + j * parameters.objectWidth;
        mesh.position.set(x, y, 0);
        objects.push(mesh);
        scene.add(mesh);
      }
    document.body.classList.add("loaded");
    startAnim();
  }

  function startAnim() {
    objects.forEach((mesh) => {
      mesh.rotation.set(0, 0, 0);
      mesh.material.opacity = 1;
      mesh.position.z = 0;
      let delay = TMath.randFloat(1, 2);
      let rx = TMath.randFloatSpread(2 * Math.PI);
      let ry = TMath.randFloatSpread(2 * Math.PI);
      let rz = TMath.randFloatSpread(2 * Math.PI);
      gsap.to(mesh.rotation, {
        x: rx,
        y: ry,
        z: rz,
        delay: delay,
        duration: 2,
      });
      gsap.to(mesh.position, {
        z: 80,
        delay: delay + 0.5,
        duration: 2,
      });
      gsap.to(mesh.material, {
        opacity: 0,
        delay: delay + 0.5,
        duration: 2,
      });
    });
    setTimeout(() => {
      document.body.classList.add("revealed");
    }, 4000);
  }

  function onResize() {
    width = window.innerWidth;
    cx = width / 2;
    height = window.innerHeight;
    cy = height / 2;

    // update camera
    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    // update renderer
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const size = getRendererSize();
    wWidth = size[0];
    wHeight = size[1];
  }

  function getRendererSize() {
    const cam = new THREE.PerspectiveCamera(
      parameters.perspective,
      camera.aspect
    );
    const vFOV = (cam.fov * Math.PI) / 180;
    const height = 2 * Math.tan(vFOV / 2) * Math.abs(parameters.cameraZ);
    const width = height * cam.aspect;
    return [width, height];
  }

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }

  onResize();
  initLights();
  initObjects();
}
