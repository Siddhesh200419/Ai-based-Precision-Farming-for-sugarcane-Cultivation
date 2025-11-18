import { useState, useEffect } from "react";
import mpkvLogo from "./assets/mpkv.png";
// import newimage from "./assets/images.png";
// import sid from "./assets/newimage.jpeg";
import noob from "./assets/noob.png";
function App() {
  const [activeTab, setActiveTab] = useState("disease-detection");
  const [expandedAccordion, setExpandedAccordion] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const innovationHighlights = [
    {
      id: 1,
      icon: "🔬",
      title: "Joint Research Initiative",
      description:
        "Co-created research projects, datasets, and model validation between AVCOE & MPKV.",
    },
    {
      id: 2,
      icon: "🧠",
      title: "AI-Powered Disease Detection",
      description:
        "Early detection of red rot, rust, and mosaic using vision models with explainability overlays.",
    },
    {
      id: 3,
      icon: "📝",
      title: "Field-Ready Recommendations",
      description:
        "Actionable irrigation, fertilizer, and pest-control plans tailored to field and crop stage.",
    },
    {
      id: 4,
      icon: "🌱",
      title: "NDVI & Satellite Analytics",
      description:
        "Time-series NDVI maps and geo-polygons for farm-level monitoring and trend tracking.",
    },
    {
      id: 5,
      icon: "☁️",
      title: "Weather-driven Risk Models",
      description:
        "Forecast-aware disease risk alerts and irrigation windows powered by live weather APIs.",
    },
    {
      id: 6,
      icon: "📱",
      title: "Farmer-first UX",
      description:
        "Offline-friendly mobile workflows, push alerts, and regional language support for farmers.",
    },
    {
      id: 7,
      icon: "📈",
      title: "Scalable Pilots",
      description:
        "From individual farms to cooperative rollouts — pilots scale without retooling.",
    },
    {
      id: 8,
      icon: "🤝",
      title: "Capacity Building",
      description:
        "Hands-on workshops, training, and agronomy hand-holding driven by MPKV experts.",
    },
  ];

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
        
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 35s linear infinite;
        }
        
        .marquee-track:hover {
          animation-play-state: paused;
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
      <section className="relative bg-green-800 text-white pt-24 pb-12 lg:pt-28 lg:pb-20 px-8 lg:px-16 overflow-hidden">
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
            <p className="text-base lg:text-lg text-white/90 leading-relaxed mb-8 max-w-2xl opacity-0 animate-slide-up animation-delay-200">
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

      {/* Partnership Carousel */}
      <section className="bg-gradient-to-r from-green-50 via-white to-green-50 pt-10 pb-12 lg:pt-14 lg:pb-16 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#dbf6e9]/70 border shadow-2xl shadow-green-900/10 rounded-[36px] px-6 sm:px-10 py-12 sm:py-14">
            <div className="text-center max-w-5xl mx-auto">
              <p className="inline-flex items-center gap-3 px-5 py-2 rounded-full text-sm font-semibold tracking-[0.2em] text-green-700 bg-white/80 border border-white/60 shadow-sm">
                <span className="text-base tracking-normal">🤝</span>
                AVCOE × MPKV
              </p>
              <h2 className="text-3xl md:text-[40px] font-extrabold text-green-900 mt-6 mb-4">
                A Partnership Driving Smart Sugarcane Farming
              </h2>
              <p className="text-lg text-green-800/85 leading-relaxed">
                AVCOE’s engineering and AI rigor pairs with MPKV’s agronomy depth to deliver field-proven, scalable, and sustainable solutions for sugarcane cultivators.
              </p>
              {/* <div className="flex flex-wrap justify-center gap-4 mt-8">
                {[
                  { label: "Fields Monitored", value: "50+" },
                  { label: "Model Accuracy Target", value: "90%+" },
                  { label: "Language Support", value: "Marathi + EN" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white/85 border border-white/50 rounded-2xl px-5 py-4 w-36 text-center shadow-sm"
                  >
                    <div className="text-2xl font-bold text-green-800">{stat.value}</div>
                    <div className="text-[11px] uppercase tracking-wide text-gray-600 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div> */}
              {/* <div className="flex flex-wrap justify-center gap-4 mt-8">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-green-800 text-white font-semibold shadow hover:scale-[1.03] transition-transform"
                >
                  Request Pilot
                </a>
                <a
                  href="#collaborate"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-green-800 font-semibold border border-green-200 hover:bg-green-50 transition-colors"
                >
                  Collaborate with Us
                </a>
              </div> */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <img
                  src={noob}
                  alt="AVCOE logo"
                  className="h-10 w-10 rounded-full bg-white p-1 shadow"
                />
                <span className="text-sm text-green-800/70 font-semibold">+</span>
                <img
                  src={mpkvLogo}
                  alt="MPKV logo"
                  className="h-10 w-10 rounded-full bg-white p-1 shadow"
                />
              </div>
            </div>
            <div className="relative mt-14 overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#dbf6e9] via-[#dbf6e9]/70 to-transparent pointer-events-none rounded-l-[32px]"></div>
              <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#dbf6e9] via-[#dbf6e9]/70 to-transparent pointer-events-none rounded-r-[32px]"></div>
              <div className="marquee-track gap-6 pr-6">
                {[...innovationHighlights, ...innovationHighlights].map(
                  (highlight, idx) => (
                    <div
                      key={`${highlight.title}-${idx}`}
                      className="w-[260px] lg:w-[300px] shrink-0 bg-white border border-green-100 rounded-3xl shadow-lg shadow-green-900/5 p-6 hover:-translate-y-2 hover:shadow-green-900/15 transition-all duration-500"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl">{highlight.icon}</span>
                        <h3 className="text-lg font-semibold text-green-900">
                          {highlight.title}
                        </h3>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {highlight.description}
                      </p>
                      <button className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-green-700 bg-green-50 px-3 py-1 rounded-full border border-green-100">
                        Learn more →
                      </button>
                    </div>
                  )
                )}
              </div>
            </div>
            {/* <p className="mt-10 text-center text-sm text-green-800/80">
              <span className="font-semibold">CaneIQ</span> — AI-powered precision farming for sugarcane. Pilot programs and on-ground training available for local farmer groups.
            </p> */}
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-white py-16 lg:py-24 px-8 lg:px-16">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-semibold text-green-800 mb-8 animate-on-scroll opacity-0 transform translate-y-8">
      Key Features — CaneIQ
    </h2>

    {/* Tabs */}
    <div className="flex flex-wrap gap-3 lg:gap-4 mb-8">
      {[
        "disease-detection",
        "ndvi-satellite",
        "weather-integration",
        "recommendation-engine",
        "explainable-ai",
        "mobile-app",
        "multi-language",
        "iot-ready",
      ].map((tab) => {
        const label = {
          "disease-detection": "Disease Detection",
          "ndvi-satellite": "NDVI & Satellite",
          "weather-integration": "Weather Insights",
          "recommendation-engine": "Recommendation Engine",
          "explainable-ai": "Explainable AI",
          "mobile-app": "Farmer App",
          "multi-language": "Multi-Language",
          "iot-ready": "IoT-ready",
        }[tab];

        return (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            aria-pressed={activeTab === tab}
            className={`px-5 py-2 rounded-full font-semibold text-sm transition-all focus:outline-none ${
              activeTab === tab
                ? "bg-green-800 text-white shadow-lg transform scale-105"
                : "bg-transparent text-green-800 border-2 border-green-100 hover:bg-green-50 hover:text-green-700"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>

    {/* Content */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
      {/* Left: short bullets */}
      <div className="space-y-4 lg:col-span-1">
        <div className="bg-gray-50 p-6 rounded-2xl shadow-sm">
          <h3 className="text-lg font-semibold text-green-800 mb-2">Overview</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            CaneIQ combines satellite imagery, local weather, and vision models to deliver targeted, farm-level insights — from early disease alerts to irrigation and fertilizer suggestions tailored for sugarcane.
          </p>
        </div>

        <ul className="bg-white border border-gray-100 p-4 rounded-2xl space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-xl">⚡</span>
            <div>
              <div className="font-semibold text-sm">Actionable alerts</div>
              <div className="text-xs text-gray-600">Get prioritized field actions (what to spray, when to irrigate).</div>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-xl">🌱</span>
            <div>
              <div className="font-semibold text-sm">Crop health maps</div>
              <div className="text-xs text-gray-600">NDVI & multispectral indicators to spot stressed zones fast.</div>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-xl">🔒</span>
            <div>
              <div className="font-semibold text-sm">Privacy-first</div>
              <div className="text-xs text-gray-600">Farmer data stored securely — you control sharing and exports.</div>
            </div>
          </li>
        </ul>
      </div>

      {/* Right: big content panel (spans 2 columns on large screens) */}
      <div className="lg:col-span-2">
        <div className="bg-gray-50 p-8 rounded-2xl shadow-inner min-h-[220px]">
          {/* disease-detection */}
          {activeTab === "disease-detection" && (
            <div>
              <h3 className="text-2xl font-semibold text-green-800 mb-3">AI Disease Detection</h3>
              <p className="text-gray-700 mb-4">
                Upload leaf images or use field photos — our trained models detect sugarcane diseases like <span className="font-semibold">red rot, rust, and mosaic</span>, highlight affected regions, and provide confidence scores.
              </p>
              <ul className="list-disc ml-5 text-gray-600 space-y-2">
                <li>Image-based classification (EfficientNet / ViT)</li>
                <li>Auto image enhancement & preprocessing</li>
                <li>Exportable disease reports for advisors</li>
              </ul>
            </div>
          )}

          {/* ndvi-satellite */}
          {activeTab === "ndvi-satellite" && (
            <div>
              <h3 className="text-2xl font-semibold text-green-800 mb-3">NDVI & Satellite Analytics</h3>
              <p className="text-gray-700 mb-4">
                Field-level NDVI, vegetation indices and temporal change maps help you find low-vigor patches and track crop growth across the season.
              </p>
              <ul className="list-disc ml-5 text-gray-600 space-y-2">
                <li>Time-series NDVI & trend graphs</li>
                <li>Field polygon geo-mapping (draw on map)</li>
                <li>Integration-ready with Google Earth Engine / Copernicus</li>
              </ul>
            </div>
          )}

          {/* weather-integration */}
          {activeTab === "weather-integration" && (
            <div>
              <h3 className="text-2xl font-semibold text-green-800 mb-3">Weather & Risk Insights</h3>
              <p className="text-gray-700 mb-4">
                Live weather + short-term forecasts power disease risk models and irrigation advisories so decisions are weather-aware.
              </p>
              <ul className="list-disc ml-5 text-gray-600 space-y-2">
                <li>Temperature / humidity / rainfall alerts</li>
                <li>Disease-risk probabilities from weather patterns</li>
                <li>Optimum irrigation windows to conserve water</li>
              </ul>
            </div>
          )}

          {/* recommendation-engine */}
          {activeTab === "recommendation-engine" && (
            <div>
              <h3 className="text-2xl font-semibold text-green-800 mb-3">Personalized Recommendations</h3>
              <p className="text-gray-700 mb-4">
                Actionable plans — irrigation schedules, fertilizer dosages, and pest-control steps — adapted to crop stage, field size, and local agronomy.
              </p>
              <ul className="list-disc ml-5 text-gray-600 space-y-2">
                <li>Rule-based + ML-driven advisory</li>
                <li>Local agronomy best-practices from MPKV</li>
                <li>Printable & shareable farmer reports</li>
              </ul>
            </div>
          )}

          {/* explainable-ai */}
          {activeTab === "explainable-ai" && (
            <div>
              <h3 className="text-2xl font-semibold text-green-800 mb-3">Explainable AI</h3>
              <p className="text-gray-700 mb-4">
                We show WHY a model flagged a disease — heatmaps, LIME overlays, and confidence numbers boost trust and help agronomists validate results.
              </p>
              <ul className="list-disc ml-5 text-gray-600 space-y-2">
                <li>Visual explanation overlays (LIME/SHAP-style)</li>
                <li>Confidence & uncertainty indicators</li>
                <li>Versioned model notes for transparency</li>
              </ul>
            </div>
          )}

          {/* mobile-app */}
          {activeTab === "mobile-app" && (
            <div>
              <h3 className="text-2xl font-semibold text-green-800 mb-3">Farmer Mobile App</h3>
              <p className="text-gray-700 mb-4">
                Lightweight Flutter app built for offline-first usage — upload images, view field maps, receive push alerts, and chat with the bot adviser.
              </p>
              <ul className="list-disc ml-5 text-gray-600 space-y-2">
                <li>Push notifications for critical alerts</li>
                <li>Offline viewing of recent reports</li>
                <li>Simple UX for farmers with basic smartphone skills</li>
              </ul>
            </div>
          )}

          {/* multi-language */}
          {activeTab === "multi-language" && (
            <div>
              <h3 className="text-2xl font-semibold text-green-800 mb-3">Multi-language Support</h3>
              <p className="text-gray-700 mb-4">
                Local-language advisories and chatbot replies — currently supports Marathi & English, designed to add more regional languages.
              </p>
              <ul className="list-disc ml-5 text-gray-600 space-y-2">
                <li>Localized recommendations & units</li>
                <li>Easy translation pipeline for new languages</li>
              </ul>
            </div>
          )}

          {/* iot-ready */}
          {activeTab === "iot-ready" && (
            <div>
              <h3 className="text-2xl font-semibold text-green-800 mb-3">IoT-ready & Extensible</h3>
              <p className="text-gray-700 mb-4">
                The platform is designed for future sensor integration (soil moisture, temperature) and can accept streams from field devices or third-party platforms.
              </p>
              <ul className="list-disc ml-5 text-gray-600 space-y-2">
                <li>Webhook & API endpoints for sensor data</li>
                <li>Edge-ready inference options planned</li>
                <li>Model retraining hooks for continuous improvement</li>
              </ul>
            </div>
          )}
        </div>
      </div>
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
      {/* <section className="bg-white py-16 lg:py-24 px-8 lg:px-16">
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
      </section> */}

      {/* FAQ */}
      <section className="bg-gray-50 py-16 lg:py-24 px-8 lg:px-16">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-semibold text-green-800 mb-12 animate-on-scroll opacity-0 transform translate-y-8">
      Frequently Asked Questions
    </h2>

    <div className="space-y-3">
      {[
        {
          q: "What is this project actually about?",
          a: "It’s an AI-powered platform that helps sugarcane farmers detect diseases early, track crop health, and get smart recommendations for irrigation, fertilizer, and pest control.",
        },
        // {
        //   q: "Who is developing this project?",
        //   a: "This project is a collaborative effort between Amrutvahini College of Engineering (AVCOE) and Mahatma Phule Krishi Vidyapeeth (MPKV).",
        // },
        {
          q: "What problem does this system solve?",
          a: "Farmers struggle with late disease detection, unpredictable weather, nutrient deficiencies, and inefficient resource usage. This system solves those issues using AI, satellite imagery, and real-time insights.",
        },
        {
          q: "How does the AI detect sugarcane diseases?",
          a: "The system uses deep learning models like EfficientNet and Vision Transformer to analyze leaf images and satellite vegetation data, accurately identifying diseases such as red rot, rust, and mosaic.",
        },
        {
          q: "Do farmers need technical knowledge to use this?",
          a: "Not at all. The app is super simple, mobile-friendly, and designed for farmers with basic smartphone skills.",
        },
        {
          q: "What technologies are used in this project?",
          a: "The system uses AI/ML models, satellite imagery APIs, weather APIs, a Python/Flask backend, a Flutter mobile app, Firebase database, and Explainable AI for transparency.",
        },
        {
          q: "Can this system work offline?",
          a: "Yes, farmers can view previous reports offline. But disease detection and real-time weather recommendations require an internet connection.",
        },
        {
          q: "Is this project only for sugarcane?",
          a: "Yes, the current version is fully optimized for sugarcane. But the system is scalable and can be adapted for other crops in the future.",
        },
        {
          q: "How accurate is the disease prediction?",
          a: "Our AI models target 90%+ accuracy depending on image quality, weather conditions, and field variations.",
        },
        {
          q: "Is this platform free for farmers?",
          a: "Yes, currently it’s free as this is a research-based academic project. Future versions may extend into larger deployments.",
        },
        {
          q: "How does the AVCOE–MPKV collaboration help?",
          a: "AVCOE handles AI, software development, and backend systems, while MPKV provides agricultural expertise, datasets, and validation.",
        },
        {
          q: "Will this project help in real-world farming?",
          a: "Absolutely. The system improves crop health monitoring, reduces resource wastage, increases yield, and supports sustainable agriculture."
        },
      ].map((item, idx) => (
        <div
          key={idx}
          className={`bg-white rounded-xl border transition-all duration-500 ${
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
     {/* Footer */}
<footer className="bg-green-900 text-white py-16 lg:py-20 px-8 lg:px-16">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 mb-12">

      {/* Branding */}
      <div>
        <div className="text-3xl font-bold mb-4">CaneIQ</div>
        <p className="text-base opacity-80 leading-relaxed">
          AI-powered precision farming system designed to help sugarcane 
          farmers monitor crop health, detect diseases, and make 
          data-driven decisions in real-time.
        </p>

        <p className="mt-4 text-sm opacity-70">
          A collaborative initiative between  
          <br />
          <span className="font-semibold">AVCOE Sangamner</span> &  
          <span className="font-semibold"> MPKV Rahuri</span>
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Explore</h4>
        <ul className="space-y-3">
          <li><a href="#features" className="hover:text-green-300 transition-colors">Features</a></li>
          <li><a href="#modules" className="hover:text-green-300 transition-colors">Project Modules</a></li>
          <li><a href="#system-architecture" className="hover:text-green-300 transition-colors">System Architecture</a></li>
          <li><a href="#faq" className="hover:text-green-300 transition-colors">FAQs</a></li>
        </ul>
      </div>

      {/* Technologies */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Technologies</h4>
        <ul className="space-y-3">
          <li className="text-base opacity-80">AI & Machine Learning</li>
          <li className="text-base opacity-80">Satellite Imagery (NDVI)</li>
          <li className="text-base opacity-80">Weather API Integration</li>
          <li className="text-base opacity-80">Flutter Mobile App</li>
          <li className="text-base opacity-80">Firebase & Flask Backend</li>
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
        <ul className="space-y-3">
          <li className="text-base">📧 caneIQ.project@gmail.com</li>
          <li className="text-base">📞 +91 98765 43210</li>
          <li className="text-base leading-relaxed">
            📍 AVCOE, Sangamner  
            <br /> Maharashtra, India
          </li>
        </ul>
      </div>

    </div>

    {/* Bottom */}
    <div className="pt-6 border-t border-white border-opacity-20 text-center">
      <p className="text-sm opacity-70">
        © {new Date().getFullYear()} CaneIQ — AI-Based Precision Farming for Sugarcane Cultivation.
      </p>
    </div>
  </div>
</footer>

    </div>
  );
}

export default App;
