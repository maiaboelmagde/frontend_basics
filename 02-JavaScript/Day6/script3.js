const images = [
    'assets/SlideShow/1.jpg',
    'assets/SlideShow/2.jpg',
    'assets/SlideShow/3.jpg',
    'assets/SlideShow/4.jpg',
    'assets/SlideShow/5.jpg',
    'assets/SlideShow/6.jpg',
  ];
  
  let currentIndex = 0; 
  let slideshowInterval = null; 
  
  const galleryImage = document.getElementById('gallery-image');
  const nextButton = document.getElementById('next-btn');
  const previousButton = document.getElementById('previous-btn');
  const slideshowButton = document.getElementById('slideshow-btn');
  const stopButton = document.getElementById('stop-btn');
  
  function displayImage(index) {
    galleryImage.src = images[index];
  }
  
  nextButton.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
      currentIndex++;
      displayImage(currentIndex);
    }
  });
  
  previousButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      displayImage(currentIndex);
    }
  });
  
  slideshowButton.addEventListener('click', () => {
    if (!slideshowInterval) {
      slideshowInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        displayImage(currentIndex);
      }, 2000); 
    }
  });
  
  stopButton.addEventListener('click', () => {
    clearInterval(slideshowInterval);
    slideshowInterval = null;
  });
  
  displayImage(currentIndex);
  