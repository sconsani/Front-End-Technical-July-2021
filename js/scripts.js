// Write your JS below

$(document).ready(function() {
    console.log('Document ready')

    function showTriangle(){
        let rform = document.querySelector(".register-form");
        let triangle = document.createElement('div')
        triangle.setAttribute('id', 'triangle');
        rform.append(triangle);
    };
showTriangle();

     function addregId(){
        window.addEventListener("load", function (){
            let registerButton = document.querySelector(".active");
            registerButton.setAttribute('id', 'register');
            console.log(registerButton);
        });
    };
addregId();

    function showSignImage () {
        let imageTwoTag = document.createElement('img');
        imageTwoTag.src = "./assets_from_client/assets/WSJ_Horizontal.png";
        let signform = document.getElementsByClassName("signin-form");
        console.log(signform);
        signform.prepend(imageTwoTag);

    };

    function addId(){
        let button = document.querySelector("button");
        let signInButton = document.querySelector("button");
        console.log(signInButton);
        signInButton.setAttribute('id', 'signin');


        button.addEventListener("click", function (event){
                // console.log(signInButton.classList.value);
                if(signInButton.classList.contains("active")){
                let imageTagTwo = document.createElement('img');
                imageTagTwo.src = "./assets_from_client/assets/WSJ_Horizontal.png";
                let sform = document.querySelector(".signin-form");
                console.log(sform);
                sform.prepend(imageTagTwo); 
            };
            // event.stopPropagation();

        });
    };
addId();

function showImage(){
    let imageTag = document.createElement('img');
    imageTag.src = "./assets_from_client/assets/WSJ_Horizontal.png";
    let regform = document.querySelector(".register-form");
        regform.prepend(imageTag);

};
showImage();

});










































