import  {BrowserRouter as Router, Routes, Route} from "react-router";
import NavBar from "../components/layout/NavBar.jsx"
import Layout from "../components/layout/Layout.jsx";
import Hero from "../components/sections/landing/Hero.jsx";
import HomePage from "../pages/HomePage.jsx";
const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                </Route>
            </Routes>
        </Router>
    )
}
export default AppRoutes;