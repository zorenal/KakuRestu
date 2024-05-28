import Hero from "../components/Hero"
import AboutComponent from "../components/About"
import Footer from "../components/Footer"
export default function About() {
    return (
        <section className="h-screen">
            <Hero src='/rstock.jpg' mobileHeight="h-1/3" altHeight="sm:h-1/2"/>
            <AboutComponent/>
            <Footer/>
        </section>
    )
}