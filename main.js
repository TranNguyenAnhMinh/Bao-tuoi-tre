
var i = 0;

function changeImage() {

    var imgs = ["./images/shoppe.png", "./images/qclzd2.png", "./images/devc.jpg"];
    document.getElementById('sliders').src = imgs[i];
    i++;
    if (i == 3) {
        i = 0;
    }
}
setInterval(changeImage, 500);

document.querySelector(".close").addEventListener
("click", function(){
document.querySelector(".pop-up").style.display="none";
});


window.addEventListener("load", function(){
    this.setTimeout(
        function open(evnet){
            document.querySelector("#pop-up").style.display="block";
        },1000
    )
})


