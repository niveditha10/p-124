
  function setup() {
  video = createCapture(VIDEO);
  video.size(500,300);
  video.position(100,150)

  canvas = createCanvas(500,430);
  canvas.position(700,110);

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized!');
}


function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);

  }
}

function draw() {
background('#6C91C2');

  
}