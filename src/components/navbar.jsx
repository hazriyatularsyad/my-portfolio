import React, { useState, useEffect } from "react"

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    document.addEventListener("scroll", handleScroll)

    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <nav
      className={`fixed top-0 z-10 w-full py-3 transition duration-300 ease-in-out ${
        scrolled
          ? "bg-black bg-opacity-90 text-white shadow-md "
          : "bg-transparent text-gray-800"
      }`}
    >
      <div className="container mx-auto flex justify-center items-center my-3">
        <div className="pr-8">
          <ul className="flex space-x-8 gap-7 text-md py-4">
            <li className=" text-center">
              <a
                href="#"
                className="text-white hover:text-gray-300 shadow-lg transition duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-gray-300 shadow-lg transition duration-200"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-gray-300 shadow-lg transition duration-200"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-gray-300 shadow-lg transition duration-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
