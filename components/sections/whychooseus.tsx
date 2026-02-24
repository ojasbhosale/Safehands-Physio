'use client';

import { useState } from 'react';
import {
  GraduationCap,
  Target,
  UserCheck,
  FlaskConical,
  Zap,
  Star,
  Heart,
  ArrowRight,
} from 'lucide-react';

/* ── Reasons data ──────────────────────────────────────────────────── */
const reasons = [
  {
    icon: GraduationCap,
    num: '01',
    title: 'Specialized Expertise',
    body: 'Led by Dr. Kavita Gandhi (MPTh – Musculoskeletal Sciences) with 8+ years of clinical experience in sports and musculoskeletal physiotherapy.',
    accent: false,
  },
  {
    icon: Target,
    num: '02',
    title: 'Root-Cause Focused Treatment',
    body: "We don't just reduce pain. We identify the underlying cause and build a corrective rehabilitation plan for long-term recovery.",
    accent: true, // hero card — highlighted
  },
  {
    icon: UserCheck,
    num: '03',
    title: 'Personalized Recovery Programs',
    body: 'No generic protocols. Every treatment plan is tailored to your injury, body mechanics, and recovery goals.',
    accent: false,
  },
  {
    icon: FlaskConical,
    num: '04',
    title: 'Evidence-Based Clinical Approach',
    body: 'All therapies follow modern physiotherapy research and structured rehabilitation principles.',
    accent: false,
  },
  {
    icon: Zap,
    num: '05',
    title: 'Advanced Therapy Techniques',
    body: 'Manual therapy · Spine mobilization · Sports taping · Electro & heat therapy · Range of motion and balance training.',
    accent: false,
  },
  {
    icon: Heart,
    num: '07',
    title: 'Patient-Centered Care',
    body: 'Clear communication. Progress tracking. Focused one-on-one attention every session.',
    accent: false,
  },
];

/* ── Trust stat ─────────────────────────────────────────────────────── */
const trustStats = [
  { val: '4.9★', label: 'Average rating' },
  { val: '45+',  label: 'Verified reviews' },
  { val: '2018', label: 'Trusted since' },
];

/* ─────────────────────────────────────────────────────────────────── */

