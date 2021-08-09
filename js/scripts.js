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
        let signform = document.querySelector(".signin-form");
        console.log(signform);
            signform.prepend(imageTagTwo);

    };

    function addId(){
        let button = document.querySelector("button");
        button.addEventListener("click", function (){
            let signInButton = document.querySelector("button"); 
                signInButton.setAttribute('id', 'signin');
                console.log(signInButton);
            // add function to add second image here
            showSignImage();

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



// function clickShow (){

// let button = document.getElementById("signin");
// console.log(button);

// };
// clickShow();





});


// let registerForm = document.querySelector(".register-form");
// let imageDiv = document.createElement('div');
// imageDiv.setAttribute('class', 'wsjimage');
// registerForm.append(imageDiv);



//when register button is active
//create an empty div with a class of .wsjimage that prepends to the register form.

// wwhen signin button is active
//create an empty div that prepends to the sigin form.

//set the styles of the div to have a background image of heigh and width etc of the image


// 1. create an id for register and create an id for signin button


//
// registerButton.onclick = function() {
// if (button.classList.contains("active") || button.innerText = "Register"){
//     create the div and append it to the register form

// } else {
    
// };

// };


    

    // };

    // function addImage(){
    //     let sform = document.getElementsByClassName(".signin-form");
    //     console.log(sform);

    //     let signInButton = document.querySelector("button"); 
    //         signInButton.setAttribute('id', 'signin');

    //         if(signInButton.classList.contains("active")){

    //         let imageTagTwo = document.createElement('img');
    //         imageTagTwo.src = "./assets_from_client/assets/WSJ_Horizontal.png";
    //         sform.prepend(imageTagTwo);
    //     };

        
    // };


    // function signIn(){
    //     let sform = document.getElementsByClassName(".signin-form");
    //     console.log(sform);
    //     if()
        // if(sform.classList.contains("active")){
        // console.log("true");
//             let imageTagTwo = document.createElement('img');
//             imageTagTwo.src = "./assets_from_client/assets/WSJ_Horizontal.png";
//             
//             sform.prepend(imageTagTwo);
    // };



    //     let header = document.querySelector("h1");

    //     button.addEventListener("click", function (){
    //         // if(button.innerText = "Sign In"){
    //         //     header.innerText = "Sign In"
    //         // };
    //         let signInButton = document.querySelector("button"); 
    //         signInButton.setAttribute('id', 'signin');

    //         if(signInButton.classList.contains("active")){
    //             // console.log("true");
    //             let imageTagTwo = document.createElement('img');
    //             imageTagTwo.src = "./assets_from_client/assets/WSJ_Horizontal.png";
    //             let sform = document.querySelector(".signin-form");
    //             sform.prepend(imageTagTwo);



    //         };
    //     });
    // };

    
    // addId();
    // addImage();
    // signIn();
    
    // showImageTwo();

