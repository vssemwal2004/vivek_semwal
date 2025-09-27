import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Play } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "SkillSwapHub",
      description: "Revolutionary education platform enabling knowledge exchange with earning opportunities",
      tagline: "Teach what you know, Learn what you don't, Earn while you do",
      liveUrl: "https://skillswaphub.in",
      githubUrl: "#",
      tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
      status: "featured",
      image: "/images/skillswaphub.webp",
      features: ["Real-time chat", "Payment integration", "Course marketplace", "Rating system"]
    },
    {
      id: 2,
      title: "LifeLink Medical Tech",
      description: "Advanced medical card system with IoT integration for seamless patient record management",
      tagline: "Connecting healthcare through technology",
      liveUrl: "https://live-link-1-jxtp.onrender.com/patient/records",
      githubUrl: "#",
      tech: ["IoT", "React", "Node.js", "MongoDB", "WebSockets"],
      status: "featured",
      image: "/images/lifelink.webp",
      features: ["IoT device integration", "Real-time monitoring", "Secure data storage", "Emergency alerts"]
    },
    {
      id: 3,
      title: "Timetable Manager PBL",
      description: "University project optimizing teacher-student matching with intelligent scheduling",
      tagline: "Smart scheduling for educational institutions",
      liveUrl: "https://time-flame-eight.vercel.app/",
      githubUrl: "#",
      tech: ["React", "Firebase", "Algorithm", "UI/UX"],
      status: "featured",
      image: "/images/timetable.webp",
      features: ["AI scheduling", "Conflict detection", "Calendar sync", "Analytics dashboard"]
    },
    {
      id: 4,
      title: "Railway Optimization System",
      description: "Route optimization using advanced graph algorithms for efficient railway management",
      tagline: "Optimizing journeys with data science",
      githubUrl: "https://github.com/vssemwal2004/railway-optimizing-system",
      tech: ["Python", "Algorithms", "Data Structures", "Graph Theory"],
      status: "learning",
      image: "/images/railway.webp",
      features: ["Prim's Algorithm", "Kruskal's Algorithm", "Path optimization", "Cost analysis"]
    },
    {
      id: 5,
      title: "Talking Me Chat",
      description: "Secure encrypted chat application with real-time messaging and privacy focus",
      tagline: "Private conversations, public innovation",
      githubUrl: "https://github.com/vssemwal2004/Talikng--Me",
      tech: ["Encryption", "WebSockets", "React", "Security"],
      status: "learning",
      image: "/images/chat.webp",
      features: ["End-to-end encryption", "Real-time messaging", "File sharing", "Group chats"]
    }
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

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 left-1/2 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
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
            Project Galaxy
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Exploring the universe of innovation through cutting-edge projects that push boundaries
          </p>
          <div className="w-24 h-1 bg-laser-gradient mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Featured Projects Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-20"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-cyan-bright text-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            🌟 Featured Projects
          </motion.h2>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.filter(p => p.status === 'featured').map((project, index) => (
              <motion.div
                key={project.id}
                variants={projectVariants}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                <div className="holographic-card rounded-2xl overflow-hidden border border-white/10 backdrop-blur-sm">
                  {/* Project Image */}
                  <div className="h-48 bg-gradient-to-br from-purple-900/30 to-cyan-900/30 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium border border-cyan-500/30">
                        Featured
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 flex space-x-2">
                      {project.liveUrl && (
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      )}
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    <div className="space-y-2">
                      <p className="text-sm text-purple-300 font-medium italic">
                        "{project.tagline}"
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-white/5 text-white/80 rounded-full text-xs border border-white/10 hover:border-cyan-400/30 transition-all cursor-pointer"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      {project.features.slice(0, 4).map((feature, i) => (
                        <div key={i} className="flex items-center space-x-1">
                          <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                          <span className="text-xs text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3 pt-4">
                      {project.liveUrl && (
                        <Button 
                          variant="energy" 
                          size="sm" 
                          className="flex-1 group/btn"
                          asChild
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <Play className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      <Button 
                        variant="cosmic" 
                        size="sm" 
                        className="flex-1 group/btn"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-purple-500/0 via-cyan-500/0 to-blue-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Projects Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-16"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-purple-300 text-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            📚 Learning Projects
          </motion.h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            {projects.filter(p => p.status === 'learning').map((project) => (
              <motion.div
                key={project.id}
                variants={projectVariants}
                whileHover={{ 
                  y: -5,
                  scale: 1.01,
                  transition: { duration: 0.3 }
                }}
                className="group"
              >
                <div className="glass-card rounded-xl p-6 border border-white/5 hover:border-purple-400/30 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs font-medium">
                      Learning
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-3">
                    <p className="text-sm text-purple-200 italic">
                      {project.tagline}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span 
                          key={tech}
                          className="px-2 py-1 bg-purple-500/10 text-purple-300 rounded text-xs border border-purple-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-2 pt-2">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Source Code
                        </a>
                      </Button>
                      <Button variant="ghost" size="sm" className="text-xs">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Build Something Extraordinary?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's collaborate on your next cosmic project and create something that pushes boundaries.
            </p>
            <Button variant="energy" size="lg" className="group">
              <span className="group-hover:scale-105 transition-transform">Start a Project</span>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}