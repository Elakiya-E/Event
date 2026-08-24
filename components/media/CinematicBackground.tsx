import React from 'react';

interface CinematicBackgroundProps {
  videoSrc?: string;
  imageSrc?: string;
  posterImage?: string;
  overlayOpacity?: number; // 0 to 1
  mobileFallbackImage?: string;
}

export default function CinematicBackground({
  videoSrc,
  imageSrc,
  posterImage,
  overlayOpacity = 0.5,
  mobileFallbackImage,
}: CinematicBackgroundProps) {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0 bg-neutral-900">
      {videoSrc ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={posterImage}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : imageSrc ? (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${imageSrc})` }}
        />
      ) : (
        <div className="absolute inset-[-10%] w-[120%] h-[120%] bg-neutral-900 flex items-center justify-center">
          {mobileFallbackImage && (
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center opacity-50 block md:hidden"
              style={{ backgroundImage: `url(${mobileFallbackImage})` }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-br from-teal-900/40 via-black to-black" />
          <div className="w-[150%] h-[150%] opacity-[0.03]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 40px)' }} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] lg:from-transparent to-transparent" />
        </div>
      )}
      <div 
        className="absolute inset-0 bg-black pointer-events-none" 
        style={{ opacity: overlayOpacity }} 
      />
    </div>
  );
}
