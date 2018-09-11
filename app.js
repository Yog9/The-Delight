 new WOW().init();
document.querySelector('.toggle_btn').addEventListener("click", function(event){
    document.querySelector('#sidebar').classList.toggle('active');
   if (event.target.classList.contains('lines'))
   {
   	console.log("in klines");
   	event.target.classList.remove('lines');
   document.querySelector('.cross').style.display ="block";
   }
   else if (event.target.classList.contains('cross'))
   {
   console.log("in cross");
   document.querySelector('.cross').style.display ="none";
   	event.target.classList.add('lines');
   }
    

  });
// Get the modal
var modal = document.querySelector('.modal');

// Get the button that opens the modal
var book_now= document.querySelector(".book");

// Get the <span> element that closes the modal
var modal_button = document.querySelector(".modal_button");

// When the user clicks the button, open the modal 
book_now.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
modal_button.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}