
import { 
  Zap, Activity, CloudOff, Sun, Sprout, ShieldCheck, Database, Server, Smartphone, 
  MapPin, CheckCircle2, ChevronRight, CloudRain, IndianRupee, History, Maximize
} from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[var(--color-off-white)] text-slate-900 selection:bg-[var(--color-leaf-green)] selection:text-white pb-0 font-sans overflow-x-hidden">
      
      {/* NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-gray-200/50 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tight text-[var(--color-dark-green)] flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/ic_launcher.png" alt="Anar X" width={36} height={36} style={{ borderRadius: "10px", overflow: "hidden" }} />
            Anar X
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-slate-600 font-medium">
            <a href="#product" className="hover:text-[var(--color-agri-green)] transition-colors">Product</a>
            <a href="#ai" className="hover:text-[var(--color-agri-green)] transition-colors">AI</a>
            <a href="#features" className="hover:text-[var(--color-agri-green)] transition-colors">Features</a>
            <a href="#architecture" className="hover:text-[var(--color-agri-green)] transition-colors">Architecture</a>
            <a href="#roadmap" className="hover:text-[var(--color-agri-green)] transition-colors">Roadmap</a>
            <a href="https://github.com/OnkarGaikwad-astro/Anar-X" target="_blank" rel="noreferrer" className="hover:text-[var(--color-agri-green)] transition-colors">GitHub</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#cta" className="bg-[var(--color-agri-green)] text-white px-5 py-2 rounded-full font-medium text-sm hover:bg-[var(--color-forest-green)] hover:-translate-y-0.5 transition-all shadow-lg shadow-[var(--color-agri-green)]/20">
              Explore Anar X
            </a>
          </div>
        </div>
      </nav>

      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
        {/* Subtle Background Effects */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--color-leaf-green)]/10 blur-[120px] rounded-full pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--color-amber-light)]/10 blur-[100px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-semibold text-[var(--color-leaf-green)] mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-leaf-green)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-leaf-green)]"></span>
              </span>
              ON-DEVICE AI • BUILT FOR POMEGRANATE FARMING
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight text-[var(--color-dark-green)]">
              AI for Smarter <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-agri-green)] to-[var(--color-leaf-green)]">
                Pomegranate Farming
              </span>
            </h1>
            
            <h2 className="text-xl md:text-2xl font-medium text-slate-700 mb-6">
              From Crop Images to Actionable Farm Intelligence.
            </h2>
            
            <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
              Anar X brings disease detection, severity analysis, AI-powered farming assistance, market intelligence, and farm management directly to the farmer&apos;s smartphone.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#cta" className="inline-flex items-center justify-center bg-[var(--color-agri-green)] text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-[var(--color-forest-green)] hover:shadow-2xl hover:-translate-y-1 transition-all shadow-xl shadow-[var(--color-agri-green)]/20">
                Explore Anar X
              </a>
              <a href="#architecture" className="inline-flex items-center justify-center bg-white text-[var(--color-agri-green)] px-8 py-4 rounded-full font-medium text-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 hover:shadow-md hover:-translate-y-1 transition-all shadow-sm">
                View AI Architecture
              </a>
            </div>
          </div>

          <div className="relative w-full aspect-[4/5] animate-float z-10 flex justify-center">
            {/* Phone Mockup Container */}
            <div className="relative w-[300px] h-[600px] bg-black rounded-[40px] border-[8px] border-slate-900 shadow-2xl overflow-hidden z-20">
              {/* Screen Content */}
              <div className="absolute inset-0 bg-[#F4F5F7] flex flex-col">
                 <div className="h-64 relative bg-[var(--color-agri-green)] overflow-hidden">
                    <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1601323869273-0fb669288e7a?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center"></div>
                    {/* Scanner overlay effect */}
                    <div className="absolute inset-0 border-2 border-white/20 m-4 rounded-xl flex items-center justify-center">
                       <div className="w-full h-1 bg-white/50 shadow-[0_0_15px_rgba(255,255,255,1)] animate-pulse-slow"></div>
                    </div>
                 </div>
                 <div className="p-5 flex-1 bg-white rounded-t-3xl -mt-6 relative z-10">
                    <div className="w-12 h-1 bg-gray-200 rounded-full mx-auto mb-6"></div>
                    <div className="space-y-4">
                       <div className="flex justify-between items-center bg-red-50 p-4 rounded-2xl border border-red-100">
                         <div>
                           <p className="text-xs text-red-500 font-bold uppercase tracking-wider mb-1">Disease Detected</p>
                           <p className="text-lg font-bold text-red-900">Anthracnose</p>
                         </div>
                         <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-red-500 font-bold">96%</div>
                       </div>
                       <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100">
                         <p className="text-xs text-orange-600 font-bold uppercase tracking-wider mb-1">Severity</p>
                         <div className="flex gap-1 mt-2">
                            <div className="h-2 flex-1 bg-orange-500 rounded-full"></div>
                            <div className="h-2 flex-1 bg-orange-500 rounded-full"></div>
                            <div className="h-2 flex-1 bg-orange-200 rounded-full"></div>
                            <div className="h-2 flex-1 bg-orange-200 rounded-full"></div>
                         </div>
                         <p className="text-sm font-bold text-orange-900 mt-2">Moderate Level</p>
                       </div>
                    </div>
                 </div>
              </div>
            </div>

            {/* Floating UI Cards */}
            <div className="absolute top-20 -left-12 glass p-4 rounded-2xl z-30 shadow-xl flex items-center gap-3">
               <div className="bg-red-100 p-2 rounded-full text-red-500"><Activity size={18} /></div>
               <div>
                 <div className="text-[10px] font-bold text-slate-500 uppercase">Disease Detection</div>
                 <div className="text-sm font-bold text-slate-900">Anthracnose</div>
               </div>
            </div>

            <div className="absolute top-64 -right-16 glass p-4 rounded-2xl z-30 shadow-xl flex items-center gap-3">
               <div className="bg-orange-100 p-2 rounded-full text-orange-500"><Maximize size={18} /></div>
               <div>
                 <div className="text-[10px] font-bold text-slate-500 uppercase">Severity</div>
                 <div className="text-sm font-bold text-slate-900">Moderate</div>
               </div>
            </div>

            <div className="absolute bottom-32 -left-16 glass p-4 rounded-2xl z-30 shadow-xl flex items-center gap-3">
               <div className="bg-blue-100 p-2 rounded-full text-blue-500"><Zap size={18} /></div>
               <div>
                 <div className="text-[10px] font-bold text-slate-500 uppercase">AI Assistant</div>
                 <div className="text-sm font-bold text-slate-900">Ask Anar X</div>
               </div>
            </div>

            <div className="absolute bottom-16 -right-12 glass p-4 rounded-2xl z-30 shadow-xl flex items-center gap-3">
               <div className="bg-green-100 p-2 rounded-full text-green-600"><MapPin size={18} /></div>
               <div>
                 <div className="text-[10px] font-bold text-slate-500 uppercase">Market</div>
                 <div className="text-sm font-bold text-slate-900">Maharashtra</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST / TECHNOLOGY STRIP */}
      <section className="border-y border-gray-200/60 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 text-center">
            <div>
              <div className="text-3xl font-extrabold text-[var(--color-dark-green)] mb-1">5,099+</div>
              <div className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Pomegranate Images</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-[var(--color-dark-green)] mb-1">5</div>
              <div className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Disease Classes</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-[var(--color-dark-green)] mb-1">ON-DEVICE</div>
              <div className="text-sm font-semibold text-slate-500 uppercase tracking-widest">AI Inference</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-[var(--color-dark-green)] mb-1">TFLITE</div>
              <div className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Edge Deployment</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-[var(--color-dark-green)] mb-1">GEMMA</div>
              <div className="text-sm font-semibold text-slate-500 uppercase tracking-widest">AI Assistant</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE PROBLEM */}
      <section id="product" className="py-32 relative bg-[var(--color-off-white)]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-[var(--color-dark-green)] text-center">
              Agricultural decisions shouldn&apos;t depend on guesswork.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="modern-panel p-8">
               <div className="w-12 h-12 bg-red-50 text-red-600 rounded-full flex items-center justify-center mb-6">
                 <ShieldCheck size={24} />
               </div>
               <h3 className="text-xl font-bold mb-3 text-slate-900">Disease Identification</h3>
               <p className="text-slate-600 leading-relaxed">Early symptoms can be difficult to identify without agricultural expertise, leading to delayed treatments.</p>
            </div>
            <div className="modern-panel p-8">
               <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mb-6">
                 <CloudOff size={24} />
               </div>
               <h3 className="text-xl font-bold mb-3 text-slate-900">Connectivity</h3>
               <p className="text-slate-600 leading-relaxed">Farmers may not always have reliable internet connectivity deep in the field where diagnosis is needed most.</p>
            </div>
            <div className="modern-panel p-8">
               <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6">
                 <Server size={24} />
               </div>
               <h3 className="text-xl font-bold mb-3 text-slate-900">Fragmented Information</h3>
               <p className="text-slate-600 leading-relaxed">Disease info, treatment planning, market prices, weather, and records are usually spread across different tools.</p>
            </div>
          </div>

          <div className="modern-panel p-10 bg-gradient-to-r from-[var(--color-agri-green)] to-[var(--color-leaf-green)] text-white text-center">
             <h3 className="text-2xl font-bold mb-2">Anar X brings these workflows together in a single AI-powered mobile application.</h3>
          </div>
        </div>
      </section>

      {/* 4. HOW ANAR X WORKS - PIPELINE */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-20 tracking-tight text-[var(--color-dark-green)]">
            From a Crop Image to a Farm Decision
          </h2>
          
          <div className="relative flex flex-col items-center">
             <div className="absolute top-0 bottom-0 w-0.5 bg-slate-200 -z-10"></div>
             
             {[
               { title: "Crop Image", icon: <Smartphone size={20} />, color: "bg-slate-100 text-slate-600" },
               { title: "Image Processing", icon: <Server size={20} />, color: "bg-blue-100 text-blue-600" },
               { title: "EfficientNet-B0", icon: <Database size={20} />, color: "bg-purple-100 text-purple-600" },
               { title: "Disease Detection + Severity Estimation", icon: <Activity size={20} />, color: "bg-red-100 text-red-600" },
               { title: "Treatment Guidance", icon: <ShieldCheck size={20} />, color: "bg-amber-100 text-amber-600" },
               { title: "Farm Action", icon: <Sprout size={20} />, color: "bg-green-100 text-green-600" },
             ].map((node, i) => (
               <div key={i} className="flex flex-col items-center group mb-10 last:mb-0">
                 <div className={`w-16 h-16 rounded-2xl ${node.color} flex items-center justify-center shadow-sm mb-4 border border-white group-hover:scale-110 transition-transform`}>
                   {node.icon}
                 </div>
                 <div className="bg-white px-6 py-3 rounded-full border border-slate-200 shadow-sm font-bold text-slate-800">
                   {node.title}
                 </div>
                 {i < 5 && <div className="h-10 w-0.5 bg-transparent"></div>}
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 5. AI DISEASE DETECTION */}
      <section id="ai" className="py-24 bg-[var(--color-off-white)]">
         <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-6 tracking-tight text-[var(--color-dark-green)] text-center">
              See the disease. Understand the severity.
            </h2>
            <p className="text-center text-slate-600 max-w-2xl mx-auto mb-16 text-lg">
               Anar X uses a custom-trained deep learning model based on <strong>EfficientNet-B0</strong> to classify five distinct states of pomegranate health.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {['Healthy', 'Bacterial Blight', 'Anthracnose', 'Cercospora Fruit Spot', 'Alternaria Fruit Spot'].map((disease, i) => (
                <div key={i} className="modern-panel px-6 py-4 cursor-pointer hover:border-[var(--color-agri-green)] hover:shadow-lg transition-all text-center flex-1 min-w-[200px]">
                  <div className="font-bold text-slate-800">{disease}</div>
                  <div className="text-xs text-slate-500 mt-2">Class {i}</div>
                </div>
              ))}
            </div>
         </div>
      </section>

      {/* 6. MULTI-TASK AI */}
      <section className="py-32 bg-[var(--color-dark-green)] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599388308418-4a57f6b98616?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center opacity-5"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-16 items-center">
           <div>
             <div className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-bold tracking-widest text-[var(--color-amber-light)] mb-6 border border-white/20">
               TensorFlow • Keras • EfficientNet-B0 • TensorFlow Lite
             </div>
             <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">One model. Two predictions.</h2>
             <p className="text-lg text-slate-300 leading-relaxed">
               Anar X uses a dual-head multi-task architecture. Instead of running two separate models, shared visual features are extracted once, then passed to two parallel heads: one for disease classification and another for ordinal severity estimation.
             </p>
           </div>
           
           <div className="glass-dark p-8 rounded-[30px]">
             <div className="flex flex-col items-center font-mono text-sm">
                <div className="bg-white/10 px-6 py-3 rounded-lg w-48 text-center border border-white/20">Input Image</div>
                <div className="h-8 w-px bg-white/30"></div>
                <div className="text-white/50 text-xs mb-1">▼</div>
                <div className="bg-white/20 px-6 py-3 rounded-lg w-48 text-center border border-white/30 font-bold">EfficientNet-B0</div>
                <div className="h-8 w-px bg-white/30"></div>
                <div className="text-white/50 text-xs mb-1">▼</div>
                <div className="bg-white/10 px-6 py-3 rounded-lg w-48 text-center border border-white/20">Shared Features</div>
                <div className="h-8 w-px bg-white/30"></div>
                
                <div className="w-64 h-px bg-white/30"></div>
                <div className="flex w-64 justify-between -mt-[1px]">
                   <div className="h-8 w-px bg-white/30"></div>
                   <div className="h-8 w-px bg-white/30"></div>
                </div>
                <div className="flex w-72 justify-between px-2 text-white/50 text-xs mb-1">
                   <div>▼</div>
                   <div>▼</div>
                </div>
                
                <div className="flex w-full justify-around gap-4">
                   <div className="bg-red-500/20 px-4 py-4 rounded-lg w-full text-center border border-red-500/30">
                     <div className="font-bold text-red-200 mb-2">Disease Classification</div>
                     <div className="text-xs bg-black/30 py-1 rounded">5 Classes</div>
                   </div>
                   <div className="bg-amber-500/20 px-4 py-4 rounded-lg w-full text-center border border-amber-500/30">
                     <div className="font-bold text-amber-200 mb-2">Severity Estimation</div>
                     <div className="text-xs bg-black/30 py-1 rounded">4 Levels</div>
                   </div>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* 7. OFFLINE-FIRST AI */}
      <section className="py-24 bg-white">
         <div className="max-w-5xl mx-auto px-6 text-center">
            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-8 text-slate-400">
               <CloudOff size={40} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-[var(--color-dark-green)]">
              AI that works where the farm is.
            </h2>
            <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto">
               The core disease inference pipeline runs directly on the Android device using TensorFlow Lite. A crop image does not need to be uploaded to a cloud AI service just to receive a prediction.
            </p>
            
            <div className="inline-flex items-center gap-3 bg-green-50 text-green-700 px-6 py-3 rounded-full font-bold border border-green-200">
               <CheckCircle2 size={20} />
               NO CLOUD REQUIRED FOR CORE DISEASE INFERENCE
            </div>
         </div>
      </section>

      {/* 8. AI FARMING ASSISTANT */}
      <section className="py-32 bg-[var(--color-off-white)] border-y border-gray-200/50">
         <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 flex justify-center">
               <div className="modern-panel w-[350px] p-0 bg-white">
                 <div className="bg-slate-100 p-4 border-b border-slate-200 flex items-center gap-3">
                   <div className="w-10 h-10 bg-[var(--color-agri-green)] rounded-full flex items-center justify-center text-white font-bold">A</div>
                   <div>
                     <div className="font-bold text-slate-800">Anar X Assistant</div>
                     <div className="text-xs text-slate-500">Powered by Google Gemma</div>
                   </div>
                 </div>
                 <div className="p-6 space-y-6 h-[400px] overflow-hidden bg-slate-50">
                    <div className="flex justify-end">
                       <div className="bg-[var(--color-agri-green)] text-white p-4 rounded-2xl rounded-tr-sm max-w-[85%] shadow-sm">
                         What should I do if my pomegranate plants show early disease symptoms?
                       </div>
                    </div>
                    <div className="flex justify-start">
                       <div className="bg-white border border-slate-200 text-slate-700 p-4 rounded-2xl rounded-tl-sm max-w-[90%] shadow-sm text-sm">
                         <p className="mb-2">Based on standard agricultural practices:</p>
                         <ul className="list-disc pl-4 space-y-1">
                           <li>Isolate affected areas if possible.</li>
                           <li>Ensure proper drainage and avoid overhead watering.</li>
                           <li>Consult a local agronomist with the specific disease classification for targeted fungicidal treatment.</li>
                         </ul>
                         <p className="mt-2 text-xs text-slate-400">Note: This is AI assistance, not authoritative advice.</p>
                       </div>
                    </div>
                 </div>
               </div>
            </div>
            <div className="order-1 md:order-2">
               <h2 className="text-4xl font-bold mb-6 tracking-tight text-[var(--color-dark-green)]">Meet the AI behind the farm assistant.</h2>
               <p className="text-lg text-slate-600 mb-8">
                 Anar X integrates Google Gemma through MediaPipe GenAI to provide local AI-powered farming assistance directly on-device.
               </p>
               <div className="inline-block px-4 py-2 bg-slate-900 text-white font-bold rounded-lg text-sm shadow-lg">
                 Powered by Google Gemma + MediaPipe GenAI
               </div>
            </div>
         </div>
      </section>

      {/* 9. FARM INTELLIGENCE */}
      <section id="features" className="py-24 bg-white">
         <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-16 tracking-tight text-[var(--color-dark-green)] text-center">More than disease detection.</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
               <div className="modern-panel p-6 border-t-4 border-t-blue-500">
                  <CloudRain className="text-blue-500 mb-4" size={32} />
                  <h3 className="text-lg font-bold mb-2">Weather</h3>
                  <p className="text-sm text-slate-600">Weather information for agricultural decision support and spray scheduling.</p>
               </div>
               <div className="modern-panel p-6 border-t-4 border-t-green-500">
                  <IndianRupee className="text-green-500 mb-4" size={32} />
                  <h3 className="text-lg font-bold mb-2">Market Prices</h3>
                  <p className="text-sm text-slate-600">Live pomegranate market information sourced directly through Agmarknet.</p>
               </div>
               <div className="modern-panel p-6 border-t-4 border-t-amber-500">
                  <Sun className="text-amber-500 mb-4" size={32} />
                  <h3 className="text-lg font-bold mb-2">Farm Planning</h3>
                  <p className="text-sm text-slate-600">Spray and treatment scheduling with intelligent reminders for the season.</p>
               </div>
               <div className="modern-panel p-6 border-t-4 border-t-purple-500">
                  <History className="text-purple-500 mb-4" size={32} />
                  <h3 className="text-lg font-bold mb-2">Scan History</h3>
                  <p className="text-sm text-slate-600">Complete log of previous disease scans, severities, and field locations.</p>
               </div>
            </div>
         </div>
      </section>

      {/* 10. YIELD ESTIMATION */}
      <section className="py-24 bg-[var(--color-off-white)]">
         <div className="max-w-5xl mx-auto px-6 text-center">
            <div className="inline-block px-3 py-1 bg-amber-100 text-amber-700 font-bold rounded-full text-xs uppercase tracking-wider mb-6">Experimental Feature</div>
            <h2 className="text-4xl font-bold mb-6 tracking-tight text-[var(--color-dark-green)]">Turn a tree image into a rough yield estimate.</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-16">
              Using lightweight computer vision, Anar X provides an approximate estimate of fruit count and weight from a single image.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 font-mono text-sm font-bold text-slate-700">
               <div className="bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm">Tree Image</div>
               <ChevronRight className="hidden md:block text-slate-300" />
               <div className="bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm">Color Segmentation</div>
               <ChevronRight className="hidden md:block text-slate-300" />
               <div className="bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm">Region Detection</div>
               <ChevronRight className="hidden md:block text-slate-300" />
               <div className="bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm bg-[var(--color-leaf-green)] text-white">Approximate Weight</div>
            </div>
         </div>
      </section>

      {/* 11. ARCHITECTURE SECTION */}
      <section id="architecture" className="py-32 bg-[#0A1C16] text-white">
         <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-16 tracking-tight text-center">Built at the intersection of AI, mobile, and agriculture.</h2>
            
            <div className="glass-dark p-10 rounded-[32px] mb-16">
               <div className="flex flex-col items-center font-mono font-bold">
                  <div className="text-2xl text-[var(--color-agri-green)] bg-white px-8 py-3 rounded-xl">ANAR X</div>
                  <div className="h-10 w-px bg-white/20"></div>
                  
                  <div className="w-full max-w-2xl h-px bg-white/20"></div>
                  <div className="flex w-full max-w-2xl justify-between -mt-[1px]">
                     <div className="h-10 w-px bg-white/20"></div>
                     <div className="h-10 w-px bg-white/20"></div>
                     <div className="h-10 w-px bg-white/20"></div>
                  </div>
                  
                  <div className="flex w-full max-w-[45rem] justify-between text-white/50 text-xs mb-2">
                     <div>▼</div>
                     <div>▼</div>
                     <div>▼</div>
                  </div>

                  <div className="flex w-full max-w-3xl justify-between gap-4 mb-10 text-sm">
                     <div className="flex-1 flex flex-col items-center">
                        <div className="bg-white/5 border border-white/10 w-full py-4 text-center rounded-xl mb-4">Mobile AI</div>
                        <div className="text-xs text-[var(--color-amber-light)] bg-black/40 px-3 py-1 rounded">TensorFlow Lite</div>
                     </div>
                     <div className="flex-1 flex flex-col items-center">
                        <div className="bg-white/5 border border-white/10 w-full py-4 text-center rounded-xl mb-4">On-Device LLM</div>
                        <div className="text-xs text-[var(--color-amber-light)] bg-black/40 px-3 py-1 rounded">Gemma</div>
                     </div>
                     <div className="flex-1 flex flex-col items-center">
                        <div className="bg-white/5 border border-white/10 w-full py-4 text-center rounded-xl mb-4">Farm Data</div>
                        <div className="text-xs text-[var(--color-amber-light)] bg-black/40 px-3 py-1 rounded">Weather / Market</div>
                     </div>
                  </div>

                  <div className="flex w-full max-w-2xl justify-between">
                     <div className="h-10 w-px bg-white/20"></div>
                     <div className="h-10 w-px bg-white/20"></div>
                     <div className="h-10 w-px bg-white/20"></div>
                  </div>
                  <div className="w-full max-w-2xl h-px bg-white/20"></div>
                  <div className="h-10 w-px bg-white/20"></div>
                  <div className="text-white/50 text-xs mb-2">▼</div>
                  
                  <div className="bg-gradient-to-r from-[var(--color-agri-green)] to-[var(--color-leaf-green)] px-10 py-4 rounded-xl text-lg w-64 text-center shadow-[0_0_30px_rgba(45,106,79,0.3)]">
                    Android App
                  </div>
               </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
               {['Kotlin', 'Jetpack Compose', 'TensorFlow', 'Keras', 'EfficientNet-B0', 'TensorFlow Lite', 'MediaPipe GenAI', 'Gemma', 'OpenCV', 'Supabase', 'PostgreSQL', 'Agmarknet'].map((badge, i) => (
                 <span key={i} className="px-4 py-2 bg-white/10 hover:bg-white/20 transition-colors rounded-full text-sm font-medium border border-white/10">{badge}</span>
               ))}
            </div>
         </div>
      </section>

      {/* 12. DATASET / ML SECTION */}
      <section className="py-24 bg-white border-b border-gray-200/50">
         <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-12 tracking-tight text-[var(--color-dark-green)]">Trained on real pomegranate imagery.</h2>
            
            <div className="mb-12">
               <div className="text-6xl font-extrabold text-[var(--color-agri-green)] mb-2">5,099</div>
               <div className="text-slate-500 font-semibold uppercase tracking-widest text-sm">Total Images</div>
            </div>

            <div className="max-w-2xl mx-auto space-y-4 text-left font-mono text-sm">
               {[
                 {name: 'Healthy', count: 1450, color: 'bg-green-500'},
                 {name: 'Anthracnose', count: 1166, color: 'bg-red-500'},
                 {name: 'Bacterial Blight', count: 966, color: 'bg-orange-500'},
                 {name: 'Alternaria', count: 886, color: 'bg-amber-500'},
                 {name: 'Cercospora', count: 631, color: 'bg-purple-500'},
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-4">
                    <div className="w-32 font-bold text-slate-700">{item.name}</div>
                    <div className="flex-1 h-6 bg-slate-100 rounded-sm overflow-hidden">
                       <div className={`h-full ${item.color}`} style={{ width: `${(item.count / 1450) * 100}%` }}></div>
                    </div>
                    <div className="w-12 text-right text-slate-500">{item.count}</div>
                 </div>
               ))}
            </div>
            
            <p className="mt-12 text-slate-600 max-w-xl mx-auto">
               The dataset contains five pomegranate disease/health classes and is used to train the disease and severity model.
            </p>
         </div>
      </section>

      {/* 13. WHY EDGE AI? */}
      <section className="py-24 bg-[var(--color-off-white)]">
         <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-16 tracking-tight text-[var(--color-dark-green)] text-center">Cloud AI isn&apos;t always the right answer.</h2>
            
            <div className="modern-panel overflow-hidden bg-white">
               <div className="grid grid-cols-3 bg-slate-50 border-b border-slate-200 font-bold text-sm uppercase tracking-wider text-slate-500">
                  <div className="p-6">Feature</div>
                  <div className="p-6 border-l border-slate-200">Cloud Inference</div>
                  <div className="p-6 border-l border-slate-200 bg-[var(--color-agri-green)] text-white">Anar X Edge Inference</div>
               </div>
               
               {[
                 ['Internet', 'Required', 'Not required for core disease inference'],
                 ['Image Upload', 'Possible', 'Local'],
                 ['Field Connectivity', 'Dependency', 'Reduced dependency'],
                 ['Response Path', 'Cloud', 'Device'],
                 ['Privacy', 'Network dependent', 'Local inference'],
               ].map((row, i) => (
                 <div key={i} className="grid grid-cols-3 border-b border-slate-100 last:border-0 text-slate-700">
                    <div className="p-6 font-semibold">{row[0]}</div>
                    <div className="p-6 border-l border-slate-100">{row[1]}</div>
                    <div className="p-6 border-l border-slate-100 bg-green-50/50 font-bold text-[var(--color-leaf-green)]">{row[2]}</div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 14. PRODUCT JOURNEY */}
      <section className="py-24 bg-white text-center">
         <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-16 tracking-tight text-[var(--color-dark-green)]">One scan. More context.</h2>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 font-bold text-slate-700 text-sm md:text-base">
               <div>Image</div>
               <ChevronRight className="hidden md:block text-[var(--color-amber-light)]" />
               <div className="md:hidden text-[var(--color-amber-light)]">↓</div>
               
               <div>Detection</div>
               <ChevronRight className="hidden md:block text-[var(--color-amber-light)]" />
               <div className="md:hidden text-[var(--color-amber-light)]">↓</div>
               
               <div>Severity</div>
               <ChevronRight className="hidden md:block text-[var(--color-amber-light)]" />
               <div className="md:hidden text-[var(--color-amber-light)]">↓</div>
               
               <div>Recommendation</div>
               <ChevronRight className="hidden md:block text-[var(--color-amber-light)]" />
               <div className="md:hidden text-[var(--color-amber-light)]">↓</div>
               
               <div>Farm Planning</div>
               <ChevronRight className="hidden md:block text-[var(--color-amber-light)]" />
               <div className="md:hidden text-[var(--color-amber-light)]">↓</div>
               
               <div className="text-[var(--color-agri-green)]">Market Intelligence</div>
            </div>
         </div>
      </section>

      {/* 16. LIMITATIONS */}
      <section className="py-20 bg-amber-50 border-y border-amber-100">
         <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 tracking-tight text-amber-900">Built with ambition. Still improving.</h2>
            <p className="text-amber-800 mb-6">Anar X is a development project and has known limitations:</p>
            <ul className="grid md:grid-cols-2 gap-4 text-amber-800 text-sm">
               <li className="flex items-start gap-2"><span className="text-amber-500">•</span> Current dataset size needs expansion</li>
               <li className="flex items-start gap-2"><span className="text-amber-500">•</span> Heuristic severity labels</li>
               <li className="flex items-start gap-2"><span className="text-amber-500">•</span> Approximate yield estimation</li>
               <li className="flex items-start gap-2"><span className="text-amber-500">•</span> Real-world lighting/background variation</li>
               <li className="flex items-start gap-2"><span className="text-amber-500">•</span> Need for broader field validation</li>
            </ul>
         </div>
      </section>

      {/* 17. FUTURE ROADMAP */}
      <section id="roadmap" className="py-24 bg-white">
         <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-16 tracking-tight text-[var(--color-dark-green)] text-center">Roadmap</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
               <div className="modern-panel p-8 bg-slate-50 border-t-4 border-t-[var(--color-agri-green)]">
                  <h3 className="text-xl font-bold mb-4 text-[var(--color-agri-green)]">Next</h3>
                  <ul className="space-y-3 text-sm text-slate-600">
                    <li>Larger real-world dataset</li>
                    <li>Expert severity annotations</li>
                    <li>Better disease recognition</li>
                    <li>Improved yield estimation</li>
                  </ul>
               </div>
               <div className="modern-panel p-8 bg-slate-50 border-t-4 border-t-[var(--color-amber-light)]">
                  <h3 className="text-xl font-bold mb-4 text-[var(--color-amber)]">Then</h3>
                  <ul className="space-y-3 text-sm text-slate-600">
                    <li>Marathi/Hindi interface</li>
                    <li>Marathi/Hindi voice interaction</li>
                    <li>Better offline synchronization</li>
                    <li>Weather-based alerts</li>
                  </ul>
               </div>
               <div className="modern-panel p-8 bg-slate-50 border-t-4 border-t-slate-400">
                  <h3 className="text-xl font-bold mb-4 text-slate-700">Long Term</h3>
                  <ul className="space-y-3 text-sm text-slate-600">
                    <li>Additional crops</li>
                    <li>Advanced agricultural forecasting</li>
                    <li>Soil and farm sensor integration</li>
                    <li>Broader farm intelligence</li>
                  </ul>
               </div>
            </div>
         </div>
      </section>

      {/* 18. FINAL CTA */}
      <section id="cta" className="py-32 bg-[var(--color-dark-green)] text-white text-center relative overflow-hidden">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(45,138,158,0.2)_0%,transparent_70%)] pointer-events-none"></div>
         <div className="max-w-4xl mx-auto px-6 relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">A smartphone can be more than a camera.</h2>
            <p className="text-2xl text-[var(--color-amber-light)] mb-12 font-serif italic">
               It can become an AI assistant for the field.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
               <a href="https://drive.google.com/file/d/1NYydBaR8h2LxDipDPTBA1ELw97gIFyjf/view" target="_blank" rel="noreferrer" className="bg-[var(--color-agri-green)] hover:bg-[var(--color-leaf-green)] text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-xl hover:-translate-y-1">
                 Explore Anar X
               </a>
               <a href="https://github.com/OnkarGaikwad-astro/Anar-X" target="_blank" rel="noreferrer" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-10 py-5 rounded-full font-bold text-lg transition-all shadow-xl hover:-translate-y-1">
                 View on GitHub
               </a>
            </div>
            
            <p className="text-sm text-white/40 uppercase tracking-widest font-bold">Built with AI, Computer Vision & Edge Computing</p>
         </div>
      </section>

      <footer className="py-10 bg-[var(--color-forest-green)]/20 text-[var(--color-dark-green)]/60 text-center text-sm border-t border-[var(--color-agri-green)]/20">
        <p>© {new Date().getFullYear()} Anar X. A development project.</p>
      </footer>
    </div>
  );
}
