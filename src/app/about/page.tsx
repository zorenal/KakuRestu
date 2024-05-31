import Hero from "../components/Hero"
import AboutComponent from "../components/About"
import Footer from "../components/Footer"
import Gallery from "../components/Gallery"
export default function About() {
    return (
        <section>
            <Hero src='/rstock.jpg'/>
            <AboutComponent/>
            <Gallery/>
        </section>
    )
}