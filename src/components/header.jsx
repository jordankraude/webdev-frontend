'use client'

function Header(){

return (
  <header className="flex flex-row pt-10 fixed top-0 bg-black z-50 w-screen h-24">
    <img src="/images/logo.png" alt="Site Logo" className="absolute lg:h-14 lg:w-14 left-0 ml-20 -mt-4 hidden lg:block"/>
    <nav className="absolute w-1/3 mr-20 md:mr-14 lg:mr-8 -mt-4 right-0">
      <ul className="flex flex-row text-white justify-evenly lg:text-2xl md:text-xl sm:text-lg">
        <a href="/"><li className="m-2">Home</li></a>
        <a href="/Services"><li className="m-2">Services</li></a>
        <a href="/FAQ"><li className="m-2">FAQs</li></a>
        <a href="/Contact"><li className="m-2">Contact</li></a>
      </ul>
    </nav>
  </header>
)
}

export {Header}
