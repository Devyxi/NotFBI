import { useEffect, useRef, useState } from 'react'

function smartRound(n: number): string {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M'
  if (n >= 1_000) return (n / 1_000).toFixed(1).replace(/\.0$/, '') + 'k'
  return n.toString()
}

const tableRows = [
  {
    feature: 'Message Logging',
    bots: { text: 'Basic messages only', bad: true },
    fbi: { text: 'Full messages, attachments & embeds', bad: false },
  },
  {
    feature: 'Embeds & Attachments',
    bots: { text: 'Often skipped or limited', bad: true },
    fbi: { text: 'Fully captured & archived', bad: false },
  },
  {
    feature: 'Channel Recovery',
    bots: { text: 'Up to 10,000 messages', bad: true },
    fbi: { text: 'Complete history, no limits', bad: false },
  },
  {
    feature: 'Export Options',
    bots: { text: 'Paid only', bad: true },
    fbi: { text: 'Free exports in multiple formats', bad: false },
  },
  {
    feature: 'Privacy',
    bots: { text: 'Vague data use', bad: true },
    fbi: { text: 'Clear privacy policy & open backend', bad: false },
  },
]

export default function App() {
  const [stats, setStats] = useState<{ guilds: number, users: number, messages: number, snapshots: number } | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const aboutRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    fetch('https://api.notfbi.dev/stats')
      .then(r => r.json())
      .then(data => setStats(data))
      .catch(console.error)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const s = (val: number | undefined) => val ? smartRound(val) : 'N/A'

  return (
    <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>

      <section style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        padding: '4rem 6rem',
        position: 'relative',
        overflow: 'hidden',
        minHeight: 'calc(100vh - 64px)',
      }}>
        <div style={{
          position: 'absolute',
          top: '50%',
          right: '8.5%',
          transform: 'translateY(-50%)',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #ff480018 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: '6rem', width: '100%', maxWidth: '90rem', margin: '0 auto', position: 'relative', marginTop: '6rem', paddingLeft: '7rem' }}>
          <div>
            <h1 style={{ fontSize: 'clamp(2.25rem, 4.5vw, 4rem)', lineHeight: 1.05, letterSpacing: '-0.04em', marginBottom: '1.25rem', textAlign: 'left' }}>
              You'll forget about it.<br />
              <span style={{ color: 'var(--ember)' }}>We won't.</span>
            </h1>

            <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: 'var(--muted)', marginBottom: '3rem', textAlign: 'left', maxWidth: '30rem' }}>
              Fox Box Insurance delivers unmatched moderation and security, logging every detail so your community stays safe, even when no one's watching.
            </p>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <button
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = '#ff6a2a'; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'var(--ember)'; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)' }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--sans)', fontSize: '0.875rem', fontWeight: 600, background: 'var(--ember)', color: '#fff', border: 'none', padding: '0.85rem 2rem', cursor: 'pointer', borderRadius: '10px', letterSpacing: '0.02em', transition: 'all 0.15s ease' }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                Add Bot
              </button>

              <button
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.25)'; (e.currentTarget as HTMLButtonElement).style.color = '#fff'; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--line)'; (e.currentTarget as HTMLButtonElement).style.color = 'var(--muted)'; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)' }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--sans)', fontSize: '0.875rem', fontWeight: 500, background: 'transparent', color: 'var(--muted)', border: '1px solid var(--line)', padding: '0.85rem 2rem', cursor: 'pointer', borderRadius: '10px', letterSpacing: '0.02em', transition: 'all 0.15s ease' }}
              >
                Support Server
              </button>
            </div>

            <div style={{ display: 'flex', gap: '2rem', marginTop: '3rem' }}>
              {[
                [s(stats?.guilds), 'Servers'],
                [s(stats?.users), 'Users'],
                [s(stats?.messages), 'Messages Encrypted'],
                [s(stats?.snapshots), 'Snapshots'],
              ].map(([stat, label]) => (
                <div key={label}>
                  <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--bright)', letterSpacing: '-0.03em' }}>{stat}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: '0.15rem' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src="/fucker.jpeg" alt="Fox" style={{ width: '100%', maxWidth: '900px', height: '400px', objectFit: 'cover', borderRadius: '24px', filter: 'brightness(0.88) contrast(1.05)', display: 'block' }} />
          </div>
        </div>

        <button
          onClick={scrollToAbout}
          aria-label="Scroll to learn more"
          style={{
            position: 'absolute',
            bottom: '2.5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
            opacity: scrolled ? 0 : 1,
            transition: 'opacity 0.4s ease',
            pointerEvents: scrolled ? 'none' : 'auto',
          }}
        >
          <span style={{ fontSize: '1rem', fontWeight: 600, letterSpacing: '0.05em', color: 'var(--muted)' }}>
            Scroll
          </span>
          <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
            {[0, 1, 2].map(i => (
              <svg
                key={i}
                width="16"
                height="9"
                viewBox="0 0 16 9"
                fill="none"
                style={{
                  color: i === 0 ? 'var(--ember)' : 'var(--muted)',
                  opacity: 1 - i * 0.3,
                  animation: `scrollBounce 1.6s ease-in-out ${i * 0.12}s infinite`,
                }}
              >
                <path d="M1 1l7 7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ))}
          </span>
          <style>{`
            @keyframes scrollBounce {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(4px); }
            }
          `}</style>
        </button>
      </section>

      <section ref={aboutRef} style={{ padding: '3rem 5rem' }}>
        <div style={{ maxWidth: '90rem', margin: '0 auto' }}>

          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', letterSpacing: '-0.04em', marginBottom: '0.75rem' }}>
              About Fox Box Insurance
            </h2>
            <p style={{ fontSize: '0.9375rem', color: 'var(--muted)', maxWidth: '28rem', margin: '0 auto' }}>
              Who we are and why we built this
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
            {[
              {
                icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
                title: 'The Team',
                body: 'Fox Box Insurance is built by the one and only musicmaker. We understand the challenges that server administrators face in maintaining safe, vibrant communities.',
              },
              {
                icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
                title: 'Our Mission',
                body: 'To provide Discord communities with excellent security and logging tools that are simple to use, completely free, and built with privacy at their core. We believe every server deserves high-quality protection.',
              },
              {
                icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
                title: 'Why We Built This',
                body: 'We saw too many communities lose everything to raids, accidental deletions, and rogue administrators. Existing solutions were expensive, complex, or compromised on privacy. So we built FBI — a bot that works silently in the background with zero compromise.',
              },
            ].map(card => (
              <div key={card.title}
                style={{ background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: '16px', padding: '1.75rem', transition: 'border-color 0.2s ease' }}
                onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.borderColor = '#ff480035'}
                onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--line)'}
              >
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#ff48001a', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--ember)', marginBottom: '1.25rem' }}>
                  {card.icon}
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--bright)', marginBottom: '0.6rem', letterSpacing: '-0.02em' }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.75 }}>
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '4rem 5rem 5rem' }}>
        <div style={{ maxWidth: '62rem', margin: '0 auto' }}>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'end', marginBottom: '2.5rem' }}>
            <div>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', letterSpacing: '-0.04em', lineHeight: 1.1, margin: 0 }}>
                Why Fox Box Insurance?
              </h2>
            </div>
            <div>
              <p style={{ fontSize: '0.9375rem', color: 'var(--muted)', lineHeight: 1.8, margin: 0 }}>
                FBI is not built like other bots, security and privacy are baked in from the start, not bolted on later.
                Built to record and protect silently from the shadows.{' '}
                <span style={{ color: 'var(--bright)', fontStyle: 'italic' }}>You won't even know it's there.</span>
              </p>
            </div>
          </div>

          <div style={{ border: '1px solid var(--line)', borderRadius: '16px', overflow: 'hidden' }}>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1.5fr 1.5fr', background: 'var(--surface)', borderBottom: '1px solid var(--line)' }}>
              <div style={{ padding: '1rem 1.5rem', fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.01em', color: 'var(--muted)' }}>
                Feature
              </div>
              <div style={{ padding: '1rem 1.5rem', fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.01em', color: 'var(--muted)', borderLeft: '1px solid var(--line)' }}>
                Most Bots
              </div>
              <div style={{ padding: '1rem 1.5rem', fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.01em', color: 'var(--ember)', borderLeft: '1px solid var(--line)', background: '#ff48000a' }}>
                FBI
              </div>
            </div>

            {tableRows.map((row, i) => (
              <div
                key={row.feature}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '2fr 1.5fr 1.5fr',
                  borderBottom: i < tableRows.length - 1 ? '1px solid var(--line)' : 'none',
                  transition: 'background 0.15s ease',
                }}
                onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.background = '#ffffff04'}
                onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.background = 'transparent'}
              >
                <div style={{ padding: '1.1rem 1.5rem', fontSize: '0.9rem', fontWeight: 600, color: 'var(--bright)', display: 'flex', alignItems: 'center' }}>
                  {row.feature}
                </div>

                <div style={{ padding: '1.1rem 1.5rem', borderLeft: '1px solid var(--line)', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <span style={{ flexShrink: 0, width: '16px', height: '16px', borderRadius: '50%', background: '#ff3b3020', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path d="M1.5 1.5l5 5M6.5 1.5l-5 5" stroke="#ff3b30" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </span>
                  <span style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.4 }}>{row.bots.text}</span>
                </div>

                <div style={{ padding: '1.1rem 1.5rem', borderLeft: '1px solid var(--line)', background: '#ff48000a', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <span style={{ flexShrink: 0, width: '16px', height: '16px', borderRadius: '50%', background: '#ff480025', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path d="M1 4l2.2 2.5L7 1.5" stroke="var(--ember)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span style={{ fontSize: '0.875rem', color: 'var(--bright)', fontWeight: 500, lineHeight: 1.4 }}>{row.fbi.text}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section style={{ padding: '4rem 5rem 5rem' }}>
        <div style={{ maxWidth: '90rem', margin: '0 auto' }}>

          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', letterSpacing: '-0.04em', lineHeight: 1.1, margin: 0 }}>
              Core Features
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {[
              {
                img: '/shield_security.png',
                alt: 'Unrivaled Security',
                title: 'Unrivaled Security',
                body: "Fox Box Insurance doesn't mess around when it comes to security. We treat your data like the classified intel that it is. Every message is securely stored and encrypted, ensuring that even if someone tries to breach our defenses, your information remains safe and sound. With FBI, you can rest easy knowing that your server's history is locked down tighter than Fort Knox (i think).",
              },
              {
                img: '/cloud.png',
                alt: 'Effortless Exports',
                title: 'Effortless Exports',
                body: 'Fox Box Insurance gives you the power to export entire server histories in just a few clicks. Whether it\'s for record-keeping, audits, or peace of mind, export everything in formats like JSON, HTML, or CSV, all at your convenience.',
              },
              {
                img: '/history.png',
                alt: 'Server Snapshots',
                title: 'Server Snapshots',
                body: "Fox Box Insurance creates occasional server backups for your safety. If things go south, rogue admin, nuke bot, or accidental deletion, you can restore your server to a previous state with ease. It's like having a time machine for your Discord server. Better yet, it's free, so why wait?",
              },
            ].map(card => (
              <div
                key={card.title}
                style={{ background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: '16px', overflow: 'hidden', transition: 'border-color 0.2s ease', display: 'flex', flexDirection: 'column' }}
                onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.borderColor = '#ff480035'}
                onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--line)'}
              >
                <div style={{ width: '100%', height: '200px', overflow: 'hidden', flexShrink: 0 }}>
                  <img
                    src={card.img}
                    alt={card.alt}
                    style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block', filter: 'brightness(0.85) contrast(1.05)' }}
                  />
                </div>
                <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--bright)', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.75, margin: 0 }}>
                    {card.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

           <div
            style={{ background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: '16px', overflow: 'hidden', transition: 'border-color 0.2s ease', display: 'grid', gridTemplateColumns: '280px 1fr', marginTop: '1.5rem' }}
            onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.borderColor = '#ff480035'}
            onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--line)'}
          >
            <div style={{ background: '#0d0d0d', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2.5rem' }}>
              <img src="/logo.png" alt="Fox Box" style={{ width: '160px', height: '160px', objectFit: 'contain', display: 'block' }} />
            </div>
            <div style={{ padding: '2.25rem 2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderLeft: '1px solid var(--line)' }}>
              <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--bright)', marginBottom: '0.85rem', letterSpacing: '-0.02em' }}>
                Private by Design
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.8, margin: '0 0 1rem' }}>
                Fox Box Insurance doesn't need the spotlight to keep your server safe. It operates silently in the background- no clutter, no noise, no overreach. You stay in control at all times with your data locked down and your privacy baked in from the start. No tracking, no selling, no surprises.
              </p>
              <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.8, margin: 0 }}>
                We design around your privacy from the start. Encrypted storage, limited permissions, every feature is built to respect your boundaries. We collect only what's absolutely necessary, and even that stays under your command. Because real protection doesn't shout- it listens, guards, and disappears when you need it to.
              </p>
            </div>
          </div>

        </div>
      </section>

    </main>
  )
}