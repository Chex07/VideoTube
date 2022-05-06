/* Theme Toggle */

const themeToggleBtn = document.getElementById('toggleTheme');

themeToggleBtn.addEventListener('click', () => {
    document.querySelector('html').classList.toggle('light');
});

/* ScrollToTOp Button */

const topBtn = document.getElementById('topBtn');

window.onscroll = function() {
    scrollFunction()
};
scrollFunction();

function scrollFunction() {
    scrollPos = window.scrollY;
    if (scrollPos > 20) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}

topBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

/* Navbar Toggle */

const toggleButton = document.querySelector('#toggle-button');
const navlist = document.getElementsByClassName('nav-list')[0];
const navlinks = document.querySelectorAll('.nav-list li');

toggleButton.addEventListener('click', () => {
    switchToggle();
});

navlinks.forEach(navlink => {
    navlink.addEventListener('click', () => {
        switchToggle();
    });
});

function switchToggle() {
    navlist.classList.toggle('active');
    toggleButton.innerHTML = toggleButton.innerHTML === '×' ? '≡' : '×';
}

/* Copy to Clipboard */

const donationBtns = document.querySelectorAll('#faq p')
donationBtns.forEach(donationBtn => {
    donationBtn.addEventListener('click', () => {
        var text = donationBtn.querySelector('span').innerHTML
        copyToClipboard(text);
    });
});

function copyToClipboard(text) {
    Clipboard.copy(text);
    alert("Copied: " + text);
}

window.Clipboard = (function(window, document, navigator) {
    var textArea, copy;

    function isOS() {
        return navigator.userAgent.match(/ipad|iphone/i);
    }

    function createTextArea(text) {
        textArea = document.createElement('textArea');
        textArea.value = text;
        document.body.appendChild(textArea);
    }

    function selectText() {
        var range, selection;
        if (isOS()) {
            range = document.createRange();
            range.selectNodeContents(textArea);
            selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
            textArea.setSelectionRange(0, 999999);
        } else {
            textArea.select();
        }
    }

    function copyToClipboard() {
        document.execCommand('copy');
        document.body.removeChild(textArea);
    }
    copy = function(text) {
        createTextArea(text);
        selectText();
        copyToClipboard();
    };
    return {
        copy: copy
    };
})(window, document, navigator);

/* Fade-In Image Amimations */

AOS.init();

/* Text Change */

const changeStrings = ['Open Source', 'Trends', 'Subscriptions', 'Playlists', 'Subtitles'];
const changeText = document.getElementById('changeText');

changeString();

function changeString() {
    changeStrings.forEach(function(string, index) {
        setTimeout(() => {
            changeText.innerHTML = string;
        }, index * 2000);
    });
    setTimeout(changeString, 10000)
}
