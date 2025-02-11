import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronRight, Brain, Code, Timer, Puzzle, Calculator, Sparkles, Bot, Clock, Check, X, PlayCircle, Shield, Smartphone, Download } from "lucide-react"

const RetroGrid = ({
  angle = 65,
  cellSize = 60,
  opacity = 0.3,
  lightLineColor = "#2a2a2a",
  darkLineColor = "#2a2a2a",
}) => {
  const gridStyles = {
    "--grid-angle": `${angle}deg`,
    "--cell-size": `${cellSize}px`,
    "--opacity": opacity,
    "--light-line": lightLineColor,
    "--dark-line": darkLineColor
  }

  return (
    <div
      className="pointer-events-none absolute size-full overflow-hidden [perspective:200px] opacity-[var(--opacity)]"
      style={gridStyles}>
      <div className="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
        <div className="animate-grid [background-image:linear-gradient(to_right,var(--dark-line)_1px,transparent_0),linear-gradient(to_bottom,var(--dark-line)_1px,transparent_0)] [background-repeat:repeat] [background-size:var(--cell-size)_var(--cell-size)] [height:300vh] [inset:0%_0px] [margin-left:-200%] [transform-origin:100%_0_0] [width:600vw]" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent to-90%" />
    </div>
  )
}

const ComparisonTable = () => {
  return (
     <div className="w-full max-w-2xl mx-auto mt-12 overflow-hidden rounded-xl bg-gray-900/50 backdrop-blur-sm border border-purple-500/10">
      {/* Header for mobile - stack vertically */}
      <div className="md:hidden grid grid-cols-3 gap-2 p-4 border-b border-purple-500/10">
        <div className="col-span-1"></div>
        <div className="text-center text-sm font-medium text-gray-400">ChatGPT + google lens</div>
        <div className="text-center text-sm font-medium text-purple-400">SolvePro</div>
      </div>
      
      {/* Header for desktop */}
      <div className="hidden md:grid grid-cols-4 gap-2 p-4 border-b border-purple-500/10">
        <div className="col-span-1"></div>
        <div className="text-center font-medium text-gray-400">Google Lens</div>
        <div className="text-center font-medium text-gray-400">ChatGPT+Lens</div>
        <div className="text-center font-medium text-purple-400">SolvePro</div>
      </div>

      {/* Mobile version - Accordion style */}
      <div className="md:hidden">
        <div className="grid grid-cols-3 gap-2 p-4 border-b border-purple-500/10">
          <div className="col-span-1 text-sm text-gray-300">Speed</div>
          <div className="text-center text-xs text-gray-400">60+ sec</div>
          <div className="text-center text-xs text-purple-300">&lt;10 sec</div>
        </div>

        <div className="grid grid-cols-3 gap-2 p-4 border-b border-purple-500/10">
          <div className="col-span-1 text-sm text-gray-300">Accuracy</div>
          <div className="text-center text-xs text-gray-400">65-70%</div>
          <div className="text-center text-xs text-purple-300">80-90%+</div>
        </div>

        <div className="grid grid-cols-3 gap-2 p-4">
          <div className="col-span-1 text-sm text-gray-300">Puzzles</div>
          <div className="text-center"><X className="w-4 h-4 mx-auto text-red-400" /></div>
          <div className="text-center"><Check className="w-4 h-4 mx-auto text-green-400" /></div>
        </div>
         <div className="border-t border-purple-500/10 p-4">
      <a href="https://www.youtube.com/watch?v=CRYuNUowd3I" target="_blank" rel="noopener noreferrer">
  <button className="w-full group bg-gray-800 hover:bg-gray-700 text-white rounded-lg p-3 flex items-center justify-center space-x-2 transition-all duration-300">
    <PlayCircle className="w-5 h-5 text-purple-400 group-hover:text-purple-300" />
    <span className="text-sm font-medium">Watch Demo Video</span>
  </button>
</a>

      </div>
      </div>
      

      {/* Desktop version - Full table */}
      <div className="hidden md:block">
        <div className="grid grid-cols-4 gap-2 p-4">
          {/* Speed Row */}
          <div className="col-span-1 text-gray-300">Solution Speed</div>
          <div className="text-center text-gray-400 flex items-center justify-center">
            <Clock className="w-4 h-4 mr-1 text-red-400" />
            <span>60+ sec</span>
          </div>
          <div className="text-center text-gray-400 flex items-center justify-center">
            <Clock className="w-4 h-4 mr-1 text-yellow-400" />
            <span>50+ sec</span>
          </div>
          <div className="text-center text-purple-300 flex items-center justify-center">
            <Timer className="w-4 h-4 mr-1 text-green-400" />
            <span>&lt;10 sec</span>
          </div>

          {/* Accuracy Row */}
          <div className="col-span-1 text-gray-300">Answer Accuracy</div>
          <div className="text-center text-gray-400">NA</div>
          <div className="text-center text-gray-400">65-70%</div>
          <div className="text-center text-purple-300">85-90%</div>

          {/* Step-by-Step */}
          <div className="col-span-1 text-gray-300">Puzzles</div>
          <div className="text-center"><X className="w-5 h-5 mx-auto text-red-400" /></div>
          <div className="text-center"><X className="w-5 h-5 mx-auto text-red-400" /></div>
          <div className="text-center"><Check className="w-5 h-5 mx-auto text-green-400" /></div>

          {/* Available 24/7 */}
          <div className="col-span-1 text-gray-300">24/7 Availability</div>
          <div className="text-center"><X className="w-5 h-5 mx-auto text-red-400" /></div>
          <div className="text-center"><X className="w-5 h-5 mx-auto text-red-400" /></div>
          <div className="text-center"><Check className="w-5 h-5 mx-auto text-green-400" /></div>
        </div>
           <div className="border-t border-purple-500/10 p-4">
        <a href="https://www.youtube.com/watch?v=CRYuNUowd3I" target="_blank" rel="noopener noreferrer">
  <button className="w-full group bg-gray-800 hover:bg-gray-700 text-white rounded-lg p-3 flex items-center justify-center space-x-2 transition-all duration-300">
    <PlayCircle className="w-5 h-5 text-purple-400 group-hover:text-purple-300" />
    <span className="text-sm font-medium">Watch Demo Video</span>
  </button>
</a>

      </div>
      </div>
    </div>
  )
}

