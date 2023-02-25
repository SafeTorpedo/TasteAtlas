import React from 'react'
import { Link } from "react-router-dom"

const DashNavbar = () => {

  return (
    <div>
      <nav className="py-4 px-4 flex bg-[#9cc861] justify-between ">
            <span className="text_base font-semibold cursor-pointer"><Link to="/">TasteAtlas</Link></span>
            {/* welcome */}
            {/* signout */}
        </nav>
    </div>
  )
}

export default DashNavbar
