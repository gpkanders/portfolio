import { useEffect } from "react"
import { Link, Navigate, useParams } from "react-router-dom"
import { projects } from "../data/projects"
import ProjectVideo from "../components/ProjectVideo"

export default function ProjectDetailPage() {
    const { slug } = useParams()
    const project = projects.find((p) => p.slug === slug)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [slug])

    if (!project) return <Navigate to="/projects" replace />

    return (
    <div className="flex flex-col gap-8 max-w-4xl mx-auto py-24 px-4 md:px-12">
        <Link to="/projects" className="text-sm text-gray-500 hover:text-gray-200 transition-colors">
            &larr; All projects
        </Link>
        <h1 className="text-2xl font-bold text-gray-200">{project.title}</h1>
        <div className="w-full aspect-video">
            <ProjectVideo project={project} />
        </div>
        {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 underline hover:text-gray-200">
            Try it live
            </a>
        )}
        {project.paragraphs.map((p, j) => (
            <p key={j} className="text-gray-300 text-base">{p}</p>
        ))}
    </div>
    )
}
