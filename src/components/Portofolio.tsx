import { Component } from "solid-js";
import { climateaware, desa, event, gamis, stoik } from "../assets/index";
import Button from "./Button";

interface PortofolioPros {
    // Sesuaikan tipe children dengan kebutuhan
    date: any;
    skills: any;
    desc: any;
    img: any;
    href: any;
}

const Portofolio: Component<PortofolioPros> = (props) => {
    return (
        <div>
            <li class="p-4 grid grid-cols-8 gap-6 whitespace-no-wrap group hover:bg-white hover:bg-opacity-10 hover:rounded-lg hover:transition hover:duration-300 hover:ease-in-out">
                <img src={props.img} class="col-span-8 sm:col-span-4 md:col-span-3 lg:col-span-3 bg-contain " />
                <div class="flex flex-col gap-2 col-span-8 sm:col-span-4 md:col-span-5 lg:col-span-5 ">
                    <div class="font-bold group-hover:text-cyan-400">{props.date}</div>
                    <div class="text-gray-400">{props.desc}</div>
                    <div class="group-hover:text-cyan-400">{props.skills}</div>
                    <Button children="Github" href={props.href} />
                </div>
            </li>
        </div>
    );
};
export default Portofolio;
