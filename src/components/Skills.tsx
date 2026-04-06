import { motion } from "motion/react";
import { Terminal, Lock, Cpu, Globe, Mail, Shield, Search, Database, FileText } from "lucide-react";

const skillCategories = [
  {
    title: "Languages & Tools",
    skills: ["Python", "SQL (BigQuery, MySQL)", "Linux", "Windows"],
    icon: Terminal,
  },
  {
    title: "Security Tools",
    skills: ["SIEM (Splunk)", "WireShark", "Tcpdump", "Nmap", "Suricata"],
    icon: Cpu,
  },
  {
    title: "Security Practices",
    skills: ["Information Security", "Network Security (NDR)", "Vulnerability Assessment", "Threat Analysis (IDS/IPS)", "Log Analysis", "NIST CSF"],
    icon: Shield,
  },
  {
    title: "Software Platforms",
    skills: ["Google Workspace", "Microsoft Suite", "Slack", "ChatGPT"],
    icon: Globe,
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto bg-cyber-gray/20">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-4xl font-bold tracking-tighter uppercase">
          03. SKILLS<span className="text-cyber-green">_</span>
        </h2>
        <div className="h-px flex-1 bg-cyber-green/20"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategories.map((category, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 cyber-border bg-cyber-dark/50 backdrop-blur-sm group hover:border-cyber-green/60 transition-all"
          >
            <div className="p-3 bg-cyber-green/10 rounded-lg w-fit mb-6">
              <category.icon className="w-6 h-6 text-cyber-green" />
            </div>
            <h3 className="text-lg font-bold mb-6 tracking-tight uppercase text-cyber-green">
              {category.title}
            </h3>
            <ul className="space-y-3">
              {category.skills.map((skill, j) => (
                <li key={j} className="flex items-center gap-3 text-gray-400 text-sm font-mono tracking-tight">
                  <span className="text-cyber-green/50">&gt;</span>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
