document.addEventListener('DOMContentLoaded', function () {
	const splideContainer = document.querySelector('.splide');
  const items = splideContainer.querySelectorAll('.splide__slide');
	var slidesToShow = 0;
	if (items.length > 3) {
		slidesToShow = 4;
	}
	else if (items.length <=3) {
		slidesToShow = items.length;
	}
	var splide = new Splide('#speaker-slider', {
		type: 'slide',
		perPage: slidesToShow,
		perMove: 1,
		pagination: false,
		arrows: {
			prev: '<button class="splide__arrow splide__arrow--prev">Previous</button>',
			next: '<button class="splide__arrow splide__arrow--next">Next</button>',
		},
		breakpoints: {
				991: {
						perPage: 2,
				},
				767: {
					perPage: 1,
			},
		},
	});

	splide.mount();

	function hideAllModals() {
    document.querySelectorAll('.speaker-details-modal').forEach(modal => {
      modal.style.display = "none"; // Hide each modal
    });
	}
  
	// Handle speaker detail modal
	const parentDiv = document.querySelector('.speakers__slider');
	const detailsModal = document.querySelector('.speaker-details-modal');

	document.querySelectorAll('.splide__slide').forEach(slide => {
		slide.addEventListener('click', function () {
			var modalID = slide.getAttribute('data-modal');
			var modalShow = document.getElementById(modalID);

      hideAllModals();

			if(modalShow) {
				modalShow.style.display = "block";
				parentDiv.classList.add('modal-show');
				if (parentDiv && modalShow){
					parentDiv.appendChild(modalShow);
				}
			}
		});
	});

	document.querySelectorAll('.close-modal').forEach(button => {
    button.addEventListener('click', function () {
			hideAllModals(); // Hide all modals
			parentDiv.classList.remove('modal-show');
    });
	});
});
