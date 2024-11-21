import React, { useEffect, useRef } from "react";

const DynamicBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width, height;

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    // Event Listener für Fenstergröße
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Klasse für die Linien
    class Line {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.length = Math.random() * 50 + 30;
        this.speed = Math.random() * 0.1 + 0.1;
        this.angle = Math.random() * Math.PI * 2;
        this.alpha = Math.random() * 0.3 + 0.2;
      }

      draw() {
        const endX = this.x + Math.cos(this.angle) * this.length;
        const endY = this.y + Math.sin(this.angle) * this.length;

        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = `rgba(160, 160, 160, ${this.alpha})`;// Linien Farbe - hellgrau
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      update() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;

        // Linie neu positionieren, wenn sie aus dem Bild verschwindet
        if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
          this.x = Math.random() * width;
          this.y = Math.random() * height;
        }
      }
    }

    // Erstelle Linien und animiere sie
    const lines = [];
    for (let i = 0; i < 200; i++) {
      lines.push(new Line());
    }

    // Optimierung der Animationsfrequenz
    let frameCount = 0;
    const maxFrames = 2; // Reduziert die Häufigkeit der Animation

    const animate = () => {
      frameCount++;
      if (frameCount > maxFrames) {
        ctx.clearRect(0, 0, width, height);
        lines.forEach(line => {
          line.update();
          line.draw();
        });
        frameCount = 0;
      }
      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup: Entferne den Event Listener bei Komponenten-Unmount
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1, // Damit der Hintergrund hinter dem Inhalt bleibt
        backgroundColor: '#d3d3d3' // helles Grau
      }}
    />
  );
};

export default DynamicBackground;
