import Footer from "../components/Footer"
import Hero from "../components/Hero"
import MenuComponent from "../components/Menu"
export default function Menu() {
    return ( 
    <section>
        <Hero src='/Menu1.jpg' carousel={false}/>
        <MenuComponent />
    </section>
    )
}