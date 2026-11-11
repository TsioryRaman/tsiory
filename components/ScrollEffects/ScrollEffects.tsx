import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

/**
 * Scroll-linked parallax for the portfolio page.
 * Mounted client-side only (see pages/index.tsx).
 */
const ScrollEffects: React.FC = () => {
  useEffect(() => {
    const reducedMotion = window.matchMedia(REDUCED_MOTION_QUERY).matches;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Each content section slides in and fades as it enters the viewport, so
      // moving from home to projects, stack, contact, etc. feels like a change
      // of scene rather than a continuous scroll. Reduced motion keeps the
      // fade but drops the movement.
      gsap.utils.toArray<HTMLElement>("[data-section]").forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, ...(reducedMotion ? {} : { y: 110 }) },
          {
            opacity: 1,
            ...(reducedMotion ? {} : { y: 0 }),
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "top 55%",
              scrub: 1,
            },
          }
        );
      });

      if (reducedMotion) {
        return;
      }

      const hero = document.querySelector<HTMLElement>("#nav-home");
      const heroImage = document.querySelector<HTMLElement>(
        "[data-parallax='hero-image']"
      );
      const heroContent = document.querySelector<HTMLElement>(
        "[data-parallax='hero-content']"
      );

      // Hero cover moves slower than the page, with a slow zoom for depth.
      if (hero && heroImage) {
        gsap.fromTo(
          heroImage,
          { yPercent: 0, scale: 1.12 },
          {
            yPercent: 10,
            scale: 1.22,
            ease: "none",
            scrollTrigger: {
              trigger: hero,
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
          }
        );
      }

      // Hero copy lifts away and fades as the cover takes over.
      if (hero && heroContent) {
        gsap.to(heroContent, {
          y: -110,
          opacity: 0.15,
          ease: "none",
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "bottom top",
            scrub: 0.8,
          },
        });
      }

      // Section index numbers drift further than their headings, creating depth
      // without moving the text enough to disturb reading.
      gsap.utils
        .toArray<HTMLElement>("[data-parallax='section-index']")
        .forEach((el) => {
          gsap.fromTo(
            el,
            { y: 18 },
            {
              y: -18,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.6,
              },
            }
          );
        });

      gsap.utils
        .toArray<HTMLElement>("[data-parallax='section-title']")
        .forEach((el) => {
          gsap.fromTo(
            el,
            { y: 10 },
            {
              y: -10,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.6,
              },
            }
          );
        });

      // Project thumbnails slide inside their frame like a window.
      gsap.utils.toArray<HTMLElement>(".project-thumb").forEach((el) => {
        gsap.fromTo(
          el,
          { yPercent: -7, scale: 1.16 },
          {
            yPercent: 7,
            ease: "none",
            scrollTrigger: {
              trigger: el.parentElement ?? el,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.6,
            },
          }
        );
      });
    });

    const refresh = () => ScrollTrigger.refresh();
    if (document.readyState === "complete") {
      refresh();
    } else {
      window.addEventListener("load", refresh);
    }

    return () => {
      window.removeEventListener("load", refresh);
      ctx.revert();
    };
  }, []);

  return null;
};

export default ScrollEffects;
