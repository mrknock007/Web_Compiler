import { Route, Routes } from "react-router-dom"
import { Header } from "./components/Header"

// Pages
import Home from "./pages/Home"
import Compiler from "./pages/Compiler"
import NotFound from "./pages/NotFound"

import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "react-hot-toast"
const App = () => {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/compiler" element={<Compiler />} />
          <Route path="/compiler/:urlId" element={<Compiler />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </ThemeProvider>
    </>
  )
}

export default App