import { useEffect, useRef } from 'react';

export const MusicParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let mouseX = -1000;
    let mouseY = -1000;

    const symbols = ['♪', '♫', '♩', '♬', '♭', '♯', '𝄞'];
    const colors = ['#FACC15', '#FFFFFF', '#A1A1AA']; // Yellow-400, White, Zinc-400

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };

    class Particle {
      x: number;
      y: number;
      size: number;
      symbol: string;
      color: string;
      speedX: number;
      speedY: number;
      opacity: number;
      rotation: number;
      rotationSpeed: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.size = Math.random() * 30 + 10;
        this.symbol = symbols[Math.floor(Math.random() * symbols.length)];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.3 + 0.1;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += this.rotationSpeed;

        // Mouse interaction (repel)
        const dx = this.x - mouseX;
        const dy = this.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 200;

        if (distance < maxDistance) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (maxDistance - distance) / maxDistance;
          
          // Move away from mouse
          this.x += forceDirectionX * force * 5;
          this.y += forceDirectionY * force * 5;
          
          // Increase opacity near mouse
          this.opacity = Math.min(this.opacity + 0.05, 0.8);
        } else {
            // Slowly return to original opacity
            if (this.opacity > 0.4) this.opacity -= 0.01;
        }

        // Wrap around screen
        if (this.x > canvas!.width + 50) this.x = -50;
        if (this.x < -50) this.x = canvas!.width + 50;
        if (this.y > canvas!.height + 50) this.y = -50;
        if (this.y < -50) this.y = canvas!.height + 50;
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.font = `${this.size}px Arial`;
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.fillText(this.symbol, -this.size/2, this.size/2);
        ctx.restore();
      }
    }

    const init = () => {
      particles = [];
      const numberOfParticles = Math.floor((canvas.width * canvas.height) / 20000);
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
        mouseX = -1000;
        mouseY = -1000;
    }

    window.addEventListener('resize', resize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    
    resize();
    init();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0 w-full h-full"
    />
  );
};
