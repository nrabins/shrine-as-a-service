console.log('working');

var userImage = "https://cdn.shopify.com/s/files/1/0808/5563/products/prod-pizza-cheese-slice-lg.jpg?v=1503592252";
var testButton = document.querySelector("#test_button");
var shrineSubject = document.querySelector("#shrine_subject")


testButton.addEventListener("click", function(){
    shrineSubject.setAttribute("src", userImage);
})

