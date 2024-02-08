'use client'

function Header(){

return (
    <header className="flex flex-row justify-evenly pt-10 fixed top-0 bg-black z-50 w-screen h-24">
    <img src="/images/logo.png" alt="Site Logo" className="mx-auto my-auto pb-5 lg:h-16 lg:w-20 h-1/5 w-1/5"/>
    <nav className="w-3/4">
      <ul className="flex flex-row text-white justify-evenly lg:text-3xl md:text-xl sm:text-lg">
        <a href="/"><li>Home</li></a>
        <a href="/Services"><li>Services</li></a>
        <a href="/FAQ"><li>FAQs</li></a>
        <a href="/Team"><li>Team</li></a>
        <a href="/Contact"><li>Contact</li></a>
      </ul>
    </nav>
  </header>
)
}

export {Header}
