import { Component } from "solid-js";
import { About, Footer, Navbar } from "../../components/index";

const about: Component = () => {
    return (
        <div>
            <Navbar />
            <div class="py-40">
                {" "}
                <About />
            </div>
            <Footer />
        </div>
    );
};

export default about;
