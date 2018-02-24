// Get User Image and Display
// ============================================================================
var uploadButton = document.querySelector("#image_upload_button");
var uploadedImage = document.querySelector("#uploaded_image");

function getUserImage() {
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();

  reader.addEventListener("load", function () {
    uploadedImage.src = reader.result;
  }, false);

  return reader.readAsDataURL(file);
}

// Set the image in the "preview"
uploadButton.addEventListener("change", function(){
    uploadedImage.setAttribute("alt", getUserImage());
})

// Resize Image
// ============================================================================
var imageWidth = uploadedImage.clientWidth;

document.querySelector("#increase_size").addEventListener("click", function(){
    imageWidth += 10;
    uploadedImage.style.width = imageWidth + "px";
})

document.querySelector("#decrease_size").addEventListener("click", function(){
    imageWidth -= 10;
    uploadedImage.style.width = imageWidth + "px";
})

// Rotate Image
// ============================================================================
var imageRotation = 0;

document.querySelector("#rotate_image").addEventListener("click", function(){
    imageRotation += 90;
    uploadedImage.style.transform = "rotate(" + imageRotation + "deg)";
})

// Reposition Image
// ============================================================================
var imageYPosition = 0;
var imageXPosition = 0;

document.querySelector("#position_up").addEventListener("click", function(){
    imageYPosition -= 10;
    uploadedImage.style.top = imageYPosition + "px";
})

document.querySelector("#position_down").addEventListener("click", function(){
    imageYPosition += 10;
    uploadedImage.style.top = imageYPosition + "px";
})

document.querySelector("#position_left").addEventListener("click", function(){
    imageXPosition -= 10;
    uploadedImage.style.left = imageXPosition + "px";
})

document.querySelector("#position_right").addEventListener("click", function(){
    imageXPosition += 10;
    uploadedImage.style.left = imageXPosition + "px";
})