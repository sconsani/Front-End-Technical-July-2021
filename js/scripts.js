// Write your JS below

$(document).ready(function() {
    console.log('Document ready')



    

    

//     function showSignImage () {
//         let imageTwoTag = document.createElement('img');
//         imageTwoTag.src = "./assets_from_client/assets/WSJ_Horizontal.png";
//         let signform = document.getElementsByClassName("signin-form");
//         console.log(signform);
//         signform.prepend(imageTwoTag);

//     };

//         button.addEventListener("click", function (event){
//                 // console.log(signInButton.classList.value);
//                 if(signInButton.classList.contains("active")){
//                 let imageTagTwo = document.createElement('img');
//                 imageTagTwo.src = "./assets_from_client/assets/WSJ_Horizontal.png";
//                 let sform = document.querySelector(".signin-form");
//                 console.log(sform);
//                 sform.prepend(imageTagTwo); 
//                 // showSignImage();
//             };
//             // event.stopPropagation();

//         });
//     };
// addId();


//initial rendering of register tab
function showImage(){
    let imageTag = document.createElement('img');
    imageTag.src = "./assets_from_client/assets/WSJ_Horizontal.png";
    let regform = document.querySelector(".register-form");
        regform.prepend(imageTag);
};
showImage();

function showTriangle(){
        let rform = document.querySelector(".register-form");
        let triangle = document.createElement('div')
        triangle.setAttribute('id', 'triangle');
        rform.append(triangle);
    };
showTriangle();

});










































