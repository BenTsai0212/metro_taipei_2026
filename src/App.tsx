import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Map, 
  MapPin, 
  Zap, 
  User, 
  Users, 
  Compass, 
  ChevronRight, 
  Bell, 
  Navigation, 
  Smartphone, 
  Activity, 
  BarChart3,
  Heart,
  Train,
  Target,
  Globe
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'map' | 'notify' | 'profile'>('map');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans relative overflow-hidden">
      
      {/* Background Text Decoration */}
      <div className="absolute top-10 left-[-50px] font-display text-[180px] font-black text-slate-50 opacity-80 pointer-events-none select-none uppercase tracking-tighter">
        TAIPEI
      </div>

      {/* Navigation */}
            <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-100 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-2">
            <Train className="w-6 h-6 text-metro" />
            <span className="font-display font-black text-xl tracking-wider text-slate-900">台北<span className="text-metro">在找你</span></span>
          </a>
          <div className="hidden md:flex gap-8 text-sm font-bold text-slate-500 uppercase tracking-widest">
            <a href="#problem" className="hover:text-metro transition-colors">核心痛點</a>
            <a href="#points" className="hover:text-metro transition-colors">捷運點升級</a>
            <a href="#ui-ux" className="hover:text-metro transition-colors">UI/UX 互動</a>
            <a href="#solution" className="hover:text-metro transition-colors">解決方案</a>
            <a href="#business" className="hover:text-metro transition-colors">效益分析</a>
          </div>
          <div className="flex gap-4 items-center">
            <a href="#points" className="md:hidden bg-blue-50 text-metro px-4 py-2 rounded-full text-xs font-bold tracking-widest">
              捷運點
            </a>
            <a href="#ui-ux" className="bg-metro hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-bold tracking-widest transition-colors shadow-lg shadow-metro/20">
              體驗原型
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-metro/5 blur-[120px] rounded-[100%] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50/80 text-metro text-xs font-bold tracking-widest rounded-full mb-8 uppercase border border-blue-100/50 shadow-sm backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-metro animate-pulse"></span>
              2026 Urban Mobility Hackathon
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black leading-[1.1] tracking-tighter mb-8 text-slate-900">
              讓每一次搭乘<br />
              成為跨越<span className="text-transparent bg-clip-text bg-gradient-to-r from-metro to-blue-400">邊界</span>的相遇
            </h1>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-1 bg-metro rounded-full"></div>
              <div className="w-3 h-1 bg-blue-200 rounded-full"></div>
              <div className="w-1 h-1 bg-blue-100 rounded-full"></div>
            </div>
            <p className="text-lg md:text-xl text-slate-500 mb-12 max-w-lg leading-relaxed font-medium">
              我們習慣在熟悉的站點間來回，讓僵化的幾何圖形框住了生活的可能。《台北在找你》運用點數的雙軌機制，重新編織人們與城市的連結，喚醒那些被遺忘的街區角落。
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#ui-ux" className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-slate-900/20 w-full sm:w-auto">
                <Smartphone className="w-5 h-5 flex-shrink-0" />
                <span>體驗互動原型</span>
              </a>
              <a href="#problem" className="flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-900 px-8 py-4 rounded-full font-bold transition-all border border-slate-200 ui-shadow w-full sm:w-auto">
                深入專案脈絡
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[450px] md:h-[600px] flex items-center justify-center"
          >
            {/* Visual Storytelling Container: Breaking the Triangle */}
            <div className="relative w-full max-w-lg aspect-square">
              {/* Background Network Grid */}
              <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-4 opacity-10">
                {[...Array(36)].map((_, i) => (
                  <div key={i} className="w-full h-full border-r border-b border-slate-400"></div>
                ))}
              </div>

              {/* The Unknown City Stations (Dimmed) */}
              {[...Array(12)].map((_, i) => {
                const positions = [
                  { top: '10%', left: '80%' }, { top: '15%', left: '30%' }, { top: '35%', left: '15%' },
                  { top: '85%', left: '20%' }, { top: '75%', left: '85%' }, { top: '50%', left: '90%' },
                  { top: '20%', left: '60%' }, { top: '40%', left: '80%' }, { top: '70%', left: '40%' },
                  { top: '90%', left: '60%' }, { top: '60%', left: '10%' }, { top: '10%', left: '10%' }
                ];
                return (
                  <div 
                    key={i} 
                    className="absolute w-2 h-2 rounded-full bg-slate-300"
                    style={positions[i]}
                  />
                );
              })}

              {/* Central Map Concept */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative w-[300px] h-[300px]">
                  
                  {/* Outer Reach Radius */}
                  <motion.div 
                    className="absolute inset-0 rounded-full border border-metro/20 border-dashed"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div 
                    className="absolute inset-4 rounded-full border border-metro/10"
                    animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.2, 0.5] }}
                    transition={{ duration: 8, delay: 1, repeat: Infinity, ease: "easeInOut" }}
                  />

                  {/* The Comfort Zone "Triangle" */}
                  <svg className="absolute inset-0 w-full h-full overflow-visible z-10">
                    <motion.polygon 
                      points="150,50 220,180 80,180" 
                      fill="none" 
                      stroke="#0070BD" 
                      strokeWidth="2" 
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="opacity-40"
                    />
                    
                    {/* Path leaving the triangle */}
                    <motion.path
                      d="M220,180 Q250,220 280,140"
                      fill="none"
                      stroke="#0070BD"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeDasharray="4 4"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 2, delay: 1, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
                      className="origin-center"
                    />

                    {/* Nodes of the Triangle */}
                    <circle cx="150" cy="50" r="5" className="fill-white stroke-metro stroke-2 shadow-[0_0_10px_#0070BD]" />
                    <circle cx="220" cy="180" r="5" className="fill-white stroke-metro stroke-2 shadow-[0_0_10px_#0070BD]" />
                    <circle cx="80" cy="180" r="5" className="fill-white stroke-metro stroke-2 shadow-[0_0_10px_#0070BD]" />
                    
                    {/* The New Destination Node */}
                    <motion.circle 
                      cx="280" cy="140" r="6" 
                      className="fill-metro shadow-[0_0_15px_rgba(0,112,189,0.6)]"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: [0, 1.5, 1], opacity: 1 }}
                      transition={{ duration: 0.5, delay: 2.8, repeat: Infinity, repeatDelay: 4.5 }}
                    />
                  </svg>
                  
                  {/* Tooltip popping up at new destination */}
                  <motion.div
                    className="absolute bg-white px-3 py-2 rounded-xl shadow-lg border border-slate-100 flex items-center gap-2 z-20"
                    style={{ top: '100px', left: '260px' }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, -10] }}
                    transition={{ duration: 4, delay: 3, repeat: Infinity, repeatDelay: 1 }}
                  >
                    <div className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center">
                      <Zap className="w-3 h-3 text-rose-500" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-slate-900 leading-none mb-1">發現新站點</span>
                      <span className="text-[9px] text-metro font-medium leading-none">+50 點數</span>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Conceptual Labels */}
              <div className="absolute top-[30%] left-[10%] bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-slate-100 shadow-sm">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-0.5">你的舒適圈</span>
                <span className="text-xs font-display font-black text-slate-800">幾何的禁錮</span>
              </div>

              <div className="absolute bottom-[20%] right-[5%] bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-slate-100 shadow-sm text-right">
                <span className="text-[10px] font-bold text-metro uppercase tracking-widest block mb-0.5">跨越邊界</span>
                <span className="text-xs font-display font-black text-slate-800">無限的城市</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-24 px-6 relative border-t border-slate-100 bg-white">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-black mb-10 text-slate-900">什麼是台北式孤獨？</h2>
          <div className="w-16 h-1 bg-metro mx-auto mb-10"></div>
          
          {/* Enhanced Citation */}
          <figure className="max-w-2xl mx-auto bg-slate-50 border-l-4 border-metro rounded-r-3xl p-8 text-left shadow-sm">
            <blockquote className="text-xl text-slate-700 leading-relaxed font-medium italic mb-6">
              「台北看似人很多，但當你想要做一件事情的時候，你是一個人的，身邊的燈紅酒綠都與你無關。」
            </blockquote>
            <figcaption className="flex items-center gap-3 text-sm font-bold text-slate-500 uppercase tracking-widest">
              <div className="w-6 h-[2px] bg-metro/30"></div>
              <span>信義區 · 31 歲訪談者</span>
            </figcaption>
          </figure>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white border border-slate-100 ui-shadow p-8 rounded-[38px]">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-metro mb-6">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-display font-black mb-4">城市三角形</h3>
            <p className="text-slate-500 leading-relaxed font-medium">
              1952 年，法國社會學家 Chombart de Lauwe 記錄一名巴黎學生整年的移動軌跡：地圖上僅有「家、學校、鋼琴老師」三個頂點的小三角形，三角形外的整座巴黎對他形同不存在。如今的台北，許多人的生活軌跡似乎也反映著類似的縮影。
            </p>
          </div>
          <div className="bg-white border border-slate-100 ui-shadow p-8 rounded-[38px]">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-metro mb-6">
              <Navigation className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-display font-black mb-4">感知萎縮</h3>
            <p className="text-slate-500 leading-relaxed font-medium">
              Stanford 研究顯示，身體的移動讓思維打開。當身體每天走同樣的路，對城市的感知也跟著停止更新，那些擦身而過的人慢慢對你隱形。
            </p>
          </div>
          <div className="bg-white border border-slate-100 ui-shadow p-8 rounded-[38px]">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-metro mb-6">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-display font-black mb-4">同溫層邊界</h3>
            <p className="text-slate-500 leading-relaxed font-medium">
              問卷調查驗證了「朋友邀約」是促使人們出門探索的最強動力。目前缺乏將社群連結整合進城市的誘因機制，每當缺乏陪伴、「一個人不想動」時，跨越邊界就變得十分困難。
            </p>
          </div>
        </div>
      </section>

            {/* Metro Points Section */}
      <section id="points" className="py-24 px-6 relative border-t border-slate-100 bg-slate-50 overflow-hidden">
        {/* Background Blob */}
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-blue-100 rounded-full blur-[120px] opacity-40 pointer-events-none"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-white border border-slate-200 text-metro text-xs font-bold tracking-widest rounded-full mb-6 uppercase shadow-sm">
              Value Proposition
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-black leading-tight tracking-tighter mb-6 text-slate-900">
              捷運點的價值翻轉：<br />
              <span className="text-metro">從「行銷折抵」到「社會影響力」</span>
            </h2>
            <div className="w-16 h-1 bg-metro mx-auto mb-8"></div>
            <p className="text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
              目前的捷運點僅作為單純的消費折抵，缺乏與城市探索的深度連結。我們借鏡國際成功案例，將單一維度的點數，拆分為「永不消耗的探索等級」與「可流通的捷運點餘額」，創造出具有高度黏著度的商業與社會雙重動能。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {/* Tier 1: Exploration Level */}
            <div className="bg-white border-2 border-metro rounded-[38px] p-10 ui-shadow relative overflow-hidden group">
              <div className="absolute top-[-20%] right-[-10%] w-48 h-48 bg-blue-50 rounded-full opacity-50 blur-2xl pointer-events-none transition-transform group-hover:scale-150 duration-700"></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 bg-metro text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-metro/20">
                  <Compass className="w-7 h-7" />
                </div>
                <div className="mb-4">
                  <span className="inline-block px-2 py-1 bg-blue-50 text-metro text-[10px] font-black rounded uppercase mb-3">累積型 · 永不消耗</span>
                  <h3 className="text-2xl font-display font-black text-slate-900 mb-4">探索等級 (Level)</h3>
                </div>
                <p className="text-slate-500 font-medium leading-relaxed mb-8 flex-1">
                  由「搭乘次數、探索未去過站點數、停留軌跡」決定。等級是跨越邊界的深度紀錄，永不因消費點數而降級。這提供了跨出舒適圈的長期成就感與專屬特權。
                </p>
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <div className="flex items-center gap-2 mb-3">
                    <Target className="w-4 h-4 text-metro" />
                    <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">國際借鏡：蒙特婁 STM Merci</span>
                  </div>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">
                    透過分層誘因推動行為改變。高等級用戶可解鎖在地商圈的「獨家體驗」（如：限量排隊美食優先權），成功為在地商家精準導流，受測用戶搭乘頻率更提升 25%。
                  </p>
                </div>
              </div>
            </div>

            {/* Tier 2: Points Balance */}
            <div className="bg-white border border-slate-200 rounded-[38px] p-10 shadow-lg relative overflow-hidden group hover:border-metro/40 transition-colors">
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 bg-white border border-slate-200 text-slate-400 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:text-metro group-hover:border-metro/30 transition-colors">
                  <Zap className="w-7 h-7" />
                </div>
                <div className="mb-4">
                  <span className="inline-block px-2 py-1 bg-slate-100 text-slate-500 text-[10px] font-black rounded uppercase mb-3 group-hover:bg-blue-50 group-hover:text-metro transition-colors">消耗型 · 可流通</span>
                  <h3 className="text-2xl font-display font-black text-slate-900 mb-4">點數餘額 (Points)</h3>
                </div>
                <p className="text-slate-500 font-medium leading-relaxed mb-8 flex-1">
                  在保留原有「超商兌換」機制的基礎上，開放將剩餘點數捐贈給台北在地的公益組織。讓每一次通勤產生的點數，不僅利己，也能發揮社會與地方共好的影響力。
                </p>
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 group-hover:bg-white group-hover:border-blue-100 transition-colors">
                  <div className="flex items-center gap-2 mb-3">
                    <Globe className="w-4 h-4 text-metro" />
                    <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">國際借鏡：北愛爾蘭 Civic Dollar</span>
                  </div>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">
                    公部門發行社會貨幣鼓勵民眾出門走入城市各角落獲取點數，並將點數捐獻給社區組織。計畫不僅有效降低逾 700 位長者的孤寂感，更改變了「點數」的公民價值。
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-slate-200 rounded-[38px] p-10 md:p-14 lg:text-left gap-10 shadow-xl relative overflow-hidden group">
             {/* decorative background element */}
             <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent opacity-60 pointer-events-none transition-opacity group-hover:opacity-100 duration-500"></div>

             <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mb-10 relative z-10">
               <div className="max-w-2xl text-center lg:text-left">
                 <h3 className="text-2xl md:text-3xl font-display font-black text-slate-900 mb-4">
                   為什麼選擇雙軌並行？
                 </h3>
                 <p className="text-slate-600 font-medium leading-relaxed">
                   當同一套點數同時作為「累積型的等級依據」和「消耗型的兌換貨幣」時，兩者的機制在設計上是衝突的。將成就感（等級）與交易價值（點數）剝離開來後，使用者能放心且更頻繁地將點數捐出或消耗在地方商家，而無須擔心失去得來不易的會員福利。這個機制的轉化，是打通線上與線下、商業與公益的核心驅動力。
                 </p>
               </div>
               
               <div className="shrink-0 w-full lg:w-auto mt-4 lg:mt-0">
                 <div className="flex bg-slate-50 p-2 border border-slate-100 rounded-2xl shadow-inner max-w-[300px] mx-auto lg:mx-0">
                   <div className="px-6 py-4 flex flex-col items-center flex-1">
                     <div className="text-3xl font-display font-black text-slate-800 mb-1">等級</div>
                     <div className="text-[10px] text-metro font-bold px-2 py-1 bg-blue-100/50 rounded uppercase tracking-wider">留存成就</div>
                   </div>
                   <div className="w-[1px] bg-slate-200 mx-1"></div>
                   <div className="px-6 py-4 flex flex-col items-center flex-1">
                     <div className="text-3xl font-display font-black text-slate-800 mb-1">點數</div>
                     <div className="text-[10px] text-rose-500 font-bold px-2 py-1 bg-rose-50 rounded uppercase tracking-wider">帶動流通</div>
                   </div>
                 </div>
               </div>
             </div>

             <div className="grid md:grid-cols-2 gap-6 relative z-10">
               <div className="bg-slate-50/80 rounded-2xl p-6 border border-slate-100">
                 <div className="flex justify-between items-start mb-3">
                   <div className="flex items-center gap-2">
                     <div className="w-2 h-2 rounded-full bg-metro"></div>
                     <span className="text-sm font-bold text-slate-900">行為經濟學：損失規避效應</span>
                   </div>
                 </div>
                 <p className="text-sm text-slate-600 font-medium leading-relaxed">
                   根據 Kahneman 與 Tversky (1979) 的展望理論 (Prospect Theory)，人們對「損失」的敏感度遠大於同等程度的「獲得」。若花費點數等同於「降級」，使用者將傾向囤積點數以維持階級地位，導致點數流動性僵化。雙軌制能有效解除此心理負擔。
                 </p>
               </div>

               <div className="bg-slate-50/80 rounded-2xl p-6 border border-slate-100">
                 <div className="flex justify-between items-start mb-3">
                   <div className="flex items-center gap-2">
                     <div className="w-2 h-2 rounded-full bg-rose-400"></div>
                     <span className="text-sm font-bold text-slate-900">商業驗證：雙軌行銷案例</span>
                   </div>
                 </div>
                 <p className="text-sm text-slate-600 font-medium leading-relaxed">
                   市場多項成功案例 (如 Starbucks Rewards 星禮程) 皆於後期將「累積星星晉升會籍」與「消耗星星兌換商品」拆分。確保高忠誠會員兌換獎勵時不會失去權益，讓點數能「放心地花、慷慨地捐」，進而促進線下消費與生態圈活絡。
                 </p>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Interactive UI/UX Prototype Section */}
      <section id="ui-ux" className="py-24 px-6 relative bg-white border-t border-slate-100 overflow-hidden flex items-center justify-center">
        {/* Abstract Shapes */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-100 rounded-full blur-[100px] opacity-60 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-black mb-6 text-slate-900">原型互動展示</h2>
            <div className="w-16 h-1 bg-metro mx-auto mb-6"></div>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">
              台北在找你：用三個畫面，引導使用者完成「觸發、探索、積累與流通」的完整旅程。
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Features Menu */}
            <div className="order-2 lg:order-1 flex flex-col gap-6">
              <button 
                onClick={() => setActiveTab('map')}
                className={`text-left p-8 rounded-[38px] border transition-all duration-300 ${activeTab === 'map' ? 'bg-white border-metro ui-shadow' : 'bg-transparent border-slate-200 hover:bg-white hover:border-slate-300'}`}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${activeTab === 'map' ? 'bg-metro text-white' : 'bg-slate-100 text-slate-400'}`}>
                    <Compass className="w-6 h-6" />
                  </div>
                  <h3 className={`text-xl font-display font-black ${activeTab === 'map' ? 'text-slate-900' : 'text-slate-500'}`}>1. 探索地圖：看見你的邊界</h3>
                </div>
                <p className="text-slate-500 ml-16 font-medium">根據搭乘紀錄，讓去過的站點亮起，沒去過的地方保持灰色。讓使用者第一次直觀看見自己的「生活三角形」。</p>
              </button>

              <button 
                onClick={() => setActiveTab('notify')}
                className={`text-left p-8 rounded-[38px] border transition-all duration-300 ${activeTab === 'notify' ? 'bg-white border-metro ui-shadow' : 'bg-transparent border-slate-200 hover:bg-white hover:border-slate-300'}`}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${activeTab === 'notify' ? 'bg-metro text-white' : 'bg-slate-100 text-slate-400'}`}>
                    <Bell className="w-6 h-6" />
                  </div>
                  <h3 className={`text-xl font-display font-black ${activeTab === 'notify' ? 'text-slate-900' : 'text-slate-500'}`}>2. 台北怎麼說話：三層推播</h3>
                </div>
                <p className="text-slate-500 ml-16 font-medium">結合 GPS 與悠遊卡雙重觸發。依據地點關聯性分為：邊界內「你知道嗎」、邊界上「你去過嗎」、邊界外「召喚」。</p>
              </button>

              <button 
                onClick={() => setActiveTab('profile')}
                className={`text-left p-8 rounded-[38px] border transition-all duration-300 ${activeTab === 'profile' ? 'bg-white border-metro ui-shadow' : 'bg-transparent border-slate-200 hover:bg-white hover:border-slate-300'}`}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${activeTab === 'profile' ? 'bg-metro text-white' : 'bg-slate-100 text-slate-400'}`}>
                    <User className="w-6 h-6" />
                  </div>
                  <h3 className={`text-xl font-display font-black ${activeTab === 'profile' ? 'text-slate-900' : 'text-slate-500'}`}>3. 雙層捷運點：積累與流通</h3>
                </div>
                <p className="text-slate-500 ml-16 font-medium">拆分「永不消耗的探索等級」與「可消費的捷運點餘額」。並提供將點數捐贈給在地公益組織的社會賦能設計。</p>
              </button>
            </div>

            {/* Phone Mockup (UI/UX Design Match) */}
            <div className="order-1 lg:order-2 flex justify-center relative">
              <div className="relative w-[320px] h-[640px] bg-slate-900 rounded-[48px] p-3 shadow-2xl z-10 border-[6px] border-slate-800">
                <div className="w-full h-full bg-slate-50 rounded-[38px] overflow-hidden flex flex-col relative">
                  
                  <AnimatePresence mode="wait">
                    {/* Screen 1: Map */}
                    {activeTab === 'map' && (
                      <motion.div 
                        key="map"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="absolute inset-0 bg-white flex flex-col"
                      >
                        <div className="pt-12 px-6 pb-4 bg-white z-10">
                          <h4 className="text-slate-900 font-display font-black text-2xl mb-1">探索地圖</h4>
                          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">5 站已探索 · 103 站未解鎖</p>
                        </div>
                        
                        <div className="flex-1 relative bg-slate-50 flex justify-center items-center overflow-hidden">
                          <svg viewBox="0 0 200 300" className="absolute inset-0 w-[150%] h-[150%] max-w-none left-[-25%] top-[-25%]">
                            {/* Map Lines */}
                            <path d="M100,50 L100,250 M100,150 L200,150" stroke="#e2e8f0" strokeWidth="4" strokeLinecap="round"/>
                            {/* The Triangle (Explored) */}
                            <polygon points="100,50 200,150 100,150" fill="rgba(0, 112, 189, 0.05)" stroke="#0070BD" strokeWidth="2" strokeDasharray="4 4" />
                            {/* Explored Nodes */}
                            <circle cx="100" cy="50" r="6" className="fill-metro shadow-[0_0_10px_rgba(0,112,189,0.5)]" />
                            <circle cx="200" cy="150" r="6" className="fill-metro shadow-[0_0_10px_rgba(0,112,189,0.5)]" />
                            <circle cx="100" cy="150" r="6" className="fill-metro shadow-[0_0_10px_rgba(0,112,189,0.5)]" />
                            <text x="105" y="45" className="fill-metro text-[8px] font-bold">劍潭</text>
                            <text x="105" y="145" className="fill-metro text-[8px] font-bold">台北車站</text>
                            <text x="185" y="145" className="fill-metro text-[8px] font-bold">市政府</text>
                            
                            {/* Unexplored Nodes */}
                            <circle cx="100" cy="200" r="4" className="fill-slate-300" />
                            <circle cx="100" cy="250" r="4" className="fill-slate-300" />
                            <circle cx="150" cy="150" r="4" className="fill-metro opacity-50" />
                            <text x="105" y="250" className="fill-slate-400 text-[8px] font-bold">新店</text>
                          </svg>
                        </div>
                        
                        <div className="p-6 bg-white z-10 border-t border-slate-100 relative">
                          <button className="w-full py-4 bg-metro rounded-2xl text-white text-sm font-bold shadow-lg shadow-metro/20 flex items-center justify-center gap-2">
                            <Navigation className="w-4 h-4" /> 開始今天的探索
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {/* Screen 2: Notification */}
                    {activeTab === 'notify' && (
                      <motion.div 
                        key="notify"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="absolute inset-0 bg-slate-50 flex flex-col p-6 pt-16"
                      >
                        <h4 className="text-slate-900 font-display font-black text-2xl mb-6">推播通知</h4>
                        
                        {/* Lock screen style notification */}
                        <div className="bg-white border border-slate-100 p-5 rounded-[24px] ui-shadow mb-4 relative overflow-hidden">
                          <div className="absolute top-0 right-0 p-2 bg-metro text-white text-[8px] font-black rounded-bl-xl uppercase">NEW</div>
                          <div className="flex items-center gap-3 mb-2 mt-1">
                            <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-metro">
                              <Train className="w-4 h-4" />
                            </div>
                            <span className="text-[10px] font-bold text-slate-400">台北在找你 · 剛剛</span>
                          </div>
                          <h5 className="font-bold text-slate-900 text-sm mb-2">龍山寺這週有很多事，你去過那邊嗎？</h5>
                          <p className="text-[11px] text-slate-500 mb-4 font-medium leading-relaxed">
                            那裡今天有個特別的市集，或許可以帶個朋友去走走。台北人等級享「買一送一」限定優惠。
                          </p>
                          <div className="flex gap-2">
                            <button className="flex-1 py-2 bg-metro text-white rounded-xl text-xs font-bold shadow-md shadow-metro/20">
                              帶人出發
                            </button>
                            <button className="flex-1 py-2 bg-slate-100 text-slate-500 rounded-xl text-xs font-bold">
                              下次再說
                            </button>
                          </div>
                        </div>

                        {/* Another notification type */}
                        <div className="bg-white border border-slate-100 p-4 rounded-[20px] shadow-sm opacity-60">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
                              <Bell className="w-3 h-3" />
                            </div>
                            <span className="text-[10px] font-bold text-slate-400">昨天</span>
                          </div>
                          <h5 className="font-bold text-slate-900 text-xs">新店有一條巷子，都沒人走進去</h5>
                        </div>
                      </motion.div>
                    )}

                    {/* Screen 3: Profile */}
                    {activeTab === 'profile' && (
                      <motion.div 
                        key="profile"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="absolute inset-0 bg-white flex flex-col p-6 pt-12"
                      >
                        <div className="flex items-center justify-between mb-8">
                          <h4 className="text-slate-900 font-display font-black text-2xl">我的帳戶</h4>
                          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                            <User className="w-5 h-5 text-metro" />
                          </div>
                        </div>

                        {/* Rank Card */}
                        <div className="bg-white border-2 border-metro rounded-3xl p-6 mb-4 relative overflow-hidden ui-shadow">
                           <div className="absolute top-[-20%] right-[-10%] w-32 h-32 bg-blue-50 rounded-full opacity-50 blur-xl"></div>
                          <div className="inline-block px-2 py-1 bg-metro text-white text-[10px] font-black rounded uppercase mb-2">探索等級 (永不消耗)</div>
                          <div className="text-3xl font-display font-black text-slate-900 tracking-wider mb-4">台北人</div>
                          
                          <div className="flex justify-between text-[10px] text-slate-400 font-bold mb-1">
                            <span>當前進度</span>
                            <span>24/30</span>
                          </div>
                          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div className="w-[80%] h-full bg-metro"></div>
                          </div>
                        </div>

                        {/* Points Card */}
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-4 flex flex-col justify-center items-center relative overflow-hidden">
                            <div className="text-[10px] text-slate-500 font-bold mb-1">捷運點餘額</div>
                            <div className="text-2xl font-display font-black text-metro">450</div>
                          </div>
                          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-4 flex flex-col justify-center items-center">
                            <div className="text-[10px] text-slate-500 font-bold mb-1">解鎖站點</div>
                            <div className="text-2xl font-display font-black text-slate-900">24</div>
                          </div>
                        </div>

                        <h5 className="text-xs font-bold text-slate-900 mb-2">公益捐贈</h5>
                        <button className="w-full bg-white border border-slate-200 rounded-[20px] p-3 flex items-center justify-between hover:bg-slate-50 transition-colors shadow-sm">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-xl bg-rose-50 flex items-center justify-center">
                              <Heart className="w-4 h-4 text-rose-500" />
                            </div>
                            <div className="text-left">
                              <div className="text-sm font-bold text-slate-900">萬華芒草心協會</div>
                              <div className="text-[10px] text-slate-400 font-medium">捐出點數，等級保留</div>
                            </div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-slate-300" />
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Bottom Nav Mock */}
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-white border-t border-slate-100 flex items-center justify-around px-6 z-20 pb-2">
                    <button onClick={() => setActiveTab('map')} className={`flex flex-col items-center gap-1 ${activeTab === 'map' ? 'text-metro' : 'text-slate-400'}`}>
                      <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-colors ${activeTab === 'map' ? 'bg-blue-50' : ''}`}><MapPin className="w-5 h-5" /></div>
                    </button>
                    <button onClick={() => setActiveTab('notify')} className={`flex flex-col items-center gap-1 ${activeTab === 'notify' ? 'text-metro' : 'text-slate-400'}`}>
                      <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-colors ${activeTab === 'notify' ? 'bg-blue-50' : ''}`}><Bell className="w-5 h-5" /></div>
                    </button>
                    <button onClick={() => setActiveTab('profile')} className={`flex flex-col items-center gap-1 ${activeTab === 'profile' ? 'text-metro' : 'text-slate-400'}`}>
                      <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-colors ${activeTab === 'profile' ? 'bg-blue-50' : ''}`}><User className="w-5 h-5" /></div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating Meta Info matching Aesthetic */}
              <div className="absolute bottom-16 -right-10 w-48 bg-white p-6 rounded-2xl ui-shadow z-20 hidden lg:block">
                <div className="text-[10px] uppercase font-bold text-metro tracking-widest mb-2">Prototype v1.0</div>
                <p className="text-xs leading-relaxed text-slate-600 font-medium">
                  展示探索地圖與雙層點數機制，提升旅客自主導流意願。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-24 px-6 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:flex justify-between items-end">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-display font-black mb-6 text-slate-900">邀請台北人<br />跨越三種邊界</h2>
              <div className="w-16 h-1 bg-metro mb-6"></div>
              <p className="text-lg text-slate-500 font-medium">
                台北在找你針對每一種邊界，設計了一個讓他有機會跨越的機制。<br className="hidden md:block"/>
                用這一個多小時，讓身體在陌生的空間裡安定下來。
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Limit 1 */}
            <div className="group relative overflow-hidden rounded-[38px] bg-slate-50 border border-slate-100 hover:border-metro hover:ui-shadow transition-all">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Map className="w-32 h-32 text-metro" />
              </div>
              <div className="p-10 relative z-10 h-full flex flex-col">
                <div className="inline-block px-3 py-1 bg-blue-100 text-metro text-[10px] font-black tracking-widest rounded-full mb-6 uppercase w-max">
                  BOUNDARY 01
                </div>
                <h3 className="text-2xl font-display font-black text-slate-900 mb-4">地理邊界</h3>
                <p className="text-slate-500 text-sm mb-8 leading-relaxed font-medium">
                  大片的灰色是他的三角形外面的台北。台北推播告訴他邊界外有什麼值得去，讓「一無所知」這個最大阻力消失。
                </p>
                <div className="mt-auto">
                  <div className="w-full h-[1px] bg-slate-200 mb-4"></div>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm text-slate-600 font-bold">
                      <div className="w-1.5 h-1.5 rounded-full bg-metro"></div>
                      <span>搭乘紀錄轉化探索地圖</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm text-slate-600 font-bold">
                      <div className="w-1.5 h-1.5 rounded-full bg-metro"></div>
                      <span>主動點亮陌生站點</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Limit 2 */}
            <div className="group relative overflow-hidden rounded-[38px] bg-slate-50 border border-slate-100 hover:border-metro hover:ui-shadow transition-all">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Users className="w-32 h-32 text-metro" />
              </div>
              <div className="p-10 relative z-10 h-full flex flex-col">
                <div className="inline-block px-3 py-1 bg-blue-100 text-metro text-[10px] font-black tracking-widest rounded-full mb-6 uppercase w-max">
                  BOUNDARY 02
                </div>
                <h3 className="text-2xl font-display font-black text-slate-900 mb-4">人際邊界</h3>
                <p className="text-slate-500 text-sm mb-8 leading-relaxed font-medium">
                  把社交連結設計進探索的誘因系統裡。「台北人」等級專屬買一送一，讓他主動邀請朋友一起解鎖陌生角落。
                </p>
                <div className="mt-auto">
                  <div className="w-full h-[1px] bg-slate-200 mb-4"></div>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm text-slate-600 font-bold">
                      <div className="w-1.5 h-1.5 rounded-full bg-metro"></div>
                      <span>社交推力破除獨自出門阻力</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm text-slate-600 font-bold">
                      <div className="w-1.5 h-1.5 rounded-full bg-metro"></div>
                      <span>朋友免 App 即可同行認證</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Limit 3 */}
            <div className="group relative overflow-hidden rounded-[38px] bg-slate-50 border border-slate-100 hover:border-metro hover:ui-shadow transition-all">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Heart className="w-32 h-32 text-metro" />
              </div>
              <div className="p-10 relative z-10 h-full flex flex-col">
                <div className="inline-block px-3 py-1 bg-blue-100 text-metro text-[10px] font-black tracking-widest rounded-full mb-6 uppercase w-max">
                  BOUNDARY 03
                </div>
                <h3 className="text-2xl font-display font-black text-slate-900 mb-4">心理邊界</h3>
                <p className="text-slate-500 text-sm mb-8 leading-relaxed font-medium">
                  設計「停留1小時」機制。不只是到訪，而是身體真的在那裡安定下來，並留下匿名訊息給下一位同路人。
                </p>
                <div className="mt-auto">
                  <div className="w-full h-[1px] bg-slate-200 mb-4"></div>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm text-slate-600 font-bold">
                      <div className="w-1.5 h-1.5 rounded-full bg-metro"></div>
                      <span>GPS 停留驗證與商家優惠</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm text-slate-600 font-bold">
                      <div className="w-1.5 h-1.5 rounded-full bg-metro"></div>
                      <span>匿名留言創造跨時空連結</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Case & Analytics */}
      <section id="business" className="py-24 px-6 relative bg-white border-t border-slate-100">
        <div className="absolute left-0 top-0 h-full w-20 border-r border-slate-100 hidden lg:flex flex-col items-center py-10 z-20 bg-white">
          <div className="w-10 h-10 bg-metro rounded-lg mb-20 flex items-center justify-center text-white font-bold">F</div>
          <div className="text-vertical rotate-180 text-xs font-bold tracking-widest text-slate-400 uppercase">Proposal 2026</div>
          <div className="mt-auto flex flex-col gap-6">
            <div className="w-1 h-1 rounded-full bg-metro"></div>
            <div className="w-1 h-1 rounded-full bg-slate-200"></div>
            <div className="w-1 h-1 rounded-full bg-slate-200"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto lg:pl-24 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-black mb-6 text-slate-900 leading-tight">商業價值與<br/><span className="text-metro">社會效益</span></h2>
            <div className="w-16 h-1 bg-metro mb-6"></div>
            <p className="text-lg text-slate-500 mb-12 leading-relaxed font-medium">
              優惠成本由商家承擔，北捷僅負擔系統建置與營運。運用「Too Good To Go」機制思維：將跨越邊界的「商業行為」自然轉化為「社會效果」。
            </p>
            
            <div className="space-y-6">
              <div className="p-6 rounded-3xl border border-slate-100 bg-white ui-shadow flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                  <BarChart3 className="w-6 h-6 text-metro" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">每月新增 150 萬台幣票務收入</h4>
                  <p className="text-sm text-slate-500 font-medium">基於 20,000 名活躍用戶每月增加 2.5 次搭乘的保守估算，有效將「縮減常客優惠」轉向積極的營收框架。</p>
                </div>
              </div>
              <div className="p-6 rounded-3xl border border-slate-100 bg-white ui-shadow flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                  <Globe className="w-6 h-6 text-metro" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">活絡邊緣站點與在地商圈</h4>
                  <p className="text-sm text-slate-500 font-medium">為文化型與微型商家引入人流，精準觸及對當地角落有好奇心的探索者，形成互利生態系。</p>
                </div>
              </div>
              <div className="p-6 rounded-3xl border border-slate-100 bg-white ui-shadow flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                  <Target className="w-6 h-6 text-metro" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">具實證基礎的國際對標</h4>
                  <p className="text-sm text-slate-500 font-medium">邏輯驗證於蒙特婁 STM Merci (提升25%搭乘頻率) 與 貝爾法斯特 (有效降低700位長者孤獨感)。</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-slate-50 border border-slate-100 p-8 rounded-[38px] text-center">
              <div className="text-5xl font-display font-black text-metro mb-2">2.5<span className="text-2xl ml-1 text-slate-400">次</span></div>
              <div className="w-8 h-1 bg-metro mx-auto my-3"></div>
              <div className="text-sm text-slate-900 font-bold">活躍用戶月均增乘</div>
              <div className="text-xs text-slate-400 mt-2 font-medium">參考 STM Merci</div>
            </div>
            <div className="bg-slate-50 border border-slate-100 p-8 rounded-[38px] text-center">
              <div className="text-5xl font-display font-black text-metro mb-2">57<span className="text-2xl ml-1 text-slate-400">%</span></div>
              <div className="w-8 h-1 bg-metro mx-auto my-3"></div>
              <div className="text-sm text-slate-900 font-bold">用戶探索全新地點</div>
              <div className="text-xs text-slate-400 mt-2 font-medium">跨越地理邊界</div>
            </div>
            <div className="bg-slate-50 border border-slate-100 p-8 rounded-[38px] text-center">
              <div className="text-5xl font-display font-black text-metro mb-2">47<span className="text-2xl ml-1 text-slate-400">%</span></div>
              <div className="w-8 h-1 bg-metro mx-auto my-3"></div>
              <div className="text-sm text-slate-900 font-bold">因機制結伴同行</div>
              <div className="text-xs text-slate-400 mt-2 font-medium">跨越人際邊界</div>
            </div>
            <div className="bg-slate-50 border border-slate-100 p-8 rounded-[38px] text-center flex flex-col justify-center">
              <div className="text-4xl font-display font-black text-metro mb-2">1,300<span className="text-2xl ml-1 text-slate-400">+</span></div>
              <div className="w-8 h-1 bg-metro mx-auto my-3"></div>
              <div className="text-sm text-slate-900 font-bold">預期商家進駐</div>
              <div className="text-xs text-slate-400 mt-2 font-medium">首六個月目標</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Feasibility */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-200 text-center relative overflow-hidden">
        {/* Abstract Deco */}
        <div className="absolute left-[-10%] bottom-[-50%] w-[400px] h-[400px] bg-blue-100 rounded-full blur-[80px] opacity-50 z-0"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-block px-3 py-1 bg-white border border-slate-200 text-metro text-[10px] font-black tracking-widest rounded-full mb-6 uppercase shadow-sm">
            Architecture
          </div>
          <h2 className="text-3xl font-display font-black mb-10 text-slate-900">技術可行性：無痛降落現有架構</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-6 py-3 rounded-full border border-slate-200 bg-white text-sm font-bold text-slate-600 ui-shadow">
              <span className="text-metro mr-2 font-black">/</span>悠遊卡訊號串接
            </span>
            <span className="px-6 py-3 rounded-full border border-slate-200 bg-white text-sm font-bold text-slate-600 ui-shadow">
              <span className="text-metro mr-2 font-black">/</span>雙重/單一條件觸發引擎
            </span>
            <span className="px-6 py-3 rounded-full border border-slate-200 bg-white text-sm font-bold text-slate-600 ui-shadow">
              <span className="text-metro mr-2 font-black">/</span>預算式非同步渲染
            </span>
            <span className="px-6 py-3 rounded-full border border-slate-200 bg-white text-sm font-bold text-slate-600 ui-shadow">
              <span className="text-metro mr-2 font-black">/</span>商戶免升級直接掃碼
            </span>
          </div>
        </div>
      </section>
          {/* Footer / CTA */}
      <footer className="py-24 px-6 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-display font-black mb-8 tracking-tighter">台北在找你</h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-medium">
            那 1 小時裡可能發生的事，<br/>比留在自己的三角形裡要多得多。
          </p>
          <a href="#ui-ux" className="inline-block bg-metro text-white px-10 py-5 rounded-full font-bold tracking-widest uppercase hover:bg-blue-700 transition-colors shadow-2xl shadow-metro/30">
            開始探索邊界
          </a>
          
          <div className="mt-24 pt-8 flex flex-col md:flex-row justify-between items-center border-t border-slate-800">
             <div className="flex gap-10 mb-4 md:mb-0 flex-wrap justify-center">
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Phase 01: Ideation</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Phase 02: Prototype</div>
            </div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-metro">Design & Developed for Taipei</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
