import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <main style={{
      flex: 1,
      background: 'var(--ink)',
      display: 'flex',
      alignItems: 'center',
      padding: '4rem 2rem',
      overflow: 'hidden',
      position: 'relative',
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(circle at 20% 50%, #ff480606 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', maxWidth: '80rem', margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: '4rem' }}>

          <div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.05, marginBottom: '1.25rem' }}>
              This one<br />got away.
            </h1>

            <p style={{ fontSize: '1rem', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: '28rem' }}>
              The link might be broken, the page moved, or it never existed. Either way, there's nothing here.
            </p>

            <button
              onClick={() => navigate('/')}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.background = '#ff6a2a'
                ;(e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.background = 'var(--ember)'
                ;(e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: 'var(--sans)',
                fontSize: '0.875rem',
                fontWeight: 600,
                background: 'var(--ember)',
                color: '#fff',
                border: 'none',
                padding: '0.85rem 2rem',
                cursor: 'pointer',
                borderRadius: '10px',
                letterSpacing: '0.02em',
                transition: 'all 0.15s ease',
              }}
            >
              Return to Home
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <span aria-hidden="true" style={{
              fontSize: 'clamp(10rem, 20vw, 18rem)',
              fontFamily: 'var(--sans)',
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: '-0.03em',
              userSelect: 'none',
              color: 'var(--surface)',
              WebkitTextStroke: '1px var(--line)',
            }}>
              404
            </span>
          </div>

        </div>
      </div>
    </main>
  )
}