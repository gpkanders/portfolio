import { useEffect, useRef } from "react"
import { Outlet } from "react-router-dom"

export default function GlowLayout() {
    return (
        <>
            <GlowBackground />
            <Outlet />
        </>
    )
}

function GlowBackground() {
    const glowRef = useRef(null)

    useEffect(() => {
        function handleMouseMove(e) {
            glowRef.current.style.setProperty("--x", `${e.clientX}px`)
            glowRef.current.style.setProperty("--y", `${e.clientY}px`)
        }

        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    return (
        <div className="fixed inset-0 -z-10 pointer-events-none hidden pointer-fine:block">
            {/* cursor glow animation */}
            <div
                ref={glowRef}
                className="absolute inset-0 opacity-30 bg-[radial-gradient(600px_circle_at_var(--x)_var(--y),rgba(59,130,246,0.5),transparent_40%)]"
            />

            {/* stationary pulses */}
            <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/10 rounded-full blur-3xl motion-safe:animate-pulse" />
            <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl motion-safe:animate-pulse delay-1000" />
        </div>
    )
}
