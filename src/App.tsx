import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import SideNav from "./components/SideNav"
import TopNav from "./components/TopNav"
import DashBoard from "./components/DashBoard"
import UserManagement from "./components/UserManagement"
import Footer from "./components/Footer"
const App = () => {
  return (

      <Router>
         <div className="flex"> 
         <SideNav/>
         <div className="flex-1"> 
        <TopNav/>
        <Routes>
          <Route path="/" element={<DashBoard/>}/>
          <Route path="/UserManagement" element={<UserManagement/>}/>
        </Routes>
        <Footer/>
         </div> 
          </div> 
      </Router>
    
  )
}

export default App
