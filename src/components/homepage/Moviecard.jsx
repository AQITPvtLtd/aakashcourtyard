import React from 'react'
import { CardSwipe } from '../ui/card-swipe'
const Moviecard = () => {
    const images = [
        { src: "/moviecard/coolie.avif", },
        { src: "/moviecard/war2.avif",  },
        { src: "/moviecard/narsimha.avif",  },
        { src: "/moviecard/baaghi4.avif",  },
        { src: "/moviecard/llb3.avif",  },
        { src: "/moviecard/paramsundari.avif",  },

    ]
    return (
        <div className="w-full">
            <CardSwipe images={images} autoplayDelay={2000} slideShadows={false} />
        </div>
    )
}

export default Moviecard