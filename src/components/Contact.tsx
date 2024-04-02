import { Component, createEffect, createSignal } from "solid-js";

const scriptURL = "https://script.google.com/macros/s/AKfycbwDQN2AF1ZzQn0jek3sTjJSpuXqiKhDLc--s5wP0PJS6BgrgHmUuHffLvWEdsjTiRreAA/exec";

const handleSubmit = (e: Event) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const success = document.querySelector(".alert-success");
    const loading = form.querySelector(".loading");
    const send = form.querySelector(".send");

    if (loading) {
        loading.classList.remove("hidden");
    }
    if (send) {
        send.classList.add("hidden");
    }
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
            if (send) {
                send.classList.remove("hidden");
            }
            if (loading) {
                loading.classList.add("hidden");
            }
            if (success) {
                success.classList.remove("hidden");
            }
            form.reset();
            console.log("Success!", response);
        })
        .catch((error) => console.error("Error!", error.message));
};
const contact: Component = () => {
    const [route] = createSignal(location.pathname);

    const [form, setForm] = createSignal<HTMLFormElement | null>(null);

    createEffect(() => {
        if (form()) {
            form()!.addEventListener("submit", handleSubmit);

            return () => {
                form()!.removeEventListener("submit", handleSubmit);
            };
        }
    });
    const closeModal = () => {
        const success = document.querySelector(".alert-success");
        if (success) {
            success.classList.toggle("hidden");
        }
    };
    return (
        <div>
            <section class="px-20 text-center flex flex-col gap-10 items-center w-full">
                {" "}
                <div class="text-5xl font-bold">Contact</div>
                <div class="bg-gradient-to-tr from-violet-700 to-blue-600  h-2 w-20 rounded-full"></div>
                <div class="text-lg max-w-2xl">Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</div>
                <div role="alert" class="alert alert-success hidden lg:w-1/2 ">
                    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Pesan Berhasil Dikirim!</span>
                    <button class="close btn-sm btn-primary" onClick={closeModal}>
                        close
                    </button>
                </div>
                <div class="flex flex-col drop-shadow-md shadow-2xl p-10 gap-4 lg:w-1/2 rounded">
                    {" "}
                    <form ref={setForm} id="Contact-From">
                        <label class="flex flex-col">
                            <div class="label">
                                <span class="label-text">Name</span>
                            </div>
                            <input type="text" class="grow input input-bordered " placeholder="Enter Your Name" name="nama" />
                        </label>
                        <label class="flex flex-col">
                            <div class="label">
                                <span class="label-text">Email</span>
                            </div>
                            <input type="email" class="grow input input-bordered " placeholder="Email" name="email" />
                        </label>
                        <label class="flex flex-col">
                            <div class="label">
                                <span class="label-text">Message</span>
                            </div>
                            <textarea class="textarea textarea-bordered h-24" placeholder="message" name="pesan"></textarea>
                        </label>
                        <button type="submit" class="btn send mt-10">
                            submit
                        </button>
                        <button class="btn loading hidden">
                            <span class="loading loading-spinner loading-xs"></span>
                        </button>
                        {/* <Button children={"submit"} href={"#"} /> */}
                    </form>
                </div>
            </section>{" "}
        </div>
    );
};

export default contact;
