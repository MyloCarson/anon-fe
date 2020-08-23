import React from 'react'

const Footer = () => (
  <div className="flex flex-col-reverse md:flex-row items-center justify-center mb-4 text-white">
    <span className="text-white my-1 md:my-0 md:mr-1"> Copyright <small>&copy;</small> SafeSpace {new Date().getFullYear()}</span>
    <span className="hidden md:inline-flex">|</span>
    <a href="mailto:info@anaon.com" className="text-white underline my-1 md:my-0 md:mx-1">products@seunakanni.me</a>
    <span className="hidden md:inline-flex">|</span>
    <a href="https://twitter.com/i_am_mylo" className="text-white underline my-1 md:my-0 md:mx-1">Twitter</a>
  </div>
)

export default Footer
