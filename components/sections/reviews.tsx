'use client';

import { useState, useEffect, useCallback } from 'react';
import { Star, Quote, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';

/* ── Review data ──────────────────────────────────────────────────── */
const reviews = [
  {
    id: 1,
    name: 'Vivek Vanage',
    time: '4 months ago',
    rating: 5,
    initials: 'VV',
    color: '#F56565',
    text: 'Dr. Kavita gives very efficient personal treatment. She has very good knowledge and experience about physiotherapy. She takes personal care of her patients. Thanks.',
    short: false,
  },
  {
    id: 2,
    name: 'Sanjay Thakur',
    time: '1 month ago',
    rating: 5,
    initials: 'ST',
    color: '#ED8936',
    text: 'I had severe back pain... Pain was terrible so we contacted Dr. Kavita Gandhi. She\'s absolutely professional and kind hearted. I took only 5 sessions from her and my pain has gone completely. She\'s very knowledgeable and very clear about her treatment plan and diagnosis. I would recommend her for everyone. Thank you mam.',
    short: false,
  },
  {
    id: 3,
    name: 'Girish Joshi',
    time: '5 months ago',
    rating: 5,
    initials: 'GJ',
    color: '#4A5568',
    text: 'Best doctor. Very knowledgeable. She has solution for all my issues. I will recommend her to everyone. Thankful to you.',
    short: true,
  },
  {
    id: 4,
    name: 'Chinmayee Nilakhe',
    time: '11 months ago',
    rating: 5,
    initials: 'CN',
    color: '#F56565',
    text: 'We are really grateful for the physiotherapy session with my grandmother. You were caring, professional, and explained everything clearly throughout the treatment. My grandmother is already feeling more comfortable and moving better. Highly recommend for anyone seeking skilled and compassionate care!',
    short: false,
  },
  {
    id: 5,
    name: 'Vignesh Iyer',
    time: '4 years ago',
    rating: 5,
    initials: 'VI',
    color: '#ED8936',
    text: 'Dr. Kavita is a very knowledgeable professional. Sensitive to patients\' pain. Due to Covid, treatment was done only at home. Good equipment and pain relaxing method. My personal experience has been very good — 7 sessions were performed and pain is very much gone. Highly recommended.',
    short: false,
  },
  {
    id: 6,
    name: 'Ridhi Khandelwal',
    time: '2 years ago',
    rating: 5,
    initials: 'RK',
    color: '#4A5568',
    text: 'Thank you to Dr. Kavita, Safehands Physio for curing my back pain. It was a wonderful experience getting the treatment from her. I would highly recommend for any kind of physio. All the best 👍',
    short: true,
  },
];

/* ── Star row helper ───────────────────────────────────────────────── */
function Stars({ count = 5, size = 13 }: { count?: number; size?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          style={{
            fill: i < count ? 'var(--venturi-orange)' : 'rgba(255,255,255,0.12)',
            color: i < count ? 'var(--venturi-orange)' : 'rgba(255,255,255,0.12)',
          }}
        />
      ))}
    </div>
  );
}

