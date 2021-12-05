status="";
function preload(){}
function setup(){
    canvas= createCanvas(400,375);
    canvas.position(485,275);
    video= createCapture(VIDEO);
    video.hide();
}
function start(){
    objectDetector= ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status_detection").innerHTML= "Status: Detecting Objects";
    find_object=document.getElementById("object_found").value;
}
function modelLoaded(){
    console.log("Model Loaded");
    status=true;
}
function draw(){
    image(video,0,0,400,375);
}