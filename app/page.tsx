export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] flex flex-col items-center px-4">
      {/* Hero */}
      <section className="w-full max-w-3xl text-center pt-24 pb-16">
        <div className="inline-flex items-center gap-2 bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          <span className="w-2 h-2 rounded-full bg-[#58a6ff] inline-block"></span>
          Discord OAuth Integration
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stay in flow.<br />
          <span className="text-[#58a6ff]">Auto-mute Discord</span> during focus.
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Discord Focus Timer connects to your Discord account and automatically sets you to Do Not Disturb when a Pomodoro session starts — then restores your status when the break begins.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Focusing — $5/mo
        </a>
        <p className="mt-3 text-sm text-[#6e7681]">Cancel anytime. No credit card stored.</p>

        <div className="mt-14 grid grid-cols-3 gap-6 text-center">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff]">25 min</div>
            <div className="text-sm text-[#8b949e] mt-1">Default focus block</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff]">Auto DND</div>
            <div className="text-sm text-[#8b949e] mt-1">Discord status set instantly</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff]">1-click</div>
            <div className="text-sm text-[#8b949e] mt-1">OAuth setup, no bot needed</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="w-full max-w-sm pb-16" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$5</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Unlimited Pomodoro sessions',
              'Auto Discord DND on session start',
              'Auto-restore status on break',
              'Custom focus & break durations',
              'Session history & streaks',
              'Priority support'
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full max-w-2xl pb-24" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does the Discord integration work?',
              a: 'You connect your Discord account via OAuth. When a focus session starts, we use the Discord API to set your status to Do Not Disturb. No bot installation required — just a one-time authorization.'
            },
            {
              q: 'Will it interrupt my voice calls or streams?',
              a: 'No. The integration only changes your online status and notification settings. It does not disconnect you from voice channels or affect any active streams.'
            },
            {
              q: 'Can I cancel my subscription anytime?',
              a: 'Yes. You can cancel at any time from your billing portal. Your access continues until the end of the current billing period with no hidden fees.'
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e] leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="pb-8 text-center text-xs text-[#6e7681]">
        © {new Date().getFullYear()} Discord Focus Timer. Not affiliated with Discord Inc.
      </footer>
    </main>
  )
}
