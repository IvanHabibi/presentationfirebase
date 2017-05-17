
var config = {
  apiKey: "AIzaSyADlbs7t06pbQCi1vtXFyeYSCW25Hg4FTI",
  authDomain: "learnfirebase-dd1dc.firebaseapp.com",
  databaseURL: "https://learnfirebase-dd1dc.firebaseio.com",
  projectId: "learnfirebase-dd1dc",
  storageBucket: "learnfirebase-dd1dc.appspot.com",
  messagingSenderId: "96394441077"
};

firebase.initializeApp(config);

function showSlides(n) {

  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

var slideIndex = 1;
console.log('slide index '+ slideIndex);
showSlides(slideIndex);

var listenrefuser = firebase.database().ref('apps/');
listenrefuser.on('value', function(snapshot) {
  var appId = 'id';
  return firebase.database().ref('/apps/' + appId).once('value').then(function(snapshot) {
    var xxx = snapshot.val().slide;
    slideIndex =xxx
    showSlides(xxx);

  });
});


function changeSlide(appId, position) {

  firebase.database().ref('apps/' + appId).set({
    slide: position
  });
}



function plusSlides(n) {

  showSlides(slideIndex += n);
  changeSlide('id',slideIndex)
}

function currentSlide(n) {
  showSlides(slideIndex = n);
  changeSlide('id',slideIndex)
}
