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

    function signIn(){
        let button = document.querySelector("button");
        let header = document.querySelector("h1");

        button.addEventListener("click", function (){
            if(button.innerText = "Sign In"){
                header.innerText = "Sign In";
            };

         });

    };

    function showImageTwo(){
        let signInButton = document.querySelector("button"); 
        signInButton.setAttribute('id', 'signin');
        // console.log(signInButton);
        
        while(signInButton.classList.contains("active")){

            let imageTagTwo = document.createElement('img');
            imageTagTwo.src = "./assets_from_client/assets/WSJ_Horizontal.png";
            let sform = document.querySelector(".signin-form");
            // console.log(sform);

        sform.prepend(imageTagTwo);

        };
    }

    showImage();
    signIn();
    showImageTwo();
});
