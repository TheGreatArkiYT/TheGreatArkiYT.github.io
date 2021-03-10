song = ""; 

leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preLoad() {
    song = loadSound("Music.mp3");
}

function setup()  {
    canvas = createCanvas(600 , 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video ,   modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function modelLoaded() {
    console.log("PoseNet Is Working!");
}

function gotPoses() {
    if(results.length > 0)  {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("Left Wrist X = " + leftWristX + ", left wrist y = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("right Wrist X = " + rightWristX + ", right wrist y = " + rightWristY);
    }
}

 function draw() {
     image(video , 0 , 0 , 600 , 500);
 }

function playsound() {
    song.play();
    song.setVolume(1);
    song.rate(1);

}