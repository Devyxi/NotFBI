function Section({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: '3rem' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.875rem', marginBottom: '1.25rem' }}>
        <span style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--ember)', fontVariantNumeric: 'tabular-nums', flexShrink: 0 }}>
          {number}
        </span>
        <h2 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--bright)', letterSpacing: '-0.025em', margin: 0 }}>
          {title}
        </h2>
      </div>
      <div style={{ paddingLeft: '2.25rem' }}>
        {children}
      </div>
    </section>
  )
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontSize: '0.9375rem', color: 'var(--muted)', lineHeight: 1.8, margin: '0 0 0.875rem' }}>
      {children}
    </p>
  )
}

function Ul({ items }: { items: React.ReactNode[] }) {
  return (
    <ul style={{ margin: '0 0 0.875rem', padding: 0, listStyle: 'none' }}>
      {items.map((item, i) => (
        <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', padding: '0.4rem 0', fontSize: '0.9375rem', color: 'var(--muted)', lineHeight: 1.75 }}>
          <span style={{ flexShrink: 0, marginTop: '0.55rem', width: '5px', height: '5px', borderRadius: '50%', background: 'var(--ember)', opacity: 0.7 }} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function Strong({ children }: { children: React.ReactNode }) {
  return <span style={{ color: 'var(--bright)', fontWeight: 600 }}>{children}</span>
}

function Link({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} style={{ color: 'var(--ember)', textDecoration: 'none', borderBottom: '1px solid #ff480040' }}>
      {children}
    </a>
  )
}

export default function TermsOfService() {
  return (
    <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <div style={{ maxWidth: '52rem', margin: '0 auto', padding: '7rem 2rem 6rem', width: '100%' }}>

        <div style={{ marginBottom: '3.5rem', paddingBottom: '2.5rem', borderBottom: '1px solid var(--line)' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.045em', lineHeight: 1.05, marginBottom: '0.875rem' }}>
            Terms of Service
          </h1>
          <p style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>
            Version 4 &nbsp;·&nbsp; Last updated June 15, 2026
          </p>
        </div>

        <Section number="01" title="Definitions">
          <P>In these Terms, the following terms have the meanings set forth below:</P>
          <Ul items={[
            <><Strong>"FBI"</Strong> refers to the Fox Box Insurance Discord bot and its related services.</>,
            <><Strong>"User"</Strong> refers to any individual or entity that interacts with FBI, including server owners, administrators, moderators, and regular server members.</>,
            <><Strong>"Data"</Strong> refers to any information collected by FBI, including but not limited to public messages, attachments, and icons.</>,
            <><Strong>"Discord"</Strong> refers to the Discord platform where FBI operates — we do not own or control Discord in any capacity.</>,
            <><Strong>"Guild"</Strong> refers to a Discord server where FBI is invited and operates.</>,
          ]} />
        </Section>

        <Section number="02" title="Acceptance of Terms">
          <P>By inviting the FBI bot to your Discord server or using our services — commands, buttons, or otherwise — you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you may not use our services. Failure to abide by these terms may result in a permanent suspension of your access to the bot.</P>
        </Section>

        <Section number="03" title="Description of Service">
          <P>FBI is designed to help server administrators and moderators log, archive, and export server activity in a structured and transparent manner. The bot captures messages sent in a public domain including any attachments, emojis, stickers, embeds, and basic user information. You can find more information about the data we collect in our <Link href="/privacy">Privacy Policy</Link>.</P>
          <P>Along with message data, FBI also collects and stores metadata from channels, roles, and bans for server snapshots. These are historical backups of the server that can be used to restore the server to a previous state in the event of a catastrophic failure. FBI does not collect or store any private channels it does not have access to.</P>
        </Section>

        <Section number="04" title="Data Responsibilities">
          <P>FBI captures public data only and is functionally equivalent to a screenshot or archive tool. By sending messages in a public channel where the bot is present, you understand that your messages are being recorded for anyone within the server and with access to the channel to see — even after deletion. FBI does not collect private messages or messages from channels it does not have access to. It only records public messages in Discord servers where it has been explicitly invited and granted read access.</P>
          <P>Server owners and administrators are responsible for notifying users of the bot's presence and the data collection that occurs.</P>
        </Section>

        <Section number="05" title="User Responsibilities">
          <P>As a user of FBI, you are expected to follow a strict code of conduct while handling exported data. You agree not to use the data for any illegal or malicious purposes, including but not limited to harassment, doxxing, or any other ill intentions against another user, server, company, or entity of any kind. You are also responsible for ensuring that your use of FBI complies with the following:</P>
          <Ul items={[
            <><Link href="https://discord.com/terms">Discord's Terms of Service</Link></>,
            <><Link href="https://discord.com/guidelines">Discord's Community Guidelines</Link></>,
            <><Link href="https://discord.com/privacy">Discord's Privacy Policy</Link></>,
            'United States Federal Laws',
          ]} />
        </Section>

        <Section number="06" title="Limitations of Liability">
          <P>FBI is provided "as is" without warranties of any kind, either express or implied. We do not guarantee that FBI will always be safe, secure, or error-free, or that it will function without disruptions, delays, or imperfections. We are not responsible for the actions, content, information, or data of third parties. You release us from any claims and damages connected with your use of FBI.</P>
        </Section>

        <Section number="07" title="Changes to Terms">
          <P>We may modify these Terms at any time. We will provide notice of significant changes through our Discord support server or by other means. You may decline these new terms and continue using the bot as before, but access to new features may be restricted until accepted.</P>
        </Section>

        <Section number="08" title="Termination">
          <P>We reserve the right to remove FBI from any server or suspend your access to FBI at any time, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties. We are not obligated to provide reason for termination unless legally required to do so.</P>
        </Section>

        <Section number="09" title="Governing Law">
          <P>These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions. FBI is operated from the United States and is subject to U.S. laws and regulations. By using FBI, you consent to the jurisdiction of the courts located in the United States for any disputes arising out of or related to these Terms or your use of FBI.</P>
          <P>FBI may be legally required to hand over any data collected to law enforcement or other government agencies in accordance with applicable laws and regulations and Discord's Developer Terms of Service.</P>
        </Section>

        <Section number="10" title="Data Ownership">
          <P>All data collected and archived by FBI remains the property of the original author(s) and Discord. FBI does not claim ownership over any message content. Users who generate exports are responsible for how that data is used and shared.</P>
          <P>We do not condone the use of exported logs for harassment, blackmail, or malicious intent. Any such activity may result in termination of access and notification to Discord or relevant authorities.</P>
        </Section>

        <Section number="11" title="Contact Us">
          <P>
            If you have any questions about these Terms, please contact us through our Discord support server or by emailing us at{' '}
            <Link href="mailto:support@notfbi.dev">support@notfbi.dev</Link>.
          </P>
        </Section>

      </div>
    </main>
  )
}