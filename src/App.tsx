import { JSX } from "solid-js";
import { Router, Route } from "@solidjs/router";
// import { Home, Contact, About, Portofolio, Profile } from "./pages/index";
// import { PortofolioOpenSource, PortofolioWeb, ProjectDesign } from "./pages/index";
import { lazy } from "solid-js";

const LazyProjectOpenSource = lazy(() => import("./pages/porject-opensource"));
const LazyProjectWeb = lazy(() => import("./pages/project-web"));
const LazyProjectDesign = lazy(() => import("./pages/project-design"));
const LazyProfile = lazy(() => import("./pages/profile"));
const LazyHome = lazy(() => import("./pages/home"));
const LazyContact = lazy(() => import("./pages/contact"));
const LazyAbout = lazy(() => import("./pages/about"));
const LazyPortofolio = lazy(() => import("./pages/portofolio"));

export default function App(): JSX.Element {
    return (
        <div>
            <Router>
                <Route path="/" component={LazyHome} />
                <Route path="/contact" component={LazyContact} />
                <Route path="/about" component={LazyAbout} />
                <Route path="/portofolio" component={LazyPortofolio} />
                <Route path="/portofolio-opensource" component={LazyProjectOpenSource} />
                <Route path="/portofolio-design" component={LazyProjectDesign} />
                <Route path="/portofolio-web" component={LazyProjectWeb} />
                <Route path="/profile" component={LazyProfile} />
            </Router>
        </div>
    );
}
