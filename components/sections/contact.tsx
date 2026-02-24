'use client';

import { useState } from 'react';
import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

/* ── Form state type ──────────────────────────────────────────────── */
type FormState = { name: string; email: string; message: string };
type Status = 'idle' | 'sending' | 'sent' | 'error';

/* ── Info cards data ──────────────────────────────────────────────── */
const infoCards = [
  {
    icon: MapPin,
    label: 'Our Location',
    lines: [
      'Flat No. 20, Siddhi Building, 5th Floor',
      'Bhaktiyog Society, Paud Road',
      'Near MIT College, Kothrud',
      'Pune – 411038',
    ],
    link: 'https://maps.google.com/?q=Safehands+Physio+Kothrud+Pune',
    linkLabel: 'Get directions',
  },
  {
    icon: Clock,
    label: 'Working Hours',
    lines: ['Saturday – Sunday', '9:00 AM – 9:00 PM'],
    link: null,
    linkLabel: null,
  },
  {
    icon: Phone,
    label: 'Call / WhatsApp',
    lines: ['+91 79729 58525'],
    link: 'tel:+917972958525',
    linkLabel: 'Call now',
  },
];

/* ─────────────────────────────────────────────────────────────────── */

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Partial<FormState>>({});

  /* Basic client-side validation */
  const validate = (): boolean => {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.message.trim()) e.message = 'Please tell us how we can help';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('sending');
    /* Replace with your actual form endpoint (e.g. Formspree, EmailJS) */
    await new Promise(r => setTimeout(r, 1200)); // mock delay
    setStatus('sent');
  };

  const handleChange = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm(p => ({ ...p, [field]: e.target.value }));
    if (errors[field]) setErrors(p => ({ ...p, [field]: undefined }));
  };

  return (
    <section
      id="contact"
      className="section-bg-cream overflow-hidden"
      style={{ paddingTop: 'clamp(3.5rem,8vw,6rem)', paddingBottom: 'clamp(3.5rem,8vw,6rem)' }}
    >
      <div className="section-container">

        {/* ── Header ──────────────────────────────────────────────── */}
        <div style={{ maxWidth: '38rem', marginBottom: 'clamp(2.5rem,6vw,4rem)' }}>
          <span className="section-eyebrow animate-fade-up anim-both animation-delay-150">
            <span style={{ display: 'inline-block', width: '1.25rem', height: '1px', background: 'var(--venturi-coral)' }} />
            Get in touch
          </span>

          <h2
            className="section-title animate-fade-up anim-both animation-delay-300"
            style={{ lineHeight: 1.08, marginTop: '0.5rem', marginBottom: '0.75rem' }}
          >
            Start Your{' '}
            <span className="italic font-normal" style={{ color: 'var(--venturi-coral)' }}>
              Recovery
            </span>{' '}
            Today
          </h2>

          <p
            className="section-subtitle animate-fade-up anim-both animation-delay-450"
            style={{ marginBottom: 0 }}
          >
            Reach out to book an appointment, ask a question, or simply learn more about how we can help you recover faster.
          </p>
        </div>

        {/* ── Two-column layout ────────────────────────────────────── */}
        <div
          className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center animate-fade-up anim-both animation-delay-450"
        >

          {/* ── LEFT — Contact form ─────────────────────────────── */}
          <div
            className="glass-panel-light"
            style={{ padding: 'clamp(1.5rem,4vw,2.25rem)', borderRadius: '1.25rem' }}
          >
            {status === 'sent' ? (
              /* Success state */
              <div
                className="flex flex-col items-center justify-center text-center"
                style={{ minHeight: '22rem', gap: '1rem' }}
              >
                <div
                  className="flex items-center justify-center rounded-full"
                  style={{ width: '4rem', height: '4rem', background: 'rgba(245,101,101,0.1)' }}
                >
                  <CheckCircle2 size={28} style={{ color: 'var(--venturi-coral)' }} />
                </div>
                <h3
                  className="font-display font-bold"
                  style={{ fontSize: '1.3rem', color: 'var(--venturi-navy)', margin: 0 }}
                >
                  Message Sent!
                </h3>
                <p
                  className="font-body"
                  style={{ fontSize: '0.88rem', color: 'var(--venturi-slate)', lineHeight: 1.65, maxWidth: '22rem', margin: 0 }}
                >
                  Thank you for reaching out. Dr. Kavita will get back to you shortly to confirm your appointment.
                </p>
                <button
                  onClick={() => { setStatus('idle'); setForm({ name: '', email: '', message: '' }); }}
                  className="btn-coral font-body"
                  style={{ marginTop: '0.5rem', fontSize: '0.85rem', padding: '0.7rem 1.5rem' }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                <div>
                  <p
                    className="font-body font-medium"
                    style={{ fontSize: '0.63rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--venturi-slate)', marginBottom: '1rem' }}
                  >
                    Send us a message
                  </p>
                </div>

                {/* Name */}
                <Field
                  label="Full Name"
                  required
                  error={errors.name}
                >
                  <input
                    type="text"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={handleChange('name')}
                    style={inputStyle(!!errors.name)}
                  />
                </Field>

                {/* Email */}
                <Field
                  label="Email Address"
                  required
                  error={errors.email}
                >
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange('email')}
                    style={inputStyle(!!errors.email)}
                  />
                </Field>

                {/* Message */}
                <Field
                  label="Message / Query"
                  required
                  error={errors.message}
                >
                  <textarea
                    rows={5}
                    placeholder="Describe your condition or ask us anything…"
                    value={form.message}
                    onChange={handleChange('message')}
                    style={{ ...inputStyle(!!errors.message), resize: 'vertical', minHeight: '7rem' }}
                  />
                </Field>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-coral font-body flex items-center justify-center gap-2"
                  style={{ width: '100%', opacity: status === 'sending' ? 0.75 : 1, marginTop: '0.25rem' }}
                >
                  {status === 'sending' ? (
                    <>
                      <span
                        style={{
                          display: 'inline-block', width: '1rem', height: '1rem',
                          borderRadius: '50%', border: '2px solid rgba(255,255,255,0.3)',
                          borderTopColor: 'white', animation: 'spin 0.7s linear infinite',
                        }}
                      />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </button>

                {/* Inline spinner keyframe */}
                <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
              </form>
            )}
          </div>

          {/* ── RIGHT — Info + CTA ──────────────────────────────── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

            {/* Info cards */}
            {infoCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.label}
                  className="glass-panel-light hover-lift animate-fade-up anim-both"
                  style={{
                    animationDelay: `${550 + i * 100}ms`,
                    padding: 'clamp(1rem,2.5vw,1.35rem) clamp(1.1rem,2.5vw,1.5rem)',
                    borderRadius: '1rem',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                  }}
                >
                  {/* Icon */}
                  <div
                    className="shrink-0 flex items-center justify-center rounded-xl"
                    style={{
                      width: '2.5rem', height: '2.5rem',
                      background: 'rgba(245,101,101,0.1)',
                      marginTop: '0.1rem',
                    }}
                  >
                    <Icon size={16} style={{ color: 'var(--venturi-coral)' }} />
                  </div>

                  <div style={{ minWidth: 0, flex: 1 }}>
                    <p
                      className="font-body font-medium"
                      style={{ fontSize: '0.63rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--venturi-slate)', marginBottom: '0.4rem' }}
                    >
                      {card.label}
                    </p>
                    {card.lines.map((line, j) => (
                      <p
                        key={j}
                        className="font-body"
                        style={{ fontSize: '0.88rem', color: 'var(--venturi-navy)', lineHeight: 1.55, margin: 0, fontWeight: j === 0 && card.lines.length > 1 ? 500 : 400 }}
                      >
                        {line}
                      </p>
                    ))}
                    {card.link && (
                      <a
                        href={card.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-body font-medium"
                        style={{ fontSize: '0.75rem', color: 'var(--venturi-coral)', marginTop: '0.5rem', textDecoration: 'none' }}
                      >
                        {card.linkLabel} <ArrowRight size={12} />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}

            {/* WhatsApp CTA card */}
            <div
              className="animate-fade-up anim-both animation-delay-[850ms]"
              style={{
                position: 'relative',
                borderRadius: '1rem',
                overflow: 'hidden',
                padding: 'clamp(1.25rem,3vw,1.75rem)',
                background: 'linear-gradient(135deg, var(--venturi-navy) 0%, #2a3448 100%)',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 20px 48px -8px rgba(26,32,44,0.22)',
              }}
            >
              {/* Orb */}
              <div style={{ position: 'absolute', top: '-2.5rem', right: '-2.5rem', width: '10rem', height: '10rem', borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,101,101,0.14) 0%, transparent 70%)', pointerEvents: 'none' }} />

              <div className="relative" style={{ zIndex: 1 }}>
                <p
                  className="font-body font-medium"
                  style={{ fontSize: '0.63rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '0.5rem' }}
                >
                  Prefer WhatsApp?
                </p>
                <p
                  className="font-display font-semibold text-white"
                  style={{ fontSize: 'clamp(1rem,2.2vw,1.2rem)', lineHeight: 1.3, marginBottom: '0.5rem' }}
                >
                  Book directly via{' '}
                  <span className="italic font-normal" style={{ color: 'var(--venturi-coral)' }}>WhatsApp</span>
                </p>
                <p
                  className="font-body"
                  style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, marginBottom: '1.1rem' }}
                >
                  Get a quick response and confirm your appointment in minutes.
                </p>
                <a
                  href="https://wa.me/917972958525"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-coral font-body inline-flex items-center gap-2"
                  style={{ fontSize: '0.85rem', padding: '0.7rem 1.4rem' }}
                >
                  <MessageCircle size={15} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

/* ── Field wrapper ────────────────────────────────────────────────── */
function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
      <label
        className="font-body font-medium"
        style={{ fontSize: '0.78rem', color: 'var(--venturi-navy)', letterSpacing: '0.02em' }}
      >
        {label}
        {required && <span style={{ color: 'var(--venturi-coral)', marginLeft: '0.2rem' }}>*</span>}
      </label>
      {children}
      {error && (
        <span
          className="font-body"
          style={{ fontSize: '0.7rem', color: 'var(--venturi-coral)', marginTop: '0.1rem' }}
        >
          {error}
        </span>
      )}
    </div>
  );
}

/* ── Input base style ─────────────────────────────────────────────── */
function inputStyle(hasError: boolean): React.CSSProperties {
  return {
    width: '100%',
    padding: '0.7rem 0.9rem',
    borderRadius: '0.625rem',
    border: `1.5px solid ${hasError ? 'var(--venturi-coral)' : 'rgba(74,85,104,0.2)'}`,
    background: 'rgba(255,255,255,0.75)',
    fontFamily: 'DM Sans, system-ui, sans-serif',
    fontSize: '0.88rem',
    color: 'var(--venturi-navy)',
    outline: 'none',
    transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
    boxSizing: 'border-box',
  };
}