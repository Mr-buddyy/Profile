import { Component } from "solid-js";
import { Router, Route } from "@solidjs/router";
import { Home, Contact, About, Portofolio } from "./pages/index";

const App: Component = () => {
    return (
        <div>
            <Router>
                <Route path="/" component={Home} />
                <Route path="/contact" component={Contact} />
                <Route path="/about" component={About} />
                <Route path="/portofolio" component={Portofolio} />
            </Router>
        </div>
    );
};

export default App;
