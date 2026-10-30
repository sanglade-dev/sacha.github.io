function chgt_CV_langue() {
    // Get the checkbox
    var SW = document.getElementById("CV_switch");
    // Get the output text
    var CV = document.getElementById("CV");

    // If the checkbox is checked, display the output text
    if (SW.checked == false){
    CV.src = "CV Sacha Anglade ver English.png";
    } else {
    CV.src = "CV Sacha Anglade.png";
    }
}

function Affiche_nav() {

    var Chkbox = document.getElementById("chkbox_nav");
    var nav_box = document.getElementById("Navigation_liens");
    var liens = document.getElementsByTagName("a");
    if (Chkbox.checked){
        nav_box.style.opacity = 1;
        nav_box.style.width = 135;
        for (let i = 0; i<3; i++){
            liens[i].style.fontSize = 15;
        };
    } else {
        nav_box.style.opacity = 0;
        nav_box.style.width = 0;
        for (let i = 0; i<3; i++){
            liens[i].style.fontSize = 0;
        }
    }
}