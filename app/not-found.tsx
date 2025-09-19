"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 flex items-center justify-center px-4">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative text-center space-y-8 max-w-2xl mx-auto">
        {/* 404 Number */}
        <div className="space-y-4">
          <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-red-400 via-purple-500 to-blue-400 bg-clip-text text-transparent leading-none">
            404
          </h1>
          <div className="flex justify-center items-center gap-3">
            <div className="w-16 h-1 bg-gradient-to-r from-red-400 to-purple-500 rounded-full"></div>
            <span className="text-3xl">😵</span>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-400 rounded-full"></div>
          </div>
        </div>

        {/* Error Message */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Trang không tồn tại
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Oops! Trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.
          </p>
          <p className="text-gray-400">
            Có thể link bị lỗi hoặc trang đã được cập nhật.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          {/* Home Button */}
          <Link
            href="/"
            className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-3"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>Về trang chủ</span>
          </Link>

          {/* Go Back Button */}
          <button
            onClick={() => window.history.back()}
            className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
          >
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
            </svg>
            <span>Quay lại</span>
          </button>
        </div>

        {/* Help Text */}
        <div className="pt-8">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">
              Cần giúp đỡ?
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Bạn có thể sử dụng thanh điều hướng phía trên để tìm các ứng dụng có sẵn:
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">Tools & Utilities</span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">Management</span>
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs">Content & Communication</span>
            </div>
          </div>
        </div>

        {/* Floating Animation Elements */}
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-br from-blue-400/10 to-purple-500/10 rounded-full animate-bounce"></div>
        <div className="absolute -bottom-10 -right-10 w-16 h-16 bg-gradient-to-br from-purple-400/10 to-red-500/10 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/4 -right-5 w-12 h-12 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  );
}
