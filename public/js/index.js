const tabLinks = document.querySelectorAll('.tablink');
const contents = document.querySelectorAll('.tabcontent');

// Set first tab as the active tab
tabLinks[0].classList.add('active');
contents[0].hidden = false;


function openForm (event, tabName) {
    const activeDiv = document.querySelector('#'+tabName);

    for (let content of contents) {
        content.hidden = true;
    }

    for (let tab of tabLinks) {
        tab.classList.remove('active');
    }

    // Show active div
    activeDiv.hidden = false;
    // Set selected tab button to active
    event.currentTarget.classList.add('active');
}