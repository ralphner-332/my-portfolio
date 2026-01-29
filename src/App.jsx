

import React, { useEffect, useRef, useState } from 'react';
import emailjs from 'emailjs-com';

// Data for projects, skills, and growth
const projects = [
  {
    title: 'Weather App',
    description: 'A real-time weather application that displays current weather conditions and forecasts. Built with React and integrated with a weather API to show temperature, humidity, and weather conditions for different cities.',
    tags: ['React', 'API', 'JavaScript'],
    image: '/images/weather.jpg',
  },
  {
    title: 'To-Do List App',
    description: 'A task management application that lets users create, edit, and delete tasks. Features include marking tasks as complete, filtering by status, and local storage to persist data between sessions.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: '/images/todolist.jpg',
  },
  {
    title: 'E-Commerce Landing Page',
    description: 'A responsive landing page for an online store featuring product showcases, smooth scrolling navigation, and responsive design. Includes hero section, product grid, and contact section with modern styling.',
    tags: ['React', 'Tailwind', 'Responsive'],
    image: '/images/ecommerce.jpg',
  },
  {
    title: 'Photo Gallery App',
    description: 'An interactive photo gallery application that displays images in a responsive grid layout. Features include image filtering, lightbox preview, and smooth animations. Built with React and integrated with an image API.',
    tags: ['React', 'Gallery', 'CSS'],
    image: '/images/photogallery.jpg',
  },
];

const skillCategories = [
  {
    category: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Responsive Design'],
  },
  {
    category: 'Styling',
    skills: ['Tailwind CSS', 'CSS Modules', 'Sass', 'Animations', 'UI Design'],
  },
  {
    category: 'Tools & Others',
    skills: ['Git', 'VS Code', 'Figma', 'REST APIs', 'Testing', 'GitHub'],
  },
];

const currentlyLearning = [
  {
    title: 'Advanced React Patterns',
    description: 'Mastering hooks, context API, and performance optimization',
    progress: 65,
  },
  {
    title: 'TypeScript',
    description: 'Building type-safe applications with advanced TS features',
    progress: 50,
  },
  {
    title: 'Web Performance',
    description: 'Optimizing load times, Core Web Vitals, and rendering performance',
    progress: 40,
  },
  {
    title: 'UI/UX Design Principles',
    description: 'Creating beautiful and intuitive user experiences',
    progress: 55,
  },
];

