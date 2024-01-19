import Hero from "./MainComponents/Hero";
import About from "./MainComponents/About";
import Specials from "./MainComponents/Specials";
import Testimonials from "./MainComponents/Testimonials";

const Main = () => {
    return (
        <main className="main">
            <Hero />
            <Specials />
            <Testimonials />
            <About />
        </main>
    );
}

export default Main;