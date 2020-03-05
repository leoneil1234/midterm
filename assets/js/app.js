//let them
let scene, camera, renderer, controls; //camera
let ambientLight, directionalLight, pointLight; //lighting


// Scene and Camera ================================================================
scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = -200; //NEAR-FAR
camera.position.y = 50;


// Geometries ====================================================================
let bigFloor = new THREE.Mesh(new THREE.BoxBufferGeometry(1500, 0.5, 1500), new THREE.MeshPhongMaterial({color:0xff0000}));
bigFloor.receiveShadow = true;
bigFloor.castShadow = true;
scene.add(bigFloor);

// Renderer ====================================================================
renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.BasicShadowMap;

//background
let skyMaterialArray = [];
  for (var i = 0; i < 6; i++)
   skyMaterialArray.push( new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('assets/textures/sky.png'),
    side: THREE.BackSide
   }));
   let skyGeometry = new THREE.CubeGeometry( 950,900, 1000 );
   let skyMaterial = new THREE.MeshFaceMaterial( skyMaterialArray );
   let skyBox = new THREE.Mesh(skyGeometry, skyMaterial);
   scene.add(skyBox);


//Lightings ====================================================================
ambientLight = new THREE.AmbientLight(0xFFEF33, 0.6); //brightness
scene.add(ambientLight);

directionalLight = new THREE.DirectionalLight( 0xff0000, 1.3);
directionalLight.position.set(0,2,10);
directionalLight.castShadow = true;
scene.add(directionalLight);

pointLight = new THREE.PointLight(0xffffff, 0.4); // like a SUN
pointLight.position.set(0,12,10);
pointLight.castShadow = true;
scene.add(pointLight);

//music
var listener = new THREE.AudioListener();
camera.add( listener );

// create an Audio source
var sound = new THREE.Audio( listener );

// load a sound and set it as the Audio object's buffer
var audioLoader = new THREE.AudioLoader();
audioLoader.load( 'assets/textures/onepiece.mp3', function( buffer ) {
	sound.setBuffer( buffer );
	sound.setLoop(true);
	sound.setVolume(0.5);
	sound.play();
});


//models
var loader = new THREE.GLTFLoader();

loader.load( 'assets/textures/balloons/scene.gltf', function ( gltf ) {

  scene.add( gltf.scene );
  
  bear = gltf.scene;
  gltf.scene.scale.set(10,15,18);
  camera.lookAt( bear );

  bear.position.y=100;
  bear.position.x=100;

  var x = false;
    var y = false;
    var z = false;

    //variables for the increasing speed of the cube whenever it hits the imaginary walls
    var x1spd = 0.1;
    var x2spd = 0.1;
    var x3spd = 0.1;
    var x4spd = 0.1;

    function animate() {

        if(x==false){
            bear.position.x += x1spd;
         }
      
         //else statement will run together with else of y
         else{
            x==true;
            bear.position.x -= x2spd;
         }
      
         //if statement for the y axis. will run together with the if(x==false)
         if(y==false){
            bear.position.y += x3spd;
         }
      
         //else statement will run together with else of x
         else{
            y==true;
            bear.position.y -= x4spd;
         }

         if(z==false){
             bear.position.z += x3spd;
         }

         else{
             z==true;
             bear.position.z -= x4spd;
         }
      
         //peseks
         if(bear.position.x > 80){
            x=true;
         }
      
         else if(bear.position.x < -80){
            x=false;
         }
      
         if(bear.position.y > 50){
            y=true;
         }
      
         else if(bear.position.y < 30){
            y=false;
         }

         if(bear.position.z > 100){
             z=true;
         }

         else if (bear.position.z < 90){
             z=false;
         }

  

       

        

          
        
        controls.update();
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }
    animate();

}, undefined, function ( error ) {

	console.error( error );

} );

var loader = new THREE.GLTFLoader();

loader.load( 'assets/textures/hotairballoon/scene.gltf', function ( gltf ) {
  scene.add( gltf.scene );
  camera.lookAt( gltf.scene.position );
  hab = gltf.scene;
  gltf.scene.scale.set(200,160,160);

}, undefined, function ( error ) {

	console.error( error );

} );

var loader = new THREE.GLTFLoader();

loader.load( 'assets/textures/mountain1/scene.gltf', function ( gltf ) {
  scene.add( gltf.scene );
  camera.lookAt( gltf.scene.position );
  mount1 = gltf.scene;
  gltf.scene.scale.set(50,50,50);
  mount1.position.x=-220;
  mount1.position.y=0;
  mount1.position.z=150;
  mount1.rotation.y=-80;

}, undefined, function ( error ) {

	console.error( error );

} );

