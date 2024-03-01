const slideshow = document.querySelector('.slideshow');
const slides = slideshow.querySelectorAll('.slideshow__slide');
const controls = slideshow.querySelectorAll('.slideshow__control-button');

let index = 0;
const totalSlides = slides.length;
const lastIndex = slides.length - 1;

const goToPreviousSlide = () => {
	if (index === 0) {
		index = lastIndex;
	} else {
		index = index - 1;
	}

	console.log(index);

	slides.forEach(slide => {
		slide.classList.remove('slideshow__slide--visible');
	});

	slides[index].classList.add('slideshow__slide--visible');
};

const goToNextSlide = () => {
	if (index < lastIndex) {
		index = index + 1;
	} else {
		index = 0;
	}
	

	console.log(index);

	slides.forEach(slide => {
		slide.classList.remove('slideshow__slide--visible');
	});

	slides[index].classList.add('slideshow__slide--visible');
};

const changeSlide = (event) => {
	const button = event.currentTarget;

	if (button.dataset.direction === 'previous') {
		goToPreviousSlide();
	}

	if (button.dataset.direction === 'next') {
		goToNextSlide();
	}
}

controls.forEach(button => {
	button.addEventListener('click', changeSlide);
})

// function currentDiv(n) {
// 	showDivs(slideIndex = n);
//   }
  
//   function showDivs(n) {
// 	var i;
// 	var x = document.getElementsByClassName("slideshow__img");
//   }

function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName("mySlides");
	let dots = document.getElementsByClassName("dot");
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

