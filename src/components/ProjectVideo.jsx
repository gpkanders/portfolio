import { useState } from "react"

export default function ProjectVideo({ project }) {
    const [playing, setPlaying] = useState(false)

    if (project.thumbnail && !playing) return (
        <button
            onClick={() => setPlaying(true)}
            className="group relative w-full h-full rounded-lg overflow-hidden bg-neutral-900 cursor-pointer"
            aria-label={`Play ${project.title} demo`}
        >
            <img src={project.thumbnail} alt={project.title} loading="lazy" className="w-full h-full object-contain" />
            <span className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                <span className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center pl-1 text-2xl text-black">&#9654;</span>
            </span>
        </button>
    )

    return (
        <iframe
            src={project.thumbnail ? `${project.video}${project.video.includes("?") ? "&" : "?"}autoplay=1` : project.video}
            loading="lazy"
            width="200"
            height="100"
            className="w-full h-full rounded-lg"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
        />
    )
}
