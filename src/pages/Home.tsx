import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown, Rocket, Code, Database, Cpu, Sparkles } from 'lucide-react';
import profileImage from '/images/profile.webp';

export default function Home() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const techStack = [
    { icon: <Code className="w-8 h-8" />, name: "Frontend", color: "text-blue-400" },
    { icon: <Database className="w-8 h-8" />, name: "Backend", color: "text-green-400" },
    { icon: <Cpu className="w-8 h-8" />, name: "Full Stack", color: "text-purple-400" },
    { icon: <Sparkles className="w-8 h-8" />, name: "Innovation", color: "text-cyan-400" }
  ];

  const stats = [
    { number: "5+", label: "Projects Completed" },
    { number: "3", label: "Technologies Mastered" },
    { number: "2", label: "Years Experience" },
    { number: "100%", label: "Passion Driven" }
  ];

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden w-full">
      {/* Animated Cosmic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Nebula Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-cyan-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Starfield */}
        <div className="absolute inset-0 bg-starfield opacity-30"></div>
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="container mx-auto text-center max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            {/* Profile Image with Cosmic Effects */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8, type: "spring", stiffness: 100 }}
              className="relative mx-auto w-64 h-64 md:w-80 md:h-80 mt-8"
            >
              {/* Main Profile Container */}
              <div className="relative w-full h-full">
                {/* Outer Glow Ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 opacity-70 blur-lg animate-spin-slow"></div>
                
                {/* Profile Image */}
                <div className="absolute inset-4 rounded-full overflow-hidden border-2 border-white/30">
                  <img
                    src={profileImage}
                    alt="Vivek Semwal Profile"
   className="w-full h-full object-cover object-[50%_20%]"
                  />
                </div>
              </div>

              {/* Orbiting Tech Dots */}
              {[0, 90, 180, 270].map((angle, index) => (
                <motion.div
                  key={index}
                  className="absolute w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full border-2 border-white shadow-lg"
                  initial={{ rotate: angle, x: -100 }}
                  animate={{ rotate: angle + 360 }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                    delay: index * 0.5
                  }}
                  style={{
                    transformOrigin: `center center`
                  }}
                >
                  <div className="w-full h-full rounded-full bg-white/20 animate-pulse"></div>
                </motion.div>
              ))}

              {/* Floating Particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-cyan-400 rounded-full blur-sm"
                  initial={{
                    x: Math.random() * 100 - 50,
                    y: Math.random() * 100 - 50,
                    scale: 0
                  }}
                  animate={{
                    x: Math.random() * 100 - 50,
                    y: Math.random() * 100 - 50,
                    scale: [0, 1, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5
                  }}
                />
              ))}
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="space-y-8"
            >
              <div className="relative">
                <h1 className="text-6xl sm:text-7xl md:text-9xl font-black tracking-tight">
                  <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent">
                    VIVEK
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    SEMWAL
                  </span>
                </h1>
                
                {/* Animated Underline */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
                  className="h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 mx-auto max-w-lg rounded-full mt-6"
                />
              </div>

              {/* Professional Tagline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="space-y-4"
              >
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <p className="text-2xl sm:text-3xl md:text-4xl font-semibold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                    FULL STACK DEVELOPER
                  </p>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light tracking-wide px-4">
                  Crafting Digital Experiences from Punjab, Pathankot
                </p>
              </motion.div>
            </motion.div>

            {/* Tech Stack Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto py-10"
            >
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.7 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative"
                >
                  <div className="glass-card rounded-xl p-5 text-center backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                    <div className={`${tech.color} mb-3 flex justify-center`}>
                      {tech.icon}
                    </div>
                    <p className="text-base sm:text-lg font-medium text-white">{tech.name}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats Counter */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.2 + index * 0.1, type: "spring" }}
                  className="text-center"
                >
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm sm:text-base text-gray-400 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.5, duration: 0.6, type: "spring" }}
              className="pt-10"
            >
              <Button
                onClick={scrollToAbout}
                className="group relative bg-gradient-to-r from-cyan-600 via-purple-600 to-blue-600 hover:from-cyan-500 hover:via-purple-500 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-full text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                <Rocket className="w-6 h-6 mr-2 group-hover:rotate-45 transition-transform" />
                <span>LAUNCH PORTFOLIO</span>
                <div className="absolute inset-0 rounded-full bg-white/20 blur-md group-hover:blur-lg transition-all duration-300 -z-10"></div>
              </Button>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center space-y-2 cursor-pointer group"
              onClick={scrollToAbout}
            >
              <span className="text-base sm:text-lg text-gray-400 group-hover:text-cyan-300 transition-colors">
                Explore My Universe
              </span>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronDown className="w-8 h-8 text-cyan-400 group-hover:text-cyan-200 group-hover:scale-110 transition-all" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-5xl sm:text-6xl md:text-7xl font-black">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    About Me
                  </span>
                </h2>
                
                <div className="space-y-4 text-gray-300">
                  <p className="text-xl sm:text-2xl leading-relaxed">
                    Passionate <span className="text-cyan-300 font-semibold">Full Stack Developer</span> from the vibrant lands of Punjab, Pathankot. Currently shaping the future through code at <span className="text-purple-300 font-semibold">Graphic Era Hill University</span>.
                  </p>
                  
                  <p className="text-xl sm:text-2xl leading-relaxed">
                    I specialize in creating <span className="text-blue-300 font-semibold">immersive digital experiences</span> that blend cutting-edge technology with real-world impact. From responsive interfaces to robust backend systems.
                  </p>
                  
                  <p className="text-xl sm:text-2xl leading-relaxed">
                    My arsenal includes <span className="text-green-300 font-semibold">React, Node.js, MongoDB</span>, and I'm constantly exploring emerging technologies like <span className="text-yellow-300 font-semibold">IoT and AI</span> to push boundaries.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold py-4 px-8 rounded-full text-xl transition-all duration-300 transform hover:scale-105">
                    View My Work
                  </Button>
                  <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 font-semibold py-4 px-8 rounded-full text-xl transition-all duration-300">
                    Download Resume
                  </Button>
                </div>
              </motion.div>

              {/* Right Visual */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="glass-card rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                  <div className="grid grid-cols-2 gap-4">
                    {['React', 'Node.js', 'MongoDB', 'TypeScript', 'Tailwind', 'Express'].map((tech) => (
                      <div key={tech} className="text-center p-3 bg-white/5 rounded-lg hover:bg-cyan-500/10 transition-all duration-300">
                        <div className="text-cyan-400 font-semibold text-lg">{tech}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Floating Element */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center"
                  >
                    <Sparkles className="w-4 h-4 text-white" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}