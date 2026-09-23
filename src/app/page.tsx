import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-slate-50 selection:bg-[var(--color-anar)] selection:text-white pb-20 font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-serif text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[var(--color-anar)] flex items-center justify-center text-white text-xs">🍎</div>
            ANAR X
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-slate-600 font-medium">
            <a href="#product" className="hover:text-[var(--color-anar)] transition-colors">Product</a>
            <a href="#ai" className="hover:text-[var(--color-anar)] transition-colors">AI</a>
            <a href="#features" className="hover:text-[var(--color-anar)] transition-colors">Features</a>
            <a href="#technology" className="hover:text-[var(--color-anar)] transition-colors">Technology</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/OnkarGaikwad-astro/Anar-X" target="_blank" rel="noreferrer" className="hidden md:inline-flex text-slate-600 font-medium text-sm hover:text-slate-900 transition-colors">
              GitHub
            </a>
            <a href="https://github.com/OnkarGaikwad-astro/Anar-X" target="_blank" rel="noreferrer" className="bg-[var(--color-anar)] text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-[var(--color-anar-dark)] hover:-translate-y-0.5 transition-all shadow-lg shadow-[var(--color-anar)]/20">
              Explore Anar X
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
        {/* Subtle background gradient blob */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-[var(--color-anar)]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center w-full">
          <div className="max-w-2xl relative z-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-xs font-semibold text-[var(--color-anar)] mb-6 shadow-sm hover:shadow-md transition-shadow cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-anar)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-anar)]"></span>
              </span>
              Offline-First AI Assistant
            </div>
            <h1 className="font-serif text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight text-slate-900">
              AI that understands the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-anar)] to-orange-500">pomegranate</span> farm.
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed">
              An offline-first AI farming assistant built for pomegranate growers. Combining computer vision, edge AI, and farm intelligence in one Android experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://github.com/OnkarGaikwad-astro/Anar-X/releases/latest" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center bg-[var(--color-anar)] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[var(--color-anar-dark)] hover:shadow-2xl hover:-translate-y-1 transition-all shadow-xl shadow-[var(--color-anar)]/20">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                Download App (APK)
              </a>
              <a href="https://github.com/OnkarGaikwad-astro/Anar-X" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center bg-white text-slate-900 px-8 py-4 rounded-full font-semibold text-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 hover:shadow-md hover:-translate-y-1 transition-all shadow-sm">
                View on GitHub
              </a>
            </div>
          </div>

          <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square animate-float z-10">
            {/* Visual container with curved corners and image */}
            <div className="modern-panel absolute inset-0 bg-gradient-to-br from-[#FFFDF5] to-[#F3F0E6] border-2 border-white">
               <Image 
                 src="/hero2.jpg" 
                 alt="AI Pomegranate Detection" 
                 fill
                 className="object-contain p-8 drop-shadow-2xl"
                 priority
               />
            </div>
            
            {/* Floating Modern UI Card */}
            <div className="absolute -bottom-8 -left-8 md:bottom-8 md:-left-12 modern-panel p-6 w-80 bg-white/90 backdrop-blur-xl z-20 shadow-2xl border-white/50 border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-500 shadow-inner">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">Disease Detected</div>
                  <div className="text-lg font-bold text-slate-900 font-serif leading-tight">Bacterial Blight</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-slate-50/50 rounded-xl p-3 border border-slate-100">
                  <div className="text-xs text-slate-500 mb-1 font-semibold uppercase tracking-wide">Severity</div>
                  <div className="text-sm font-bold text-slate-800">Moderate (Level 2)</div>
                </div>
                <div className="bg-slate-50/50 rounded-xl p-3 border border-slate-100">
                  <div className="flex justify-between text-xs mb-2 font-semibold uppercase text-slate-500 tracking-wide">
                    <span>AI Confidence</span>
                    <span className="text-[var(--color-anar)] font-bold">94%</span>
                  </div>
                  <div className="h-2 bg-slate-200 rounded-full overflow-hidden shadow-inner">
                    <div className="h-full bg-gradient-to-r from-[var(--color-anar)] to-orange-400 rounded-full w-[94%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="product" className="py-32 relative z-10 bg-white border-y border-gray-100 mt-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-slate-900">
            Farming decisions shouldn't depend on guesswork.
          </h2>
          <p className="text-xl text-slate-500 leading-relaxed max-w-3xl mx-auto">
            Pomegranate farmers face constant challenges like crop disease outbreaks, unpredictable weather, and fluctuating market prices. Anar X consolidates agricultural expertise into a powerful, edge-AI Android application that works entirely offline.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 relative z-10 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4 tracking-tight text-slate-900">Comprehensive Farm Intelligence</h2>
            <p className="text-lg text-slate-500">Everything a pomegranate farmer needs, right in their pocket.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="modern-panel p-8 bg-white border border-slate-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Disease & Severity</h3>
              <p className="text-slate-500 leading-relaxed">Instantly identify pomegranate diseases and automatically estimate the severity level using on-device computer vision.</p>
            </div>
            
            <div className="modern-panel p-8 bg-white border border-slate-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Weather & Forecasting</h3>
              <p className="text-slate-500 leading-relaxed">Integrated weather intelligence helps you schedule sprays and treatments exactly when conditions are optimal.</p>
            </div>
            
            <div className="modern-panel p-8 bg-white border border-slate-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-green-50 text-green-500 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Market & Expenses</h3>
              <p className="text-slate-500 leading-relaxed">Track live pomegranate market prices, estimate farm yields, and manage all agricultural expenses in one place.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Technology Section */}
      <section id="ai" className="py-32 relative z-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 tracking-tight text-slate-900">
              Powered by Multi-Task Edge AI
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Anar X doesn't rely on simple image classification. It utilizes a custom <strong>Multi-Task Learning (MTL)</strong> architecture built on top of EfficientNet.
              </p>
              <p>
                When a farmer scans a leaf or fruit, a single neural network simultaneously performs two tasks: it diagnoses the specific disease pathogen, and estimates the severity of the infection. This shared feature extraction makes the model both faster and more accurate.
              </p>
              <p>
                Because farms often lack reliable internet, the entire AI pipeline is optimized with <strong>TensorFlow Lite</strong> to run in milliseconds directly on the user's Android device, with zero latency or cloud dependency.
              </p>
            </div>
          </div>
          <div className="relative">
             <div className="modern-panel p-8 bg-slate-900 text-white shadow-2xl relative z-10">
                <div className="flex justify-between items-center mb-6 pb-6 border-b border-white/10">
                  <div className="font-mono text-sm text-slate-400">inference_pipeline.tflite</div>
                  <div className="flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500"></span>
                  </div>
                </div>
                <div className="space-y-4 font-mono text-sm text-[var(--color-anar)]">
                  <div className="flex justify-between items-center bg-white/5 rounded p-3">
                    <span className="text-slate-300">Input Layer</span>
                    <span>224x224 RGB</span>
                  </div>
                  <div className="flex justify-center text-slate-600">↓</div>
                  <div className="flex justify-between items-center bg-white/5 rounded p-3">
                    <span className="text-slate-300">Backbone</span>
                    <span>EfficientNet-B0</span>
                  </div>
                  <div className="flex justify-center text-slate-600">↓</div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[var(--color-anar)]/10 border border-[var(--color-anar)]/30 rounded p-3 text-center">
                      <div className="text-white font-bold mb-1">Task 1</div>
                      <div className="text-xs">Disease Class</div>
                    </div>
                    <div className="bg-orange-500/10 border border-orange-500/30 rounded p-3 text-center">
                      <div className="text-white font-bold mb-1">Task 2</div>
                      <div className="text-xs text-orange-400">Severity Level</div>
                    </div>
                  </div>
                </div>
             </div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-tr from-[var(--color-anar)] to-orange-500 blur-3xl opacity-20 -z-10"></div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="technology" className="py-24 relative z-10 overflow-hidden bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 relative">
          <h2 className="text-4xl font-bold mb-20 text-center tracking-tight text-slate-900">Development Process</h2>
          
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-slate-200 via-slate-300 to-slate-200 -translate-x-1/2 rounded-full"></div>
            
            <div className="space-y-16 relative z-10">
              
              {/* Item 1 - Right */}
              <div className="grid grid-cols-2 gap-16 relative group">
                <div className="col-span-1"></div>
                <div className="col-span-1 flex items-center relative">
                  <div className="absolute left-[-2rem] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border-4 border-slate-50 shadow-sm flex items-center justify-center -translate-x-1/2 z-10 group-hover:border-[var(--color-anar)]/20 transition-colors duration-300">
                    <div className="w-3 h-3 rounded-full bg-[var(--color-anar)]"></div>
                  </div>
                  <div className="modern-panel p-8 w-full border-none group-hover:-translate-y-1 group-hover:shadow-2xl transition-all duration-300 cursor-default">
                    <h3 className="text-2xl font-bold mb-3 font-serif text-slate-900">Data Collection</h3>
                    <p className="text-slate-500 leading-relaxed">Collected and organized real-world pomegranate disease images to create a robust foundation.</p>
                  </div>
                </div>
              </div>

              {/* Item 2 - Left */}
              <div className="grid grid-cols-2 gap-16 relative group">
                <div className="col-span-1 flex items-center justify-end relative">
                  <div className="absolute right-[-2rem] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border-4 border-slate-50 shadow-sm flex items-center justify-center translate-x-1/2 z-10 group-hover:border-[var(--color-anar)]/20 transition-colors duration-300">
                    <div className="w-3 h-3 rounded-full bg-[var(--color-anar)]"></div>
                  </div>
                  <div className="modern-panel p-8 w-full border-none group-hover:-translate-y-1 group-hover:shadow-2xl transition-all duration-300 cursor-default">
                    <h3 className="text-2xl font-bold mb-3 font-serif text-slate-900">Data Preparation</h3>
                    <p className="text-slate-500 leading-relaxed">Cleaned, labeled, and augmented the dataset to ensure high accuracy in field conditions.</p>
                  </div>
                </div>
                <div className="col-span-1"></div>
              </div>

              {/* Item 3 - Right */}
              <div className="grid grid-cols-2 gap-16 relative group">
                <div className="col-span-1"></div>
                <div className="col-span-1 flex items-center relative">
                  <div className="absolute left-[-2rem] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border-4 border-slate-50 shadow-sm flex items-center justify-center -translate-x-1/2 z-10 group-hover:border-orange-500/20 transition-colors duration-300">
                    <div className="w-3 h-3 rounded-full bg-[var(--color-anar)]"></div>
                  </div>
                  <div className="modern-panel p-8 w-full border-none bg-gradient-to-br from-[var(--color-anar)] to-orange-500 text-white group-hover:-translate-y-1 group-hover:shadow-2xl transition-all duration-300 cursor-default">
                    <h3 className="text-2xl font-bold mb-3 font-serif text-white">Model Training</h3>
                    <p className="text-white/90 leading-relaxed">Trained and evaluated an EfficientNet-B0 convolutional neural network for multi-task disease classification.</p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-20 pb-10 text-center bg-white border-t border-gray-100">
        <div className="font-serif text-3xl font-bold tracking-tight text-slate-900 mb-3 flex justify-center items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[var(--color-anar)] flex items-center justify-center text-white text-xs">🍎</div>
          ANAR X
        </div>
        <p className="text-slate-500 font-medium mb-8 max-w-md mx-auto">AI-powered pomegranate farm intelligence built for offline edge inference.</p>
        
        <div className="flex justify-center gap-8 mb-12 text-sm text-slate-500 font-semibold uppercase tracking-wider">
           <a href="#product" className="hover:text-[var(--color-anar)] transition-colors">Product</a>
           <a href="#technology" className="hover:text-[var(--color-anar)] transition-colors">Technology</a>
           <a href="https://github.com/OnkarGaikwad-astro/Anar-X" target="_blank" rel="noreferrer" className="hover:text-[var(--color-anar)] transition-colors">GitHub</a>
        </div>
        
        <div className="border-t border-gray-100 pt-10 flex flex-col items-center">
          <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-4">Built with AI, Computer Vision, & Edge Computing</p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full border border-slate-200">
            <span className="text-slate-400 text-sm">Designed & Developed by</span>
            <a href="https://github.com/OnkarGaikwad-astro" target="_blank" rel="noreferrer" className="font-bold text-slate-700 hover:text-[var(--color-anar)] transition-colors">Onkar Gaikwad</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
