import Footer from "../components/Footer"
import Hero from "../components/Hero"
import MenuComponent from "../components/Menu"
export default function Menu() {
    return ( 
    <section>
        <Hero src='/rstock.jpg' carousel={false}/>
        <MenuComponent />
        <Footer/>
    </section>
    )
}