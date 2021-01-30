nose_x = 0;
nose_y = 0;

function preload(){

   clown_image = loadImage("https://i.postimg.cc/zBQSzXC0/clownnose.png");
}


function setup(){

    canvas=createCanvas(400,400);
    canvas.position(223,321);
    video = createCapture(VIDEO);
    video.hide();
    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);
}
function gotposes(results){

    if(results.length>0){

        console.log(results);
        console.log("nose x= "+results[0].pose.nose.x);
        console.log("nose y= "+results[0].pose.nose.y);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
    }
}

function modelLoaded(){

    console.log("modelLoaded");
}

function draw(){

    image(video,10,10,380,380);
    //circle(nose_x, nose_y,20);
    image(clown_image, 300, 300, 30, 30);
}

function take_snapshot(){

    save('download.png');
}

