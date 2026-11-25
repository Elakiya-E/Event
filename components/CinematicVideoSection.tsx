"use client";

import React, { useState, useRef, useEffect } from "react";
import { useGSAP, gsap, ScrollTrigger } from "@/hooks/useGsap";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function CinematicVideoSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);

  // Playback control functions
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setHasStarted(true);
        })
        .catch(() => {
          setIsPlaying(false);
        });
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMuted = !videoRef.current.muted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  // Autoplay on viewport intersection with reduced-motion check
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      video.pause();
      setIsPlaying(false);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
            video
              .play()
              .then(() => {
                setIsPlaying(true);
                setHasStarted(true);
              })
              .catch(() => {
                // If browser blocks unmuted/autoplay, keep paused for manual interaction
                setIsPlaying(false);
              });
          } else {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: [0.1, 0.35, 0.7] }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      const dur = prefersReduced ? 0 : 0.85;
      const stag = prefersReduced ? 0 : 0.1;

      /* Header entrance */
      gsap.fromTo(
        containerRef.current.querySelectorAll(".video-head-elem"),
        { y: prefersReduced ? 0 : 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: dur,
          stagger: stag,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      /* Video Frame entrance */
      gsap.fromTo(
        containerRef.current.querySelectorAll(".video-frame-wrap"),
        { y: prefersReduced ? 0 : 40, opacity: 0, scale: prefersReduced ? 1 : 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: prefersReduced ? 0 : 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current.querySelector(".video-frame-wrap"),
            start: "top 82%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="complete-management-video"
      ref={containerRef}
      className="relative w-full bg-[#F7F3EA] overflow-hidden py-16 sm:py-20 md:py-28 border-t border-[#DED6C9]"
    >
      {/* Background warm ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[850px] h-[350px] bg-[#C7A978]/6 blur-[140px] rounded-full" />
        <div className="absolute bottom-6 right-10 w-[450px] h-[300px] bg-[#4F918B]/6 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 space-y-8 sm:space-y-12">
        {/* ── Section Header ── */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          {/* Eyebrow Pill */}
          <div className="video-head-elem inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#C7A978]/30 bg-[#FCFAF6] text-[#C7A978] text-[11px] sm:text-xs font-mono tracking-[0.2em] uppercase shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4F918B] animate-pulse" />
            Complete Event Responsibility
          </div>

          {/* Heading */}
          <h2 className="video-head-elem text-2xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-[#292825] leading-[1.18]">
            More Than D&eacute;cor.{" "}
            <span className="text-[#4F918B] italic font-normal">
              We Manage Every Moment
            </span>
            .
          </h2>

          {/* Supporting Description */}
          <p className="video-head-elem text-xs sm:text-sm md:text-base text-[#6F6A61] font-light leading-relaxed max-w-2xl mx-auto">
            From the first idea to the final celebration, one team brings every detail together.
          </p>
        </div>

        {/* ── Wide Cinematic Video Showcase ── */}
        <div className="video-frame-wrap relative max-w-5xl mx-auto">
          {/* Ambient Outer Glow */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-[#C7A978]/20 via-[#4F918B]/15 to-[#C7A978]/20 rounded-3xl sm:rounded-[2rem] blur-xl opacity-70 pointer-events-none" />

          {/* Video Container (16:9 Aspect Ratio) */}
          <div className="relative aspect-[16/9] w-full max-h-[550px] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#DED6C9] bg-[#1A1816] shadow-2xl">
            <video
              ref={videoRef}
              src="/videos/iragu-complete-events.mp4"
              poster="/videos/iragu-complete-events-poster.jpg"
              playsInline
              muted
              loop
              preload="metadata"
              className="w-full h-full object-cover select-none"
              aria-label="Iragu Events — Complete Event Planning and Execution"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />

            {/* Play overlay button if paused before start */}
            {!isPlaying && (
              <button
                onClick={togglePlay}
                aria-label="Play video"
                className="absolute inset-0 z-20 flex items-center justify-center bg-black/30 backdrop-blur-[2px] transition-all hover:bg-black/40 group"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#FCFAF6]/95 border border-[#C7A978] flex items-center justify-center text-[#292825] shadow-2xl group-hover:scale-110 group-hover:text-[#4F918B] transition-transform">
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1" />
                </div>
              </button>
            )}

            {/* Subtle Gradient Overlays for Controls Readability */}
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/75 via-black/25 to-transparent pointer-events-none z-10" />

            {/* Bottom Controls Bar */}
            <div className="absolute inset-x-0 bottom-0 z-20 p-4 sm:p-6 flex items-center justify-between gap-4">
              {/* Left Label */}
              <div className="flex items-center gap-2 text-white/90 text-[11px] sm:text-xs font-mono tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-[#4F918B] animate-pulse" />
                <span className="font-semibold text-[#FCFAF6]">Iragu Events</span>
                <span className="hidden sm:inline text-white/40">&bull;</span>
                <span className="hidden sm:inline text-white/70">Complete Coordination</span>
              </div>

              {/* Right Interactive Controls */}
              <div className="flex items-center gap-2 sm:gap-3">
                {/* Mute / Unmute Button */}
                <button
                  onClick={toggleMute}
                  aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/20 bg-black/50 backdrop-blur-md text-white/85 hover:text-white hover:border-[#C7A978] text-[11px] font-mono tracking-wider transition-colors"
                >
                  {isMuted ? (
                    <>
                      <VolumeX className="w-3.5 h-3.5 text-[#C7A978]" />
                      <span className="hidden sm:inline">Muted</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-3.5 h-3.5 text-[#4F918B]" />
                      <span className="hidden sm:inline">Sound On</span>
                    </>
                  )}
                </button>

                {/* Pause / Play Button */}
                <button
                  onClick={togglePlay}
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/20 bg-black/50 backdrop-blur-md text-white/85 hover:text-white hover:border-[#C7A978] text-[11px] font-mono tracking-wider transition-colors"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-3.5 h-3.5 text-[#C7A978]" />
                      <span className="hidden sm:inline">Pause</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 text-[#C7A978]" />
                      <span className="hidden sm:inline">Play</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

