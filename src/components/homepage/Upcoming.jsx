"use client";

import React from "react";
import HoverExpand from "../ui/hover-expand";

const images = [
    "/upcoming/coolie1.avif",
    "/upcoming/war2.avif",
    "/upcoming/narsimha.avif",
    "/upcoming/baaghi4.avif",
    "/upcoming/llb3.avif",
    "/upcoming/paramsundari.avif",
];

const Upcoming = () => {
    return (
        <section className="mx-auto max-w-7xl px-6">
            <h2 className=" text-4xl font-bold text-center text-white" style={{ fontFamily: "Roboto Slab, serif" }}>
                Latest & <span className="text-yellow-400">Upcoming Movies</span>
            </h2>
            <div className="flex justify-center">
                <HoverExpand
                    images={images}
                    initialSelectedIndex={0}
                    thumbnailHeight={300}   // ab ye thumbnails ki height control karega
                    modalImageSize={900}    // ab hover modal bada hoga
                    maxThumbnails={20}
                />
            </div>
        </section>
    );
};

export default Upcoming;
