import localFont from 'next/font/local'

// Файлы шрифтов могут размещаться в директории `app`
const myFont = localFont({
  src: './my-font.woff2',
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={myFont.className}>
      <body>{children}</body>
    </html>
  )
}

const roboto = localFont({
    src: [
      {
        path: './Roboto-Regular.woff2',
        weight: '400',
        style: 'normal',
      },
      {
        path: './Roboto-Italic.woff2',
        weight: '400',
        style: 'italic',
      },
      {
        path: './Roboto-Bold.woff2',
        weight: '700',
        style: 'normal',
      },
      {
        path: './Roboto-BoldItalic.woff2',
        weight: '700',
        style: 'italic',
      },
    ],
  })




/*  */
 
