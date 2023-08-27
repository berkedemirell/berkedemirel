
import {Link} from "react-router-dom"

import logo from '../source/images/TomBombadil.jpg'
//bg-gradient-to-r from-nav1 to-nav2


const Navbar = () => {
  return (
    <div className="p-4 bg-night bg-cover border-b border-slate-700 font-texturina mmd:pr-12 mmd:pl-12 mmmd:pl-8 mmmd:pr-8 ssm:pr-2">
        <div className="flex flex-row items-center justify-between container2">
            <div><Link to='/'><img src={logo} alt="" className="w-20 h-20 rounded-full mmmd:w-14 mmmd:h-14 transition-all duration-500 hover:transform hover:scale-105"/></Link></div>
            <div className="flex flex-row gap-6 text-lg mmmd:text-sm text-slate-50 font-bold mr-8">
                <Link to='/' className="hover:text-slate-500 transition-all duration-500">Main</Link>
                <Link to='/' className="hover:text-slate-500 transition-all duration-500">Skills</Link>
                <Link to='/' className="hover:text-slate-500 transition-all duration-500">My Projects</Link>
                <Link to='/' className="hover:text-slate-500 transition-all duration-500">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar