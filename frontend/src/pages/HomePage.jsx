import NavBar from "../components/layout/NavBar";
import Hero from "../components/sections/landing/Hero";
import Features from "../components/sections/landing/features/Features";
import Details from "../components/sections/landing/details/Details";
import FinalCTA from "../components/sections/landing/FinalCTA";
import  Footer  from "../components/sections/landing/Footer";
const HomePage = () => {
    return (
        <main className="min-h-screen bg-background">
            <NavBar></NavBar>
            <Hero></Hero>
            <Features></Features>
            <Details></Details>
            <FinalCTA></FinalCTA>
            <Footer></Footer>
        </main>
    )
}
export default HomePage;