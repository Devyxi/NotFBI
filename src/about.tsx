export default function About() {
  return (
    <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>

      <section style={{ padding: '9rem 5rem 5rem', maxWidth: '90rem', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: '36rem' }}>
          <h1 style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)', lineHeight: 1.05, letterSpacing: '-0.04em', marginBottom: '1.5rem' }}>
            Built because the alternatives weren't good enough.
          </h1>
          <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--muted)', margin: 0 }}>
            Fox Box Insurance started from a simple frustration, Discord communities kept losing everything and the tools that existed to prevent it were either expensive, privacy-invasive, or just not built with care.
          </p>
        </div>
      </section>

      <section style={{ padding: '0 5rem 5rem', maxWidth: '90rem', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <div>
              <h2 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--bright)', letterSpacing: '-0.03em', marginBottom: '0.85rem' }}>
                The problem
              </h2>
              <p style={{ fontSize: '0.9375rem', lineHeight: 1.85, color: 'var(--muted)', margin: 0 }}>
                Raids happen. Admins go rogue. Bots malfunction. Channels get deleted by accident. These aren't edge cases, they're things that happen to real communities every day, and when they do, most servers have no way to recover.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--bright)', letterSpacing: '-0.03em', marginBottom: '0.85rem' }}>
                What we set out to build
              </h2>
              <p style={{ fontSize: '0.9375rem', lineHeight: 1.85, color: 'var(--muted)', margin: 0 }}>
                A bot that works without being told to. One that logs everything, stores it securely, and stays completely out of your way until you actually need it. No subscriptions, no vague data policies, no feature-gating the things that matter most.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--bright)', letterSpacing: '-0.03em', marginBottom: '0.85rem' }}>
                Privacy isn't a feature- it's the foundation
              </h2>
              <p style={{ fontSize: '0.9375rem', lineHeight: 1.85, color: 'var(--muted)', margin: 0 }}>
                We only collect what's necessary to do the job. Your server's data is yours. We don't sell it, we don't mine it, and we don't hand it off to third parties. The backend is open so you can verify that for yourself.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', paddingTop: '0.25rem' }}>

            <div style={{
              background: 'var(--surface)',
              border: '1px solid var(--line)',
              borderRadius: '16px',
              padding: '2rem',
            }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.01em', color: 'var(--muted)', marginBottom: '1.25rem' }}>
                The team
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                <div>
                  <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--bright)', letterSpacing: '-0.02em' }}>musicmaker</div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--muted)', marginTop: '0.1rem' }}>Founder & sole developer</div>
                </div>
              </div>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.8, color: 'var(--muted)', margin: 0 }}>
                Fox Box Insurance is built and maintained by one person. Every feature, every line of code, every design decision comes from someone who actually uses Discord and understands what communities need to feel safe.
              </p>
            </div>

            <div style={{
              background: 'var(--surface)',
              border: '1px solid var(--line)',
              borderRadius: '16px',
              padding: '2rem',
            }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.01em', color: 'var(--muted)', marginBottom: '1.25rem' }}>
                Always free
              </p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.8, color: 'var(--muted)', margin: '0 0 1.5rem' }}>
                FBI is and always will be free to use. No paywalled features, no premium tiers for the things that matter. Every server, big or small- gets the same level of protection.
              </p>
              <a
                href="https://discord.com/oauth2/authorize?client_id=1065103018212732938&permissions=268560404&integration_type=0&scope=bot"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: 'var(--ember)',
                  textDecoration: 'none',
                  letterSpacing: '-0.01em',
                  transition: 'opacity 0.15s ease',
                }}
                onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.opacity = '0.7'}
                onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.opacity = '1'}
              >
                Add Fox Box Insurance to your server
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2.5 9.5l7-7M3 2.5h6.5V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

          </div>
        </div>
      </section>

      <section style={{ borderTop: '1px solid var(--line)', padding: '4rem 5rem', maxWidth: '90rem', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
        <p style={{ fontSize: '0.7875rem', fontWeight: 700, letterSpacing: '0.02em', color: 'var(--muted)', marginBottom: '2rem' }}>
          What we stand for
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0', borderLeft: '1px solid var(--line)' }}>
          {[
            { label: 'Transparency', body: 'Open backend, clear privacy policy, no hidden data practices.' },
            { label: 'Reliability', body: 'Built to run silently and consistently, every hour of every day.' },
            { label: 'Simplicity', body: 'Powerful tools that don\'t require a manual to set up or use.' },
            { label: 'Community first', body: 'Decisions are made around what\'s best for the servers we protect.' },
          ].map(item => (
            <div key={item.label} style={{ padding: '0 2rem 0', borderRight: '1px solid var(--line)' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--ember)', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--bright)', letterSpacing: '-0.02em', marginBottom: '0.6rem' }}>
                {item.label}
              </h3>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.75, color: 'var(--muted)', margin: 0 }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

    </main>
  )
}