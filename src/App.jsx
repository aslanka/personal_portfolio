import {BrowserRouter} from "react-router-dom";
import {About, Contact, Experience, Feedbacks, Hero, Navbar, StarsCanvas, Tech, Works, Blogs} from "./components/index.js";

function App() {

    return (
        <BrowserRouter>
            <div className="relative z-0 bg-primary">
                <div className={"bg-hero-pattern bg-cover bg-no-repeat bg-center"}>
                    <Navbar/>
                    <Hero/>
                </div>
                <About/>
                <Experience/>
                <Tech/>
                <Works/>
                <Blogs />
                <Feedbacks/>
                <div className={"relative z-0"}>
                    <Contact/>
                    <StarsCanvas/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
