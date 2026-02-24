'use client';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { MessageCircle, ChevronDown, Star, Award } from 'lucide-react';

const specialisations = [
  { label: 'Neuro Rehabilitation', sub: 'Stroke \u00B7 Parkinson\u2019s \u00B7 CP' },
  { label: 'Ortho & Sports',       sub: 'Joints \u00B7 Spine \u00B7 Post-op' },
  { label: 'Geriatric Care',       sub: 'Mobility \u00B7 Fall Prevention' },
  { label: 'Yoga Therapy',         sub: 'Certified Yoga Practitioner' },
];

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onTimeUpdate = () => {
      if (video.currentTime >= video.duration - 3) {
        video.currentTime = 0;
        video.play();
      }
    };
    video.addEventListener('timeupdate', onTimeUpdate);
    return () => video.removeEventListener('timeupdate', onTimeUpdate);
  }, []);

  return (
    <section
      className="relative overflow-hidden flex items-center"
      style={{ height: '100svh', minHeight: '700px' }}
    >
      {/* ── Video Background ─────────────────────────────────── */}
      <div className="absolute inset-0 z-0 animate-fade-in anim-both">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          preload="auto"
          style={{
            position: 'absolute',
            top: '-17%',
            width: '100%',
            height: '134%',
            objectFit: 'cover',
            filter: 'brightness(0.5) saturate(1.15)',
          }}
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        {/* Directional overlays */}
        <div className="absolute inset-0 bg-hero-overlay-left" />
        <div className="absolute inset-0 bg-hero-overlay-top" />
      </div>

      {/* ── Ambient Orbs ────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
        <div className="orb orb-coral"  style={{ top: '15%',  right: '8%',  width: '18rem', height: '18rem' }} />
        <div className="orb orb-orange" style={{ bottom: '20%', right: '18%', width: '24rem', height: '24rem' }} />
        <div className="orb orb-cream"  style={{ top: '40%',  left: '45%',  width: '16rem', height: '16rem' }} />
        <div className="deco-vline"     style={{ left: '42%', top: '5%', height: '90%' }} />
      </div>

      {/* ── Main Content ────────────────────────────────────── */}
      <div
        className="section-container relative flex items-center h-full"
        style={{ zIndex: 10, paddingTop: '5rem' }}
      >
        <div style={{ maxWidth: '44rem' }}>

          {/* Eyebrow badge */}
          <div className="badge-coral animate-fade-up anim-both animation-delay-300">
            <span className="badge-dot" />
            Advanced Physiotherapy & Sports Rehabilitation in Pune
          </div>

          {/* Headline */}
          <div className="animate-fade-up anim-both animation-delay-[550ms] mt-8">
            <h1 className="font-display" style={{ color: 'white', lineHeight: 1.06, margin: 0 }}>
              <span
                className="block font-normal"
                style={{ fontSize: 'clamp(2.2rem,4.8vw,3.5rem)', color: 'rgba(255,255,255,0.87)', letterSpacing: '-0.01em' }}
              >
                Dr. Kavita Gandhi&apos;s
              </span>
              <span
                className="block font-bold"
                style={{ fontSize: 'clamp(2.8rem,6vw,4.8rem)', letterSpacing: '-0.02em', marginTop: '0.1rem' }}
              >
                Safehands Physio
              </span>
              <span
                className="block font-normal italic font-display"
                style={{ fontSize: 'clamp(1.5rem,3vw,2.4rem)', color: 'var(--venturi-orange)', letterSpacing: '0.01em' }}
              >
                &amp; Rehabilitation Clinic
              </span>
            </h1>

            {/* Gradient accent line */}
            <div className="accent-line animate-line-grow anim-both animation-delay-[500ms] mt-5 mb-7" />
          </div>

          {/* Subheadline */}
          <p
            className="font-editorial italic font-light leading-relaxed animate-fade-up anim-both animation-delay-[750ms]"
            style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'clamp(1.05rem,1.9vw,1.3rem)', maxWidth: '34rem', marginBottom: '2.5rem' }}
          >
            Evidence-based rehabilitation focused on eliminating the root cause of pain — not just temporary relief.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-6 animate-fade-up anim-both animation-delay-[950ms]" style={{ marginBottom: '3rem' }}>
            <a
              href="https://wa.me/917972958525"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-coral font-body flex items-center justify-center gap-2"
            >
              <MessageCircle size={16} />
              Book an Appointment
            </a>
            <Link href="#services" className="btn-ghost-white font-body">
              <span className="btn-bar" />
              Explore our services
            </Link>
          </div>

          {/* Social Proof Stats */}
          <div className="flex flex-wrap items-center gap-6 animate-fade-up anim-both animation-delay-[1100ms]">

            {/* Stars */}
            <div className="flex flex-col">
              <div className="flex gap-0.5 mb-1">
                {[0,1,2,3,4].map(i => (
                  <Star key={i} size={13} style={{ fill: 'var(--venturi-orange)', color: 'var(--venturi-orange)' }} />
                ))}
              </div>
              <span className="font-body" style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.48)', letterSpacing: '0.06em' }}>
                Patient-rated 5 stars
              </span>
            </div>

            <div className="stat-divider" />

            {/* Qualification */}
            <div className="flex flex-col">
              <span className="font-display font-semibold text-white" style={{ fontSize: '1.05rem' }}>
                MPTh/MPT
              </span>
              <span className="font-body" style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.48)', letterSpacing: '0.06em' }}>
                Musculoskeletal Sciences
              </span>
            </div>

            <div className="stat-divider" />

            {/* Home visits */}
            <div className="flex items-center gap-2">
              <Award size={16} style={{ color: 'var(--venturi-coral)', flexShrink: 0 }} />
              <div className="flex flex-col">
                <span className="font-display font-semibold text-white" style={{ fontSize: '0.875rem' }}>
                  Home Visits
                </span>
                <span className="font-body" style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.48)' }}>
                  Available on request
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Right Glass Panel (xl only) ──────────────────────── */}
      <div
        className="glass-panel hidden xl:flex animate-fade-up anim-both animation-delay-[750ms]"
        style={{
          position: 'absolute',
          right: '2.5rem',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          padding: '1.75rem',
          width: '20rem',
          flexDirection: 'column',
          gap: '1.1rem',
        }}
      >
        <p
          className="font-body m-0"
          style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.42)', textTransform: 'uppercase', letterSpacing: '0.18em', fontWeight: 500 }}
        >
          Specialisations
        </p>

        {specialisations.map((item) => (
          <div key={item.label} className="flex items-start gap-2.5">
            <span
              className="shrink-0 rounded-full"
              style={{ marginTop: '0.35rem', width: 6, height: 6, background: 'var(--venturi-coral)' }}
            />
            <div>
              <p className="font-body m-0 text-white font-medium" style={{ fontSize: '0.8rem', lineHeight: 1.3 }}>
                {item.label}
              </p>
              <p className="font-body m-0" style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>
                {item.sub}
              </p>
            </div>
          </div>
        ))}

        <div style={{ height: 1, background: 'rgba(255,255,255,0.1)', margin: '0.25rem 0' }} />

        <a
          href="tel:7972958525"
          className="font-body text-white no-underline text-center rounded-xl transition-opacity duration-300 hover:opacity-90"
          style={{
            display: 'block',
            fontSize: '0.68rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            padding: '0.75rem 1rem',
            background: 'linear-gradient(135deg, var(--venturi-coral), var(--venturi-orange))',
          }}
        >
          Call Now
        </a>
      </div>

      {/* ── Scroll Indicator ─────────────────────────────────── */}
      <div className="scroll-indicator font-body">
        <span style={{ fontSize: '0.58rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.22em', textTransform: 'uppercase' }}>
          Scroll
        </span>
        <ChevronDown size={13} style={{ color: 'rgba(255,255,255,0.35)' }} />
      </div>

    </section>
  );
}