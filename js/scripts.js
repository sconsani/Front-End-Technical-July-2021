// Write your JS below

$(document).ready(function() {
    console.log('Document ready')



//this works:
    function showImage(){
        let imageTag = document.createElement('img');
        imageTag.src = "./assets_from_client/assets/WSJ_Horizontal.png";
        let rform = document.querySelector(".register-form");

        rform.prepend(imageTag);

        let triangle = document.createElement('div')
        triangle.setAttribute('id', 'triangle');
        rform.append(triangle);
    };


    function addId(){
        let button = document.querySelector("button");
        button.addEventListener("click", function (){
        let signInButton = document.querySelector("button"); 
            signInButton.setAttribute('id', 'signin');
            console.log(signInButton);

        let sform = document.getElementsByClassName(".signin-form");
        if(signInButton.classList.contains("active")){
            let imageTagTwo = document.createElement('img');
            imageTagTwo.src = "./assets_from_client/assets/WSJ_Horizontal.png";
            let sform = document.querySelector(".signin-form");
            sform.prepend(imageTagTwo);
        };

        });
    };


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

    showImage();
    addId();
    // signIn();
    
    // showImageTwo();
});
