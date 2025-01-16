import React, { useState, useRef, useEffect } from 'react';
import './ScratchCard.css';
import projectImage from '../../assets/emoji.webp';

// Random Quotes with Emojis
const quotes = [
  "The only way to do great work is to love what you do.",
  "Believe you can and you're halfway there.",
  "Success is not the key to happiness. Happiness is the key to success. ",
  "It does not matter how slowly you go as long as you do not stop.",
  "Life is what happens when you're busy making other plans.",
  "Nothing is impossible, the word itself says I'm possible.",
  "Aspire to inspire before we expire.",
  "Your dreams are waiting just believe.",
  "Good, better, best. Never let it rest. 'Til your good is better and your better is best.",
  "You only live once, but if you do it right, once is enough.",
  "Don't let the fear of failure hold you back. It's a stepping stone to success.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts."
];

const ScratchCardComponent = () => {
  const [quote, setQuote] = useState("");
  const [scratched, setScratched] = useState(false);
  const [scratchedPercentage, setScratchedPercentage] = useState(0);
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);

  useEffect(() => {
    ctxRef.current = canvasRef.current.getContext("2d");
    ctxRef.current.fillStyle = "#C0C0C0";
    ctxRef.current.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  }, []);

  // Handle Scratch
  const handleScratch = (e) => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();

    checkIfScratched(canvas);
  };

  const handleTouchScratch = (e) => {
    e.preventDefault(); // Prevent scrolling when touching
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const y = e.touches[0].clientY - rect.top;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();

    checkIfScratched(canvas);
  };

  const checkIfScratched = (canvas) => {
    const imageData = ctxRef.current.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    let scratchedPixels = 0;
    let totalPixels = data.length / 4; // 4 channels per pixel

    for (let i = 0; i < data.length; i += 4) {
      if (data[i] !== 192 || data[i + 1] !== 192 || data[i + 2] !== 192) {
        scratchedPixels++;
      }
    }

    const newScratchedPercentage = (scratchedPixels / totalPixels) * 100;
    setScratchedPercentage(newScratchedPercentage);

    if (newScratchedPercentage >= 60 && !quote) {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      setQuote(randomQuote);
    }

    if (newScratchedPercentage >= 60 && !scratched) {
      setScratched(true);
      triggerStars(); // Trigger the star burst effect
    }
  };

  useEffect(() => {
    if (scratchedPercentage >= 60 && scratchedPercentage < 100) {
      const interval = setInterval(() => {
        setScratchedPercentage((prev) => {
          const newPercentage = prev + 2;
          if (newPercentage >= 100) {
            clearInterval(interval);
            setScratchedPercentage(100);
          }
          return newPercentage;
        });
      }, 50);

      return () => clearInterval(interval);
    }
  }, [scratchedPercentage]);

  const startScratching = () => {
    if (canvasRef.current) {
      canvasRef.current.addEventListener('mousemove', handleScratch);
      canvasRef.current.addEventListener('touchmove', handleTouchScratch, { passive: false });
    }
  };

  const stopScratching = () => {
    if (canvasRef.current) {
      canvasRef.current.removeEventListener('mousemove', handleScratch);
      canvasRef.current.removeEventListener('touchmove', handleTouchScratch);
    }
  };

  // Trigger the star burst effect
  const triggerStars = () => {
    const isMobile = window.innerWidth <= 768;
    const starCount = isMobile ? 20 : 50; // Set star count to 20 for mobile, 50 for desktop

    // Clear any previous star container if it exists
    const existingStars = document.querySelector('.star-container');
    if (existingStars) {
      existingStars.remove();
    }

    const starContainer = document.createElement('div');
    starContainer.classList.add('star-container');
    document.body.appendChild(starContainer);

    const canvasRect = canvasRef.current.getBoundingClientRect();
    const centerX = canvasRect.left + canvasRect.width / 2;
    const centerY = canvasRect.top + canvasRect.height / 2;

    // Ensure only the specified number of stars are created
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      starContainer.appendChild(star);

      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 150 + 100; // Random distance from the center

      // If mobile, reduce the scattering distance slightly
      const mobileDistance = isMobile ? Math.random() * 80 + 50 : distance;

      const size = Math.random() * 10 + 15;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;

      star.style.left = `${centerX - size / 2}px`;
      star.style.top = `${centerY - size / 2}px`;

      const duration = Math.random() * 1 + 5;
      const delay = Math.random() * 2;
      star.style.animationDuration = `${duration}s`;
      star.style.animationDelay = `${delay}s`;

      const rotation = Math.random() * 360;
      star.style.transform = `rotate(${rotation}deg) translate(${Math.cos(angle) * mobileDistance}px, ${Math.sin(angle) * mobileDistance}px)`;
    }

    setTimeout(() => {
      starContainer.remove(); // Remove stars after animation
    }, 2500); // Duration for which stars will be visible
  };

  return (
    <div className="scratch-card-container">
      <h2 className="section__title fs-1">Scratch to Reveal</h2>
      <span className="section__subtitle text-md">This is for you!</span>
      <div className="fullpage">
        <div
          className="canvas-container"
          onMouseDown={startScratching}
          onMouseUp={stopScratching}
          onTouchStart={startScratching}
          onTouchEnd={stopScratching}
        >
          <canvas
            ref={canvasRef}
            width={300}
            height={200}
            className="scratch-canvas"
          ></canvas>
          {(scratchedPercentage >= 60 || scratched) && quote && (
            <div className={`quote ${scratched ? 'revealed' : ''}`}>
              {quote}  
              <img src={projectImage} height={50} width={50} alt="emoji"  className='emoji'/>   
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScratchCardComponent;
