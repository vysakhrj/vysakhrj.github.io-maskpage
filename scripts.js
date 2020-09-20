
carousel();
const sectionsArray=document.querySelectorAll('section');
const sectionsPos={};

sectionsArray.forEach((section) =>{
	sectionsPos[section.id]=section.offsetTop;
});

window.onscroll=()	=>{
	var scrollPosition= document.documentElement.scrollTop|| document.body.scrollTop;
	
	for(id in sectionPos){
		if(sectionsPos[id]<= scrollPosition) {
			document,querySelector('.active').classList.remove('active');
			document.querySelector('a[href*=${id}]').classList.add('active');
		}
	}
};

$(function() {
	$(document).scroll(function() {
		var $nav= $("navbar");
		$nav.toggleClass('scrolled', $(this).scrollTop()>$nav.height());
	});
});

function send() {
  alert("Message Sent");
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

var myIndex = 0;
//carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 9000);    
}