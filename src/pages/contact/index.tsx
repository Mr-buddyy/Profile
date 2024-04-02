import { Component } from "solid-js";
import { Contact, Footer, Navbar } from "../../components/index";

const contact: Component = () => {
    return (
        <div>
            <Navbar />
            <div class="py-40">
                {" "}
                <Contact />
            </div>
            <Footer />
        </div>
    );
};

export default contact;