/* ── Avatar ────────────────────────────────────────────────────────── */
function Avatar({ initials, color }: { initials: string; color: string }) {
  return (
    <div
      className="shrink-0 flex items-center justify-center rounded-full font-display font-bold"
      style={{
        width: '2.5rem',
        height: '2.5rem',
        background: `${color}22`,
        border: `1.5px solid ${color}55`,
        fontSize: '0.72rem',
        color,
        letterSpacing: '0.04em',
      }}
    >
      {initials}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────── */

export default function Reviews() {
  /* Mobile carousel state */
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = reviews.length;

  const next = useCallback(() => setActive(p => (p + 1) % total), [total]);
  const prev = useCallback(() => setActive(p => (p - 1 + total) % total), [total]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 4500);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <section
      id="reviews"
      className="section-bg-dark overflow-hidden"
      style={{ paddingTop: 'clamp(3.5rem,8vw,6rem)', paddingBottom: 'clamp(3.5rem,8vw,6rem)' }}
    >
      <div className="section-container">

        {/* ── Header ──────────────────────────────────────────────── */}
        <div
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"
          style={{ marginBottom: 'clamp(2.5rem,6vw,4rem)' }}
        >
          <div style={{ maxWidth: '40rem' }}>
            <span
              className="section-eyebrow animate-fade-up anim-both animation-delay-150"
              style={{ color: 'rgba(255,255,255,0.45)' }}
            >
              <span style={{ display: 'inline-block', width: '1.25rem', height: '1px', background: 'var(--venturi-coral)' }} />
              Patient Reviews
            </span>

            <h2
              className="section-title animate-fade-up anim-both animation-delay-300"
              style={{ lineHeight: 1.08, marginTop: '0.5rem', marginBottom: '0.75rem' }}
            >
              Hear From Those Whose{' '}
              <span className="italic font-normal" style={{ color: 'var(--venturi-coral)' }}>
                Lives Have Changed
              </span>
            </h2>

            <p
              className="section-subtitle animate-fade-up anim-both animation-delay-450"
              style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 0 }}
            >
              Through expert, compassionate physiotherapy care.
            </p>
          </div>

          {/* Rating summary — desktop only */}
          <div
            className="hidden lg:flex flex-col items-end gap-2 animate-fade-up anim-both animation-delay-450 shrink-0"
          >
            <div className="flex items-baseline gap-2">
              <span
                className="font-display font-bold"
                style={{ fontSize: '3rem', lineHeight: 1, color: 'var(--venturi-orange)' }}
              >
                4.9
              </span>
              <span
                className="font-body"
                style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.08em' }}
              >
                / 5.0
              </span>
            </div>
            <Stars size={16} />
            <span
              className="font-body"
              style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em', textTransform: 'uppercase' }}
            >
              Based on 45+ reviews
            </span>
          </div>
        </div>

        {/* ── Desktop grid (hidden on mobile) ─────────────────────── */}
        <div
          className="hidden md:grid animate-fade-up anim-both animation-delay-450"
          style={{
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'clamp(0.75rem,1.5vw,1rem)',
            marginBottom: 'clamp(2.5rem,6vw,4rem)',
          }}
        >
          {reviews.map((r, i) => (
            <ReviewCard key={r.id} review={r} delay={500 + i * 80} />
          ))}
        </div>

        {/* ── Mobile carousel (hidden on md+) ─────────────────────── */}
        <div
          className="md:hidden"
          style={{ marginBottom: 'clamp(2rem,5vw,3.5rem)' }}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          <div className="relative overflow-hidden rounded-2xl">
            {reviews.map((r, i) => (
              <div
                key={r.id}
                style={{
                  opacity: i === active ? 1 : 0,
                  position: i === active ? 'relative' : 'absolute',
                  inset: 0,
                  transition: 'opacity 0.5s ease',
                  pointerEvents: i === active ? 'auto' : 'none',
                }}
              >
                <ReviewCard review={r} delay={0} />
              </div>
            ))}
          </div>

          {/* Mobile carousel controls */}
          <div className="flex items-center justify-between mt-4 px-1">
            <button
              onClick={prev}
              className="glass-panel p-2"
              style={{ borderRadius: '50%', lineHeight: 0, border: 'none', cursor: 'pointer' }}
              aria-label="Previous review"
            >
              <ChevronLeft size={16} color="white" />
            </button>

            {/* Dots */}
            <div className="flex gap-1.5 items-center">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Review ${i + 1}`}
                  style={{
                    width: i === active ? '1.25rem' : '0.35rem',
                    height: '0.35rem',
                    borderRadius: '99px',
                    background: i === active ? 'var(--venturi-coral)' : 'rgba(255,255,255,0.25)',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    transition: 'width 0.3s ease, background 0.3s ease',
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="glass-panel p-2"
              style={{ borderRadius: '50%', lineHeight: 0, border: 'none', cursor: 'pointer' }}
              aria-label="Next review"
            >
              <ChevronRight size={16} color="white" />
            </button>
          </div>
        </div>

        {/* ── CTA Banner ──────────────────────────────────────────── */}
        <div
          className="animate-fade-up anim-both animation-delay-[900ms]"
          style={{
            position: 'relative',
            borderRadius: '1.25rem',
            overflow: 'hidden',
            padding: 'clamp(2rem,5vw,3rem) clamp(1.5rem,4vw,3rem)',
            background: 'linear-gradient(135deg, rgba(245,101,101,0.18) 0%, rgba(237,137,54,0.12) 100%)',
            border: '1px solid rgba(245,101,101,0.25)',
            textAlign: 'center',
          }}
        >
          {/* Ambient orbs */}
          <div style={{ position: 'absolute', top: '-4rem', left: '-4rem', width: '16rem', height: '16rem', borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,101,101,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: '-3rem', right: '-3rem', width: '14rem', height: '14rem', borderRadius: '50%', background: 'radial-gradient(circle, rgba(237,137,54,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />

          <div className="relative" style={{ zIndex: 1 }}>
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} style={{ fill: 'var(--venturi-orange)', color: 'var(--venturi-orange)' }} />
              ))}
            </div>

            <p
              className="font-body font-medium"
              style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '0.625rem' }}
            >
              Ready to start your recovery?
            </p>

            <h3
              className="font-display font-bold text-white"
              style={{ fontSize: 'clamp(1.4rem,3.5vw,2.25rem)', lineHeight: 1.15, marginBottom: '0.75rem' }}
            >
              Join Our Satisfied{' '}
              <span className="italic font-normal" style={{ color: 'var(--venturi-coral)' }}>
                Patients Today
              </span>
            </h3>

            <p
              className="font-editorial italic"
              style={{ fontSize: 'clamp(0.9rem,1.5vw,1.05rem)', color: 'rgba(255,255,255,0.45)', marginBottom: '2rem', fontWeight: 300 }}
            >
              Take the first step toward pain-free living — book your consultation now.
            </p>

            <a
              href="https://wa.me/917972958525"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-coral font-body inline-flex items-center gap-2"
            >
              <MessageCircle size={16} />
              Book an Appointment
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ── Review card sub-component ────────────────────────────────────── */
function ReviewCard({ review, delay }: { review: (typeof reviews)[number]; delay: number }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.text.length > 160;
  const displayText = isLong && !expanded ? review.text.slice(0, 155) + '…' : review.text;

  return (
    <div
      className="animate-fade-up anim-both card-base flex flex-col gap-4"
      style={{
        animationDelay: `${delay}ms`,
        padding: 'clamp(1.1rem,2.5vw,1.5rem)',
        borderRadius: '1rem',
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.08)',
        height: '100%',
        boxSizing: 'border-box',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(245,101,101,0.28)';
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 32px -8px rgba(0,0,0,0.35)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.08)';
        (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
      }}
    >
      {/* Top: avatar + name + rating */}
      <div className="flex items-start gap-3">
        <Avatar initials={review.initials} color={review.color} />
        <div style={{ minWidth: 0 }}>
          <p
            className="font-body font-medium text-white m-0"
            style={{ fontSize: '0.88rem', lineHeight: 1.3, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
          >
            {review.name}
          </p>
          <div className="flex items-center gap-2 mt-1">
            <Stars count={review.rating} size={11} />
            <span className="font-body" style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.3)' }}>
              {review.time}
            </span>
          </div>
        </div>

        {/* Quote icon */}
        <Quote
          size={22}
          className="ml-auto shrink-0"
          style={{ color: 'rgba(245,101,101,0.72)', transform: 'scaleX(-1)' }}
        />
      </div>

      {/* Review text */}
      <p
        className="font-body"
        style={{ fontSize: '0.82rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.52)', margin: 0, flex: 1 }}
      >
        {displayText}
        {isLong && (
          <button
            onClick={() => setExpanded(v => !v)}
            className="font-body font-medium ml-1"
            style={{ fontSize: '0.75rem', color: 'var(--venturi-coral)', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          >
            {expanded ? 'Show less' : 'Read more'}
          </button>
        )}
      </p>

      {/* Source tag */}
      <div className="flex items-center gap-1.5">
        <span
          className="font-body"
          style={{
            fontSize: '0.6rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.2)',
            padding: '0.2rem 0.55rem',
            borderRadius: '99px',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          Google
        </span>
        <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: 'rgba(255,255,255,0.12)' }} />
        <span className="font-body" style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.18)' }}>
          Verified patient
        </span>
      </div>
    </div>
  );
}