const TrustBadges = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-6">
      <div className="flex items-center bg-green-900/20 text-green-400 rounded-lg px-4 py-2">
        <Shield className="w-4 h-4 mr-2" />
        <span className="text-sm">100% Virus Free</span>
      </div>
      <div className="flex items-center bg-blue-900/20 text-blue-400 rounded-lg px-4 py-2">
        <Check className="w-4 h-4 mr-2" />
        <span className="text-sm">Safe & Secure</span>
      </div>
      <div className="flex items-center bg-purple-900/20 text-purple-400 rounded-lg px-4 py-2">
        <Download className="w-4 h-4 mr-2" />
        <span className="text-sm">Easy Installation</span>
      </div>
    </div>
  )
}

const HeroSection = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div className={cn("relative bg-gray-950 text-white min-h-screen", className)} ref={ref} {...props}>
      <div className="absolute top-0 z-[0] h-screen w-screen bg-purple-950/10 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      <section className="relative max-w-full mx-auto z-1">
        <RetroGrid />
        <div className="max-w-screen-xl z-10 mx-auto px-4 pt-6 pb-28 gap-12 md:px-8">
          <div className="space-y-5 max-w-3xl mx-auto text-center">
            <h1 className="text-sm text-gray-300 group font-geist mx-auto px-5 py-2 bg-gradient-to-tr from-zinc-800 via-gray-700 to-transparent border-[2px] border-white/5 rounded-3xl w-fit flex items-center">
              <Bot className="w-4 h-4 mr-2 text-purple-400" />
              AI-Powered Placement round solver
              <ChevronRight className="inline w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
            </h1>
            <h2 className="text-4xl tracking-tighter font-geist md:text-6xl bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
              Get Answer
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 ml-2">
                In One Click
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-400">
              Why struggle with Google Lens? Get instant answers in one click with SolvePro!
            </p>

            <TrustBadges />
            <ComparisonTable />

            <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
              <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 text-xs font-medium backdrop-blur-3xl">
                  <a href="https://drive.google.com/file/d/1YpqFnVIUg9l-tgua0HxqB6swySJAiNVs/view" className="inline-flex rounded-full text-center group items-center w-full justify-center bg-gradient-to-tr from-purple-950 via-purple-900 to-transparent text-white border-purple-800/30 border-[1px] hover:bg-gradient-to-tr hover:from-purple-900 hover:via-purple-800 hover:to-transparent transition-all sm:w-auto py-4 px-10">
                    Download App
                  </a>
                </div>
              </span>
            </div>

             <a href="https://youtube.com/shorts/0FcD34ut1As?si=shb0aE7FKxquZChI" target="_blank" rel="noopener noreferrer">
      <button
        className="mt-4 bg-gray-800 hover:bg-gray-700 text-white rounded-lg p-3 flex items-center justify-center space-x-2 mx-auto transition-all duration-300"
      >
        <Smartphone className="w-5 h-5 text-purple-400" />
        <span className="text-sm font-medium">How to Install on Android</span>
      </button>
    </a>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 text-gray-300">
              <div className="flex flex-col items-center p-4 bg-gray-900/50 rounded-lg">
                <Calculator className="w-6 h-6 mb-2 text-purple-400" />
                <span className="text-sm">AI Solves Aptitude</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-900/50 rounded-lg">
                <Brain className="w-6 h-6 mb-2 text-purple-400" />
                <span className="text-sm">Smart Reasoning Help</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-900/50 rounded-lg">
                <Puzzle className="w-6 h-6 mb-2 text-purple-400" />
                <span className="text-sm">Puzzle Solutions</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-900/50 rounded-lg">
                <Code className="w-6 h-6 mb-2 text-purple-400" />
                <span className="text-sm">Code Assistance</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
})

HeroSection.displayName = "HeroSection"

export { HeroSection }