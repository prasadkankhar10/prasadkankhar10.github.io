document.addEventListener('DOMContentLoaded', () => {
  const body = document.body; // Add this line

  // Butterfly graph animation
  const canvas = document.getElementById('butterflyCanvas');
  const ctx = canvas.getContext('2d');
  
  function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  function drawButterfly(t) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      
      for(let theta = 0; theta < 24 * Math.PI; theta += 0.01) {
          const r = Math.exp(Math.cos(theta)) - 2 * Math.cos(4 * theta) + Math.sin(t/30 + theta/24)**5;
          const x = r * Math.cos(theta) * 40 + canvas.width/2;
          const y = r * Math.sin(theta) * 40 + canvas.height/2;
          
          ctx.lineTo(x, y);
      }
      
      ctx.strokeStyle = body.getAttribute('data-theme') === 'light' ? '#FF6B35' : '#FF6B35';
      ctx.lineWidth = 1.5;
      ctx.stroke();
      requestAnimationFrame(() => drawButterfly(t + 1));
  }
  drawButterfly(0);

  // Parallax effects
  document.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      document.querySelector('.content-container').style.transform = 
          `translateZ(20px) rotateX(${y}deg) rotateY(${x}deg)`;
  });

  // Code typing effect
  const codeElement = document.querySelector('.cpp-code');
  const originalCode = codeElement.textContent;
  codeElement.textContent = '';
  
  let charIndex = 0;
  function typeCode() {
      if(charIndex < originalCode.length) {
          codeElement.textContent += originalCode.charAt(charIndex);
          charIndex++;
          setTimeout(typeCode, Math.random() * 50);
      }
  }
  typeCode();
});

// Add these updates to existing script
function handleParallax(e) {
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      document.querySelector('.content-container').style.transform = 
        `translateZ(20px) rotateX(${y}deg) rotateY(${x}deg)`;
    }
  }
  
  document.addEventListener('mousemove', handleParallax);
  

  // Adjust code font size for mobile
  function adjustCodeFont() {
    const codeElement = document.querySelector('.cpp-code');
    if (window.innerWidth < 576) {
      codeElement.style.fontSize = '0.6rem';
    } else {
      codeElement.style.fontSize = '0.9rem';
    }
  }
  window.addEventListener('resize', adjustCodeFont);
  adjustCodeFont();



  // new section about me 

  document.addEventListener('DOMContentLoaded', () => {
    const panel = document.getElementById('labPanel');
    
    // Tilt effect for non-touch devices
    if(window.matchMedia("(hover: hover)").matches) {
        document.addEventListener('mousemove', (e) => {
          const x = (e.clientX / window.innerWidth - 1.5) * 20;
          const y = (e.clientY / window.innerHeight - 0.5) * 20;
            
            panel.style.transform = `
                rotateY(${x}deg)
                rotateX(${y}deg)
                translateZ(10px)
            `;
        });

        document.addEventListener('mouseleave', () => {
            panel.style.transform = 'translateZ(0)';
        });
    }

    // Mobile-friendly hover states
    document.querySelectorAll('.submenu-option, .stat-block').forEach(item => {
        item.addEventListener('touchstart', () => {
            item.classList.add('hover-effect');
        });
        
        item.addEventListener('touchend', () => {
            setTimeout(() => item.classList.remove('hover-effect'), 100);
        });
    });
});



// new section about me
const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item');
  if (e.target.matches('.next')) {
    slider.append(items[0]);
  }
  if (e.target.matches('.prev')) {
    slider.prepend(items[items.length - 1]);
  }
}

document.addEventListener('click', activate, false);



// new section contact





// Particle System
// Particle System
class ParticleSystem {
  constructor(container) {
    this.container = container;
    this.particles = [];
    this.maxParticles = window.innerWidth < 768 ? 30 : 100;
    this.init();
  }

  init() {
    for(let i = 0; i < this.maxParticles; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      Object.assign(particle.style, {
        position: 'absolute',
        width: '2px',
        height: '2px',
        background: '#7f5af0',
        borderRadius: '50%',
        pointerEvents: 'none'
      });
      this.container.appendChild(particle);
      this.particles.push({
        element: particle,
        x: Math.random() * 100,
        y: Math.random() * 100,
        speed: Math.random() * 0.5 + 0.2
      });
    }
    this.animate();
  }

  animate() {
    this.particles.forEach(p => {
      p.y -= p.speed;
      if(p.y < -10) p.y = 110;
      p.element.style.transform = `translate(${p.x}%, ${p.y}%)`;
    });
    requestAnimationFrame(() => this.animate());
  }
}

// Initialize systems
document.querySelectorAll('.particle-field').forEach(field => {
  new ParticleSystem(field);
});

// Interactive hover effect
document.querySelectorAll('.input-orbit').forEach(orbit => {
  orbit.addEventListener('mousemove', (e) => {
    const rect = orbit.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    orbit.style.transform = `rotateY(${(x - rect.width/2)/20}deg) rotateX(${-(y - rect.height/2)/20}deg)`;
  });

  orbit.addEventListener('mouseleave', () => {
    orbit.style.transform = 'rotateY(0) rotateX(0)';
  });
});