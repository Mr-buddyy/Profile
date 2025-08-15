import { onCleanup, onMount } from "solid-js";

export default function LazyImage({ publicId, alt }: { publicId: string; alt: string }) {
    const smallPreview = `https://res.cloudinary.com/dprkw8qhw/image/upload/w_20,q_10,f_auto/${publicId}.webp`;
    const fullImage = `https://res.cloudinary.com/dprkw8qhw/image/upload/w_1200,q_auto,f_auto/${publicId}.webp`;

    let imgRef: any;

    onMount(() => {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    imgRef.src = fullImage;
                    imgRef.classList.remove("blur-sm");
                    obs.disconnect();
                }
            });
        });

        if (imgRef) observer.observe(imgRef);
        onCleanup(() => observer.disconnect());
    });

    return <img ref={imgRef} src={smallPreview} alt={alt} class="object-cover blur-sm transition duration-500 ease-out" loading="lazy" decoding="async" />;
}
