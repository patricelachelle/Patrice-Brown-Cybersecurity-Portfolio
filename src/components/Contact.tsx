import { motion } from "motion/react";
import { Mail, Linkedin, Github, ExternalLink, Shield } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-4xl font-bold tracking-tighter uppercase">
          04. CONTACT<span className="text-cyber-green">_</span>
        </h2>
        <div className="h-px flex-1 bg-cyber-green/20"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl font-bold mb-6 tracking-tighter uppercase">
            Let's <span className="text-cyber-green">Connect</span>
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-md">
            I'm always open to discussing new opportunities, collaborations, or just talking about the latest in cybersecurity.
          </p>

          <div className="space-y-6">
            <a
              href="mailto:patrice.lachelle.brown@gmail.com"
              className="flex items-center gap-4 group p-4 border border-cyber-green/10 hover:border-cyber-green/40 transition-all bg-cyber-gray/20"
            >
              <div className="p-3 bg-cyber-green/10 rounded-lg group-hover:bg-cyber-green/20 transition-all">
                <Mail className="w-6 h-6 text-cyber-green" />
              </div>
              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-gray-500">Email Address</p>
                <p className="text-lg font-bold tracking-tight group-hover:text-cyber-green transition-colors">patrice.lachelle.brown@gmail.com</p>
              </div>
            </a>

            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/patricelachelle/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-3 p-4 border border-cyber-green/10 hover:border-cyber-green/40 transition-all bg-cyber-gray/20 group"
              >
                <Linkedin className="w-5 h-5 text-cyber-green group-hover:scale-110 transition-transform" />
                <span className="text-xs font-mono uppercase tracking-widest">LinkedIn</span>
              </a>
              <a
                href="https://github.com/patricelachelle"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-3 p-4 border border-cyber-green/10 hover:border-cyber-green/40 transition-all bg-cyber-gray/20 group"
              >
                <Github className="w-5 h-5 text-cyber-green group-hover:scale-110 transition-transform" />
                <span className="text-xs font-mono uppercase tracking-widest">GitHub</span>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="absolute -inset-4 border border-cyber-green/10 rounded-lg animate-pulse"></div>
          <div className="p-12 bg-cyber-gray/50 cyber-border text-center">
            <Shield className="w-24 h-24 text-cyber-green mx-auto mb-8 opacity-20" />
            <h4 className="text-xl font-bold mb-4 tracking-tight uppercase">
              System Status: <span className="text-cyber-green">ONLINE</span>
            </h4>
            <p className="text-gray-500 text-sm font-mono tracking-tighter mb-8 italic">
              &gt; Ready for secure communication...
            </p>
            <a
              href="mailto:patrice.lachelle.brown@gmail.com"
              className="inline-block px-10 py-4 bg-cyber-green text-white font-bold uppercase tracking-widest text-sm hover:bg-cyber-blue transition-all cyber-border"
            >
              Send Message
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-cyber-green/10 bg-cyber-dark/50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <Shield className="text-cyber-green w-5 h-5" />
          <span className="font-mono font-bold text-sm tracking-tighter">
            PATRICE_BROWN_PORTFOLIO_V2.0
          </span>
        </div>
        <p className="text-[10px] font-mono uppercase tracking-widest text-gray-600">
          © 2026 PATRICE BROWN | CYBERSECURITY SPECIALIST | ALL RIGHTS RESERVED
        </p>
        <div className="flex gap-6 text-[10px] font-mono uppercase tracking-widest text-gray-500">
          <span className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-cyber-green"></div>
            ENCRYPTED
          </span>
          <span className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-cyber-green"></div>
            SECURE
          </span>
        </div>
      </div>
    </footer>
  );
};
