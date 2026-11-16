import headshot from "../profilePic/DSC_4819.jpg?w=500&format=webp"

export default function About() {
    return (
        <section className="min-h-dvh flex items-center pt-16 sm:pt-20">
            <div className="flex flex-col md:flex-row items-center md:justify-between gap-8 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-6 sm:gap-8 justify-start items-start w-full md:w-auto md:max-w-xl px-4 py-8 md:px-0 md:py-24 text-left order-2 md:order-1">
                    <h1 className="text-gray-300 text-3xl sm:text-4xl font-bold">Hello!</h1>

                    <p className="text-gray-300 text-lg sm:text-xl">
                        My name is George Anders; this is a collection of my work,
                        research, music, and more.
                    </p>
                    <p className="text-gray-300 text-lg sm:text-xl">
                    My background in mathematics, data science, and programming at UCLA has led to experiences in various applications such as
                    Environmental Research, Audio Programming, Machine Learning, and Software Development. 
                    </p>
                    <p className="text-gray-300 text-lg sm:text-xl">
                    With this, and a great passion for music, I naturally gravitated towards studying DSP. 
                    Then consequently parallel programming for real-time systems, applying my C++ knowledge to JUCE framework, 
                    and all the while realizing there is still so much to learn! 
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
            </div>
        </section>
    )
}