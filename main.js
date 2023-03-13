function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
    image(video, 230, 200, 220, 200,);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 50, 80);
    circle(530, 420, 80);
    circle(530, 50, 80);
    circle(50, 420, 80)
    fill(0, 150, 70);
    stroke(0, 150, 70);
    rect(90, 40, 400, 20);
    rect(90, 420, 400, 20);
    rect(50, 70, 20, 310)
    rect(521, 70, 20, 310)
    tint(tint_color);
}

function take_snapshot() {
    save('student_name.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}
