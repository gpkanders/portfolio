import { Link } from "react-router-dom"
import { projects } from "../data/projects"

export default function Projects() {
    return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto py-24 px-4 md:px-12">
        {projects.map((project) => (
        <Link
            key={project.slug}
            to={`/projects/${project.slug}`}
            className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06] hover:shadow-lg hover:shadow-black/40"
        >
            <CardThumbnail project={project} />
            <div className="flex flex-col gap-3 p-6 flex-1">
                <h2 className="text-xl font-bold text-gray-200">{project.title}</h2>
                <p className="text-gray-400 text-sm line-clamp-3">{project.paragraphs[0]}</p>
                <span className="mt-auto pt-2 text-sm text-gray-500 transition duration-300 group-hover:text-gray-200 group-hover:translate-x-1">
                    View project &rarr;
                </span>
            </div>
        </Link>
        ))}
    </div>
    )
}

function CardThumbnail({ project }) {
    const image = project.preview ?? project.thumbnail

    if (!image) return (
        <div className="aspect-video bg-gradient-to-br from-neutral-800 to-neutral-950" />
    )

    return (
        <div className="aspect-video overflow-hidden bg-neutral-900">
            <img src={image} alt={project.title} loading="lazy" className="w-full h-full object-contain transition duration-500 group-hover:scale-105" />
        </div>
    )
}
