
var i = 0;

function changeImage() {

    var imgs = ["./images/shoppe.png", "./images/charles.png", "./images/cv19.jpg"];
    document.getElementById('sliders').src = imgs[i];
    i++;
    if (i == 3) {
        i = 0;
    }

}
setInterval(changeImage, 1000);