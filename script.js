'use strict';

// Selects all the cards to loop over them
const cards = document.querySelectorAll('.card');
for (let card of cards) {
	// Selects the text paragraph and see more button
	const paragraph = card.querySelector('.text');
	const btnSeeMore = card.querySelector('.see-more');

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

	if (paragraph.innerText.length > characterLimit) {
		// Stores and displays first 'characterLimit' characters of the text
		shortenedText = paragraph.innerText.substring(0, characterLimit) + '...';
		paragraph.innerText = shortenedText;

		btnSeeMore.style.display = 'block'; // show the see more button
	}

	// See more button on click action
	btnSeeMore.addEventListener('click', toggleText);
}

// Select collapse button and sidebar
const btnCollapse = document.getElementById('collapse-btn');
const sidebar = document.getElementById('sidebar');

let sidebarExpanded = false;

// Toggles the sidebar collapse or expand
const toggleSidebar = function () {
	sidebar.classList.toggle('collapsed');
	sidebarExpanded = sidebarExpanded ? false : true;
};

// Collapse button on-click action
btnCollapse.addEventListener('click', toggleSidebar);

// Collapses or expands sidebar when the menus are hovered
const menus = document.querySelectorAll('#sidebar li');
for (let menu of menus) {
	menu.addEventListener('mouseenter', function () {
		sidebar.classList.remove('collapsed');
	});
	menu.addEventListener('mouseleave', function () {
		if (!sidebarExpanded) sidebar.classList.add('collapsed'); // Collapse only if the sidebar is not expanded using button
	});
}
