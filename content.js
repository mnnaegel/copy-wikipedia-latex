document.addEventListener('contextmenu', function(e) {
    let altText = e.target.alt;
    if (altText) {
        navigator.clipboard.writeText(altText)
    }
    e.preventDefault();
}, false);