export default function WhyChooseUs() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section
      id="why-choose-us"
      className="section-bg-cream overflow-hidden"
      style={{ paddingTop: 'clamp(3.5rem,8vw,6rem)', paddingBottom: 'clamp(3.5rem,8vw,6rem)' }}
    >
      <div className="section-container">

        {/* ── Header ───────────────────────────────────────────────── */}
        <div
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"
          style={{ marginBottom: 'clamp(2.5rem,6vw,4rem)' }}
        >
          <div style={{ maxWidth: '38rem' }}>
            <span className="section-eyebrow animate-fade-up anim-both animation-delay-150">
              <span style={{ display: 'inline-block', width: '1.25rem', height: '1px', background: 'var(--venturi-coral)' }} />
              Why patients choose us
            </span>

            <h2
              className="section-title animate-fade-up anim-both animation-delay-300"
              style={{ lineHeight: 1.08, marginTop: '0.5rem', marginBottom: 0 }}
            >
              Why Choose{' '}
              <span className="italic font-normal" style={{ color: 'var(--venturi-coral)' }}>
                Safehands
              </span>{' '}
              Physio
            </h2>
          </div>

          {/* Trust strip — right-aligned on desktop */}
          <div
            className="animate-fade-up anim-both animation-delay-450 flex items-center gap-px self-start lg:self-end"
            style={{
              borderRadius: '0.875rem',
              overflow: 'hidden',
              border: '1px solid rgba(245,101,101,0.18)',
              flexShrink: 0,
            }}
          >
            {trustStats.map((s, i) => (
              <div
                key={s.label}
                style={{
                  padding: '0.75rem 1.1rem',
                  background: i === 1 ? 'linear-gradient(135deg,rgba(245,101,101,0.1),rgba(237,137,54,0.08))' : 'rgba(255,248,240,0.7)',
                  borderRight: i < trustStats.length - 1 ? '1px solid rgba(245,101,101,0.12)' : 'none',
                  textAlign: 'center',
                  minWidth: '5rem',
                }}
              >
                <p className="font-display font-bold m-0" style={{ fontSize: 'clamp(1.1rem,2.5vw,1.35rem)', color: 'var(--venturi-coral)', lineHeight: 1 }}>
                  {s.val}
                </p>
                <p className="font-body m-0 mt-1" style={{ fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--venturi-slate)' }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Card grid ────────────────────────────────────────────── */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-4
            mb-12
          "
        >
          {reasons.map((r, i) => {
            const Icon = r.icon;
            const isHov = hovered === r.num;

            return (
              <div
                key={r.num}
                className="animate-fade-up anim-both"
                onMouseEnter={() => setHovered(r.num)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  animationDelay: `${400 + i * 80}ms`,
                  position: 'relative',
                  borderRadius: '1rem',
                  padding: 'clamp(1.1rem,2.5vw,1.5rem)',
                  border: r.accent
                    ? '1px solid rgba(245,101,101,0.35)'
                    : isHov
                      ? '1px solid rgba(245,101,101,0.28)'
                      : '1px solid rgba(74,85,104,0.13)',
                  background: r.accent
                    ? 'linear-gradient(145deg, var(--venturi-navy) 0%, #2a3448 100%)'
                    : isHov
                      ? 'rgba(255,248,240,0.95)'
                      : 'rgba(255,255,255,0.7)',
                  backdropFilter: 'blur(8px)',
                  boxShadow: r.accent
                    ? '0 20px 48px -8px rgba(26,32,44,0.25), inset 0 1px 0 rgba(255,255,255,0.06)'
                    : isHov
                      ? '0 16px 40px -8px rgba(245,101,101,0.12)'
                      : '0 2px 12px -4px rgba(26,32,44,0.07)',
                  transition: 'border-color 0.35s ease, box-shadow 0.35s ease, background 0.35s ease',
                  cursor: 'default',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                {/* Top row — icon + number */}
                <div className="flex items-start justify-between">
                  <div
                    className="flex items-center justify-center rounded-xl shrink-0"
                    style={{
                      width: '2.5rem',
                      height: '2.5rem',
                      background: r.accent
                        ? 'rgba(245,101,101,0.18)'
                        : isHov
                          ? 'linear-gradient(135deg,rgba(245,101,101,0.14),rgba(237,137,54,0.1))'
                          : 'rgba(245,101,101,0.08)',
                      transition: 'background 0.35s ease',
                    }}
                  >
                    <Icon
                      size={17}
                      style={{
                        color: 'var(--venturi-coral)',
                        transition: 'color 0.3s ease',
                      }}
                    />
                  </div>

                  <span
                    className="font-display font-bold"
                    style={{
                      fontSize: '0.62rem',
                      letterSpacing: '0.14em',
                      color: r.accent
                        ? 'rgba(255,255,255,0.2)'
                        : isHov
                          ? 'var(--venturi-coral)'
                          : 'rgba(74,85,104,0.3)',
                      transition: 'color 0.3s ease',
                    }}
                  >
                    {r.num}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3
                    className="font-display font-semibold"
                    style={{
                      fontSize: 'clamp(0.9rem,1.6vw,1.02rem)',
                      lineHeight: 1.28,
                      margin: '0 0 0.5rem',
                      color: r.accent ? 'white' : 'var(--venturi-navy)',
                    }}
                  >
                    {r.title}
                  </h3>

                  <p
                    className="font-body"
                    style={{
                      fontSize: '0.8rem',
                      lineHeight: 1.65,
                      margin: 0,
                      color: r.accent ? 'rgba(255,255,255,0.55)' : 'var(--venturi-slate)',
                    }}
                  >
                    {r.body}
                  </p>
                </div>

                {/* Arrow — appears on hover (or always on accent) */}
                <div
                  className="flex items-center gap-1.5 font-body mt-auto"
                  style={{
                    fontSize: '0.68rem',
                    letterSpacing: '0.06em',
                    color: r.accent ? 'var(--venturi-coral)' : 'var(--venturi-coral)',
                    opacity: 1,
                    transform: r.accent || isHov ? 'translateX(0)' : 'translateX(-6px)',
                    transition: 'opacity 0.35s ease, transform 0.35s ease',
                  }}
                >
                  Learn more <ArrowRight size={12} />
                </div>
              </div>
            );
          })}
        </div>

        {/* ── "Trusted since" banner ────────────────────────────────── */}
        <div
          className="animate-fade-up anim-both animation-delay-[900ms]"
          style={{
            borderRadius: '1rem',
            overflow: 'hidden',
            position: 'relative',
            background: 'linear-gradient(135deg, var(--venturi-navy) 0%, #2a3448 100%)',
            padding: 'clamp(1.5rem,4vw,2.25rem) clamp(1.25rem,4vw,2.5rem)',
            border: '1px solid rgba(255,255,255,0.07)',
            boxShadow: '0 24px 56px -10px rgba(26,32,44,0.22)',
          }}
        >
          {/* Decorative orb */}
          <div
            style={{
              position: 'absolute',
              top: '-3rem', right: '-3rem',
              width: '14rem', height: '14rem',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(245,101,101,0.12) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '-2rem', left: '30%',
              width: '10rem', height: '10rem',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(237,137,54,0.08) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          <div
            className="relative flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8"
            style={{ zIndex: 1 }}
          >
            {/* Stars + copy */}
            <div style={{ flex: 1 }}>
              {/* Stars row */}
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    style={{ fill: 'var(--venturi-orange)', color: 'var(--venturi-orange)' }}
                  />
                ))}
                <span
                  className="font-body font-medium ml-2"
                  style={{ fontSize: '0.78rem', color: 'var(--venturi-orange)', alignSelf: 'center' }}
                >
                  4.9 / 5
                </span>
              </div>

              <p
                className="font-display font-semibold text-white"
                style={{ fontSize: 'clamp(1rem,2.5vw,1.25rem)', lineHeight: 1.3, margin: '0 0 0.4rem' }}
              >
                Trusted Since 2018
              </p>
              <p
                className="font-body"
                style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)', margin: 0, maxWidth: '32rem', lineHeight: 1.6 }}
              >
                Consistent 4.9★ rating with 45+ positive reviews on Practo — recognized for accurate
                diagnosis, professional care, and measurable recovery outcomes.
              </p>
            </div>

            {/* Divider */}
            <div
              className="hidden sm:block"
              style={{ width: '1px', alignSelf: 'stretch', background: 'rgba(255,255,255,0.08)' }}
            />

            {/* Platform badges */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', flexShrink: 0 }}>
              <div
                className="flex items-center gap-3"
                style={{
                  padding: '0.6rem 1.1rem',
                  borderRadius: '0.625rem',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <span className="font-body font-medium text-white" style={{ fontSize: '0.8rem' }}>
                  Practo
                </span>
                <div className="flex gap-0.5 ml-auto">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={11} style={{ fill: 'var(--venturi-orange)', color: 'var(--venturi-orange)' }} />
                  ))}
                </div>
              </div>

              <div
                className="flex items-center gap-3"
                style={{
                  padding: '0.6rem 1.1rem',
                  borderRadius: '0.625rem',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <span className="font-body font-medium" style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>
                  Google Reviews
                </span>
                <div className="flex gap-0.5 ml-auto">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={11} style={{ fill: 'rgba(237,137,54,0.45)', color: 'rgba(237,137,54,0.45)' }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}