/**
 * Lightweight 3D Card Tilt & Specular Physics Engine
 * Adds smooth hardware-accelerated 3D parallax to cards
 */

(function () {
  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  if (isTouch) return; // Skip 3D tilt calculations on mobile touch screens for performance

  const tiltCards = document.querySelectorAll('[data-tilt]');

  tiltCards.forEach((card) => {
    let bounds;

    function mouseMove(e) {
      if (!bounds) bounds = card.getBoundingClientRect();
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const leftX = mouseX - bounds.x;
      const topY = mouseY - bounds.y;

      const center = {
        x: leftX - bounds.width / 2,
        y: topY - bounds.height / 2,
      };

      const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

      const maxTilt = parseFloat(card.getAttribute('data-tilt-max')) || 12;
      const rotateX = -(center.y / (bounds.height / 2)) * maxTilt;
      const rotateY = (center.x / (bounds.width / 2)) * maxTilt;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
    }

    function mouseEnter() {
      bounds = card.getBoundingClientRect();
      card.style.transition = 'transform 0.1s ease-out';
    }

    function mouseLeave() {
      card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      bounds = null;
    }

    card.addEventListener('mouseenter', mouseEnter);
    card.addEventListener('mousemove', mouseMove);
    card.addEventListener('mouseleave', mouseLeave);
  });

  // Hero Photo Parallax Follower
  const heroStage = document.querySelector('.photo-3d-stage');
  const heroVisual = document.querySelector('.hero-visual');

  if (heroStage && heroVisual) {
    let heroBounds;

    heroVisual.addEventListener('mouseenter', () => {
      heroBounds = heroVisual.getBoundingClientRect();
      heroStage.style.transition = 'transform 0.15s ease-out';
    });

    heroVisual.addEventListener('mousemove', (e) => {
      if (!heroBounds) heroBounds = heroVisual.getBoundingClientRect();
      const x = (e.clientX - heroBounds.left) / heroBounds.width - 0.5;
      const y = (e.clientY - heroBounds.top) / heroBounds.height - 0.5;

      heroStage.style.transform = `perspective(1000px) rotateY(${(x * 16).toFixed(2)}deg) rotateX(${(-y * 16).toFixed(2)}deg) translateZ(10px)`;
    });

    heroVisual.addEventListener('mouseleave', () => {
      heroStage.style.transition = 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)';
      heroStage.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px)';
      heroBounds = null;
    });
  }
})();