var loader = new THREE.GLTFLoader();

loader.load( 'assets/textures/ship/scene.gltf', function ( gltf ) {
  scene.add( gltf.scene );
  camera.lookAt( gltf.scene.position );
  ship = gltf.scene;
  gltf.scene.scale.set(50,50,50);
  ship.position.x=270;
  ship.position.y=0;
  ship.position.z=150;
  //ship.rotation.y=80;
  

}, undefined, function ( error ) {

	console.error( error );

} );










var loader = new THREE.GLTFLoader();

loader.load( 'assets/textures/ufo/scene.gltf', function ( gltf ) {

  scene.add( gltf.scene );
  
  ufo = gltf.scene;
  gltf.scene.scale.set(10,10,20);

  ufo.position.x=200;
  ufo.position.y=350;
 
  var x = false;
     var y = false;
     var z = false;
 
     //variables for the increasing speed of the cube whenever it hits the imaginary walls
     var x1spd = 3;
     var x2spd = 3;
     var x3spd = 3;
     var x4spd = 3;
 
     function animate() {
 
         if(x==false){
          ufo.position.x += x1spd;
          }
       
          //else statement will run together with else of y
          else{
             x==true;
             ufo.position.x -= x2spd;
             ufo.rotation.x=10;
          }
       
          //if statement for the y axis. will run together with the if(x==false)
          if(y==false){
            ufo.position.y += x3spd;
          }
       
          //else statement will run together with else of x
          else{
             y==true;
             ufo.position.y -= x4spd;
          }
 
          if(z==false){
            ufo.position.z += x3spd;
          }
 
          else{
              z==true;
              ufo.position.z -= x4spd;
          }
       
          //peseks
          if(ufo.position.x > 200){
             x=true;
          }
       
          else if(ufo.position.x < -200){
             x=false;
          }
       
          if(ufo.position.y > 400){
             y=true;
          }
       
          else if(ufo.position.y < 10){
             y=false;
          }
 
          if(ufo.position.z > 400){
              z=true;
          }
 
          else if (ufo.position.z < -400){
              z=false;
          }
          controls.update();
          requestAnimationFrame(animate);
          renderer.render(scene, camera);
      }
      animate();


}, undefined, function ( error ) {

	console.error( error );

} );


var loader = new THREE.GLTFLoader();

loader.load( 'assets/textures/ufo/scene.gltf', function ( gltf ) {

  scene.add( gltf.scene );
  
  ufo1 = gltf.scene;
  gltf.scene.scale.set(10,10,20);

  ufo1.position.x=-200;
  ufo1.position.y=500;
 
  var x = false;
     var y = false;
     var z = false;
 
     //variables for the increasing speed of the cube whenever it hits the imaginary walls
     var x1spd = 3;
     var x2spd = 3;
     var x3spd = 3;
     var x4spd = 3;
 
     function animate() {
 
         if(x==false){
          ufo1.position.x += x1spd;
          }
       
          //else statement will run together with else of y
          else{
             x==true;
             ufo1.position.x -= x2spd;
             ufo1.rotation.x=10;
          }
       
          //if statement for the y axis. will run together with the if(x==false)
          if(y==false){
            ufo1.position.y += x3spd;
          }
       
          //else statement will run together with else of x
          else{
             y==true;
             ufo1.position.y -= x4spd;
          }
 
          if(z==false){
            ufo1.position.z += x3spd;
          }
 
          else{
              z==true;
              ufo1.position.z -= x4spd;
          }
       
          //peseks
          if(ufo1.position.x > 150){
             x=true;
          }
       
          else if(ufo1.position.x < -150){
             x=false;
          }
       
          if(ufo1.position.y > 300){
             y=true;
          }
       
          else if(ufo1.position.y < 10){
             y=false;
          }
 
          if(ufo1.position.z > 300){
              z=true;
          }
 
          else if (ufo1.position.z < -300){
              z=false;
          }
          controls.update();
          requestAnimationFrame(animate);
          renderer.render(scene, camera);
      }
      animate();


}, undefined, function ( error ) {

	console.error( error );

} );

var loader = new THREE.GLTFLoader();

loader.load( 'assets/textures/statue/scene.gltf', function ( gltf ) {

  scene.add( gltf.scene );
  
  statue = gltf.scene;
 gltf.scene.scale.set(50,45, 35);


}, undefined, function ( error ) {

	console.error( error );

} );

var loader = new THREE.GLTFLoader();

