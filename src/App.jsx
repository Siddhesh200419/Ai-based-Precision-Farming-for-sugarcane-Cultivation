import { useState, useEffect } from "react";
import mpkvLogo from "./assets/mpkv.png";
// import newimage from "./assets/images.png";
// import sid from "./assets/newimage.jpeg";
import noob from "./assets/noob.png";
function App() {
  const [activeTab, setActiveTab] = useState("automation");
  const [expandedAccordion, setExpandedAccordion] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight * 0.8;
        if (isInView) {
          el.classList.add("animated");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleAccordion = (index) => {
    setExpandedAccordion(expandedAccordion === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-5deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.05; transform: scale(1); }
          50% { opacity: 0.15; transform: scale(1.1); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slide-up 1s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        
        .animate-on-scroll {
          transition: opacity 0.7s, transform 0.7s;
        }
        
        .animate-on-scroll.animated {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .bg-gradient-animated {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }
      `}</style>

      {/* Header */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-6xl z-50 flex items-center justify-center gap-4">
        {/* Left Logo - Outside navbar */}
        <div className="flex items-center ">
          <img
            src={noob}
            alt="AVCOE Logo"
            className="h-20 w-25 object-contain rounded-full bg-white p-1 cursor-pointer"
          />
        </div>

        {/* Navbar */}
        <header
          className={`flex-1 backdrop-blur-xl rounded-3xl border transition-all duration-500 ${
            scrolled
              ? "bg-white/95 shadow-2xl border-gray-200"
              : "bg-white/80 shadow-lg border-gray-100"
          }`}
        >
          <div className="h-16 flex items-center justify-between px-6 lg:px-8">
            <div className="text-xl lg:text-2xl font-bold text-green-800">
            CaneIQ
            </div>
            <nav className="hidden md:flex gap-6 lg:gap-8 items-center">
              <a
                href="#product"
                className="text-base font-medium text-green-800 hover:text-green-600 transition-colors"
              >
                Product
              </a>
              <a
                href="#features"
                className="text-base font-medium text-green-800 hover:text-green-600 transition-colors"
              >
                Features
              </a>
              <a
                href="#data"
                className="text-base font-medium text-green-800 hover:text-green-600 transition-colors"
              >
                Data
              </a>
              <a
                href="#about"
                className="text-base font-medium text-green-800 hover:text-green-600 transition-colors"
              >
                About
              </a>
            </nav>
            <div className="flex items-center gap-3 lg:gap-4">
              <button className="hidden sm:block bg-white text-green-800 border border-gray-300 px-5 py-2 rounded-lg font-medium text-sm lg:text-base hover:border-gray-400 hover:bg-gray-50 transition-all">
                Sign in
              </button>
              <button className="bg-green-800 text-white px-4 sm:px-5 py-2 rounded-lg font-medium text-sm lg:text-base hover:bg-green-700 transition-all">
                <span className="hidden sm:inline">Request a Demo</span>
                <span className="sm:hidden">Demo</span>
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-green-800 p-2"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {mobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-100 px-6 py-4 space-y-3">
              <a
                href="#features"
                className="block text-base font-medium text-green-800 hover:text-green-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Product
              </a>
              <a
                href="#solutions"
                className="block text-base font-medium text-green-800 hover:text-green-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#about"
                className="block text-base font-medium text-green-800 hover:text-green-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="block text-base font-medium text-green-800 hover:text-green-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Resources
              </a>
            </div>
          )}
        </header>

        {/* Right Logo - Outside navbar */}
        <div className="flex items-center">
          <img
            src={mpkvLogo}
            alt="MPKV Logo"
            className="h-20 w-auto object-contain rounded-full cursor-pointer"
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-green-800 text-white pt-24 pb-16 lg:pt-28 lg:pb-20 px-8 lg:px-16 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-400 opacity-10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-400 opacity-10 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-green-400 opacity-5 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="opacity-0 animate-fade-in">
            <div className="inline-block bg-green-400/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4 border border-green-400/30">
              🚀 Revolutionizing Agriculture with AI
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 max-w-3xl opacity-0 animate-slide-up">
              AI-Powered Precision Farming For Sugarcane Cultivation
            </h1>
            <p className="text-base lg:text-lg opacity-90 leading-relaxed mb-8 max-w-2xl opacity-0 animate-slide-up animation-delay-200">
              A joint project by Amrutvahini College of Engineering and Mahatma
              Phule Krishi Vidyapeeth to enhance sugarcane cultivation through
              data-driven AI technology.
            </p>
            <div className="flex flex-wrap gap-4 opacity-0 animate-slide-up animation-delay-400">
              <button className="group bg-green-400 text-green-900 px-6 py-3 rounded-xl font-semibold text-base hover:bg-green-300 transition-all hover:scale-105 hover:shadow-xl flex items-center gap-2">
                Get Started
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
              <button className="group bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-6 py-3 rounded-xl font-semibold text-base hover:bg-white/20 transition-all flex items-center gap-2">
                <span className="text-xl">▶</span>
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-white py-16 lg:py-24 px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 text-center mb-16 animate-on-scroll opacity-0 transform translate-y-8">
            Impact by the Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
            {[
              { value: "95%", label: "Accuracy Rate" },
              { value: "50K+", label: "Acres Monitored" },
              { value: "30%", label: "Yield Increase" },
              { value: "24/7", label: "Monitoring" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="text-center animate-on-scroll opacity-0 transform translate-y-8 hover:scale-110 transition-transform duration-300"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="text-5xl lg:text-6xl font-bold text-green-800 mb-2 hover:text-green-600 transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-lg text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-white py-16 lg:py-24 px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-green-800 mb-12 animate-on-scroll opacity-0 transform translate-y-8">
            Feature Tabs
          </h2>
          <div className="flex flex-wrap gap-4 lg:gap-6 mb-8">
            {["automation", "precision", "scalability", "sustainability"].map(
              (tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-xl font-semibold text-base transition-all ${
                    activeTab === tab
                      ? "bg-green-800 text-white shadow-lg scale-105"
                      : "bg-transparent text-green-800 border-2 border-green-200 hover:bg-green-50 hover:border-green-400"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              )
            )}
          </div>
          <div className="bg-gray-50 p-8 rounded-2xl shadow-inner">
            <p className="text-lg text-gray-700 leading-relaxed">
              {activeTab === "automation" &&
                "Automated drone flights with intelligent scheduling and autonomous navigation systems."}
              {activeTab === "precision" &&
                "Precision agriculture through advanced sensors and AI-powered crop analysis."}
              {activeTab === "scalability" &&
                "Scale your operations seamlessly from small farms to large agricultural enterprises."}
              {activeTab === "sustainability" &&
                "Sustainable farming practices that reduce waste and optimize resource usage."}
            </p>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="bg-gray-50 py-16 lg:py-24 px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-green-800 mb-12 animate-on-scroll opacity-0 transform translate-y-8">
            Feature Cards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "Real-Time Monitoring",
                desc: "Live data streaming from your fields with instant alerts and notifications.",
                emoji: "📡",
              },
              {
                title: "AI-Powered Analysis",
                desc: "Advanced machine learning algorithms analyze crop health and predict yields.",
                emoji: "🤖",
              },
              {
                title: "Automated Reporting",
                desc: "Generate comprehensive reports automatically with actionable insights.",
                emoji: "📊",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="group bg-white p-6 lg:p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-on-scroll opacity-0 transform translate-y-8"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="w-full h-48 bg-gradient-to-br from-green-100 to-green-50 rounded-xl mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                    {card.emoji}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-2 group-hover:text-green-600 transition-colors">
                  {card.title}
                </h3>
                <p className="text-base text-gray-600">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-white py-16 lg:py-24 px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-green-800 mb-12 animate-on-scroll opacity-0 transform translate-y-8">
            Case Studies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "Vineyard Optimization",
                desc: "Increased yield by 35%",
                gradient: "from-green-800 via-green-700 to-green-500",
              },
              {
                title: "Crop Health Recovery",
                desc: "Detected issues early",
                gradient: "from-green-900 via-green-800 to-green-600",
              },
              {
                title: "Resource Efficiency",
                desc: "Reduced water usage by 40%",
                gradient: "from-green-600 via-green-700 to-green-800",
              },
            ].map((study, idx) => (
              <div
                key={idx}
                className="relative aspect-square rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-500 cursor-pointer animate-on-scroll opacity-0 transform translate-y-8"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${study.gradient} group-hover:scale-110 transition-transform duration-700`}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform group-hover:translate-y-0 translate-y-2 transition-transform duration-500">
                  <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-green-300 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-base text-white opacity-90">
                    {study.desc}
                  </p>
                  <div className="mt-3 flex items-center text-green-300 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Read More{" "}
                    <span className="ml-2 group-hover:translate-x-2 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16 lg:py-24 px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-green-800 mb-12 animate-on-scroll opacity-0 transform translate-y-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {[
              {
                q: "How accurate is the drone monitoring system?",
                a: "Our AI-powered drones achieve 95% accuracy in crop health detection and yield prediction through advanced sensor technology and machine learning algorithms.",
              },
              {
                q: "What types of farms can use AgriDronex?",
                a: "AgriDronex is suitable for all types of agricultural operations, from small family farms to large commercial enterprises, including vineyards, orchards, and row crops.",
              },
              {
                q: "How often do drones need to fly?",
                a: "Flight frequency depends on your needs. Most farms schedule weekly flights during growing season, with daily flights available for critical monitoring periods.",
              },
              {
                q: "What data do I receive from the system?",
                a: "You receive comprehensive reports including crop health maps, growth analysis, pest detection alerts, irrigation recommendations, and yield predictions.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`animate-on-scroll opacity-0 transform translate-y-8 bg-white rounded-xl border transition-all duration-500 ${
                  expandedAccordion === idx
                    ? "border-2 border-green-400 bg-green-50 shadow-lg"
                    : "border border-gray-200 hover:border-green-300 hover:shadow-md"
                }`}
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left group"
                >
                  <span className="text-lg font-semibold text-green-800 group-hover:text-green-600 transition-colors">
                    {item.q}
                  </span>
                  <span
                    className={`text-green-800 text-xl transition-transform duration-300 ${
                      expandedAccordion === idx ? "rotate-180" : ""
                    }`}
                  >
                    ↓
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    expandedAccordion === idx
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-5">
                    <p className="text-base text-gray-600 leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-16 lg:py-20 px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
            <div>
              <div className="text-2xl font-bold mb-6">AgriDronex</div>
              <p className="text-base opacity-80">
                Smart farming solutions powered by precision drone technology.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-base hover:text-green-300 transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base hover:text-green-300 transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base hover:text-green-300 transition-colors"
                  >
                    Documentation
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-base hover:text-green-300 transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base hover:text-green-300 transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base hover:text-green-300 transition-colors"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="text-base">📧 info@agridronex.com</li>
                <li className="text-base">📞 +1 (555) 123-4567</li>
                <li className="text-base">
                  📍 123 Farm Road, Agriculture City
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white border-opacity-20 text-center">
            <p className="text-sm opacity-70">
              © 2024 AgriDronex. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
