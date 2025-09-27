import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Code, 
  Database, 
  Palette, 
  Brain, 
  Zap, 
  Globe,
  Smartphone,
  Shield,
  Cpu,
  GitBranch
} from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend Mastery",
    icon: <Code className="w-8 h-8" />,
    color: "from-purple-neon to-cyan-bright",
    skills: [
      { name: "React", level: 95, icon: "⚛️" },
      { name: "TypeScript", level: 90, icon: "🔷" },
      { name: "Tailwind CSS", level: 92, icon: "🎨" },
      { name: "Framer Motion", level: 88, icon: "✨" },
      { name: "Next.js", level: 85, icon: "▲" },
    ]
  },
  {
    title: "Backend Engineering", 
    icon: <Database className="w-8 h-8" />,
    color: "from-cyan-bright to-hologram-1",
    skills: [
      { name: "Node.js", level: 90, icon: "🟢" },
      { name: "Express.js", level: 88, icon: "🚂" },
      { name: "MongoDB", level: 85, icon: "🍃" },
      { name: "SQL", level: 82, icon: "📊" },
      { name: "RESTful APIs", level: 90, icon: "🔗" },
    ]
  },
  {
    title: "Emerging Technologies",
    icon: <Brain className="w-8 h-8" />,
    color: "from-hologram-2 to-purple-electric",
    skills: [
      { name: "IoT Development", level: 78, icon: "📡" },
      { name: "Machine Learning", level: 75, icon: "🤖" },
      { name: "AI Integration", level: 80, icon: "🧠" },
      { name: "Data Analysis", level: 76, icon: "📈" },
      { name: "Algorithm Design", level: 85, icon: "⚡" },
    ]
  },
  {
    title: "Design & Tools",
    icon: <Palette className="w-8 h-8" />,
    color: "from-purple-cosmic to-cyan-electric", 
    skills: [
      { name: "UI/UX Design", level: 88, icon: "🎯" },
      { name: "Figma", level: 85, icon: "🎨" },
      { name: "Git & GitHub", level: 92, icon: "📂" },
      { name: "VS Code", level: 95, icon: "💻" },
      { name: "Responsive Design", level: 90, icon: "📱" },
    ]
  }
];

const achievements = [
  {
    title: "Full-Stack Projects",
    count: "5+",
    description: "Complex web applications deployed",
    icon: <Globe className="w-6 h-6" />
  },
  {
    title: "IoT Integrations", 
    count: "2",
    description: "Hardware-software projects completed",
    icon: <Cpu className="w-6 h-6" />
  },
  {
    title: "Algorithm Solutions",
    count: "10+", 
    description: "Data structure problems solved",
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: "Open Source",
    count: "3+",
    description: "GitHub repositories maintained",
    icon: <GitBranch className="w-6 h-6" />
  }
];

export default function Skills() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-7xl space-y-16">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold laser-text">
            SKILL CONSTELLATION
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Navigate through my technical universe where each skill represents a star in the 
            constellation of continuous learning and innovation.
          </p>
        </motion.div>

        {/* Achievement Stats */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-card p-6 text-center group hover:shadow-cosmic transition-all duration-300"
            >
              <div className="flex justify-center mb-3">
                <div className="p-3 rounded-full bg-laser-gradient text-primary-foreground group-hover:animate-pulse">
                  {achievement.icon}
                </div>
              </div>
              <div className="text-3xl font-bold laser-text mb-2">{achievement.count}</div>
              <h3 className="font-semibold text-cosmic mb-1">{achievement.title}</h3>
              <p className="text-sm text-muted-foreground">{achievement.description}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card p-8 space-y-6 relative group overflow-hidden"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`p-3 rounded-full bg-gradient-to-r ${category.color} text-primary-foreground`}
                >
                  {category.icon}
                </motion.div>
                <h2 className="text-2xl font-bold laser-text">{category.title}</h2>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1, 
                      duration: 0.6 
                    }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    {/* Skill Name & Icon */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-medium text-foreground">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>

                    {/* Skill Level Bar */}
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${category.color} relative`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5, 
                          duration: 1,
                          ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                      >
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </div>

        {/* Learning Philosophy */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <div className="glass-card p-8 max-w-4xl mx-auto relative overflow-hidden">
            <h2 className="text-3xl font-bold text-cosmic mb-6">CONTINUOUS EVOLUTION</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              In the ever-expanding universe of technology, I believe in continuous learning and adaptation. 
              Each skill in my constellation is constantly evolving, growing brighter with every project, 
              challenge, and innovation. My journey is driven by curiosity, powered by passion, and 
              guided by the desire to create meaningful impact through technology.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="energy" size="lg" className="group">
                  <Brain className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                  <span className="relative z-10">EXPLORE PROJECTS</span>
                  <motion.div
                    className="absolute inset-0 bg-hologram-gradient"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="hologram" size="lg" className="group">
                  <Shield className="w-5 h-5 mr-2 group-hover:animate-spin" />
                  LET'S COLLABORATE
                </Button>
              </motion.div>
            </div>

            {/* Background Animation */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-hologram-1 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    opacity: [0.2, 1, 0.2],
                    scale: [0.5, 1.5, 0.5],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}