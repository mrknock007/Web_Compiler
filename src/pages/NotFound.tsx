import { Link } from "react-router-dom"
import img404 from "../assets/404.png"

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-56px)]">
      <h1 className="text-4xl font-bold mb-6">Page Not Found</h1>
      <img src={img404} alt="404-illustration" className="h-96" />
      <Link to="/" className="text-xl font-bold mt-6 border-2 py-4 px-6 rounded-lg border-black">Go Home</Link>
    </div>
  )
}

export default NotFound