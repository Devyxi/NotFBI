export default function History() {
  return (
    <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <section
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 'calc(100vh - 64px)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '700px',
            height: '700px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, #ff480014 0%, transparent 65%)',
            pointerEvents: 'none',
          }}
        />

        <h1
          style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            letterSpacing: '-0.045em',
            lineHeight: 1.05,
            textAlign: 'center',
            marginBottom: '1rem',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            gap: '0.2em',
          }}
        >
          Coming
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 0 }}>
            <span
              style={{
                background: 'var(--ember)',
                color: '#000',
                fontWeight: 800,
                borderRadius: '6px',
                padding: '0 0.18em',
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
              }}
            >
              Soon
            </span>
            <span style={{ color: 'var(--bright)' }}>.</span>
          </span>
        </h1>

        <p
          style={{
            fontSize: '1rem',
            color: 'var(--muted)',
            lineHeight: 1.75,
            textAlign: 'center',
            maxWidth: '22rem',
            position: 'relative',
          }}
        >
          This page is yet under construction
        </p>
      </section>
    </main>
  )
}