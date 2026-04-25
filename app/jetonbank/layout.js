export const metadata = {
  title: 'iBnk – The Bank for All Businesses',
  description: 'Experience business banking without borders. Scale your business with secure, efficient, and global financial solutions.',
  icons: {
    icon: 'https://www.jetonbank.com/favicon.png',
  },
}

export default function JetonBankLayout({ children }) {
  return (
    <div style={{ margin: 0, background: '#f3624e' }}>
      {children}
    </div>
  )
}
