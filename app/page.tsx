"use client";

import Image from "next/image";

export default function Home() {
  const handleViewProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContact = () => {
    const in4_link = 'https://bio.link/takeisan204';
    window.open(in4_link, '_blank');
  };

  const skills = [
    { name: "React & Next.js", level: 5, color: "blue" },
    { name: "TypeScript", level: 4, color: "purple" },
    { name: "Tailwind CSS", level: 5, color: "cyan" },
    { name: "UI/UX Design", level: 4, color: "green" },
  ];

  const projects = [
    {
      category: "Tools & Utilities",
      count: 3,
      icon: "🛠️",
      description: "Bộ công cụ tiện ích hằng ngày bao gồm máy tính, chuyển đổi đơn vị và trò chơi đoán số.",
      techs: ["Next.js", "TypeScript", "Tailwind"],
      color: "blue"
    },
    {
      category: "Management Apps",
      count: 4,
      icon: "📋",
      description: "Hệ thống quản lý đa năng cho công việc, liên hệ, học sinh và thư viện cá nhân.",
      techs: ["Next.js", "Local Storage", "CRUD"],
      color: "purple"
    },
    {
      category: "Content & Chat",
      count: 4,
      icon: "💬",
      description: "Nền tảng nội dung và giao tiếp với tính năng ghi chú, blog và chatbot AI.",
      techs: ["AI Integration", "Markdown", "Real-time"],
      color: "cyan"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900">

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image 
              src="/images/hero-bg.jpg" 
              alt="Hero Background" 
              fill
              className="object-cover opacity-30"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-800/60 to-gray-900/70"></div>
          </div>          {/* Animated Blobs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          
          {/* Floating Particles */}
          {[...Array(12)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-bounce"
              style={{
                top: `${15 + (i * 8)}%`,
                left: `${8 + (i * 9)}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${2 + (i % 4)}s`
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <div className="relative max-w-7xl mx-auto px-8 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Profile */}
            <div className="text-center lg:text-left space-y-8">
              {/* Avatar */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative group">
                  {/* Avatar Container */}
                  <div className="relative w-48 h-48 rounded-full p-1 bg-gradient-to-br from-blue-400 via-purple-500 to-cyan-400 shadow-2xl group-hover:scale-105 transition-all duration-500">
                    <div className="w-full h-full rounded-full overflow-hidden bg-slate-800 relative">
                      {/* Avatar Image */}
                      <Image 
                        src="/images/avatar.jpg" 
                        alt="Yuuri - Frontend Developer" 
                        fill
                        className="object-cover transition-all duration-300 group-hover:scale-110"
                        priority
                        sizes="(max-width: 768px) 12rem, 12rem"
                      />
                      {/* Fallback Avatar - shows if image fails to load */}
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-600 text-6xl font-bold text-white -z-10">
                        Y
                      </div>
                    </div>
                  </div>
                  
                  {/* Status Badge */}
                  <div className="absolute -bottom-3 -right-3 w-14 h-14 bg-gradient-to-r from-green-400 to-green-500 rounded-full border-4 border-slate-900 flex items-center justify-center shadow-lg animate-bounce">
                    <span className="text-xl">👋</span>
                  </div>
                  
                  {/* Decorative Rings */}
                  <div className="absolute -inset-3 rounded-full border-2 border-blue-400/30 animate-pulse"></div>
                  <div className="absolute -inset-6 rounded-full border border-purple-400/20 animate-pulse" style={{animationDelay: '1s'}}></div>
                  <div className="absolute -inset-9 rounded-full border border-cyan-400/10 animate-pulse" style={{animationDelay: '2s'}}></div>
                </div>
              </div>

              {/* Introduction */}
              <div className="space-y-6">
                <div className="space-y-3">
                  <p className="text-xl text-gray-400 font-medium">Xin chào, tôi là</p>
                  <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
                    Yuuri
                  </h1>
                </div>
                
                <div className="flex justify-center lg:justify-start items-center gap-4">
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
                  <span className="text-3xl animate-bounce" style={{animationDelay: '0.5s'}}>💻</span>
                  <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Title & Description */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-semibold text-white">
                  Frontend Developer & UI/UX Enthusiast
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                  Tôi là một developer đam mê tạo ra những ứng dụng web đẹp và hữu ích. 
                  Chuyên về React, Next.js và các công nghệ frontend hiện đại.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
                <button 
                  onClick={handleViewProjects}
                  className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-3"
                >
                  <span>Xem các dự án</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
                
                <button 
                  onClick={handleContact}
                  className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 cursor-pointer hover:shadow-xl"
                >
                  <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Liên hệ</span>
                </button>
              </div>
            </div>

            {/* Right Side - Skills & Stats */}
            <div className="space-y-6">
              {/* Skills Panel */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/8 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                  <span className="text-2xl">🎯</span>
                  Kỹ năng chính
                </h3>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={skill.name} className="flex items-center justify-between">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div 
                            key={i} 
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              i < skill.level 
                                ? skill.color === 'blue' ? 'bg-blue-400' 
                                : skill.color === 'purple' ? 'bg-purple-400'
                                : skill.color === 'cyan' ? 'bg-cyan-400'
                                : 'bg-green-400'
                                : 'bg-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/8 transition-all duration-300">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">11+</div>
                  <div className="text-sm text-gray-400 mt-1">Mini Apps</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/8 transition-all duration-300">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-500 bg-clip-text text-transparent">2+</div>
                  <div className="text-sm text-gray-400 mt-1">Năm kinh nghiệm</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-7xl mx-auto px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent mb-4">
            Dự án nổi bật
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tuyển tập các ứng dụng mini được xây dựng với công nghệ hiện đại
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.category}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group cursor-pointer transform hover:scale-105"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
                    project.color === 'blue' ? 'bg-gradient-to-br from-blue-400 to-blue-600' 
                    : project.color === 'purple' ? 'bg-gradient-to-br from-purple-400 to-purple-600'
                    : 'bg-gradient-to-br from-cyan-400 to-cyan-600'
                  }`}>
                    <span className="text-xl">{project.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{project.category}</h3>
                    <p className="text-sm text-gray-400">{project.count} ứng dụng</p>
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.techs.map((tech) => (
                    <span 
                      key={tech}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.color === 'blue' ? 'bg-blue-500/20 text-blue-300' 
                        : project.color === 'purple' ? 'bg-purple-500/20 text-purple-300'
                        : 'bg-cyan-500/20 text-cyan-300'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto px-8 pb-20">
        <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-12 hover:from-white/8 hover:to-white/15 transition-all duration-300">
          <div className="text-center space-y-8">
            <h3 className="text-3xl font-bold text-white flex items-center justify-center gap-3">
              <span className="text-4xl">💡</span>
              Về tôi
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg max-w-3xl mx-auto">
              Tôi đam mê việc tạo ra những sản phẩm số có ý nghĩa và mang lại giá trị thực tế. 
              Từ những ý tưởng đơn giản, tôi biến chúng thành các ứng dụng web hoàn chỉnh với 
              giao diện đẹp mắt và trải nghiệm người dùng tối ưu.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">11+</div>
                <div className="text-gray-400 font-medium">Mini Applications</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-500 bg-clip-text text-transparent">3</div>
                <div className="text-gray-400 font-medium">Danh mục chính</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">100%</div>
                <div className="text-gray-400 font-medium">Open Source</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
