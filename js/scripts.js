// Write your JS below

$(document).ready(function() {
    console.log('Document ready')

//this works:
    function showImage(){
        let imageTag = document.createElement('img');
        imageTag.src = "./assets_from_client/assets/WSJ_Horizontal.png"
        let rform = document.querySelector(".register-form");

        rform.prepend(imageTag); 
    };

    showImage();

///// doesn't work yet - trying to get the image to show on the signin tab////////////
function test(){
    let registerform = document.querySelector("form");
    let signinform = document.querySelector("form");
    let h1tag = document.querySelector("h1");

    if (registerform.class == "register-form") {
        return;
    }else if (signinform.class == "signin-form") {
        h1tag.innerText = "Signin"
    }
}
test();

});

