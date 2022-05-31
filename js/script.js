const body = document.body;

const overlay = document.querySelectorAll('.overlay');
const overlayActive = document.querySelectorAll('[data-modal]');
const overlayClose = document.querySelectorAll('.close');

overlayActive.forEach(function(item) {
	item.addEventListener('click', function(event) {
		let overlayIdentifier = event.target.getAttribute('data-modal');
		let overlay = document.getElementById(overlayIdentifier);

		let modal = overlay.querySelector('.modal');
		modal.addEventListener('click', function(event) {
			event.stopPropagation();
		});

		overlay.classList.add('show');
		body.classList.add('lock');
	});
});

overlayClose.forEach(function(item) {
	item.addEventListener('click', function(event) {
		let current = event.target.closest('.overlay');

		overlayDisable(current);
	});
});

overlay.forEach(function(item) {
	item.addEventListener('click', function(event) {
		let current = event.target;

		overlayDisable(current);
	});
});

function overlayDisable(item) {
	item.classList.remove('show');
	body.classList.remove('lock');
}

window.onload = function() {
    setTimeout(function() {
        let modal = document.getElementById('modal');
        modal.classList.add('show');
        body.classList.add('lock');
    }, 5000);
};