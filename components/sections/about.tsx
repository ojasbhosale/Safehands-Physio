'use client';

import Image from 'next/image';
import { useEffect, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2, Briefcase, GraduationCap, MapPin } from 'lucide-react';

/* ── Data ─────────────────────────────────────────────────────────── */
const clinicImages = [
  { src: '/about/img1.jpg', alt: 'Safehands Physio clinic interior' },
  { src: '/about/img2.jpg', alt: 'Rehabilitation equipment' },
  { src: '/about/img3.jpg', alt: 'Treatment room' },
  { src: '/about/img4.jpg', alt: 'Patient therapy session' },
  { src: '/about/img5.jpg', alt: 'Clinic reception area' },
];

const pillars = [
  'Accurate clinical assessment',
  'Root-cause focused therapy',
  'Evidence-based rehabilitation protocols',
  'Long-term functional recovery',
];

const experiences = [
  { role: 'Physiotherapist',            org: 'Ruby Hall Clinic' },
  { role: 'Consulting Physiotherapist', org: 'VLCC Wellness' },
  { role: 'Consulting Physiotherapist', org: 'Vibes Healthcare' },
  { role: 'Consulting Physiotherapist', org: 'HealthifyMe' },
];

const stats = [
  { num: '2018', label: 'Established' },
  { num: '8+',   label: 'Yrs experience' },
  { num: '500+', label: 'Patients treated' },
];

/* ─────────────────────────────────────────────────────────────────── */

