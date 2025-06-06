"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type MediaItem = {
  id: string;
  src: string;
  type: "image" | "video" | "pdf";
  title: string;
  thumbnail?: string;
  description?: string;
  technology?: string;
  link?: string;
};

const mediaFiles: MediaItem[] = [
  {
    id: "1",
    src: "/videos/MatrixDodger.mp4",
    type: "video",
    title: "MatrixDodger",
    description: "A JavaScript-based Matrix dodging VR-Minigame using Three.js and WebGL.",
    technology: "JavaScript with Three.js",
    link: "https://github.com/maauit03/Matrix-Dodger",
  },
  {
    id: "2",
    src: "/videos/ChitChatBrowser.mp4",
    type: "video",
    title: "ChitChat",
    thumbnail: "/images/ChitChatThumbnail.JPG",
    description: "ChitChat is a browser app to chitchat with other students. Made by a group of students for students.\n the ad was produced by myself",
    technology: "Svelte, Adobe Premiere Pro and After Effects",
    link: "https://dev--stunning-lamington-9f7df4.netlify.app/",
  },
  {
    id: "3",
    src: "/pdf/SNN_AD.pdf",
    title: "Anomaly Detection with Spiking Neural Networks",
    thumbnail: "/images/SNN_AD_Thumbnail.jpg",
    type: "pdf",
    description: "A research paper on Spiking Neural Networks for Anomaly Detection.",
    technology: "Python with PyTorch",
    link: "https://github.com/maauit03/ESVAE-AD",
  },
  {
    id: "4",
    src: "/videos/animation002.mp4",
    type: "video",
    title: "Learninig to walk Animation",
    thumbnail: "/images/AnimationThumbnail.JPG",
    description: "A small animation where Modelling, Texturing, Rigging, Animating and 3D Tracking has been done from Scratch.",
    technology: "Blender"
  },
];

export default function MediaGallery() {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [focusedMedia, setFocusedMedia] = useState<MediaItem | null>(null);

  return (
    <>
      <h2 className="text-3xl sm:text-4xl font-bold text-yellow-300 mt-12 mb-12 text-center">
        Project Showcases
      </h2>

      {/* Gallery */}
      <div className="p-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {mediaFiles.map((item) => (
          <motion.div
            key={item.id}
            className="bg-black border border-gray-900 rounded-lg shadow-lg overflow-hidden flex flex-col cursor-pointer"
            whileHover={{ scale: 1.02 }}
          >
            <div onClick={() => setSelectedMedia(item)}>
              {item.type === "video" && (
                <video
                  src={item.src}
                  poster={item.thumbnail}
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-48 object-cover"
                  controls={false}
                />
              )}
              {item.type === "pdf" && (
                <div className="flex items-center justify-center bg-gray-100 h-48">
                  <img src={item.thumbnail} alt="PDF thumbnail" className="h-full object-contain" />
                </div>
              )}
            </div>
            <button
              onClick={() => setFocusedMedia(item)}
              className="text-sm bg-yellow-300 text-black font-medium py-1 px-3 mt-2 mx-auto mb-3 rounded hover:bg-yellow-400"
            >
              See More
            </button>
          </motion.div>
        ))}
      </div>

      {/* Dynamic Description Below */}
      <div className="mt-6 mb-16 px-6 text-center text-white text-lg min-h-[3rem]">
        <AnimatePresence mode="wait">
          {focusedMedia?.description && (
            <motion.div
              key={focusedMedia.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
            <h1 className="text-3xl font-bold mb-8">{focusedMedia?.title}</h1>
            <p className="mb-8">{focusedMedia.description}</p>
            <p className="mb-4">technology used: {focusedMedia.technology}</p>
            <a className="" href={focusedMedia.link}>{focusedMedia.link}</a>

            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMedia(null)}
          >
            {selectedMedia.type === "video" && (
              <motion.video
                src={selectedMedia.src}
                controls
                autoPlay
                className="max-w-full max-h-full rounded-lg shadow-2xl"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ duration: 0.4 }}
              />
            )}
            {selectedMedia.type === "pdf" && (
              <embed
                src={selectedMedia.src}
                type="application/pdf"
                className="max-w-full max-h-full rounded-lg shadow-2xl"
                style={{ width: "90%", height: "80%" }}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
