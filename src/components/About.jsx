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
            className="relative min-h-dvh flex flex-col md:flex-row items-center justify-center gap-8 pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        >
            <div className="flex flex-col gap-6 sm:gap-8 justify-start items-start w-full md:w-auto md:max-w-xl px-4 py-8 md:p-24 text-left order-2 md:order-1">
                <h1 className="text-gray-300 text-3xl sm:text-4xl font-bold">Hello!</h1>

                <p className="text-gray-300 text-lg sm:text-xl">
                    My name is George Anders; this is a collection of my work,
                    research, music, and more.
                </p>
                <p className="text-gray-300 text-lg sm:text-xl">
                    With a Mathematics of Computation B.Sc from UCLA,
                    I have been applying learned technical skills to various passions of mine.
                </p>
                <p className="text-gray-300 text-lg sm:text-xl">
                    This website was built using React and TailwindCSS (deployed on Vercel).
                </p>
                <p className="text-gray-300 text-lg sm:text-xl mt-8 sm:mt-16 md:mt-[7.5rem]">
                    email: gpkanders@gmail.com
                </p>
            </div>

            <img
                src={headshot}
                alt="Headshot of George Anders"
                className="w-40 sm:w-56 md:w-72 lg:w-[20rem] h-auto object-contain object-right-top order-1 md:order-2 shrink-0"
            />

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