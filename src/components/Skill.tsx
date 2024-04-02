import { Component } from "solid-js";

interface ButtonProps {
    children: any; // Sesuaikan tipe children dengan kebutuhan
}

const Button: Component<ButtonProps> = (props) => {
    return (
        <div>
            <div class="tooltip">
                <button class="btn">{props.children}</button>
            </div>
        </div>
    );
    
};

export default Button;
