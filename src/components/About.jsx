import { useEffect, useRef, useState } from "react"
import headshot from "../profilePic/DSC_4819.jpg?w=500&format=webp"

export default function About() {
    const sectionRef = useRef(null)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        function handleMouseMove(e) {
            const rect = sectionRef.current.getBoundingClientRect()
            setMousePosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            })
        }

        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        >

            <div className="flex flex-col gap-8 justify-start items-start w-full px-4 py-8 md:p-24 text-left">
                <h1 className="text-gray-300 text-4xl md:text-4xl font-bold">Hello!</h1>

                <p className="text-gray-300 text-xl">
                    My name is George Anders; this is a collection of my work,
                    research, music, and more.
                </p>
                <p className="text-gray-300 text-xl">
                    With a Mathematics of Computation B.Sc from UCLA,
                    I have been applying learned technical skills to various passions of mine.
                </p>
                <p className="text-gray-300 text-xl">
                    This website was built using React and TailwindCSS (deployed on Vercel).
                </p>
                <p className="text-gray-300 text-xl mt-30">
                    email: gpkanders@gmail.com
                </p>
            </div>

            <img src={headshot} className="w-2xs h-500px pb-70 object-top-right"/>



            {/* cursor glow animation */}
            <div
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59,130,246,0.5), transparent 40%)`,
                }}
            />

            {/* stationary pulses */}
            <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </section>
    )
}