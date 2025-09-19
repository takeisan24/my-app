

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        {/* Main Content */}
        <div className="relative max-w-7xl mx-auto px-8 pt-20 pb-32">
          <div className="text-center space-y-8">
            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
                Mini Apps Hub
              </h1>
              <div className="flex justify-center items-center gap-3">
                <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
                <span className="text-4xl">🚀</span>
                <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full"></div>
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Chào mừng bạn đến với bộ sưu tập các ứng dụng mini đa năng
            </p>

            {/* Description */}
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Khám phá và trải nghiệm các công cụ tiện ích được phân loại rõ ràng trong thanh điều hướng phía trên
            </p>

            {/* CTA Button */}
            <div className="pt-8">
              <button className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-3 mx-auto cursor-pointer">
                <span>Bắt đầu khám phá</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-8 pb-20">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Tools & Utilities */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🛠️</span>
              </div>
              <h3 className="text-xl font-semibold text-white">Tools & Utilities</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Máy tính, chuyển đổi đơn vị, và các công cụ tiện ích hằng ngày
              </p>
            </div>
          </div>

          {/* Management */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-semibold text-white">Management</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Quản lý công việc, liên hệ, học sinh và thư viện một cách hiệu quả
              </p>
            </div>
          </div>

          {/* Content & Communication */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-semibold text-white">Content & Communication</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Ghi chú, blog và chatbot thông minh cho mọi nhu cầu giao tiếp
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-4xl mx-auto px-8 pb-20">
        <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">11+</div>
              <div className="text-sm text-gray-400">Ứng dụng</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-500 bg-clip-text text-transparent">3</div>
              <div className="text-sm text-gray-400">Danh mục</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">100%</div>
              <div className="text-sm text-gray-400">Miễn phí</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
