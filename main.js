Status = "";
object_name = "";

function setup(){
    canvas = createCanvas(380, 380);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    object_name = document.getElementById("input");
}

function modelLoaded(){
    console.log("Cococssd is Initialized");
    console.log(object_name);
    Status = true;
}

function draw(){
    image(video, 0, 0, 380, 380);
}