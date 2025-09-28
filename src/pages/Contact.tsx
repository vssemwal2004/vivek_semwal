import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Download,
  Linkedin,
  Instagram,
  Github,
  MessageCircle,
  Navigation
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "422semwalvivek@gmail.com",
      link: "mailto:422semwalvivek@gmail.com",
      color: "text-red-400",
      type: "email"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 750869870",
      link: "tel:+91750869870",
      color: "text-green-400",
      type: "phone"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Dehradun, Clement Town",
      link: "#location",
      color: "text-purple-400",
      type: "location"
    },
    {
      icon: <Download className="w-6 h-6" />,
      label: "Resume",
      value: "Download CV",
      link: "https://drive.google.com/drive/folders/1QcHqOo7NmA70l-0-lLhQGHwJc_zAj_6S",
      color: "text-cyan-400",
      type: "resume"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/vivek-semwal-908b77307",
      color: "hover:text-blue-400",
      bgColor: "hover:bg-blue-400/10",
      type: "linkedin"
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      name: "Instagram",
      url: "https://www.instagram.com/vs_semwal",
      color: "hover:text-pink-400",
      bgColor: "hover:bg-pink-400/10",
      type: "instagram"
    },
    {
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      url: "https://github.com/vssemwal2004",
      color: "hover:text-gray-400",
      bgColor: "hover:bg-gray-400/10",
      type: "github"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      name: "WhatsApp",
      url: "https://wa.me/91750869870",
      color: "hover:text-green-400",
      bgColor: "hover:bg-green-400/10",
      type: "whatsapp"
    }
  ];

  const navigationButtons = [
    {
      icon: <Navigation className="w-5 h-5" />,
      label: "View Projects",
      path: "/projects",
      variant: "energy"
    },
    {
      icon: <Download className="w-5 h-5" />,
      label: "My Resume",
      path: "/resume",
      variant: "cosmic"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "Skills",
      path: "/skills",
      variant: "hologram"
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Show success message
    alert('Message sent successfully! I will get back to you soon.');
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleContactClick = (type, link) => {
    switch(type) {
      case 'email':
        window.location.href = link;
        break;
      case 'phone':
        window.location.href = link;
        break;
      case 'location':
        // Scroll to location section
        document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'resume':
        window.open(link, '_blank');
        break;
      default:
        window.open(link, '_blank');
    }
  };

  const handleSocialClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Animated Cosmic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '6s' }}></div>
        
        {/* Communication Waves */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-3/4 left-1/2 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        </div>
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
            Transmission Hub
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's connect and create something extraordinary together. My inbox is always open!
          </p>
        </motion.div>

        {/* Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {navigationButtons.map((button, index) => (
            <Button
              key={index}
              variant={button.variant}
              onClick={() => handleNavigation(button.path)}
              className="group px-6 py-3 rounded-full transition-all duration-300"
            >
              {button.icon}
              <span className="ml-2">{button.label}</span>
            </Button>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-cyan-bright mb-6 flex items-center">
                <MessageCircle className="w-8 h-8 mr-3" />
                Get In Touch
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm currently available for freelance work and exciting new opportunities. 
                Whether you have a project in mind or just want to say hello, I'd love to hear from you!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 p-4 rounded-xl glass-card border border-white/5 hover:border-cyan-500/30 transition-all duration-300 group cursor-pointer"
                  onClick={() => handleContactClick(item.type, item.link)}
                >
                  <div className={`p-3 rounded-lg bg-white/5 group-hover:scale-110 transition-transform ${item.color}`}>
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold text-purple-300 mb-4">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`flex items-center space-x-3 p-3 rounded-lg glass-card border border-white/5 ${social.bgColor} ${social.color} transition-all duration-300 group cursor-pointer`}
                    onClick={() => handleSocialClick(social.url)}
                  >
                    {social.icon}
                    <span className="font-medium">{social.name}</span>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Location Map Placeholder */}
            <motion.div
              id="location"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="rounded-xl overflow-hidden border border-white/10"
            >
              <div className="bg-gradient-to-br from-purple-900/30 to-cyan-900/30 p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <MapPin className="w-6 h-6 text-purple-400" />
                  <h4 className="text-lg font-bold text-white">Based in Dehradun</h4>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  Clement Town, Dehradun • Open to remote opportunities worldwide
                </p>
                <div className="w-full h-32 bg-white/5 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10"></div>
                  <div className="relative z-10 text-center">
                    <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                    <span className="text-cyan-300 font-medium">Dehradun, Uttarakhand</span>
                    <p className="text-xs text-muted-foreground mt-1">Clement Town Area</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="glass-card rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-2">Send Message</h2>
              <p className="text-muted-foreground mb-6">Let's start a conversation about your next project</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300 text-white placeholder-gray-400"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300 text-white placeholder-gray-400"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300 text-white placeholder-gray-400 resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-semibold py-3 rounded-lg transition-all duration-300 group"
                  >
                    <Send className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                    Transmit Message
                  </Button>
                </motion.div>
              </form>
            </div>

            {/* Quick Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="grid grid-cols-2 gap-4"
            >
              <Button 
                onClick={() => window.location.href = 'mailto:422semwalvivek@gmail.com'}
                variant="outline" 
                className="border-green-400 text-green-400 hover:bg-green-400/10"
              >
                <Mail className="w-4 h-4 mr-2" />
                Quick Email
              </Button>
              <Button 
                onClick={() => window.open('https://wa.me/91750869870', '_blank')}
                variant="outline" 
                className="border-blue-400 text-blue-400 hover:bg-blue-400/10"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </motion.div>

            {/* Response Time Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="glass-card rounded-xl p-6 border border-green-500/20"
            >
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <div>
                  <h4 className="font-semibold text-white">Quick Response Guaranteed</h4>
                  <p className="text-sm text-muted-foreground">I typically reply within 2-4 hours</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center mt-16"
        >
          <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how we can turn your ideas into reality with cutting-edge technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                onClick={() => window.location.href = 'mailto:422semwalvivek@gmail.com'}
                variant="energy" 
                size="lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Me Directly
              </Button>
              <Button 
                onClick={() => window.open('https://wa.me/91750869870', '_blank')}
                variant="cosmic" 
                size="lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Chat
              </Button>
              <Button 
                onClick={() => navigate('/projects')}
                variant="hologram" 
                size="lg"
              >
                <Navigation className="w-5 h-5 mr-2" />
                View Projects
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}