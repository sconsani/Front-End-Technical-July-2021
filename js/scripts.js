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

                        let striangle = document.createElement ('div');
                        striangle.setAttribute('id', 'striangle');
                        sform.append(striangle);
                    }
                }
            }
        }
    };

    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);

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
