
import { Link } from "react-router-dom"


function Header() {
    return <>
   
  <header className="bg-slate-900 text-white shadow-md">
  <div className="max-w-7xl mx-auto flex justify-between items-center h-[70px] px-6">
    
    <h1 className="text-2xl font-bold tracking-wide">
      E-commerce
    </h1>

    <ul className="flex gap-8 text-sm font-medium">
      <li>
        <Link className="hover:text-blue-400 duration-300" to="/">
          Home
        </Link>
      </li>

      <li>
        <Link className="hover:text-blue-400 duration-300" to="/about">
          About
        </Link>
      </li>

      <li>
        <Link className="hover:text-blue-400 duration-300" to="/product">
          Product
        </Link>
      </li>

      <li>
        <Link className="hover:text-blue-400 duration-300" to="/productview">
          ProductView
        </Link>
      </li>
    </ul>

  </div>
</header>
    
    </>
}

export default Header