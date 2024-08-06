import * as THREE from "three";

import { useEffect, useRef } from "react";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const Three = () => {
  const refContainer = useRef(null);

  useEffect(() => {
    // sizes

    const size = {
      height: window.innerHeight,
      width: window.innerWidth,
    };

    // === THREE.JS CODE START ===
    const scene = new THREE.Scene();

    //render
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(size.width, size.height);
    renderer.setPixelRatio(window.devicePixelRatio);
    refContainer.current &&
      refContainer.current.appendChild(renderer.domElement);
    renderer.setClearColor(new THREE.Color(0xe1e1ea));

    //shape
    // const geometry = new THREE.SphereGeometry(3, 64, 64);
    // const material = new THREE.MeshStandardMaterial({ color: "#00ff83" });
    // const sphere = new THREE.Mesh(geometry, material);
    // scene.add(sphere);

    // light
    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(10, 0, 25);
    scene.add(light);

    // Ambient Light (optional, for better overall lighting)
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);

    //DirectionalLight
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.4);
    scene.add(directionalLight);

    //DirectionalLightHelper
    const directionalLightHelper = new THREE.DirectionalLightHelper(
      directionalLight,
      5
    );
    scene.add(directionalLightHelper);

    // camera
    const camera = new THREE.PerspectiveCamera(
      75,
      size.width / size.height,
      0.1,
      1000
    );
    camera.position.z = 355;
    scene.add(camera);

    // controls

    // eslint-disable-next-line no-unused-vars
    const controls = new OrbitControls(camera, renderer.domElement);

    // Handle window resize
    window.addEventListener("resize", () => {
      size.width = window.innerWidth;
      size.height = window.innerHeight;
      camera.aspect = size.width / size.height;
      camera.updateProjectionMatrix();
      renderer.setSize(size.width, size.height);
    });

    // Load a glf

    const loader = new GLTFLoader();

    // Load a glTF resource
    loader.load(
      // resource URL
      "/3Dcharacters/character.gltf",
      // called when the resource is loaded
      function (gltf) {
        scene.add(gltf.scene);

        gltf.animations; // Array<THREE.AnimationClip>
        gltf.scene; // THREE.Group
        gltf.scenes; // Array<THREE.Group>
        gltf.cameras; // Array<THREE.Camera>
        gltf.asset; // Object
      },
      // called while loading is progressing
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      // called when loading has errors
      // eslint-disable-next-line no-unused-vars
      function (error) {
        console.log("An error happened");
      }
    );

    var animate = function () {
      requestAnimationFrame(animate);
      //   sphere.rotation.x += 0.01;
      //   sphere.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();
  }, []);

  return (
    <div ref={refContainer} className=" overflow-hidden px-[3rem] h-[70vh] w-[95vw] pt-[8rem]">
      <h1 className=" text-[2rem]">Some 3D Models</h1>
    </div>
  );
};

export default Three;
