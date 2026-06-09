import Navbar from "@/components/custom-components/navbar";
import Masonry from "@/components/ui/Masonry";
import { gallery } from "@/lib/data";

export default function Gallery() {
    return (
        <>
            <Navbar color={""} />
            <h1 className="text-5xl md:text-7xl font-bold leading-tight whitespace-pre-line text-center">Gallery</h1>
            <Masonry
                items={gallery}
                ease="power1.out"
                duration={0.6}
                stagger={0.09}
                animateFrom="bottom"
                scaleOnHover
                hoverScale={0.95}
                blurToFocus
                colorShiftOnHover
            />
        </>
    )
}