'use strict';

const switcher = document.querySelector('.btn');

if (switcher) {
    switcher.addEventListener('click', function () {
        document.body.classList.toggle('light-theme');
        document.body.classList.toggle('dark-theme');

        const className = document.body.className;

        if (className === 'dark-theme') {
            this.textContent = 'Bruce Wayne (Light Mode)';
            this.setAttribute('aria-label', 'Switch to light mode');
        } else {
            this.textContent = 'Batman (Dark Mode)';
            this.setAttribute('aria-label', 'Switch to dark mode');
        }

        console.log('Current theme: ' + className);
    });
}
