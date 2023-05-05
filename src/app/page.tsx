import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header> Odell Blackmon, III</header>
      <h1>Software Engineer | Tech Consultant | Generally Curious </h1>
      <div>
        <a href='https://www.instagram.com/od.3.ll/'>
          <img src='instagram-icon.jpeg'></img>
        </a>
        <a href='https://twitter.com/nodellodell'>
          <img src="twitter-icon.png"></img>
        </a>
        <a href='https://www.linkedin.com/in/odell-blackmon-iii/'>
          <img src='linkedin-icon.png'></img>
        </a>
        <a href='https://github.com/OdellBIII'>Github</a>
        <a href='https://substack.com/profile/7430718-odell-blackmon-iii?utm_source=substack_profile'>Substack</a>
      </div>
      <div>
        <ul>
          <li>
            <a href='https://odellblackmoniii.substack.com/p/urbit-will-never-become-a-household?utm_source=profile&utm_medium=reader2'>
              Thoughts on Urbit
            </a>
          </li>
        </ul>
      </div>
    </main>
  )
}
