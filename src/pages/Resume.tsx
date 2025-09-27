import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, Calendar, MapPin, Award, Star, Rocket } from 'lucide-react';

export default function Resume() {
  const education = [
    {
      id: 1,
      degree: "10th Standard",
      institution: "LDSS Plasma School, Pathankot",
      grade: "1st Division",
      year: "2020-2021",
      icon: "🎓",
      highlights: ["Academic Excellence", "Foundation Building", "Science Interest"]
    },
    {
      id: 2,
      degree: "12th Standard - PCM Stream",
      institution: "Maharana Pratap School, Pathankot",
      grade: "1st Division",
      year: "2022-2023",
      icon: "🔬",
      highlights: ["Physics, Chemistry, Mathematics", "Competitive Exam Preparation", "Technical Foundation"]
    },
    {
      id: 3,
      degree: "B.Tech Computer Science",
      institution: "Graphic Era Hill University, Dehradun",
      grade: "Currently Pursuing",
      year: "2023-2027",
      icon: "💻",
      highlights: ["Full Stack Development", "Data Structures & Algorithms", "Emerging Technologies"]
    }
  ];

  const skills = {
    "Full Stack Development": ["React.js", "Node.js", "Express.js", "JavaScript", "TypeScript"],
    "Frontend Technologies": ["HTML5", "CSS3", "Tailwind CSS", "Framer Motion", "Three.js"],
    "Backend & Databases": ["MongoDB", "SQL", "REST APIs", "WebSockets", "Authentication"],
    "Tools & Platforms": ["Git", "VS Code", "Figma", "Vercel", "Render", "Postman"],
    "Emerging Technologies": ["IoT", "Machine Learning", "AI Integration", "Cloud Computing"]
  };

  const achievements = [
    "Built multiple full-stack applications with real-world impact",
    "Developed innovative solutions in education and healthcare sectors",
    "Active contributor to open-source projects and tech communities",
    "Continuous learner in emerging technologies and best practices"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const downloadResume = () => {
    window.open('https://drive.google.com/drive/folders/1QcHqOo7NmA70l-0-lLhQGHwJc_zAj_6S', '_blank');
  };

  return (
    <div className="min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Animated Cosmic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '6s' }}></div>
        
        {/* Timeline Connection Line */}
        <div className="absolute left-1/2 top-40 bottom-40 w-0.5 bg-gradient-to-b from-purple-500/30 via-cyan-500/30 to-blue-500/30 transform -translate-x-1/2 hidden lg:block"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold laser-text mb-4">
            Cosmic Journey
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tracing my path through the universe of knowledge and innovation
          </p>
          
          {/* Download Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-8"
          >
            <Button
              variant="energy"
              size="lg"
              onClick={downloadResume}
              className="group relative overflow-hidden"
            >
              <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              <span className="relative z-10">Download Resume</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </Button>
          </motion.div>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-20"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-cyan-bright text-center mb-12"
            variants={itemVariants}
          >
            🎓 Educational Journey
          </motion.h2>
          
          <div className="max-w-4xl mx-auto space-y-8 lg:space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                variants={itemVariants}
                className={`relative flex flex-col lg:flex-row items-start ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 lg:left-1/2 transform -translate-x-1/2 lg:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full border-4 border-gray-900 z-10 hidden lg:block"></div>
                
                {/* Content Card */}
                <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'} relative`}>
                  <motion.div
                    whileHover={{ 
                      y: -5,
                      scale: 1.02,
                      transition: { duration: 0.3 }
                    }}
                    className="holographic-card rounded-2xl p-6 border border-white/10 backdrop-blur-sm"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{edu.icon}</span>
                        <div>
                          <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                          <p className="text-cyan-300 font-medium">{edu.institution}</p>
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm font-medium">
                        {edu.grade}
                      </span>
                    </div>

                    {/* Details */}
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.year}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>Pathankot, Punjab</span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-white/5 text-white/80 rounded-full text-xs border border-white/10"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    {/* Progress Line */}
                    {index < education.length - 1 && (
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-cyan-500 to-purple-500 lg:hidden"></div>
                    )}
                  </motion.div>
                </div>

                {/* Year Indicator */}
                <div className={`lg:w-2/12 flex justify-center items-center py-4 lg:py-0 ${
                  index % 2 === 0 ? 'lg:order-first' : 'lg:order-last'
                }`}>
                  <div className="px-4 py-2 bg-white/5 rounded-full border border-white/10">
                    <span className="text-cyan-300 font-bold">{edu.year.split('-')[0]}</span>
                  </div>
                </div>

                {/* Spacer for alternating sides */}
                <div className="lg:w-5/12 hidden lg:block"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Constellation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-purple-300 text-center mb-12">
            ⚡ Skills Constellation
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {Object.entries(skills).map(([category, techs], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="glass-card rounded-xl p-6 border border-white/5 hover:border-cyan-500/30 transition-all"
              >
                <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 mr-2" />
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-white rounded-full text-sm border border-white/10 hover:border-cyan-400/50 transition-all cursor-pointer"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-bright text-center mb-8">
            🏆 Cosmic Achievements
          </h2>
          
          <div className="glass-card rounded-2xl p-8 border border-cyan-500/20">
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all"
                >
                  <Award className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">{achievement}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto border border-purple-500/20">
            <Rocket className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready for the Next Mission?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's collaborate and create something extraordinary together in the vast universe of technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="energy" size="lg" onClick={downloadResume}>
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
              <Button variant="cosmic" size="lg">
                View Projects
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}