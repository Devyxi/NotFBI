import './Footer.css'

const links = {
  Navigate: [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/history', label: 'History' },
    { href: '/roadmap', label: 'Roadmap' },
  ],
  Resources: [
    { href: '/invite', label: 'Invite Bot' },
    { href: '/support', label: 'Support Server' },
    { href: '/terms', label: 'Terms Of Service' },
    { href: '/privacy', label: 'Privacy Policy' },
  ],
}

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">

        <div className="footer-top">
          <a href="/" className="footer-brand">
            <img src="/logo.png" alt="Fox Box Insurance logo" width={44} height={44} className="footer-logo" />
            <div className="footer-brand-text">
              <span className="footer-brand-name">Fox Box Insurance</span>
              <span className="footer-brand-tagline">Protect. Preserve. Recover.</span>
            </div>
          </a>

          <div className="footer-cols">
            {Object.entries(links).map(([heading, items]) => (
              <div className="footer-col" key={heading}>
                <h4>{heading}</h4>
                <ul>
                  {items.map(({ href, label }) => (
                    <li key={href}>
                      <a href={href}>{label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} <span>Fox Box Insurance</span>. Not affiliated with Discord Inc.
          </p>

          <div className="footer-socials">
            {/* Discord */}
            <a href="/support" aria-label="Discord">
              <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 640 512" fill="currentColor">
                <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"/>
              </svg>
            </a>

            {/* GitHub */}
            <a href="https://github.com/MusicMakerOwO/FoxBoxInsurance" aria-label="GitHub" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}