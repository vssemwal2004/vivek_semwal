import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import profileImage from '@/assets/profile.webp';

export default function Home() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Profile Image with Holographic Border */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative mx-auto w-48 h-48 md:w-64 md:h-64"
            >
              <div className="holographic-border rounded-full p-2 animate-hologram">
                <img
                  src={profileImage}
                  alt="Vivek Semwal - Software Engineer"
                  className="w-full h-full rounded-full object-cover shadow-cosmic"
                />
              </div>
              
              {/* Lens flares around profile */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-lens-flare1/30 rounded-full blur-sm animate-lens-flare" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-lens-flare2/40 rounded-full blur-sm animate-lens-flare" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-lens-flare3/50 rounded-full blur-sm animate-lens-flare" style={{ animationDelay: '2s' }} />
            </motion.div>

            {/* Name with Typewriter Effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="space-y-4"
            >
              <h1 className="text-6xl md:text-8xl font-bold laser-text tracking-wider">
                VIVEK SEMWAL
              </h1>
              
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 1, duration: 1.5 }}
                className="h-1 bg-laser-gradient mx-auto max-w-md"
              />
            </motion.div>

            {/* Tagline with Glitch Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="space-y-2"
            >
              <p className="text-xl md:text-2xl text-cyan-bright font-medium">
                SOFTWARE ENGINEER
              </p>
              <p className="text-lg text-muted-foreground">
                FROM PUNJAB, PATHANKOT
              </p>
            </motion.div>

            {/* Floating Tech Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="flex justify-center items-center space-x-8 py-8"
            >
              {['React', 'Node.js', 'MongoDB', 'TypeScript'].map((tech, index) => (
                <motion.div
                  key={tech}
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                  className="glass-card px-4 py-2 text-sm text-cosmic font-medium"
                >
                  {tech}
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2, duration: 0.6 }}
            >
              <Button
                variant="energy"
                size="xl"
                onClick={scrollToAbout}
                className="group relative overflow-hidden"
              >
                <span className="relative z-10">EXPLORE UNIVERSE</span>
                <motion.div
                  className="absolute inset-0 bg-hologram-gradient"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </Button>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center space-y-2 cursor-pointer"
              onClick={scrollToAbout}
            >
              <span className="text-sm text-muted-foreground">Scroll to explore</span>
              <ChevronDown className="w-6 h-6 text-cyan-bright animate-energy-pulse" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-bold laser-text">
              About the Universe
            </h2>
            
            <div className="glass-card p-8 md:p-12 space-y-6">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Welcome to my cosmic portfolio! I'm a passionate software engineer from Punjab, Pathankot, 
                currently pursuing B.Tech from Graphic Era Hill University. I specialize in full-stack 
                development with a focus on creating innovative solutions that bridge technology and real-world needs.
              </p>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                My journey spans across various technologies including React, Node.js, MongoDB, and emerging 
                fields like IoT and Machine Learning. I believe in creating experiences that are not just 
                functional, but truly extraordinary.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 pt-8">
                <Button variant="cosmic" size="lg">
                  View Resume
                </Button>
                <Button variant="hologram" size="lg">
                  Explore Projects
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}