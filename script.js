let fontSize = 16; // Initial font size

  function increaseFontSize() {
    fontSize += 2;
    applyFontSize();
  }

  function decreaseFontSize() {
    if (fontSize > 10) {
      fontSize -= 2;
      applyFontSize();
    }
  }

  function applyFontSize() {
    const texts = document.querySelectorAll('.text');
    texts.forEach(text => {
      text.style.fontSize = fontSize + 'px';
    });
  }