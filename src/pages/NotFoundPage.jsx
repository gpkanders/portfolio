import { Link } from "react-router-dom"

export default function NotFoundPage() {
    return (
    <div className="flex flex-col items-center gap-4 text-center py-32 px-4">
        <h1 className="text-5xl font-bold text-gray-200">404</h1>
        <p className="text-gray-400">This page doesn't exist.</p>
        <Link to="/" className="text-sm text-gray-500 hover:text-gray-200 transition-colors">
            &larr; Back home
        </Link>
    </div>
    )
}
