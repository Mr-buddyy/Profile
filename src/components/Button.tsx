import { Component } from "solid-js";

interface ButtonProps {
    children: any; // Sesuaikan tipe children dengan kebutuhan
    href: any;
}

const Button: Component<ButtonProps> = (props) => {
    return (
        <div>
            <div class="tooltip" data-tip="redirect to github">
                <a href={props.href} class="btn">
                    {props.children}
                </a>
            </div>
        </div>
    );
};

export default Button;
