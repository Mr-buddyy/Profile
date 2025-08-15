import { Icon } from "@iconify-icon/solid";
import { profile } from "../../assets/index";
import Navbar from "../../components/main/Navbar";
import hooks from "../../hooks/hooks";

export default function index() {
    const { Profile } = hooks();
    const listCard = Profile();

    return (
        <>
            <Navbar />
            <div class="flex flex-col items-center justify-center min-h-screen bg-base-200 gap-10 py-20">
                <div class="flex flex-col gap-5 text-center lg:px-52">
                    <h1 class="lg:text-6xl text-4xl font-bold">
                        Software Engineer
                        {/* <span class="lg:text-2xl text-xl font-light">At Braincode Digital Solution | Software Engineer</span> */}
                    </h1>
                    <p class="lg:text-2xl text-xl font-light">At Braincode Digital Solution | Software Engineer</p>
                    {/* <p>Junior Software Engineer with over 1 year of experience. Passionate about technology, especially web development, Linux systems, and hardware such as PCs, laptops, smartphones, and tablets.</p> */}
                </div>

                {/* Main content */}
                <div class="flex lg:flex-row flex-col gap-5 items-center justify-items-center lg:px-32 px-10">
                    <section class="card w-full h-[-webkit-fill-available] bg-base-100 shadow-sm rounded-none">
                        {/* <figure></figure> */}
                        <div class="card-body">
                            <div class="self-center items-center py-10">
                                <div class="avatar">
                                    <div class="w-52 rounded-full">
                                        <img src={profile} />
                                    </div>
                                </div>
                            </div>
                            <p class="self-center text-center text-xl">
                                Junior Software Engineer with over 1 year of experience. Passionate about technology, especially web development, Linux systems, and hardware such as PCs, laptops, smartphones, and tablets.
                            </p>
                            <div class="self-center">
                                <button class="btn btn-link p-0" onClick={() => window.open("/", "_blank")}>
                                    More
                                </button>
                            </div>
                        </div>
                    </section>
                    <section class="grid grid-cols-2 gap-5 w-full h-[-webkit-fill-available]">
                        {listCard.map((card: any, index: number) => (
                            <section key={index} class={`card card-md bg-base-100 shadow-sm rounded-none`} style={card.border ? { "border-color": card.border, "border-bottom-width": "1px", "border-style": "solid" } : {}}>
                                <figure class="self-start pt-[2rem] pl-[2rem]">
                                    <Icon icon={card.icon} width={"5em"} height={"5em"} />
                                </figure>
                                <div class="card-body">
                                    <h2 class="card-title">{card.title}</h2>
                                    <p>{card.description}</p>
                                    <div class="self-start">
                                        <button class="btn btn-link p-0" onClick={() => window.open(card.link, "_blank")}>
                                            More
                                        </button>
                                    </div>
                                </div>
                            </section>
                        ))}
                    </section>
                </div>
                {/* End Main content */}
            </div>
        </>
    );
}
