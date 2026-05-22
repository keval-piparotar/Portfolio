"use client";

export default function BackgroundGrid() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem'
        }}
      />
      {/* Radial gradient mask to fade out the grid at the edges for a cinematic look */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#050816_80%)]" />
    </div>
  );
}
