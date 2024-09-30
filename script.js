'use strict';

// Selects the text paragraph and see more button
const paragraph = document.getElementById('text');
const btnSeeMore = document.getElementById('see-more');

const characterLimit = 100;
const originalText = paragraph.innerText; // stores the whole text
let shortenedText;

let toggleText = function () {
	if (btnSeeMore.innerText === 'See more') {
		// Expand text if collapsed and update button text
		paragraph.innerText = originalText;
		btnSeeMore.innerText = 'See less';
	} else {
		// Collapse text if expanded and update button text
		paragraph.innerText = shortenedText;
		btnSeeMore.innerText = 'See more';
	}
};

if (paragraph.innerText.length > 100) {
	// Store and display first 100 characters of the text
	shortenedText = paragraph.innerText.substring(0, 99) + '...';
	paragraph.innerText = shortenedText;

	btnSeeMore.style.display = 'block'; // show the see more button
}

// See more button on click action
btnSeeMore.addEventListener('click', toggleText);
