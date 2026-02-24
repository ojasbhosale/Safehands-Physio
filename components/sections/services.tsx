'use client';

import Image from 'next/image';
import {
  Activity,
  Bone,
  Stethoscope,
  Hand,
  HeartPulse,
  Home,
  Flame,
  Tally4,
  RefreshCw,
  Shield,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';

const services = [
  {
    id: 1,
    icon: Activity,
    tag: '01',
    title: 'Sports Injury Rehabilitation',
    description:
      'Comprehensive rehabilitation programs for ligament injuries, fractures, meniscus injuries, and sports-related trauma.',
    img: '/services/img1.jpg',
  },
  {
    id: 2,
    icon: Bone,
    tag: '02',
    title: 'Musculoskeletal Pain Management',
    description:
      'Treatment for chronic back pain, neck pain, shoulder pain, and joint discomfort using manual therapy and structured exercise protocols.',
    img: '/services/img2.jpg',
  },
  {
    id: 3,
    icon: Stethoscope,
    tag: '03',
    title: 'Post-Surgical Rehabilitation',
    description:
      'Specialized recovery programs following orthopedic surgeries including knee replacement, ligament repair, and fracture management.',
    img: '/services/img3.jpg',
  },
  {
    id: 4,
    icon: Hand,
    tag: '04',
    title: 'Manual Therapy & Spine Mobilization',
    description:
      'Hands-on therapy techniques to restore joint mobility, reduce stiffness, and improve function.',
    img: '/services/img4.jpg',
  },
  {
    id: 5,
    icon: HeartPulse,
    tag: '05',
    title: 'Geriatric Physiotherapy',
    description:
      'Customized mobility and balance programs designed for elderly patients to improve independence and quality of life.',
    img: '/services/img5.jpg',
  },
  {
    id: 6,
    icon: Home,
    tag: '06',
    title: 'Home Care Physiotherapy',
    description:
      'Professional physiotherapy services delivered at home for patients unable to visit the clinic.',
    img: '/services/img6.jpg',
  },
];

const addOns = [
  { icon: Flame,     label: 'Heat Therapy Treatment' },
  { icon: Tally4,    label: 'Sports Taping' },
  { icon: RefreshCw, label: 'Range of Motion Exercises' },
  { icon: Shield,    label: 'Balance Training' },
];

export default function Services() {
  return (
    <>
      {/* Pure CSS hover — zero JS re-renders on mouse move */}
      <style>{`
        .svc-card {
          border-radius: 1rem;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.04);
          box-shadow: 0 4px 20px -4px rgba(0,0,0,0.3);
          transition: border-color 0.35s ease, box-shadow 0.35s ease;
        }
        .svc-card:hover {
          border-color: rgba(245,101,101,0.35);
          box-shadow: 0 20px 48px -8px rgba(0,0,0,0.45), 0 0 0 1px rgba(245,101,101,0.12);
        }
        .svc-img {
          filter: brightness(0.45) saturate(1);
          transform: scale(1);
          transition: transform 0.65s cubic-bezier(0.22,1,0.36,1), filter 0.45s ease;
          will-change: transform, filter;
        }
        .svc-card:hover .svc-img {
          transform: scale(1.06);
          filter: brightness(0.65) saturate(1.1);
        }
        .svc-tag {
          color: rgba(255,255,255,0.22);
          transition: color 0.3s ease;
        }
        .svc-card:hover .svc-tag { color: var(--venturi-coral); }

        .svc-icon-wrap {
          background: rgba(255,255,255,0.07);
          transition: background 0.35s ease;
        }
        .svc-card:hover .svc-icon-wrap {
          background: linear-gradient(135deg, rgba(245,101,101,0.22), rgba(237,137,54,0.16));
        }
        .svc-title {
          color: rgba(255,255,255,0.82);
          transition: color 0.3s ease;
        }
        .svc-card:hover .svc-title { color: white; }

        .svc-cta {
          opacity: 0;
          transform: translateX(-6px);
          transition: opacity 0.32s ease, transform 0.32s ease;
        }
        .svc-card:hover .svc-cta {
          opacity: 1;
          transform: translateX(0);
        }
        .addon-pill {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: 99px;
          border: 1px solid rgba(245,101,101,0.2);
          background: rgba(245,101,101,0.06);
          transition: background 0.25s ease, border-color 0.25s ease;
        }
        .addon-pill:hover {
          background: rgba(245,101,101,0.12);
          border-color: rgba(245,101,101,0.4);
        }
      `}</style>

      <section
        id="services"
        className="section-bg-dark overflow-hidden"
        style={{ paddingTop: 'clamp(3.5rem,8vw,6rem)', paddingBottom: 'clamp(3.5rem,8vw,6rem)' }}
      >
        <div className="section-container">

          {/* ── Header ──────────────────────────────────────────── */}
          <div
            className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 sm:gap-10"
            style={{ marginBottom: 'clamp(2.5rem,6vw,4rem)' }}
          >
            <div style={{ maxWidth: '36rem' }}>
              <span
                className="section-eyebrow animate-fade-up anim-both animation-delay-150"
                style={{ color: 'rgba(255,255,255,0.55)' }}
              >
                <span style={{ display: 'inline-block', width: '1.25rem', height: '1px', background: 'var(--venturi-coral)' }} />
                What we treat
              </span>

              <h2
                className="section-title animate-fade-up anim-both animation-delay-300"
                style={{ lineHeight: 1.08, marginTop: '0.5rem', marginBottom: 0 }}
              >
                Our{' '}
                <span className="italic font-normal" style={{ color: 'var(--venturi-coral)' }}>
                  Services
                </span>
              </h2>
            </div>

            <a
              href="https://wa.me/917972958525"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-coral font-body hidden sm:inline-flex items-center gap-2 animate-fade-up anim-both animation-delay-450 self-end"
              style={{ whiteSpace: 'nowrap', flexShrink: 0 }}
            >
              <MessageCircle size={15} />
              Book Appointment
            </a>
          </div>

          {/* ── Cards ───────────────────────────────────────────── */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            style={{ marginBottom: 'clamp(2rem,4vw,2.5rem)' }}
          >
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.id}
                  className="svc-card animate-fade-up anim-both"
                  style={{ animationDelay: `${400 + i * 80}ms` }}
                >
                  {/* Image */}
                  <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', overflow: 'hidden' }}>
                    <Image
                      src={svc.img}
                      alt={svc.title}
                      fill
                      className="object-cover svc-img"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div
                      style={{
                        position: 'absolute', inset: 0, pointerEvents: 'none',
                        background: 'linear-gradient(to bottom, transparent 30%, rgba(26,32,44,0.9) 100%)',
                      }}
                    />
                    <span
                      className="svc-tag font-display font-bold"
                      style={{ position: 'absolute', top: '0.75rem', right: '0.875rem', fontSize: '0.65rem', letterSpacing: '0.12em' }}
                    >
                      {svc.tag}
                    </span>
                  </div>

                  {/* Body */}
                  <div style={{ padding: 'clamp(0.875rem,2vw,1.25rem)' }}>
                    <div className="flex items-center gap-3" style={{ marginBottom: '0.6rem' }}>
                      <div
                        className="svc-icon-wrap shrink-0 flex items-center justify-center rounded-xl"
                        style={{ width: '2.25rem', height: '2.25rem', flexShrink: 0 }}
                      >
                        <Icon size={15} style={{ color: 'var(--venturi-coral)' }} />
                      </div>
                      <h3
                        className="svc-title font-display font-semibold"
                        style={{ fontSize: 'clamp(0.88rem,1.5vw,0.98rem)', lineHeight: 1.25, margin: 0 }}
                      >
                        {svc.title}
                      </h3>
                    </div>

                    <p
                      className="font-body"
                      style={{ fontSize: '0.78rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.45)', margin: 0 }}
                    >
                      {svc.description}
                    </p>

                    <div
                      className="svc-cta flex items-center gap-1.5 font-body"
                      style={{ marginTop: '0.875rem', fontSize: '0.7rem', letterSpacing: '0.08em', color: 'var(--venturi-coral)' }}
                    >
                      Book this treatment <ArrowRight size={12} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── Additional Therapies ─────────────────────────────── */}
          <div
            className="animate-fade-up anim-both animation-delay-[900ms]"
            style={{
              borderRadius: '1rem',
              border: '1px solid rgba(255,255,255,0.08)',
              background: 'rgba(255,255,255,0.03)',
              padding: 'clamp(1.25rem,3vw,1.75rem) clamp(1rem,3vw,2rem)',
            }}
          >
            <div
              className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4"
              style={{ marginBottom: '1.1rem' }}
            >
              <p
                className="font-body font-medium"
                style={{ fontSize: '0.63rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', margin: 0 }}
              >
                Additional Therapies
              </p>
              <div
                className="hidden sm:block"
                style={{ height: '1px', flex: 1, background: 'rgba(255,255,255,0.07)' }}
              />
              <p
                className="font-editorial italic"
                style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.28)', margin: 0, fontWeight: 300 }}
              >
                Complementing your core treatment plan
              </p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem' }}>
              {addOns.map((a) => {
                const AIcon = a.icon;
                return (
                  <div key={a.label} className="addon-pill">
                    <AIcon size={13} style={{ color: 'var(--venturi-coral)', flexShrink: 0 }} />
                    <span
                      className="font-body"
                      style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.7)', whiteSpace: 'nowrap' }}
                    >
                      {a.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Mobile CTA ──────────────────────────────────────── */}
          <div className="flex justify-center sm:hidden" style={{ marginTop: '2rem' }}>
            <a
              href="https://wa.me/917972958525"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-coral font-body flex items-center gap-2"
            >
              <MessageCircle size={15} />
              Book Appointment
            </a>
          </div>

        </div>
      </section>
    </>
  );
}