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

uploadButton.addEventListener("change", function(){
    uploadedImage.setAttribute("alt", getUserImage());
})