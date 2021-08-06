// Write your JS below

$(document).ready(function() {
    console.log('Document ready')

    // let test = document.querySelectorAll(".register-form");
    // console.log(test);

    
    function showImage(){
        let imageTag = document.createElement('img');
        imageTag.src = "./assets_from_client/assets/WSJ_Horizontal.png"
        let form = document.querySelector(".register-form");

        form.prepend(imageTag);
    };

    showImage();

    function addTriangle(){
        document.querySelector(".register-form").classList.add("triangleBottomRight");
    }

    addTriangle();
});
