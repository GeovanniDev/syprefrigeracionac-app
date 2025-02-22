import { Outlet } from "react-router-dom"
import { NavBar } from "./shared/components"

function App() {
  return (
    <>
      <NavBar />
        <Outlet />
    </>
  )
}

export default App
