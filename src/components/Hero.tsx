import { motion } from "motion/react";
import { Shield, Terminal, Lock, Cpu, Globe, Mail } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-cyber-green/20 bg-cyber-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className="text-cyber-green w-6 h-6" />
          <span className="font-mono font-bold text-lg tracking-tighter">
            PATRICE_BROWN<span className="animate-pulse">_</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-widest">
          <a href="#about" className="hover:text-cyber-green transition-colors">01. About</a>
          <a href="#portfolio" className="hover:text-cyber-green transition-colors">02. Portfolio</a>
          <a href="#skills" className="hover:text-cyber-green transition-colors">03. Skills</a>
          <a href="#contact" className="hover:text-cyber-green transition-colors">04. Contact</a>
        </div>
      </div>
    </nav>
  );
};

const TerminalLog = () => {
  const logs = [
    "INITIALIZING_SECURE_CONNECTION...",
    "AUTHENTICATING_USER_PATRICE_BROWN...",
    "ACCESS_GRANTED_LEVEL_04",
    "LOADING_SECURITY_FRAMEWORKS...",
    "NIST_CSF_LOADED",
    "SIEM_SPLUNK_ACTIVE",
    "VULNERABILITY_SCAN_COMPLETE_0_THREATS",
  ];

  return (
    <div className="hidden lg:block absolute right-6 top-1/2 -translate-y-1/2 w-80 h-96 bg-black/80 border border-cyber-green/30 rounded-lg p-4 font-mono text-[10px] overflow-hidden shadow-[0_0_20px_rgba(0,255,65,0.1)]">
      <div className="flex gap-1.5 mb-4 border-b border-cyber-green/10 pb-2">
        <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
        <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
        <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
        <span className="ml-2 text-cyber-green/50 uppercase tracking-widest">system.log</span>
      </div>
      <div className="space-y-2">
        {logs.map((log, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 + i * 0.2 }}
            className="flex gap-2"
          >
            <span className="text-cyber-green/30">[{new Date().toLocaleTimeString()}]</span>
            <span className={i % 2 === 0 ? "text-cyber-green" : "text-cyber-blue"}>{log}</span>
          </motion.div>
        ))}
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="w-2 h-4 bg-cyber-green inline-block align-middle"
        ></motion.div>
      </div>
    </div>
  );
};

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-16 max-w-7xl mx-auto relative">
      <TerminalLog />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-mono text-cyber-green mb-4 text-sm tracking-widest uppercase">
          &gt; Initializing system...
        </p>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 leading-none">
          CYBERSECURITY <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-green to-cyber-blue">
            SPECIALIST
          </span>
        </h1>
        <p className="max-w-2xl text-gray-400 text-lg md:text-xl mb-10 leading-relaxed">
          Dedicated career-changer transitioning into the world of Cybersecurity with over a decade of experience in data-sensitive, compliance-driven environments.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#portfolio"
            className="px-8 py-4 bg-cyber-green text-black font-bold uppercase tracking-widest text-sm hover:bg-cyber-blue transition-all cyber-border"
          >
            Explore Projects
          </a>
          <a
            href="https://docs.google.com/document/d/1eIvLHNjig94Ro8I_hcNLvE73ZwF5SlqTpCpDNcA73Og/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-cyber-green/50 text-cyber-green font-bold uppercase tracking-widest text-sm hover:bg-cyber-green/10 transition-all"
          >
            View Resume
          </a>
        </div>
      </motion.div>

      <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-cyber-green/10 pt-12">
        {[
          { icon: Terminal, label: "Linux / Python" },
          { icon: Lock, label: "NIST CSF" },
          { icon: Cpu, label: "SIEM / Splunk" },
          { icon: Globe, label: "Network Security" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            className="flex items-center gap-3 text-gray-500"
          >
            <item.icon className="w-5 h-5 text-cyber-green/50" />
            <span className="text-xs font-mono uppercase tracking-widest">{item.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
