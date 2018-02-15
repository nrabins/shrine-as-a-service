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
    uploadedImage.setAttribute("style", "width:" + imageWidth + "px; height: auto;");
})

document.querySelector("#decrease_size").addEventListener("click", function(){
    imageWidth -= 10;
    uploadedImage.setAttribute("style", "width:" + imageWidth + "px; height: auto;");
})