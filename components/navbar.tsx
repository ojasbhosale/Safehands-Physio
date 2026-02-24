'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';
import Link from 'next/link';

const navItems = [
  { label: 'About',        href: '#about' },
  { label: 'Services',     href: '#services' },
  { label: 'Why Choose Us', href: '#why-choose-us' },
  { label: 'Reviews',      href: '#reviews' },
  { label: 'Contact',      href: '#contact' },
];

/* Pixels to offset for the fixed navbar height */
const NAV_OFFSET = 80;

/* Smooth-scroll to a section by id, accounting for fixed navbar */
function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
  window.scrollTo({ top, behavior: 'smooth' });
}

/* Derive section id from href string like "#about" → "about" */
function hrefToId(href: string) {
  return href.replace('#', '');
}

export default function Navbar() {
  const [isScrolled,     setIsScrolled]     = useState(false);
  const [isMobileOpen,   setIsMobileOpen]   = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const scrollY   = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    setIsScrolled(scrollY > 50);
    setScrollProgress(maxScroll > 0 ? Math.min((scrollY / maxScroll) * 100, 100) : 0);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setIsMobileOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileOpen(false);
    scrollToSection(hrefToId(href));
  };


  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={
        isScrolled
          ? {
              background: 'rgba(255,255,255,0.97)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              boxShadow: '0 1px 40px rgba(26,32,44,0.08)',
              borderBottom: '1px solid rgba(245,101,101,0.08)',
            }
          : { background: 'transparent' }
      }
    >
      <div className="section-container">
        <div className="flex justify-between items-center" style={{ height: '5rem' }}>

          {/* ── Logo — scrolls to top ─────────────────────────── */}
          <Link
            href="/"
            scroll={false} // prevent default scroll handling
            onClick={(e) => {
              e.preventDefault(); // prevent route push if already on /
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="hover-lift"
            style={{
              textDecoration: "none",
              flexShrink: 0,
              display: "inline-flex",
            }}
          >
            <Image
              src="/logo.png"
              alt="Safehands Physio"
              width={140}
              height={50}
              className="w-auto transition-all duration-300"
              style={{
                height: "3.25rem",
                filter: isScrolled ? "none" : "brightness(0) invert(1)",
              }}
              priority
            />
          </Link>

          {/* ── Desktop Nav ──────────────────────────────────── */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className={isScrolled ? 'nav-link-dark people-focus' : 'nav-link-light people-focus'}
                style={{ textDecoration: 'none' }}
              >
                {label}
              </a>
            ))}

            <div style={{ marginLeft: '1.25rem' }}>
              {isScrolled ? (
                <a
                  href="tel:7972958525"
                  className="btn-coral font-body"
                  style={{ padding: '0.65rem 1.4rem', fontSize: '0.875rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                >
                  <Phone size={14} />
                  Book Appointment
                </a>
              ) : (
                <a
                  href="tel:7972958525"
                  className="btn-outline-white font-body"
                  style={{ padding: '0.65rem 1.4rem', fontSize: '0.875rem', display: 'inline-flex', gap: '0.4rem', alignItems: 'center' }}
                >
                  <Phone size={14} />
                  Book Appointment
                </a>
              )}
            </div>
          </div>

          {/* ── Mobile Hamburger ─────────────────────────────── */}
          <button
            onClick={() => setIsMobileOpen(prev => !prev)}
            aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileOpen}
            className="md:hidden rounded-xl transition-all duration-300"
            style={{
              padding: '0.625rem',
              color: isScrolled || isMobileOpen ? 'var(--venturi-slate)' : 'white',
              background: isScrolled ? 'transparent' : 'rgba(255,255,255,0.1)',
              border: isScrolled
                ? '1px solid rgba(74,85,104,0.15)'
                : '1px solid rgba(255,255,255,0.2)',
            }}
          >
            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ──────────────────────────────────────────── */}
      <div
        className="md:hidden transition-all duration-500"
        style={{
          maxHeight: isMobileOpen ? '32rem' : '0',
          opacity: isMobileOpen ? 1 : 0,
          overflow: isMobileOpen ? 'visible' : 'hidden',
          pointerEvents: isMobileOpen ? 'auto' : 'none',
        }}
      >
        <div
          className="mx-4 mb-4 rounded-2xl overflow-hidden"
          style={{
            background: 'rgba(255,255,255,0.97)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            boxShadow: '0 20px 60px rgba(26,32,44,0.12)',
            border: '1px solid rgba(245,101,101,0.1)',
          }}
        >
          <div className="py-3">
            {navItems.map(({ label, href }, i) => (
              <a
                key={label}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className="nav-mobile-link flex items-center gap-2"
                style={{
                  borderBottom: i < navItems.length - 1 ? '1px solid rgba(0,0,0,0.05)' : 'none',
                  textDecoration: 'none',
                }}
              >
                <span
                  style={{
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    background: 'var(--venturi-coral)',
                    flexShrink: 0,
                  }}
                />
                {label}
              </a>
            ))}

            {/* Mobile CTA */}
            <div style={{ padding: '1rem 1.25rem 0.5rem' }}>
              <a
                href="tel:7972958525"
                className="btn-coral font-body"
                style={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}
                onClick={() => setIsMobileOpen(false)}
              >
                <Phone size={15} />
                Book an Appointment
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll Progress Bar ──────────────────────────────────── */}
      <div
        className="absolute bottom-0 left-0 right-0 transition-opacity duration-300"
        style={{ height: '2px', background: 'rgba(245,101,101,0.08)', opacity: isScrolled ? 1 : 0 }}
      >
        <div
          style={{
            height: '100%',
            width: `${scrollProgress}%`,
            background: 'linear-gradient(90deg, var(--venturi-coral), var(--venturi-orange))',
            transition: 'width 0.1s linear',
            borderRadius: '0 9999px 9999px 0',
          }}
        />
      </div>
    </nav>
  );
}