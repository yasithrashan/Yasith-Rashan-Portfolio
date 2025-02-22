import Hero from "./src/components/Hero"
import Navbar from "./src/components/Navbar"
import Technologies from "./src/components/Technologies"

const App = () => {
  return (
    <div className="overflow-x-hidden text-stone-300 antialiased">
      <div className="fixed inset-0 -z-10">
        <div className="relative h-full w-full bg-black">
          {/* Subtle dot pattern overlay */}
          <div className="absolute inset-0 opacity-20" 
            style={{
              backgroundImage: `radial-gradient(#ffffff 0.5px, transparent 0.5px)`,
              backgroundSize: '24px 24px'
            }}
          ></div>
          
          {/* Subtle gradient glow */}
          <div className="absolute h-full w-full">
            <div className="absolute top-1/4 -left-1/4 h-96 w-96 bg-purple-900/20 rounded-full blur-[128px]"></div>
            <div className="absolute bottom-1/4 -right-1/4 h-96 w-96 bg-blue-900/20 rounded-full blur-[128px]"></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <Technologies />
      </div>
    </div>
  )
}

export default App