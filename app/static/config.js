const ke = new KeyboardEvent('keydown', {
    bubbles: true,
    cancelable: true,
    keyCode: 13
});


setTimeout(document.body.dispatchEvent(ke), 1000);