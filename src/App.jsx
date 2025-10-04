import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Sun, Moon } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import SkillBadge from './components/SkillBadge';
//04-07-2025
function App() {
  const [theme, setTheme] = useState(() => {
    // Check if theme was previously set
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });

  useEffect(() => {
    // Update theme in localStorage and DOM
    localStorage.setItem('theme', theme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors z-50"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
      </button>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center relative px-4">
        <div className="max-w-4xl mx-auto text-center">
          <img
            src="https://res.cloudinary.com/dzpvuy7ja/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1741361714/WhatsApp_Image_2024-12-26_at_19_56_53_51a21dd1-photoaidcom-cropped_u1cwzd.png"
            className="w-64 h-64 rounded-full mx-auto mb-6 animate-fade-in border-4 border-blue-300 dark:border-blue-400"
            crossOrigin="anonymous"
            alt=""
          />

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text animate-fade-in">
            Nitin Yadav
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-slide-up dark:text-gray-300">
            Full Stack Developer
          </p>
          <div className="flex gap-6 justify-center mb-12 animate-fade-in">
            <a href="https://github.com/nitinyadav107" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              <Github size={24} />
            </a>
            <a
              href="https://leetcode.com/NitinYaduvanshi/"  // Replace with your actual LeetCode profile
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                alt="LeetCode"
                className="w-6 h-6"
              />
            </a>
            <a href="https://www.linkedin.com/in/nitin-yadav-975675267/" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:nitinyadav4800@gmail.com?subject=Hi from your website!" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 animate-bounce dark:text-gray-400">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="space-y-6 text-lg dark:text-gray-300">
            <p>
              I am Nitin Yadav, a dedicated Full-Stack Developer currently pursuing a B.Tech in Computer Science and Engineering at Noida Institute of Engineering and Technology (2022-2026). I have a strong foundation in MERN stack development (MongoDB, Express.js, React.js, Node.js) and a keen interest in solving complex problems through efficient code.
            </p>
            <p>

            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
          <div className="space-y-8">
            <div className="bg-white/80 dark:bg-gray-800/50 p-6 rounded-xl shadow-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-2">B.Tech</h3>
              <p className="dark:text-gray-300">Noida Institute of Engineering and Technology</p>
              <p className="text-gray-500 dark:text-gray-400">2022 - 2026</p>
              <p className="mt-4 dark:text-gray-300">
                Computer Science
              </p>
            </div>
            <div className="bg-white/80 dark:bg-gray-800/50 p-6 rounded-xl shadow-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-2">Intermediate</h3>
              <p className="dark:text-gray-300">Kendriya Vidyalaya</p>
              <p className="text-gray-500 dark:text-gray-400">2020 - 2021</p>
              <p className="mt-4 dark:text-gray-300">
                Science
              </p>
            </div>
            <div className="bg-white/80 dark:bg-gray-800/50 p-6 rounded-xl shadow-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-2">High School</h3>
              <p className="dark:text-gray-300">Kendriya Vidyalaya</p>
              <p className="text-gray-500 dark:text-gray-400">2018 - 2019</p>
              {/* <p className="mt-4 dark:text-gray-300">
                Science
              </p> */}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills & Technologies</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <SkillBadge name="Html" level={95} />
            <SkillBadge name="Css" level={85} />
            <SkillBadge name="JavaScript" level={85} />
            <SkillBadge name="React" level={90} />
            <SkillBadge name="Express.js" level={85} />
            <SkillBadge name="Node.js" level={85} />
            <SkillBadge name="MongoDB" level={75} />
            <SkillBadge name="Next.js" level={70} />

            <SkillBadge name="Java" level={90} />

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="E-Commerce Platform"
              description="A full-stack e-commerce solution with React, Express.js, and MongoDB"
              image="https://res.cloudinary.com/dzpvuy7ja/image/upload/v1756046120/Screenshot_2025-08-24_200459_zkcy9k.png"
              tags={['React', 'Express.js', 'MongoDB']}
              link="https://ecommercefb.onrender.com/"
              github="https://github.com/nitinyadav107/ecommercefb"
            />
            <ProjectCard
              title="Chat Application"
              description="Real-time chat application "
              image="https://res.cloudinary.com/dzpvuy7ja/image/upload/v1756045394/Screenshot_2025-06-12_175842_aic3kc.png"
              tags={['React', 'Express.js', 'WebSocket']}
              link="https://chatappfb-1.onrender.com/"
              github="https://github.com/nitinyadav107/ChatAppFB-main-15c44fa88074f4c1bf3a4081b2730d0f93183f47"
            />
            <ProjectCard
              title="Blog Website"
              description="A blog website built with Next.js, Tailwind CSS"
              image="https://res.cloudinary.com/dzpvuy7ja/image/upload/v1756046039/Screenshot_2025-08-24_200332_dxxua3.png"
              tags={['Next.js', 'Tailwind CSS']}
              link="https://nextjsnew-9my9.vercel.app/"
              github="https://github.com/nitinyadav107/nextjsnew"
            />
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-20 px-4 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Certificates</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

            {/* ReactJs Certificate */}
            <div className="group relative bg-white/80 dark:bg-gray-800/50 p-6 rounded-xl shadow-lg backdrop-blur-sm overflow-hidden">
              <a
                href="https://res.cloudinary.com/dzpvuy7ja/image/upload/v1741365192/Screenshot_2025-03-07_220154_fwfodu.png"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dzpvuy7ja/image/upload/v1741365192/Screenshot_2025-03-07_220154_fwfodu.png"
                  alt="ReactJs Certificate"
                  className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-300 group-hover:scale-105 group-hover:z-10 cursor-pointer"
                />
              </a>
              <h3 className="text-xl font-bold mb-2">ReactJs</h3>
              <p className="dark:text-gray-300">Infosys</p>
              <p className="text-gray-500 dark:text-gray-400">2024</p>
            </div>

            {/* Java Programming Fundamentals Certificate */}
            <div className="group relative bg-white/80 dark:bg-gray-800/50 p-6 rounded-xl shadow-lg backdrop-blur-sm overflow-hidden">
              <a
                href="https://res.cloudinary.com/dzpvuy7ja/image/upload/v1741373563/Screenshot_2025-03-08_001606_qmsvqk.png"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dzpvuy7ja/image/upload/v1741373563/Screenshot_2025-03-08_001606_qmsvqk.png"
                  alt="Java Programming Fundamentals Certificate"
                  className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-300 group-hover:scale-105 group-hover:z-10 cursor-pointer"
                />
              </a>
              <h3 className="text-xl font-bold mb-2">Java Programming Fundamentals</h3>
              <p className="dark:text-gray-300">Infosys</p>
              <p className="text-gray-500 dark:text-gray-400">2024</p>
            </div>

            {/* SQL and Databases Certificate */}
            <div className="group relative bg-white/80 dark:bg-gray-800/50 p-6 rounded-xl shadow-lg backdrop-blur-sm overflow-hidden">
              <a
                href="https://res.cloudinary.com/dzpvuy7ja/image/upload/v1756044633/Screenshot_2025-08-24_193057_kem7jg.png"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dzpvuy7ja/image/upload/v1756044633/Screenshot_2025-08-24_193057_kem7jg.png"
                  alt="SQL and Databases Certificate"
                  className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-300 group-hover:scale-105 group-hover:z-10 cursor-pointer"
                />
              </a>
              <h3 className="text-xl font-bold mb-2">SQL and Databases</h3>
              <p className="dark:text-gray-300">Infosys</p>
              <p className="text-gray-500 dark:text-gray-400">2025</p>
            </div>

            {/* JavaScript Certificate */}
            <div className="group relative bg-white/80 dark:bg-gray-800/50 p-6 rounded-xl shadow-lg backdrop-blur-sm overflow-hidden">
              <a
                href="https://res.cloudinary.com/dzpvuy7ja/image/upload/v1756044607/Screenshot_2025-08-24_193134_ntes2m.png"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dzpvuy7ja/image/upload/v1756044607/Screenshot_2025-08-24_193134_ntes2m.png"
                  alt="JavaScript Certificate"
                  className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-300 group-hover:scale-105 group-hover:z-10 cursor-pointer"
                />
              </a>
              <h3 className="text-xl font-bold mb-2">JavaScript</h3>
              <p className="dark:text-gray-300">Infosys</p>
              <p className="text-gray-500 dark:text-gray-400">2025</p>
            </div>

            {/* HTML5 Certificate */}
            <div className="group relative bg-white/80 dark:bg-gray-800/50 p-6 rounded-xl shadow-lg backdrop-blur-sm overflow-hidden">
              <a
                href="https://res.cloudinary.com/dzpvuy7ja/image/upload/v1756044541/Screenshot_2025-08-24_193152_whxche.png"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dzpvuy7ja/image/upload/v1756044541/Screenshot_2025-08-24_193152_whxche.png"
                  alt="HTML5 Certificate"
                  className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-300 group-hover:scale-105 group-hover:z-10 cursor-pointer"
                />
              </a>
              <h3 className="text-xl font-bold mb-2">HTML5</h3>
              <p className="dark:text-gray-300">Infosys</p>
              <p className="text-gray-500 dark:text-gray-400">2025</p>
            </div>

            {/* CSS3 Certificate */}
            <div className="group relative bg-white/80 dark:bg-gray-800/50 p-6 rounded-xl shadow-lg backdrop-blur-sm overflow-hidden">
              <a
                href="https://res.cloudinary.com/dzpvuy7ja/image/upload/v1756044517/Screenshot_2025-08-24_193205_r2i3wd.png"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dzpvuy7ja/image/upload/v1756044517/Screenshot_2025-08-24_193205_r2i3wd.png"
                  alt="CSS3 Certificate"
                  className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-300 group-hover:scale-105 group-hover:z-10 cursor-pointer"
                />
              </a>
              <h3 className="text-xl font-bold mb-2">CSS3</h3>
              <p className="dark:text-gray-300">Infosys</p>
              <p className="text-gray-500 dark:text-gray-400">2025</p>
            </div>

          </div>
        </div>
      </section>










      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl dark:text-gray-300 mb-8">
            I'm always open to discussing new projects and opportunities.
          </p>
          <a
            href="mailto:nitinyadav4800@gmail.com"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-colors"
          >
            Get in Touch
            <ExternalLink size={20} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-600 dark:text-gray-400">
        <p>© 2025 Nitin Yadav. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;