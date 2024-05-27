import Hero from "../components/Hero"
import MenuComponent from "../components/Menu"
export default function Menu() {
    return ( 
    <section className="h-screen overflow-y-hidden">
        <Hero src='/rstock.jpg' mobileHeight='h-1/3' altHeight='sm:h-1/2' label='Menu'/>
        <MenuComponent />
    </section>
    )
}