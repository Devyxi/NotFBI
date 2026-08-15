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

function Table({ headers, rows }: { headers: string[]; rows: React.ReactNode[][] }) {
  return (
    <div style={{ overflowX: 'auto', margin: '1.25rem 0' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
        <thead>
          <tr style={{ background: 'var(--surface)' }}>
            {headers.map(h => (
              <th key={h} style={{ padding: '0.75rem 1rem', textAlign: 'left', fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--muted)', border: '1px solid var(--line)', whiteSpace: 'nowrap' }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j} style={{ padding: '0.8rem 1rem', color: j === 0 ? 'var(--bright)' : 'var(--muted)', fontWeight: j === 0 ? 600 : 400, border: '1px solid var(--line)', lineHeight: 1.6, verticalAlign: 'top' }}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function RefundPolicy() {
  return (
    <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <div style={{ maxWidth: '52rem', margin: '0 auto', padding: '7rem 2rem 6rem', width: '100%' }}>

        <div style={{ marginBottom: '3.5rem', paddingBottom: '2.5rem', borderBottom: '1px solid var(--line)' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.045em', lineHeight: 1.05, marginBottom: '0.875rem' }}>
            Refund Policy
          </h1>
          <p style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>
            Last updated July 18, 2025
          </p>
        </div>

        <Section number="01" title="Definitions">
          <P>In this Refund Policy, the following terms have the meanings set forth below:</P>
          <Ul items={[
            <><Strong>"FBI"</Strong> refers to the Fox Box Insurance Discord bot and its related services.</>,
            <><Strong>"User"</Strong> refers to any individual or entity that interacts with FBI, including server owners, administrators, moderators, and regular server members.</>,
            <><Strong>"Data"</Strong> refers to any information collected by FBI, including but not limited to public messages, attachments, and icons.</>,
            <><Strong>"Discord"</Strong> refers to the Discord platform where FBI operates — we do not own or control Discord in any capacity.</>,
            <><Strong>"Guild"</Strong> refers to a Discord server where FBI is invited and operates.</>,
          ]} />
        </Section>

        <Section number="02" title="Pricing Policy">
          <P>We believe in keeping things fair and predictable — users are always charged fairly and transparently. Here's how our pricing works:</P>
          <Ul items={[
            <><Strong>Your price is locked in.</Strong> Once you subscribe to FBI Premium, your price will never increase — as long as you maintain your current subscription. Cancelling or switching plans will reset your price to the current rate.</>,
            <><Strong>Price drops apply to everyone.</Strong> If we lower our prices, all users will benefit from the new rate — even if you are locked in at a higher price. If your current price is lower than the new rate, you will continue to pay your lower price.</>,
            <><Strong>No hidden deals.</Strong> We do not offer special deals or discounts to specific users. If there is ever a discount or promotion, it will be available to all users.</>,
            <><Strong>Simple and honest.</Strong> Your subscription is a flat rate, meaning you will get new features and improvements without any additional cost. You will never be charged hidden fees or be required to pay for new features. Server size and activity do not affect your subscription price.</>,
          ]} />
        </Section>

        <Section number="03" title="Subscription Tiers and Refund Eligibility">
          <P>FBI Premium offers several ways to subscribe, each with its own cost and refund eligibility:</P>
          <Table
            headers={['Subscription Tier', 'Cost', 'Refund Eligibility']}
            rows={[
              [
                'Monthly Subscription',
                '$2.00 USD/month',
                'Due to the low cost and high administrative overhead, we do not offer refunds for monthly subscriptions.',
              ],
              [
                'Yearly Subscription',
                '$20.00 USD/year',
                'Refunds are available based on the remaining time in your subscription. If you have 3 months remaining on a 12-month plan, a 25% refund ($5.00) will be issued.',
              ],
              [
                'Lifetime',
                '$60.00 USD',
                'Cancels within 30 days for a full refund. Otherwise, you may cancel within 90 days for a 50% refund. After 90 days, no refunds are available.',
              ],
            ]}
          />
        </Section>

        <Section number="04" title="Termination of Services">
          <P>We reserve the right to suspend or terminate access to FBI Premium if a user is found to be in violation of our <Link href="/terms">Terms of Service</Link>, including but not limited to:</P>
          <Ul items={[
            'Harassment, abuse, or targeted harassment using FBI.',
            'Attempted circumvention of subscription mechanisms.',
            "Using FBI in a way that violates Discord's Terms of Service.",
            'Fraud or unauthorized payment activity, such as chargebacks or disputes.',
          ]} />
          <P>In such cases, no refunds will be issued, and the user may be permanently banned from using FBI. If you believe this was a mistake, you may appeal by contacting us through our Discord support server or emailing <Link href="mailto:support@notfbi.dev">support@notfbi.dev</Link>.</P>
        </Section>

        <Section number="05" title="User Responsibility">
          <P>Users are responsible for managing their own subscriptions. If you wish to cancel, you must do so through the payment platform you used to subscribe (e.g., Patreon, Ko-fi, etc.). We do not have access to your payment information and cannot cancel subscriptions on your behalf. By subscribing, you acknowledge the following:</P>
          <Ul items={[
            'You are responsible for managing your subscription, including cancellations before renewal.',
            'Refunds will not be issued for unused time unless listed under the eligibility section above.',
            'You understand and agree to the refund timeframes based on your selected plan.',
            'We are not responsible for any issues related to your payment method, such as expired cards or insufficient funds.',
          ]} />
        </Section>

        <Section number="06" title="Requesting a Refund">
          <P>To request a refund, please contact us through our Discord support server or email <Link href="mailto:billing@notfbi.dev">billing@notfbi.dev</Link> with the following information:</P>
          <Ul items={[
            'Your Discord username and ID',
            'Purchase date',
            'Payment method used',
            'Reason for the refund',
          ]} />
          <P>We will review your request and respond within 5 business days. If approved, refunds will be processed through the original payment method.</P>
        </Section>

        <Section number="07" title="Disputes and Chargebacks">
          <P>If you initiate a chargeback or dispute with your payment provider, we reserve the right to suspend or terminate your access to FBI Premium immediately. Chargebacks are considered a violation of our Terms of Service and may result in permanent banning from FBI.</P>
          <P>If you believe this was a mistake, please contact us before initiating a chargeback.</P>
        </Section>

        <Section number="08" title="Changes to This Policy">
          <P>We may update this Refund Policy from time to time. Major changes will be announced in our Discord support server. Continued use of FBI after an update constitutes acceptance of the new terms.</P>
        </Section>

        <Section number="09" title="Contact Us">
          <P>
            If you have any questions about this Policy, please contact us through our Discord support server or by emailing us at{' '}
            <Link href="mailto:support@notfbi.dev">support@notfbi.dev</Link>.
          </P>
        </Section>

      </div>
    </main>
  )
}