loader.load( 'assets/textures/plane1/scene.gltf', function ( gltf ) {

  scene.add( gltf.scene );
  
  plane1 = gltf.scene;
 gltf.scene.scale.set(5,3, 6);

 var x = false;
    var y = false;
    var z = false;

    //variables for the increasing speed of the cube whenever it hits the imaginary walls
    var x1spd = 1;
    var x2spd = 1;
    var x3spd = 1;
    var x4spd = 1;

    function animate() {

        if(x==false){
          plane1.position.x += x1spd;
          plane1.rotation.x=20;
         }
      
         //else statement will run together with else of y
         else{
            x==true;
            plane1.position.x -= x2spd;
            plane1.rotation.x=10;
         }
      
         //if statement for the y axis. will run together with the if(x==false)
         if(y==false){
          plane1.position.y += x3spd;
          plane1.rotation.x=20;
         }
      
         //else statement will run together with else of x
         else{
            y==true;
            plane1.position.y -= x4spd;
            plane1.rotation.x=20;
         }

         if(z==false){
          plane1.position.z += x3spd;
      
         }

         else{
             z==true;
             plane1.position.z -= x4spd;
        
         }
      
         //peseks
         if(plane1.position.x > 400){
            x=true;
         }
      
         else if(plane1.position.x < 100){
            x=false;
         }
      
         if(plane1.position.y > 400){
            y=true;
         }
      
         else if(plane1.position.y < 10){
            y=false;
         }

         if(plane1.position.z > 400){
             z=true;
         }

         else if (plane1.position.z < 400){
             z=false;
         }
         controls.update();
         requestAnimationFrame(animate);
         renderer.render(scene, camera);
     }
     animate();


}, undefined, function ( error ) {

	console.error( error );

} );


var loader = new THREE.GLTFLoader();

loader.load( 'assets/textures/blimp/scene.gltf', function ( gltf ) {

  scene.add( gltf.scene );
  
  blimp = gltf.scene;
gltf.scene.scale.set(10,10, 5);


var x = false;
    var y = false;
    var z = false;

    //variables for the increasing speed of the cube whenever it hits the imaginary walls
    var x1spd = 10;
    var x2spd = 10;
    var x3spd = 10;
    var x4spd = 10;

    function animate() {

        if(x==false){
          blimp.position.x += x1spd;
         
         }
      
         //else statement will run together with else of y
         else{
            x==true;
            blimp.position.x -= x2spd;
            
         }
      
         //if statement for the y axis. will run together with the if(x==false)
         if(y==false){
          blimp.position.y += x3spd;
          
         }
      
         //else statement will run together with else of x
         else{
            y==true;
            blimp.position.y -= x4spd;
           
         }

         if(z==false){
          blimp.position.z += x3spd;
      
         }

         else{
             z==true;
             blimp.position.z -= x4spd;
        
         }
      
         //peseks
         if(blimp.position.x > 400){
            x=true;
         }
      
         else if(blimp.position.x < -400){
            x=false;
         }
      
         if(blimp.position.y > 400){
            y=true;
         }
      
         else if(blimp.position.y < 10){
            y=false;
         }

         if(blimp.position.z > 400){
             z=true;
         }

         else if (blimp.position.z < 400){
             z=false;
         }
         controls.update();
         requestAnimationFrame(animate);
         renderer.render(scene, camera);
     }
     animate();


}, undefined, function ( error ) {

	console.error( error );

} );

var loader = new THREE.GLTFLoader();

loader.load( 'assets/textures/ring/scene.gltf', function ( gltf ) {

  scene.add( gltf.scene );
  
  ring1 = gltf.scene;
 gltf.scene.scale.set(3,10, 10);


}, undefined, function ( error ) {

	console.error( error );

} );

var loader = new THREE.GLTFLoader();

loader.load( 'assets/textures/ring/scene.gltf', function ( gltf ) {

  scene.add( gltf.scene );
  
  ring2 = gltf.scene;
 gltf.scene.scale.set(3,10, 10);


}, undefined, function ( error ) {

	console.error( error );

} );






controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.target.set(0, 5, 0);
function animate() {
    controls.update();
    requestAnimationFrame(animate);




   hab.position.y += 0.02;
   hab.position.z = 200;
   hab.position.x = -100;



   statue.position.y = 50;



   blimp.position.z = -200;
   blimp.rotation.y = 80;
   blimp.position.y = 150;

   ring1.position.y = 170;
   ring1.rotation.z = 54.5;
   ring1.rotation.y += 0.01;

   ring2.position.y = 170;
   ring2.rotation.z = 58.5;
   ring2.rotation.y += 0.01;
   
  
   
    renderer.render(scene, camera);
}
animate();
