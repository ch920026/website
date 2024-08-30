function obj() {
    function loadModel() {
      object.traverse(function (child) {
        if (child.isMesh) child.material.map = texture;
      });
  
      object.position.y = -3.5;
      object.position.x = 20;
      // object.rotation.y = -1;
      object.scale.setScalar(0.012);
      scene.add(object);
  
      render();
    }
  
    const manager = new THREE.LoadingManager(loadModel);
  
    // texture
  
    const textureLoader = new THREE.TextureLoader(manager);
    const texture = textureLoader.load("/head.png", animate);
    texture.colorSpace = THREE.SRGBColorSpace;
  
    // model
  
    function onProgress(xhr) {
      if (xhr.lengthComputable) {
        const percentComplete = (xhr.loaded / xhr.total) * 100;
        console.log("model " + percentComplete.toFixed(2) + "% downloaded");
      }
    }
  
    function onError() {}
  
    const loader = new OBJLoader(manager);
    loader.load(
      "/astro.obj",
      function (obj) {
        object = obj;
        // loaded = true;
      },
      onProgress,
      onError
    );
  
    //
  
    window.addEventListener("resize", onWindowResize);
  }