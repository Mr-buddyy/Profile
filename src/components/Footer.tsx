import { Component } from "solid-js";
// import { Route, Routes } from "@solidjs/router";
// import { home, about, contact } from "../pages/index";
import igSvg from "../assets/ig.svg"; // Impor SVG di sini

const Footer: Component = () => {
    return (
        <div>
            <footer class="footer p-10 bg-base-300 text-base-content">
                <nav>
                    <h6 class="footer-title">Quick Link</h6>
                    <a href="/" class="link link-hover">
                        Home
                    </a>
                    <a href="/about" class="link link-hover">
                        About
                    </a>
                    <a href="/portofolio" class="link link-hover">
                        Portofolio
                    </a>
                    <a href="/contact" class="link link-hover">
                        Contact
                    </a>
                </nav>

                <nav>
                    <h6 class="footer-title">Company</h6>
                    <a class="link link-hover">About us</a>
                    <a class="link link-hover">Contact</a>
                    <a class="link link-hover">Jobs</a>
                    <a class="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 class="footer-title">Social</h6>
                    <div class="grid grid-flow-col gap-4">
                        <a href="https://www.linkedin.com/in/singgih-budi-hartono-675413222/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current">
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/sbudi_h/">
                            <img src={igSvg} alt="Instagram Logo" class="w-[24px] h-[24px] fill-current" /> {/* Menyertakan SVG */}
                        </a>
                        <a href="https://web.facebook.com/singgih.banker">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current">
                                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                            </svg>
                        </a>
                    </div>
                </nav>
            </footer>
            <aside class="footer footer-center p-4 bg-base-300 text-base-content border-t border-t-white">
                <p>Copyright © 2024 - All right reserved by Singgih </p>
            </aside>
        </div>
    );
};

export default Footer;
