// Write your JS below

$(document).ready(function() {
    console.log('Document ready')

    const targetNode = document.getElementById('app');
    const config = { childList: true};
    const callback = function(mutationsList, observer) {
        for(const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                if(mutation.addedNodes.length >0) {
                    const sform = document.querySelector(".signin-form");
                    if (sform && sform.children.length > 0 && sform.children[0].tagName != "IMG"){
                        let imageTagTwo = document.createElement ('img');
                        imageTagTwo.src = "./assets_from_client/assets/WSJ_Horizontal.png";
                        sform.prepend(imageTagTwo);

                        let triangle = document.createElement ('div');
                        triangle.setAttribute('id', 'triangle');
                        sform.append(triangle);
                    }
                }
            }
        }
    };

    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);



    

    

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










































