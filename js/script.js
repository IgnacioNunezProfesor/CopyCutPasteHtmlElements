window.onload = pageSetup;

var imageOrigin = null;
var imageDest = null;
function pageSetup() {
    createHtmlLogic();
}


function createHtmlLogic() {
    //imageOrigin = document.getElementById("imgorigin");
    imageDest = document.getElementById("imgdest");
    const btnCopy = document.getElementById("btnCopy");
    const btnCut = document.getElementById("btnCut");
    const btnPaste = document.getElementById("btnPaste");

    btnCopy.addEventListener("click", copyImage);
    //  btnCut.addEventListener("click", cutImage);
    btnPaste.addEventListener("click", pasteImage);
}

function copyImage() {
    imageOrigin = document.getElementById("imgorigin");
    document.getElementById("msg").textContent = "Image copied to clipboard";
}

function pasteImage() {
    imageDest = document.getElementById("imgdest");
    imageDest.src = imageOrigin.src;
    imageDest.alt = imageOrigin.alt;
    imageDest.title = imageOrigin.title;
    document.getElementById("msg").textContent = "";

}