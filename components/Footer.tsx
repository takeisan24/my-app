"use client";

import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Github", href: "https://github.com/takeisan24", icon: "🐙" },
    { name: "LinkedIn", href: "#", icon: "💼" },
    { name: "Email", href: "mailto:vutanh507@gmail.com", icon: "📧" },
  ];

  const quickLinks = [
    { name: "Calculator", href: "/calculator" },
    { name: "Todo List", href: "/todo-list" },
    { name: "Guess Number", href: "/guess-number" },
    { name: "Unit Converter", href: "/unit-converter" },
  ];

  return (
    <footer className="bg-gradient-to-t from-slate-900 via-slate-800 to-slate-700 border-t border-slate-600">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
              My Portfolio
            </h3>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Tập hợp các ứng dụng web mini được xây dựng bằng Next.js và React. 
              Khám phá các công cụ hữu ích và trò chơi thú vị!
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-xl transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                  title={link.name}
                >
                  <span className="group-hover:scale-110 transition-transform duration-300">
                    {link.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="text-lg">🔗</span>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="text-lg">⚡</span>
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "React", "TypeScript", "Tailwind"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 hover:bg-white/20 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} My Portfolio. Made with ❤️ using Next.js
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