function App() {
  const formRef = useRef();
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);
  // Smooth scroll for nav buttons
  useEffect(() => {
    const handleNavClick = (e) => {
      if (e.target.tagName === 'A' && e.target.hash) {
        e.preventDefault();
        const section = document.querySelector(e.target.hash);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    document.addEventListener('click', handleNavClick);
    return () => document.removeEventListener('click', handleNavClick);
  }, []);

  return (
    <div className="bg-slate-900 text-slate-100 min-h-screen font-sans">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-slate-900 via-slate-900 to-transparent backdrop-blur-md border-b border-slate-700/30">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div></div>
          <ul className="hidden md:flex gap-8 items-center">
            <li><a href="#about" className="text-gray-300 hover:text-white transition">About</a></li>
            <li><a href="#projects" className="text-gray-300 hover:text-white transition">Projects</a></li>
            <li><a href="#skills" className="text-gray-300 hover:text-white transition">Skills</a></li>
            <li><a href="#growth" className="text-gray-300 hover:text-white transition">Growth</a></li>
            <li><a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a></li>
          </ul>
          <a href="#contact" className="bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-2 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition">Get In Touch</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white">Ralphner L. Capangpangan</h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">Front-end Developer & UI/UX Enthusiast</p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">Crafting beautiful, interactive web experiences with modern technologies. Passionate about creating stunning designs that users love.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#projects" className="bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-4 rounded-full text-white font-semibold hover:shadow-xl hover:shadow-blue-500/50 transition transform hover:scale-105 cursor-pointer">View My Work</a>
            <a href="#contact" className="border-2 border-cyan-400 px-8 py-4 rounded-full text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-slate-900 transition cursor-pointer">Contact Me</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-slate-900 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent leading-relaxed">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl border border-cyan-400/30 flex items-center justify-center overflow-hidden group">
              <img src="/images/shoebill.jpg" alt="Profile" className="w-full h-full object-cover group-hover:scale-110 transition duration-300" />
            </div>
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed text-justify">I'm a recent Computer Science graduate with a passion for front-end web development. I have strong skills in React, JavaScript, and Tailwind CSS. I love creating responsive websites and applications that look great and work smoothly. For me, great design means building interfaces that are easy to use and solve real problems for people.</p>
              <p className="text-gray-300 text-lg leading-relaxed text-justify">During my studies, I've built several front-end projects and learned HTML, CSS, and JavaScript from the ground up. I enjoy the challenge of taking a design and turning it into a working website. I'm excited about learning new technologies and creating websites that people enjoy using. I'm ready to start my career and work with experienced developers on real projects.</p>
              <div className="pt-6">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Key Highlights</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-300"><span className="w-2 h-2 bg-cyan-400 rounded-full"></span>CS Degree with focus on Web Development & Software Engineering</li>
                  <li className="flex items-center gap-3 text-gray-300"><span className="w-2 h-2 bg-cyan-400 rounded-full"></span>Proficient in React, JavaScript (ES6+), CSS3, and modern front-end tools</li>
                  <li className="flex items-center gap-3 text-gray-300"><span className="w-2 h-2 bg-cyan-400 rounded-full"></span>Built and deployed multiple responsive web projects with focus on UX/UI</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-slate-800 relative overflow-visible">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent leading-relaxed">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="group relative bg-gradient-to-br from-slate-700/50 to-slate-800/50 border border-cyan-400/20 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/20 flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-300"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="h-48 rounded-xl mb-6 flex items-center justify-center border border-cyan-400/20 group-hover:border-cyan-400/40 transition shadow-lg overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition">{project.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed flex-grow text-justify">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-sm bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full border border-cyan-400/30">{tag}</span>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-auto">
                    <button className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-2 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition">View Project</button>
                    <button className="px-6 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition">Code</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-slate-900 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent leading-relaxed">Skills & Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-400/20 rounded-2xl p-8 hover:border-cyan-400/50 transition-all">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-6">{category.category}</h3>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, i) => (
                      <span key={i} className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-gray-200 px-4 py-2 rounded-full border border-cyan-400/30 hover:border-cyan-400 hover:text-cyan-400 transition cursor-default">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Section */}
      <section id="growth" className="py-20 px-6 bg-slate-800 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent leading-relaxed">Currently Learning</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {currentlyLearning.map((item, idx) => (
              <div key={idx} className="group p-8 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl border border-cyan-400/20 hover:border-cyan-400/50 transition duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
                <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition">{item.title}</h3>
                <p className="text-gray-400 mb-6">{item.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-400">Progress</span>
                    <span className="text-sm font-semibold text-cyan-400">{item.progress}%</span>
                  </div>
                  <div className="h-3 bg-slate-900 rounded-full overflow-hidden border border-slate-600">
                    <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-500" style={{ width: `${item.progress}%` }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Additional learning goals */}
          <div className="mt-16 p-8 bg-gradient-to-r from-green-900/30 to-cyan-900/30 rounded-2xl border border-green-400/30 text-center">
            <h3 className="text-2xl font-semibold text-white mb-4">My Learning Goals</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">I'm committed to continuous growth as a developer. My focus is on mastering modern web technologies, improving code quality, and creating exceptional user experiences.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <span className="px-4 py-2 bg-cyan-500/20 border border-cyan-400/50 rounded-full text-cyan-300">🎯 Build projects</span>
              <span className="px-4 py-2 bg-cyan-500/20 border border-cyan-400/50 rounded-full text-cyan-300">📚 Learn daily</span>
              <span className="px-4 py-2 bg-cyan-500/20 border border-cyan-400/50 rounded-full text-cyan-300">🚀 Stay updated</span>
              <span className="px-4 py-2 bg-cyan-500/20 border border-cyan-400/50 rounded-full text-cyan-300">💡 Innovate</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent leading-relaxed">Let's Work Together</h2>
          <p className="text-center text-gray-300 text-lg mb-12">Got a project in mind? Feel free to reach out and let's create something amazing.</p>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 border border-cyan-400/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">Send a Message</h3>
              <form
                ref={formRef}
                className="space-y-4"
                onSubmit={async e => {
                  e.preventDefault();
                  setSending(true);
                  setSent(false);
                  setError(null);
                  try {
                    await emailjs.sendForm(
                      'service_wqwujj5',
                      'template_d1t0v57',
                      formRef.current,
                      '9xlz9MP-vhc8XXyZP'
                    );
                    setSent(true);
                    formRef.current.reset();
                  } catch (err) {
                    setError('Failed to send. Please try again.');
                  } finally {
                    setSending(false);
                  }
                }}
              >
                <div>
                  <label className="block text-gray-300 mb-2">Name</label>
                  <input type="text" name="name" placeholder="Your name" className="w-full bg-slate-900/50 border border-cyan-400/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition" />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input type="email" name="email" placeholder="your@email.com" className="w-full bg-slate-900/50 border border-cyan-400/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition" />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Message</label>
                  <textarea name="message" placeholder="Your message..." rows={4} className="w-full bg-slate-900/50 border border-cyan-400/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition resize-none"></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 py-3 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition disabled:opacity-60"
                  disabled={sending}
                >
                  {sending ? 'Sending...' : 'Send Message'}
                </button>
                {sent && <div className="text-green-400 text-center pt-2">Message sent successfully!</div>}
                {error && <div className="text-red-400 text-center pt-2">{error}</div>}
              </form>
            </div>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center border border-cyan-400/30">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h4 className="text-cyan-400 font-semibold">Email</h4>
                  <p className="text-gray-300">ralphner.capangpangan001@gmail.com</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center border border-cyan-400/30">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <h4 className="text-cyan-400 font-semibold">Phone</h4>
                  <p className="text-gray-300">+63 915 269 6453</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center border border-cyan-400/30">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h4 className="text-cyan-400 font-semibold">Location</h4>
                  <p className="text-gray-300">Butuan City, Philippines</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-700/30 py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">© {new Date().getFullYear()} Ralphner L. Capangpangan. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition">Terms of Service</a>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition">GitHub</a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
