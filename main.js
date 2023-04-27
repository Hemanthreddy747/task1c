


const scrollText = document.getElementById('trantext');
let lastScrollPosition = window.pageYOffset;
let scale = 1;
window.addEventListener('scroll', () => {
  const currentScrollPosition = window.pageYOffset;

  if (currentScrollPosition > lastScrollPosition) {
    // Scroll down
    scale = 0;
  } else {
    // Scroll up
    scale = 1;
  }

  scrollText.style.transform = `scale(${scale})`;
  lastScrollPosition = currentScrollPosition;
});



