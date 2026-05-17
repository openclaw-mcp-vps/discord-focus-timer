import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Discord Focus Timer — Pomodoro that auto-mutes Discord',
  description: 'Automatically set Discord to DND and mute notifications during your Pomodoro focus sessions. Stay in flow, never miss the break bell.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f0decd16-0d36-4d85-9315-1c9423bab1b6"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
