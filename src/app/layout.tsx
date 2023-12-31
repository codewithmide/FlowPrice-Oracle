import './globals.css';

export const metadata = {
  title: 'FlowPrice Oracle',
  description: 'See cryptocurrency price realtime',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="poppins overflow-x-hidden">{children}</body>
    </html>
  )
}
