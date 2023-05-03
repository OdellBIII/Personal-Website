import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header> Odell Blackmon, III</header>
      <h1>Software Engineer | Tech Consultant | Generally Curious </h1>
      <div>
        <a href='https://www.instagram.com/od.3.ll/'>Instagram</a>
        <a href='https://twitter.com/nodellodell'>Twitter</a>
        <a href='https://www.linkedin.com/in/odell-blackmon-iii/'>LinkedIn</a>
        <a href='https://github.com/OdellBIII'>Github</a>
        <a href='https://substack.com/profile/7430718-odell-blackmon-iii?utm_source=substack_profile'>Substack</a>
      </div>
    </main>
  )
}