export default function About() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = clinicImages.length;

  const next = useCallback(() => setActive(p => (p + 1) % total), [total]);
  const prev = useCallback(() => setActive(p => (p - 1 + total) % total), [total]);

  /* Auto-advance every 4 s, pause on hover/touch */
  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [next, paused]);

  return (
    <section id="about" className="section-bg-cream overflow-hidden" style={{ paddingTop: 'clamp(3.5rem,8vw,6rem)', paddingBottom: 'clamp(3.5rem,8vw,6rem)' }}>
      <div className="section-container">

        {/* ══════════════════════════════════════════════════════
            PART 1 – CLINIC
        ══════════════════════════════════════════════════════ */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center" style={{ marginBottom: 'clamp(3rem,8vw,6rem)' }}>

          {/* ── Text column ─────────────────────────────────── */}
          <div>
            <span className="section-eyebrow animate-fade-up anim-both animation-delay-150">
              <span style={{ display: 'inline-block', width: '1.25rem', height: '1px', background: 'var(--venturi-coral)' }} />
              Est. 2018 · Kothrud, Pune
            </span>

            <h2
              className="section-title animate-fade-up anim-both animation-delay-300"
              style={{ lineHeight: 1.1, marginTop: '0.5rem', marginBottom: '1rem' }}
            >
              About{' '}
              <span className="italic font-normal" style={{ color: 'var(--venturi-coral)' }}>
                Safehands
              </span>{' '}
              Physio
            </h2>

            <div
              className="accent-line animate-line-grow anim-both animation-delay-450"
              style={{ marginLeft: 0, transformOrigin: 'left', marginBottom: '1.25rem' }}
            />

            <p
              className="section-subtitle animate-fade-up anim-both animation-delay-450"
              style={{ marginBottom: '0.875rem' }}
            >
              Established in 2018, Safehands Physio is a dedicated Trauma &amp; Orthopaedic
              Physiotherapy clinic in Kothrud, Pune — a trusted rehabilitation center known for
              individualized treatment plans and optimal patient experience.
            </p>

            <p
              className="font-body animate-fade-up anim-both animation-delay-600"
              style={{ color: 'var(--venturi-slate)', lineHeight: 1.7, fontSize: '0.9rem', marginBottom: '1.5rem' }}
            >
              The clinic has steadily grown into a comprehensive recovery hub where every
              treatment plan is built on evidence, precision, and the patient&apos;s unique recovery journey.
            </p>

            {/* Pillars */}
            <div className="animate-fade-up anim-both animation-delay-750" style={{ marginBottom: '1.75rem' }}>
              <p
                className="font-body font-medium"
                style={{ fontSize: '0.63rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--venturi-slate)', marginBottom: '0.75rem' }}
              >
                Every treatment plan is structured around
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {pillars.map((p, i) => (
                  <li
                    key={p}
                    className="flex items-start gap-2.5 font-body animate-fade-up anim-both"
                    style={{ color: 'var(--venturi-navy)', fontSize: '0.88rem', lineHeight: 1.4, animationDelay: `${800 + i * 80}ms` }}
                  >
                    <CheckCircle2 size={15} style={{ color: 'var(--venturi-coral)', flexShrink: 0, marginTop: '0.1rem' }} />
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            {/* Stats — responsive row */}
            <div
              className="animate-fade-up anim-both animation-delay-[1100ms]"
              style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem' }}
            >
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="glass-panel-light"
                  style={{ padding: '0.75rem 1.1rem', display: 'flex', flexDirection: 'column', minWidth: 0, flex: '1 1 auto' }}
                >
                  <span className="font-display font-bold" style={{ fontSize: 'clamp(1.2rem,4vw,1.5rem)', color: 'var(--venturi-coral)', lineHeight: 1 }}>
                    {s.num}
                  </span>
                  <span className="font-body" style={{ fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--venturi-slate)', marginTop: '0.25rem' }}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Carousel column ─────────────────────────────── */}
          <div
            className="animate-fade-up anim-both animation-delay-600"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={() => setPaused(true)}
            onTouchEnd={() => setPaused(false)}
          >
            {/* Image frame */}
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                aspectRatio: '4/3',
                boxShadow: '0 24px 56px -10px rgba(26,32,44,0.18)',
              }}
            >
              {/* Images — crossfade via opacity */}
              {clinicImages.map((img, i) => (
                <div
                  key={img.src}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: i === active ? 1 : 0,
                    transition: 'opacity 0.75s ease',
                    zIndex: i === active ? 1 : 0,
                  }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    priority={i === 0}
                  />
                </div>
              ))}

              {/* Scrim */}
              <div
                style={{
                  position: 'absolute', inset: 0, zIndex: 2,
                  background: 'linear-gradient(to top, rgba(26,32,44,0.6) 0%, transparent 40%)',
                }}
              />

              {/* Location tag */}
              <div
                className="absolute glass-panel flex items-center gap-1.5"
                style={{ bottom: '0.875rem', left: '0.875rem', zIndex: 3, padding: '0.35rem 0.75rem' }}
              >
                <MapPin size={11} style={{ color: 'var(--venturi-coral)' }} />
                <span className="font-body text-white" style={{ fontSize: '0.65rem', letterSpacing: '0.06em' }}>
                  Kothrud, Pune
                </span>
              </div>

              {/* Prev / Next */}
              <button
                aria-label="Previous"
                onClick={prev}
                className="absolute glass-panel transition-opacity duration-200 hover:opacity-80"
                style={{
                  top: '50%', left: '0.75rem', transform: 'translateY(-50%)',
                  zIndex: 3, borderRadius: '50%', padding: '0.4rem', lineHeight: 0, border: 'none', cursor: 'pointer',
                }}
              >
                <ChevronLeft size={16} color="white" />
              </button>
              <button
                aria-label="Next"
                onClick={next}
                className="absolute glass-panel transition-opacity duration-200 hover:opacity-80"
                style={{
                  top: '50%', right: '0.75rem', transform: 'translateY(-50%)',
                  zIndex: 3, borderRadius: '50%', padding: '0.4rem', lineHeight: 0, border: 'none', cursor: 'pointer',
                }}
              >
                <ChevronRight size={16} color="white" />
              </button>

              {/* Dot indicators — inside frame bottom-right */}
              <div
                style={{
                  position: 'absolute', bottom: '0.875rem', right: '0.875rem',
                  zIndex: 3, display: 'flex', gap: '0.35rem', alignItems: 'center',
                }}
              >
                {clinicImages.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Slide ${i + 1}`}
                    onClick={() => setActive(i)}
                    style={{
                      width: i === active ? '1.25rem' : '0.35rem',
                      height: '0.35rem',
                      borderRadius: '99px',
                      background: i === active ? 'var(--venturi-coral)' : 'rgba(255,255,255,0.45)',
                      border: 'none',
                      padding: 0,
                      cursor: 'pointer',
                      transition: 'width 0.3s ease, background 0.3s ease',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Divider ──────────────────────────────────────────── */}
        <div
          style={{
            height: '1px',
            background: 'linear-gradient(to right, transparent, rgba(245,101,101,0.22), transparent)',
            marginBottom: 'clamp(3rem,8vw,6rem)',
          }}
        />

        {/* ══════════════════════════════════════════════════════
            PART 2 – DR. KAVITA GANDHI
        ══════════════════════════════════════════════════════ */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* Portrait — stacks below bio on mobile */}
          <div className="order-2 lg:order-1 animate-fade-up anim-both animation-delay-300">
            <div className="relative" style={{ maxWidth: '22rem', margin: '0 auto' }}>

              {/* Offset decorative card */}
              <div
                className="absolute"
                style={{
                  inset: 0,
                  background: 'linear-gradient(135deg, rgba(245,101,101,0.11), rgba(237,137,54,0.09))',
                  borderRadius: '1.25rem',
                  transform: 'translate(10px, 10px)',
                }}
              />

              {/* Portrait */}
              <div
                className="relative rounded-2xl overflow-hidden hover-lift"
                style={{
                  aspectRatio: '3/4',
                  boxShadow: '0 28px 56px -10px rgba(26,32,44,0.2)',
                }}
              >
                <Image
                  src="/about/dr-kavita.jpg"
                  alt="Dr. Kavita Gandhi – Physiotherapist, Safehands Physio"
                  fill
                  className="object-cover object-top"
                />

                {/* Name overlay */}
                <div
                  style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    background: 'linear-gradient(to top, rgba(26,32,44,0.88) 0%, transparent 60%)',
                    padding: '1.75rem 1.25rem 1.25rem',
                  }}
                >
                  <p className="font-display font-bold text-white m-0" style={{ fontSize: 'clamp(1rem,3vw,1.2rem)', lineHeight: 1.2 }}>
                    Dr. Kavita Gandhi
                  </p>
                  <p className="font-body m-0 mt-1" style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.58)', letterSpacing: '0.09em' }}>
                    MPTh · Musculoskeletal Sciences
                  </p>
                </div>
              </div>

              {/* Floating badge */}
              <div
                className="glass-panel absolute"
                style={{
                  top: '-1rem', right: '-1rem',
                  padding: '0.6rem 0.9rem',
                  textAlign: 'center',
                  animation: 'float 8s ease-in-out infinite',
                  zIndex: 5,
                }}
              >
                <span className="font-display font-bold block" style={{ fontSize: '1.3rem', lineHeight: 1, color: 'var(--venturi-orange)' }}>
                  8+
                </span>
                <span className="font-body block" style={{ fontSize: '0.55rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '0.2rem', color: 'rgba(255,255,255,0.58)' }}>
                  Yrs exp.
                </span>
              </div>
            </div>
          </div>

          {/* Bio column */}
          <div className="order-1 lg:order-2">
            <span className="section-eyebrow animate-fade-up anim-both animation-delay-150">
              <span style={{ display: 'inline-block', width: '1.25rem', height: '1px', background: 'var(--venturi-coral)' }} />
              Meet the Expert
            </span>

            <h2
              className="section-title animate-fade-up anim-both animation-delay-300"
              style={{ lineHeight: 1.1, marginTop: '0.5rem', marginBottom: '0.5rem' }}
            >
              Dr. Kavita{' '}
              <span className="italic font-normal" style={{ color: 'var(--venturi-coral)' }}>
                Gandhi
              </span>
            </h2>

            <p
              className="font-editorial italic animate-fade-up anim-both animation-delay-450"
              style={{ fontSize: 'clamp(0.92rem,1.6vw,1.1rem)', color: 'var(--venturi-slate)', fontWeight: 300, marginBottom: '0.875rem' }}
            >
              Sports &amp; Musculoskeletal Physiotherapist · 8 Years of Clinical Experience
            </p>

            <div
              className="accent-line animate-line-grow anim-both animation-delay-450"
              style={{ marginLeft: 0, transformOrigin: 'left', marginBottom: '1.25rem' }}
            />

            <p
              className="font-body animate-fade-up anim-both animation-delay-600"
              style={{ color: 'var(--venturi-slate)', lineHeight: 1.7, fontSize: '0.9rem', marginBottom: '0.75rem' }}
            >
              Dr. Kavita Gandhi is a highly skilled physiotherapist specialising in sports injury
              rehabilitation and musculoskeletal care. She completed her Master&apos;s in Musculoskeletal
              Sciences from <strong style={{ color: 'var(--venturi-navy)' }}>DY Patil University</strong> in
              2018 and brings 8 years of clinical experience to her practice.
            </p>

            <p
              className="font-body animate-fade-up anim-both animation-delay-750"
              style={{ color: 'var(--venturi-slate)', lineHeight: 1.7, fontSize: '0.9rem', marginBottom: '1.5rem' }}
            >
              Known for her systematic treatment approach, sharp diagnostic skills, and ability to
              design customised rehabilitation programs tailored to individual recovery goals.
            </p>

            {/* Experience list */}
            <div className="animate-fade-up anim-both animation-delay-[900ms]">
              <p
                className="font-body font-medium flex items-center gap-2"
                style={{ fontSize: '0.63rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--venturi-slate)', marginBottom: '0.75rem' }}
              >
                <Briefcase size={12} style={{ color: 'var(--venturi-coral)' }} />
                Professional Experience
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {experiences.map((exp, i) => (
                  <div
                    key={exp.org}
                    className="glass-panel-light flex items-center gap-3 hover-lift animate-fade-up anim-both"
                    style={{ padding: '0.65rem 1rem', animationDelay: `${950 + i * 80}ms` }}
                  >
                    <div
                      className="shrink-0 rounded-full flex items-center justify-center"
                      style={{ width: '1.75rem', height: '1.75rem', background: 'rgba(245,101,101,0.1)' }}
                    >
                      <Briefcase size={11} style={{ color: 'var(--venturi-coral)' }} />
                    </div>
                    <div style={{ minWidth: 0 }}>
                      <p className="font-body font-medium m-0" style={{ fontSize: '0.82rem', color: 'var(--venturi-navy)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {exp.org}
                      </p>
                      <p className="font-body m-0" style={{ fontSize: '0.68rem', color: 'var(--venturi-slate)', marginTop: '0.1rem' }}>
                        {exp.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education chip */}
            <div
              className="flex items-start gap-3 animate-fade-up anim-both animation-delay-[1350ms]"
              style={{
                marginTop: '1rem',
                padding: '0.875rem 1rem',
                borderRadius: '0.75rem',
                background: 'linear-gradient(135deg, rgba(245,101,101,0.07), rgba(237,137,54,0.06))',
                border: '1px solid rgba(245,101,101,0.14)',
              }}
            >
              <GraduationCap size={16} style={{ color: 'var(--venturi-coral)', flexShrink: 0, marginTop: '0.1rem' }} />
              <div>
                <p className="font-body font-medium m-0" style={{ fontSize: '0.8rem', color: 'var(--venturi-navy)' }}>
                  MPTh – Musculoskeletal Sciences, DY Patil University (2018)
                </p>
                <p className="font-body m-0 mt-0.5" style={{ fontSize: '0.68rem', color: 'var(--venturi-slate)' }}>
                  Certified Yoga Practitioner
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}