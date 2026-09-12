"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const colors = {
  ink: 0x23272c,
  blue: 0x2c6e9f,
  cyan: 0x56c7c1,
  amber: 0xf5bd59,
  coral: 0xe77e65,
  paper: 0xfffefa,
  wood: 0xa96d4f,
  screen: 0x173a48,
};

function material(color: number, roughness = 0.82) {
  return new THREE.MeshStandardMaterial({ color, roughness, metalness: 0.04 });
}

function cube(
  geometry: THREE.BufferGeometry,
  materialValue: THREE.Material,
  position: [number, number, number],
  scale: [number, number, number],
) {
  const mesh = new THREE.Mesh(geometry, materialValue);
  mesh.position.set(...position);
  mesh.scale.set(...scale);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

function createWorkbench() {
  const group = new THREE.Group();
  const box = new THREE.BoxGeometry(1, 1, 1);
  const plane = new THREE.PlaneGeometry(1, 1);
  const wood = material(colors.wood);
  const darkWood = material(0x764a3a);
  const screenFrame = material(colors.ink);
  const screen = material(colors.screen, 0.35);
  const blue = material(colors.blue);
  const cyan = material(colors.cyan);
  const amber = material(colors.amber);
  const coral = material(colors.coral);
  const paper = material(colors.paper);

  // Desk top and legs
  group.add(cube(box, wood, [0, 0.12, 0], [4.7, 0.23, 2.45]));
  for (const x of [-1.92, 1.92]) {
    for (const z of [-0.88, 0.88]) {
      group.add(cube(box, darkWood, [x, -1.08, z], [0.18, 2.25, 0.18]));
    }
  }

  // Main monitor and stand
  group.add(cube(box, screenFrame, [0.22, 1.5, -0.56], [2.04, 1.4, 0.16]));
  const monitorGlow = cube(plane, screen, [0.22, 1.5, -0.47], [1.78, 1.13, 1]);
  group.add(monitorGlow);
  const scanPanel = cube(plane, cyan, [-0.22, 1.5, -0.455], [0.7, 0.82, 1]);
  group.add(scanPanel);
  const scanDetail = cube(plane, paper, [-0.22, 1.5, -0.447], [0.42, 0.48, 1]);
  group.add(scanDetail);
  group.add(cube(box, screenFrame, [0.22, 0.67, -0.54], [0.18, 0.82, 0.18]));
  group.add(cube(box, screenFrame, [0.22, 0.31, -0.54], [0.95, 0.12, 0.56]));

  // Laptop arranged at an angle
  const laptop = new THREE.Group();
  laptop.position.set(-1.36, 0.4, 0.42);
  laptop.rotation.y = 0.34;
  laptop.rotation.x = -0.12;
  laptop.add(cube(box, screenFrame, [0, 0.56, -0.1], [1.28, 0.92, 0.08]));
  laptop.add(cube(plane, blue, [0, 0.56, -0.052], [1.08, 0.72, 1]));
  laptop.add(cube(box, screenFrame, [0, 0.04, 0.39], [1.42, 0.08, 1.04]));
  laptop.add(cube(box, paper, [0, 0.09, 0.33], [1.16, 0.03, 0.72]));
  group.add(laptop);

  // Keyboard, notes and a miniature model/data block
  const keyboard = cube(box, material(0xe7ded1), [0.97, 0.3, 0.5], [1.2, 0.07, 0.58]);
  keyboard.rotation.y = -0.18;
  group.add(keyboard);
  const book = cube(box, coral, [1.35, 0.37, -0.74], [0.77, 0.15, 0.54]);
  book.rotation.y = 0.16;
  group.add(book);
  const note = cube(box, amber, [-0.78, 0.35, -0.92], [0.72, 0.07, 0.56]);
  note.rotation.y = -0.25;
  group.add(note);
  const dataBlock = cube(box, cyan, [1.55, 0.52, 0.9], [0.48, 0.45, 0.48]);
  dataBlock.rotation.y = 0.22;
  group.add(dataBlock);
  group.add(cube(box, paper, [1.55, 0.78, 0.9], [0.35, 0.1, 0.35]));

  // A few deliberately simple geometric "AI nodes" above the workspace.
  const nodeGeometry = new THREE.IcosahedronGeometry(0.18, 0);
  for (const [x, y, z, nodeMaterial] of [
    [-1.9, 1.92, -0.05, amber],
    [1.92, 1.82, 0.28, coral],
    [0.82, 2.28, 0.55, cyan],
  ] as const) {
    const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
    node.position.set(x, y, z);
    node.castShadow = true;
    group.add(node);
  }

  group.rotation.x = -0.13;
  group.rotation.y = -0.58;
  group.scale.setScalar(0.74);
  group.position.y = 0.18;
  return group;
}

export function RotatingWorkbench() {
  const canvasHostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = canvasHostRef.current;
    if (!host) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    } catch {
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    host.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
    camera.position.set(5.8, 4.1, 7.7);
    const workbench = createWorkbench();
    scene.add(workbench);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.minDistance = 7;
    controls.maxDistance = 12;
    controls.target.set(0, 0.1, 0);

    const ambient = new THREE.HemisphereLight(0xfff9ed, 0x6d8390, 2.6);
    scene.add(ambient);
    const keyLight = new THREE.DirectionalLight(0xffffff, 3.4);
    keyLight.position.set(4, 7, 6);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.set(1024, 1024);
    scene.add(keyLight);
    const fillLight = new THREE.PointLight(0x72b5e4, 18, 12);
    fillLight.position.set(-4, 2, 3);
    scene.add(fillLight);

    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(15, 15),
      new THREE.ShadowMaterial({ color: 0x7896aa, opacity: 0.16 }),
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -2.22;
    ground.receiveShadow = true;
    scene.add(ground);

    const render = () => {
      const { width, height } = host.getBoundingClientRect();
      if (!width || !height) return;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      camera.lookAt(0, 0.15, 0);
      renderer.render(scene, camera);
    };

    const resizeObserver = new ResizeObserver(render);
    resizeObserver.observe(host);
    render();

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    controls.autoRotate = !reducedMotion;
    controls.autoRotateSpeed = 0.9;
    let animationFrame = 0;
    const animate = (time: number) => {
      workbench.rotation.z = Math.sin(time / 2400) * 0.025;
      controls.update();
      render();
      animationFrame = requestAnimationFrame(animate);
    };
    if (!reducedMotion) animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      controls.dispose();
      renderer.dispose();
      renderer.domElement.remove();
      boxDispose(scene);
    };
  }, []);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[29rem]" aria-label="缓慢旋转的原创 AI 工作台 3D 场景">
      <div className="absolute inset-[7%] rotate-[-7deg] rounded-[48%_52%_54%_46%/44%_43%_57%_56%] bg-[#d8ebf6]" />
      <div ref={canvasHostRef} className="absolute inset-[5%]" aria-hidden="true" />
      <div className="pointer-events-none absolute left-[4%] top-[19%] h-[15%] w-[15%] rounded-[57%_43%_41%_59%/50%_48%_52%_50%] bg-[#f6c56b]" />
      <div className="pointer-events-none absolute right-[6%] top-[10%] h-[11%] w-[11%] rounded-full bg-[#b2a8e1]" />
    </div>
  );
}

function boxDispose(object: THREE.Object3D) {
  object.traverse((child) => {
    if (!(child instanceof THREE.Mesh)) return;
    child.geometry.dispose();
    const materials = Array.isArray(child.material) ? child.material : [child.material];
    materials.forEach((value) => value.dispose());
  });
}
