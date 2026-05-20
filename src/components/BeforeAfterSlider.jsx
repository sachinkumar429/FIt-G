import React, { useState, useRef, useEffect } from 'react';
import { ChevronsLeftRight } from 'lucide-react';

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage: 0 to 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);

    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <div className="space-y-4">
      {/* Slider Container */}
      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className="relative h-[350px] sm:h-[450px] w-full rounded-2xl overflow-hidden shadow-glow-card select-none cursor-ew-resize border border-dark-border"
      >
        {/* AFTER Image (Background) */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop" 
            alt="After Transformation Fit-G Gym" 
            className="w-full h-full object-cover"
            draggable="false"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <span className="absolute bottom-4 right-4 bg-primary text-white text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded shadow-lg">
            After Gym
          </span>
        </div>

        {/* BEFORE Image (Foreground Overlay - Clipped) */}
        <div 
          className="absolute inset-0 h-full overflow-hidden" 
          style={{ width: `${sliderPosition}%` }}
        >
          <img 
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop" 
            alt="Before Transformation Fit-G Gym" 
            className="absolute inset-0 w-full h-full object-cover max-w-none"
            style={{ width: containerRef.current ? containerRef.current.offsetWidth : '100%' }}
            draggable="false"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <span className="absolute bottom-4 left-4 bg-dark-light border border-dark-border text-white text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded shadow-lg">
            Before Gym
          </span>
        </div>

        {/* Divider Slider Line */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-primary cursor-ew-resize flex items-center justify-center"
          style={{ left: `${sliderPosition}%` }}
          onMouseDown={() => setIsDragging(true)}
          onTouchStart={() => setIsDragging(true)}
        >
          {/* Glowing Slider Handle */}
          <div className="w-10 h-10 bg-primary border-2 border-white rounded-full flex items-center justify-center text-white shadow-glow-red-intense cursor-ew-resize active:scale-90 transition-transform">
            <ChevronsLeftRight className="w-5 h-5" />
          </div>
        </div>
      </div>
      
      {/* Visual Instruction Guide */}
      <p className="text-center text-xs text-gray-500 font-medium">
        💡 Drag or swipe the handle above to see the 12-week transformation of our member!
      </p>
    </div>
  );
}
