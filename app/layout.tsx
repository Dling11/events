import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Haker Events',
  description: 'Events for hacking',
  icons: {
    icon: '/assets/images/logo.svg'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.variable}>{children}</body>
      </html>
    </ClerkProvider>
  )
}


// https://www.youtube.com/watch?v=zgGhzuBZOQg

//01:31:30

// webhooks : https://dashboard.clerk.com/apps/app_2ZeaJZkG4ymApPwAFoJbcz4pLWS/instances/ins_2ZeaJZUpk5tw2ZrHGxxNHEVMFxg/webhooks

// https://docs.uploadthing.com/getting-started/_shared/env-setup#install-the-packages  