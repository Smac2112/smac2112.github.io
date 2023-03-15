// javascript 
// alert("hello fool");

var pics = [
    "images/bigNose.jpg",
    "images/christmas.jpg",
    "images/longTongue.jpg",
    "images/meAndYogi.jpg",
    "images/paw.jpg"
]

// what ever is typed inside the brackets after click function. Will run everytime the button is clicked on the page.
var butt = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1; 

butt.addEventListener("click", function(){
    if (counter === 5 ){
        counter = 0;
    }
    img.src = pics[counter]
    counter = counter + 1;

});
