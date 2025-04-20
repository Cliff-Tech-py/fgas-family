const slides = [
    "📣 Receive the latest news and announcements",
    "👥 Find and connect with fellow alumni",
    "📸 Browse through school memories and event galleries",
    "📅 View and RSVP for upcoming alumni events",
    "✍️ Share your story or achievements",
    "📞 Get contacts for your long-lost classmate"
  ];
  
  let currentIndex = 0;
  const slideItem = document.getElementById("slide-item");
  
  function showNextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    slideItem.style.opacity = 0;
  
    setTimeout(() => {
      slideItem.textContent = slides[currentIndex];
      slideItem.style.opacity = 1;
    }, 500);
  }
  
  setInterval(showNextSlide, 4000); // change slide every 3 seconds
  