import { Link } from "react-router-dom"
import logo from "../assets/logo.png"
import { Button } from "./ui/button"

export const Header = () => {
  return (
    <nav className="w-full h-14 bg-gray-900 text-white p-3 flex justify-between items-center">
        <div className="flex items-center">
            <img src={logo} alt="web wise logo" className="w-12 h-12 mr-2" />
            <Link to="/" className="font-bold select-none">Web Wise</Link>
        </div>
        <ul>
            <li>
                <Link to="/compiler" className="font-bold"><Button variant="secondary">Compiler</Button></Link>
            </li>
        </ul>
    </nav>
  )
}
