"use client"
import NavBar from '@/ui/NavBar'
import { ThemeProvider } from 'next-themes'

export default function Home() {
  return (
    <ThemeProvider themes={['blue', 'purple', "green", "pink", "dark", "light"]} enableSystem={false} defaultTheme='pink' attribute="data-theme">
      <div className='w-full h-full'>
        <NavBar />
      </div>
    </ThemeProvider>
  )
}
