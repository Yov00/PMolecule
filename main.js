window.addEventListener('DOMContentLoaded',function(){
    const canvas = document.getElementById('canvas');
    const engine = new BABYLON.Engine(canvas,true);

    const createScene = ()=>{
        const scene = new BABYLON.Scene(engine);
        scene.clearColor = new BABYLON.Color3.White();
        const box = BABYLON.Mesh.CreateBox('box',4.0,scene);
        const camera = new BABYLON.ArcRotateCamera('arcCamera',
          BABYLON.Tools.ToRadians(45),
          BABYLON.Tools.ToRadians(45),
          10.0,box.position,scene
        );
        // Долната камера е за свободен ход
        // const camera = new BABYLON.ArcRotateCamera('camera1',
        //     new BABYLON.Vector3(0,0,-10,scene)
        // );
        
        
        camera.setTarget(BABYLON.Vector3.Zero());
        camera.attachControl(canvas,true);

        camera.keysUp.push(87);
        camera.keysDown.push(83);
        camera.keysLeft.push(65);
        camera.keysRight.push(68);

       
        
        return scene;
    }

    const scene = createScene();

    // MAIN LOOP
    engine.runRenderLoop(()=>{
        scene.render();
        
    });
});