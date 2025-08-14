// import React from 'react'

import { Link } from "react-router-dom"

function Header() {
  return (
    <div className="w-3/4 mx-auto p-4 rounded-3xl bg-transparent/45 backdrop-blur-sm border border-white/20 shadow-lg">
  <div className="flex justify-between items-center text-white">
    <p className="font-bold text-lg">Cosmic</p>
    <div className="flex gap-6">
      <div className="cursor-pointer hover:underline">Home</div>
      <div className="cursor-pointer hover:underline">About</div>
    </div>
  </div>
</div>

  )
}

export default Header
