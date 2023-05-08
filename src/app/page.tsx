import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <h1> Odell Blackmon, III</h1>
      <p>Software Engineer | Tech Consultant | Generally Curious </p>

      <div className="social-container">
        <a href='https://www.instagram.com/od.3.ll/'>
          <img src='instagram-icon.png'></img>
        </a>
        <a href='https://twitter.com/nodellodell'>
          <img src="twitter-icon.png"></img>
        </a>
        <a href='https://www.linkedin.com/in/odell-blackmon-iii/'>
          <img src='linkedin-icon.png'></img>
        </a>
        <a href='https://github.com/OdellBIII'>
          <img src='github-icon.png'></img>
        </a>
        <a href='https://substack.com/profile/7430718-odell-blackmon-iii?utm_source=substack_profile'>
          <img src='substack-icon.png'></img>
        </a>
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
      <img src='serene-background.gif'></img>
    </main>
  )
}
