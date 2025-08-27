"use client";
import React, { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

export default function HoverExpand({
  images,
  initialSelectedIndex = 0,
  thumbnailHeight = 250,
  modalImageSize = 500,
  maxThumbnails = 15
}) {
  const [selectedIndex, setSelectedIndex] = useState(initialSelectedIndex)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsModalOpen(false)
      }
    }

    if (isModalOpen) {
      document.body.classList.add("overflow-hidden")
      document.addEventListener("keydown", handleKeyDown)
    } else {
      document.body.classList.remove("overflow-hidden")
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.classList.remove("overflow-hidden")
    }
  }, [isModalOpen])

  return (
    <div className="relative">
      <div className="mx-auto flex w-fit gap-2 rounded-md pb-20 pt-10">
        {images.slice(0, maxThumbnails).map((imageUrl, i) => (
          <div
            key={`image-container-${i}`}
            style={{
              height: thumbnailHeight,
              width: selectedIndex === i
                ? thumbnailHeight * 1.7   // expanded item (1.5× height)
                : thumbnailHeight * 0.3   // collapsed items (20% height)
            }}
            className="group relative overflow-hidden rounded-2xl transition-all duration-300"
            onMouseEnter={() => setSelectedIndex(i)}
            onMouseLeave={() => setSelectedIndex(i)}
            onClick={() => {
              setSelectedIndex(i)
              setIsModalOpen(true)
            }}
          >
            <motion.div layoutId={`image-${i}`} className="absolute inset-0 size-full">
              <img
                src={imageUrl}
                alt={`Image ${i + 1}`}
                className="size-full object-cover transition-transform duration-300"
              />
            </motion.div>
          </div>

        ))}
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 grid place-content-center bg-white/40 backdrop-blur-sm dark:bg-black/40"
            onClick={() => setIsModalOpen(false)}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="cursor-pointer overflow-hidden rounded-2xl bg-black"
              style={{ width: modalImageSize, height: modalImageSize }} // ✅ dynamic size
            >
              <motion.div layoutId={`image-${selectedIndex}`} className="relative w-full h-full">
                <img
                  src={images[selectedIndex]}
                  alt={`Image ${selectedIndex + 1}`}
                  className="absolute left-1/2 top-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 object-conver"
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
