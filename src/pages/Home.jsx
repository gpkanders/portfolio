// pages/Home.jsx
import Hero from '../components/Hero'

export default function Home() {
  return (
    <>
      <Hero />
      {/* any other home-only content */}
      <div className='flex flex-col gap-4 justify-start items-start w-full px-4 py-8 md:p-24 text-left'>
        <h1 className="text-gray-300 text-4xl md:text-4xl font-bold">Welcome</h1>
      </div>
    </>
  )
}