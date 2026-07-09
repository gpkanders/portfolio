export default function About() {
    return (
        <div className='flex flex-col gap-4 justify-start items-start w-full px-4 py-8 md:p-24 text-left'>
            <h1 className='text-gray-300 text-4xl md:text-4xl font-bold'>Hello!</h1>
            <p className='text-gray-300 text-xl p-8'>
                My name is George Anders; this is a collection of my work, 
                research, music, and more.
                </p>
                <p className='text-gray-300 text-xl p-8'> 
                With a Mathematics of Computation B.Sc from UCLA, 
                I have been applying learned technical skills to various passions of mine. Building this website 
                using React and TailwindCSS marks the beginning of my webdev journey!
            </p>
            {/* <p className='text-gray-300 text-xl pt-8'>...or send me a message!</p> */}
        </div>
    )
}   
