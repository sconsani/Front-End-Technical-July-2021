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

// function showImageTwo(){
//     let button = document.querySelector("button");
//     let header = document.querySelector("h1");

//     button.addEventListener("click", function (){
//         if(button.innerText = "Sign In"){
//             header.innerText = "Sign In";
//         };
//     });

//     };

    showImage();
    // showImageTwo();


});
